import { 
  getAuth, 
  signInWithPopup, 
  GithubAuthProvider, 
  GoogleAuthProvider, 
  OAuthProvider, 
  fetchSignInMethodsForEmail, 
  linkWithCredential, 
  UserCredential, 
  signOut, 
  AuthProvider 
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();

// Map provider IDs to friendly names for user feedback
const providerNames: { [key: string]: string } = {
  "google.com": "Google",
  "facebook.com": "Facebook",
  "twitter.com": "Twitter",
  "password": "Email/Password"
};

export const logoutGithub = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log("User logged out successfully!");
  } catch (error) {
    console.error("Logout error:", error);
    throw error; // Propagate error to caller
  }
};

export const signInWithGitHub = async (): Promise<UserCredential> => {
  try {
    const result: UserCredential = await signInWithPopup(auth, githubProvider);
    console.log("✅ GitHub sign-in successful:", result.user);
    return result;
  } catch (error: any) {
    if (error.code === "auth/account-exists-with-different-credential") {
      const email = error.customData?.email;
      const pendingCredential = error.credential;

      if (!email || !pendingCredential) {
        console.error("Error data:", { email, pendingCredential });
        throw new Error("Missing email or credential in error data.");
      }

      try {
        const signInMethods: string[] = await fetchSignInMethodsForEmail(auth, email);
        if (signInMethods.length === 0) {
          throw new Error("No sign-in methods found for this email.");
        }

        const firstProviderId = signInMethods[0];
        const providerName = providerNames[firstProviderId] || firstProviderId;

        // Inform user and prompt for action
        const userConfirmed = window.confirm(
          `This email (${email}) is already registered with ${providerName}. ` +
          `Please sign in with ${providerName} to link your GitHub account. Proceed?`
        );

        if (!userConfirmed) {
          throw new Error("User canceled the linking process.");
        }


        let existingProvider: AuthProvider;
        switch (firstProviderId) {
          case "google.com":
            existingProvider = new GoogleAuthProvider();
            break;
          case "facebook.com":
            existingProvider = new OAuthProvider("facebook.com");
            break;
          case "twitter.com":
            existingProvider = new OAuthProvider("twitter.com");
            break;
          case "password":
            throw new Error("Email/Password linking requires a different flow.");
          default:
            throw new Error(`Provider '${firstProviderId}' is not supported for linking.`);
        }

        // Sign in with the existing provider
        const existingUserResult: UserCredential = await signInWithPopup(auth, existingProvider);
        
        // Link the GitHub credential to the existing account
        await linkWithCredential(existingUserResult.user, pendingCredential);
        console.log("🎉 GitHub account linked successfully to", providerName);

        return existingUserResult; // Return the linked user credential
      } catch (linkError) {
        console.error("❌ Error during account linking:", linkError);
        throw linkError; // Propagate the error to the caller
      }
    } else {
      console.error("❌ Sign-in error:", error.code, error.message);
      throw error; // Propagate other errors (e.g., popup closed, network issues)
    }
  }
};