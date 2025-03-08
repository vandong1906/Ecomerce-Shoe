import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ShoppingCartIcon, UserIcon, } from "@heroicons/react/24/solid";
import { TrashIcon, } from "@heroicons/react/16/solid";
import { Menu, MenuButton, MenuItem, MenuItems, Switch, } from "@headlessui/react";
import * as React from "react";
import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Form from "@components/Form/Form";
import { useAuthentication } from "@contexts/Authuciance";
import { NavbarLogin, NavbarProperty } from "./NavbarItems";
import { useCartContext } from "@contexts/CartContext";
function NavBar() {
    const [enabled, setEnabled] = useState(false);
    const [Login, setLogin] = useState(false);
    const [number, setnumber] = useState(0);
    const [IsActive, setIsActive] = useState(false);
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });
    const CartContext = useCartContext();
    const authContextValue = useAuthentication();
    return (_jsxs(_Fragment, { children: [_jsx("nav", { className: clsx("top-0 z-40 h-full transition-all sticky", enabled ? "bg-white" : "bg-slate-600", IsActive ? "bg-white border-b-2 " : "bg-slate-600"), children: _jsxs("div", { className: "flex justify-around max-md:hidden pc items-center ", children: [NavbarProperty.map((item, index) => (_jsx(Link, { to: item.link, className: item.className, children: item.title }, index))), _jsx("div", { className: "Search items-center", children: _jsx("input", { type: "text", name: "", id: "", className: "block w-full my-4 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "Search" }) }), _jsx("div", { className: "switch-color flex justify-center items-center", children: _jsx(Switch, { checked: enabled, onChange: setEnabled, className: "group inline-flex h-6 w-11 items-center rounded-full bg-black transition data-[checked]:bg-blue-600", children: _jsx("span", { className: "size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" }) }) }), _jsx("div", { className: "Card-Shoping flex justify-center ", children: _jsxs(Menu, { children: [_jsxs(MenuButton, { className: "inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-white relative", children: ["Shopping Cart", _jsx(ShoppingCartIcon, { className: "size-5" }), " ", CartContext.getItem()?.length, " ", _jsx("span", { className: "top-0 absolute right-0" })] }), _jsxs(MenuItems, { transition: true, anchor: "bottom start", className: "w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-40 ", children: [_jsx(MenuItem, { children: _jsxs("button", { className: "flex w-full items-center rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 justify-center", children: [_jsx("img", { src: "https://giaysneakerhcm.com/wp-content/uploads/2022/12/giay-adidas-samba-og-cloud-white-core-black-trang-den-1.jpg", alt: "#", className: "w-12 h-12" }), "Remove"] }) }), _jsx(MenuItem, { children: _jsx("button", { className: "flex w-full items-center rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 justify-center", children: "Remove" }) })] })] }) }), _jsx("div", { className: "User flex justify-center ", children: _jsxs(Menu, { children: [_jsxs(MenuButton, { className: "inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-white", children: [authContextValue.user?.user
                                                ? authContextValue.user.user
                                                : "Guest", _jsx(UserIcon, { className: "size-5" })] }), _jsx(MenuItems, { transition: true, anchor: "bottom", className: "w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-40 ", children: authContextValue.login ? (_jsxs(_Fragment, { children: [authContextValue.user?.role === "admin" && (_jsxs(Link, { to: "/DashBoard", className: "group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 hover:bg-white/10", children: [_jsx(TrashIcon, { className: "size-4 fill-white/30" }), "DashBoard"] })), NavbarLogin.map((item, index) => (_jsx("div", { className: "menu-item", children: item.type === "link" && item.link ? (_jsxs(Link, { to: item.link, className: item.className, children: [_jsx(TrashIcon, { className: "size-4 fill-white/30" }), item.title] })) : (_jsxs("button", { onClick: item.action === "logout"
                                                            ? () => authContextValue.handleLogout()
                                                            : () => { }, className: item.className, children: [_jsx(TrashIcon, { className: "size-4 fill-white/30" }), item.title] })) }, index)))] })) : (_jsx(MenuItem, { children: _jsxs("button", { className: "group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10", onClick: () => {
                                                    setLogin(!Login);
                                                    // deleteProduct();
                                                }, children: [_jsx(TrashIcon, { className: "size-4 fill-white/30" }), "login", _jsx("kbd", { className: "ml-auto font-sans text-xs text-white/50 " })] }) })) })] }) })] }) }), Login && !authContextValue.login && (_jsx(Form, { open: true, onClose: () => setLogin(false) }))] }));
}
export default NavBar;
