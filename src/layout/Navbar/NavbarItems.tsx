  export const NavbarProperty = [
    { title: 'Home', link: '/', className: "text-gray-900 dark:text-white  text-sm/6 font-semibold " },
    { title: 'About', link: '/about', className: "text-gray-900 dark:text-white  text-sm/6 font-semibold" },
    { title: 'Contact', link: '/contact', className: "text-gray-900 dark:text-white  text-sm/6 font-semibold" },
  ];

export const NavbarLogin = [{
  title: 'SiderBarMenu',
  link: '/SiderBarMenu',
  type: 'link',
  className: 'group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10'
},
{
  title: 'Setting',
  link: null,
  type: 'button',
  action: 'openSettings',
  className: 'group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10 '
},
{
  title: 'Managing',
  link: '/ManagingUser',
  type: 'link',
  className: 'group flex w-full items-center gap-2 rounded-lg py-1.5 px-3  hover:bg-white/10 '
},
{
  title: 'Logout',
  link: null,
  type: 'button',
  action: 'logout',
  className: 'group flex w-full items-center gap-2 rounded-lg py-1.5 px-3  hover:bg-white/10 '
},]