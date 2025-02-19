import clsx from "clsx";
import * as React from "react";
import ManagingProduct from "../../components/table/ManagingProduct";
import Table from "../../components/table/UserProduct";

import { useAuthentication } from "@contexts/Authuciance";
import { useNavigate } from "react-router-dom";
import { SiderBarProperty } from "./SiderBar";

const icons: { [key: string]: JSX.Element } = {
  home: (
    <svg
      className="flex-shrink-0 size-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 18"
    >
      <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
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
  "cart": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
    >
      <path
        fill-rule="evenodd"
        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
        clip-rule="evenodd"
      />
    </svg>
  ),
  package: (
    <svg className="size-5" fill="currentColor" viewBox="0 0 18 20">
      <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 ..." />
    </svg>
  ),
  "log-out": (
    <svg className="size-5" fill="none" viewBox="0 0 18 16">
      <path
        stroke="currentColor"
        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 ..."
      />
    </svg>
  ),
};

function SiderBarMenu() {
  const authContextValue = useAuthentication();
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = React.useState<number | null>(null);
  const [isClick, setIsClick] = React.useState(0);
  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? 0 : index);
  };
  const toggleClick = (index: number) => {
    setIsClick(isClick === index ? 0 : index);
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
      content = (
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
      );
  }
  return (
    <>
      <div className="fixed  left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-400 dark:bg-gray-800">
          <ul className="space-y-2 font-medium ml-2">
            {SiderBarProperty.map((item, index) => (
              <li key={index}>
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                      className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {icons[item.icon]}
                      <span className="ms-3">{item.title}</span>
                      <svg className="w-3 h-3 ml-2" fill="none" viewBox="0 0 10 6">
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <ul
                      className={clsx(
                        "py-2 space-y-2",
                        openDropdown === index ? "block" : "hidden"
                      )}
                    >
                      {item.submenu.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={sub.link}
                            className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => toggleClick(index)}
                    className="w-full flex items-center  p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {icons[item.icon]}
                    <span className="ms-3">{item.title}</span>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-4 sm:ml-64">{content}</div>
    </>
  );
}

export default SiderBarMenu;
