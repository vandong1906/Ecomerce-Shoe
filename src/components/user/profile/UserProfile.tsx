import { useAuthentication } from '@contexts/Authuciance';
import './index.css'


const UserProfile = () => {
const authenciance =useAuthentication()
  return <>
<div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="profile-card">
      <div className="flex items-center space-x-6">
        <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="User Avatar" className="profile-avatar" />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{authenciance.user?.user}</h2>
          <p className="text-gray-500">@{authenciance.user?.user}</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700">About Me</h3>
        <p className="mt-2 text-gray-600">A passionate explorer of technology and creativity. Lover of coffee, code, and good design.</p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500">Email:</p>
          <p className="font-medium text-gray-800">johndoe@example.com</p>
        </div>
        <div>
          <p className="text-gray-500">Joined:</p>
          <p className="font-medium text-gray-800">March 06, 2025</p>
        </div>
        <div>
          <p className="text-gray-500">Location:</p>
          <p className="font-medium text-gray-800">New York, USA</p>
        </div>
        <div>
          <p className="text-gray-500">Occupation:</p>
          <p className="font-medium text-gray-800">Software Engineer</p>
        </div>
      </div>
      <div className="mt-6 flex space-x-4">
        <button className="edit-btn">Edit Profile</button>
        <button className="edit-btn bg-gray-600 hover:bg-gray-700">Change Password</button>
      </div>
    </div>
  </div>
  </>
};

export default UserProfile;
