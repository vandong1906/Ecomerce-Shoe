import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import clsx from "clsx";
import * as React from "react";
import ManagingProduct from "../../components/table/ManagingProduct";
import Table from "../../components/user/UserProduct";
import { useAuthentication } from "@contexts/Authuciance";
import { Link, useNavigate } from "react-router-dom";
import { SiderBarProperty } from "./SiderBarItems";
import "./index.css";
import Form from "@components/Form/Form";
const icons = {
    home: (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "size-6", children: [_jsx("path", { d: "M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" }), _jsx("path", { d: "m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" })] })),
    users: (_jsx("svg", { className: "flex-shrink-0 size-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 18", children: _jsx("path", { d: "M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" }) })),
    cart: (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "size-5", children: _jsx("path", { fillRule: "evenodd", d: "M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z", clipRule: "evenodd" }) })),
    package: (_jsx("svg", { className: "size-5", fill: "currentColor", viewBox: "0 0 18 20", children: _jsx("path", { d: "M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 0 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923Z" }) })),
    "log-out": (_jsx("svg", { className: "size-5", fill: "none", viewBox: "0 0 18 16", children: _jsx("path", { stroke: "currentColor", d: "M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" }) })),
};
function SiderBarMenu() {
    const authContextValue = useAuthentication();
    const navigate = useNavigate();
    const [openDropdown, setOpenDropdown] = React.useState(null);
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
    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };
    const toggleClick = (index) => {
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
            content = _jsx(ManagingProduct, {});
            break;
        case 4:
            content = _jsx(Table, {});
            break;
        default:
            content = _jsx("div", {});
    }
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: clsx(" left-0 top-0 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 shadow-2xl transition-transform duration-500 fixed z-50", isSidebarVisible
                    ? isCollapsed
                        ? "w-16 translate-x-0"
                        : "w-64 translate-x-0"
                    : "-translate-x-full", isSliding ? "transform translate-x-0" : "-translate-x-full"), children: _jsxs("div", { className: "h-full px-3 py-4", children: [_jsx("button", { onClick: () => {
                                toggleCollapse();
                            }, className: clsx("w-full mb-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200", isCollapsed ? "flex justify-center" : ""), children: isCollapsed ? (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "size-5", children: [_jsx("path", { d: "M12 4.5c-4.79 0-8.68 3.89-8.68 8.68 0 4.79 3.89 8.68 8.68 8.68s8.68-3.89 8.68-8.68c0-4.79-3.89-8.68-8.68-8.68Z" }), _jsx("path", { fillRule: "evenodd", d: "M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-4.5 0a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z", clipRule: "evenodd" })] })) : ("Create Bot") }), _jsxs("ul", { className: "space-y-2 font-medium", children: [SiderBarProperty.map((item, index) => (_jsx("li", { children: item.submenu ? (_jsxs(_Fragment, { children: [_jsxs("button", { type: "button", onClick: () => toggleDropdown(index), className: clsx("flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group", isCollapsed ? "justify-center" : ""), children: [icons[item.icon], !isCollapsed && (_jsxs(_Fragment, { children: [_jsx("span", { className: "ms-3 flex-1 text-left", children: item.title }), _jsx("svg", { className: clsx("w-3 h-3 ml-2 transition-transform duration-200", openDropdown === index ? "rotate-180" : ""), fill: "none", viewBox: "0 0 10 6", children: _jsx("path", { stroke: "currentColor", strokeWidth: "2", d: "m1 1 4 4 4-4" }) })] }))] }), !isCollapsed && (_jsx("ul", { className: clsx("py-2 space-y-2", openDropdown === index ? "block" : "hidden"), children: item.submenu.map((sub, subIndex) => (_jsx("li", { children: _jsxs(Link, { to: sub.link, className: "flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700", children: [sub.icon, sub.title] }) }, subIndex))) }))] })) : item.link ? (_jsxs(Link, { to: item.link, className: clsx("w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group", isCollapsed ? "justify-center" : ""), children: [icons[item.icon], !isCollapsed && (_jsx("span", { className: "ms-3 flex-1 text-left", children: item.title }))] })) : (_jsxs("button", { type: "button", onClick: () => toggleClick(index), className: clsx("w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group", isCollapsed ? "justify-center" : ""), children: [icons[item.icon], !isCollapsed && (_jsx("span", { className: "ms-3 flex-1 text-left", children: item.title }))] })) }, index))), _jsx("li", { children: authenciance.login ? (_jsx("button", { type: "button", onClick: () => {
                                            if (!isCollapsed) {
                                                authenciance.handleLogout();
                                            }
                                        }, className: clsx("w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group", isCollapsed ? "justify-center" : ""), children: !isCollapsed ? (_jsx("span", { className: "ms-3 flex-1 text-left", children: "logout" })) : (_jsx("span", { className: "", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "size-6", children: _jsx("path", { "fill-rule": "evenodd", d: "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z", "clip-rule": "evenodd" }) }) })) })) : (_jsx("button", { type: "button", onClick: handleLogin, className: clsx("w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group", isCollapsed ? "justify-center" : ""), children: _jsx("span", { className: "ms-3 flex-1 text-left", children: "login" }) })) })] }), _jsx("div", { className: clsx("mt-auto p-2", isCollapsed ? "flex justify-center" : ""), children: _jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [_jsx("input", { type: "checkbox", value: "", className: "sr-only peer", defaultChecked: true }), _jsx("div", { className: "relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" }), !isCollapsed && (_jsx("span", { className: "ms-3 text-sm font-medium text-gray-900 dark:text-gray-300", children: "Go Online" }))] }) }), isSidebarVisible && !isCollapsed && (_jsx("button", { onClick: toggleCollapse, className: "float-right right-2 top-4 z-50 p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "size-6", children: _jsx("path", { fillRule: "evenodd", d: "M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z", clipRule: "evenodd" }) }) }))] }) }), login && _jsx(Form, { open: login, onClose: handleLogin })] }));
}
export default SiderBarMenu;
