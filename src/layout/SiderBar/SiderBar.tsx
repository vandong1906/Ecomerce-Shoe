import clsx from "clsx";
import * as React from "react";
import ManagingProduct from "../../components/table/ManagingProduct";
import Table from "../../components/user/UserBilling";
import { useAuthentication } from "@contexts/Authuciance";
import { Link, useNavigate } from "react-router-dom";
import { SiderBarProperty } from "./SiderBarItems";
import "./index.css";
import Form from "@components/Form/Form";

const icons: { [key: string]: JSX.Element } = {
  home: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
      <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
    </svg>
  ),
  users: (
    <svg
      className="flex-shrink-0 size-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 18"
    >
      <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
    </svg>
  ),
  cart: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  package: (
    <svg className="size-5" fill="currentColor" viewBox="0 0 18 20">
      <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 0 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923Z" />
    </svg>
  ),
  "log-out": (
    <svg className="size-5" fill="none" viewBox="0 0 18 16">
      <path
        stroke="currentColor"
        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
      />
    </svg>
  ),
  Product: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
      />
    </svg>
  ),
};

function SiderBarMenu() {
  const authContextValue = useAuthentication();

  const [openDropdown, setOpenDropdown] = React.useState<number | null>(null);
  const [isClick, setIsClick] = React.useState(0);
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isSliding, setIsSliding] = React.useState(false); // State for slide animation
  const [login, setlogin] = React.useState(false);
  React.useEffect(() => {
    setIsSliding(true);
    setIsSidebarVisible(true);
  }, []);
  const authenciance = useAuthentication();

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleClick = (index: number) => {
    setIsClick(isClick === index ? 0 : index);
  };
  const handleLogin = () => {
    setlogin(!login);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  let content;
  switch (isClick) {
    case 3:
      content = <ManagingProduct />;
      break;
    case 4:
      content = <Table />;
      break;
    default:
      content = <div></div>;
  }

  return (
    <>
      <div
        className={clsx(
          " left-0 top-0 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 shadow-2xl transition-transform duration-500 fixed z-50",
          isSidebarVisible
            ? isCollapsed
              ? "w-16 translate-x-0"
              : "w-64 translate-x-0"
            : "-translate-x-full",
          isSliding ? "transform translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full px-3 py-4">
          {/* "Create Bot" Button */}
          <button
            onClick={() => {
              toggleCollapse();
            }}
            className={clsx(
              "w-full mb-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200",
              isCollapsed ? "flex justify-center" : ""
            )}
          >
            {isCollapsed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              "SiderBar"
            )}
          </button>

          <ul className="space-y-2 font-medium">
            {SiderBarProperty.map((item, index) => (
              <li key={index}>
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(index)}
                      className={clsx(
                        "flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                        isCollapsed ? "justify-center" : ""
                      )}
                    >
                      {icons[item.icon]}
                      {!isCollapsed && (
                        <>
                          <span className="ms-3 flex-1 text-left">
                            {item.title}
                          </span>
                          <svg
                            className={clsx(
                              "w-3 h-3 ml-2 transition-transform duration-200",
                              openDropdown === index ? "rotate-180" : ""
                            )}
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeWidth="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                    {!isCollapsed && (
                      <ul
                        className={clsx(
                          "py-2 space-y-2",
                          openDropdown === index ? "block" : "hidden"
                        )}
                      >
                        {item.submenu.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={sub.link}
                              className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              {sub.icon}
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : item.link ? (
                  <Link
                    to={item.link}
                    className={clsx(
                      "w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                      isCollapsed ? "justify-center" : ""
                    )}
                  >
                    {icons[item.icon]}
                    {!isCollapsed && (
                      <span className="ms-3 flex-1 text-left">
                        {item.title}
                      </span>
                    )}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => toggleClick(index)}
                    className={clsx(
                      "w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                      isCollapsed ? "justify-center" : ""
                    )}
                  >
                    {icons[item.icon]}
                    {!isCollapsed && (
                      <span className="ms-3 flex-1 text-left">
                        {item.title}
                      </span>
                    )}
                  </button>
                )}

                {}
              </li>
            ))}

            <li>
              {authenciance.login ? (
                <button
                  type="button"
                  onClick={() => {
                    if (!isCollapsed) {
                      authenciance.handleLogout();
                    }
                  }}
                  className={clsx(
                    "w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                    isCollapsed ? "justify-center" : ""
                  )}
                >
                  {!isCollapsed ? (
                    <div className="flex justify-around">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                        />
                      </svg>
                      <span className="ms-3 flex ">logout</span>
                    </div>
                  ) : (
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleLogin}
                  className={clsx(
                    "w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                    isCollapsed ? "justify-center" : ""
                  )}
                >
                  <span className="ms-3 flex-1 text-left">login</span>
                </button>
              )}
            </li>
          </ul>

          {/* Go Online Toggle */}
          <div
            className={clsx(
              "mt-auto p-2",
              isCollapsed ? "flex justify-center" : ""
            )}
          >
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                defaultChecked
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              {!isCollapsed && (
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Go Online
                </span>
              )}
            </label>
          </div>

          {/* Close/Collapse Sidebar Button (visible when sidebar is open and expanded) */}
          {isSidebarVisible && !isCollapsed && (
            <button
              onClick={toggleCollapse}
              className="float-right right-2 top-4 z-50 p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {login && <Form open={login} onClose={handleLogin} />}
    </>
  );
}

export default SiderBarMenu;
