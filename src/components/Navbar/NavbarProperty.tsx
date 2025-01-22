export const NavbarProperty = [
  { title: 'Home', link: '/',className:"text-gray-900 dark:text-white" },
  { title: 'About', link: '/about',className:"text-gray-900 dark:text-white" },
  { title: 'Contact', link: '/contact',className:"text-gray-900 dark:text-white" },
];

export const NavbarLogin = [  {
  title: 'SiderBarMenu',
  link: '/SiderBarMenu',
  type: 'link', 
},
{
  title: 'Setting',
  link: null, 
  type: 'button',
  action: 'openSettings', 
},
{
  title: 'Managing',
  link: '/ManagingUser',
  type: 'link', 
},
{
  title: 'Logout',
  link: null, 
  type: 'button',
  action: 'logout',
},
{
  title: 'Login',
  link: null, 
  type: 'button',
  action: 'login', 
},]