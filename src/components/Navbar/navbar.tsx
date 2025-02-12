import {
    Bars4Icon, ShoppingCartIcon,
    UserIcon
} from '@heroicons/react/24/solid'
import {
    ArchiveBoxXMarkIcon,
    MagnifyingGlassIcon,
    PencilIcon,
    Square2StackIcon,
    TrashIcon,
} from '@heroicons/react/16/solid'
import { Popover, PopoverButton, PopoverPanel, Menu, MenuButton, MenuItem, MenuItems, Switch } from '@headlessui/react'
import * as React from 'react';
import { useState } from "react";
import clsx from "clsx";
import { Link } from 'react-router-dom';
import Form from '@components/Form/Form';
import { IAuthContext, useAuthentication } from "@contexts/Authuciance";
import CardItem from '@components/function/CardItem';
import { NavbarLogin, NavbarProperty } from './NavbarProperty';

function NavBar() {
    const [enabled, setEnabled] = useState(false)
    const [Login, setLogin] = useState(false);
    const [number, setnumber] = useState(0);
    const { getItem, deleteProduct } = CardItem();
    const [IsActive, setIsActive] = useState(false);
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });
    React.useEffect(() => {
        const items = getItem();
        setnumber(items?.length || 0);
    }, [getItem()]);
    const authContextValue: IAuthContext = useAuthentication();
    return <>
        <nav className={clsx('top-0 z-40 h-full transition-all sticky', enabled ? 'bg-white' : 'bg-slate-600', IsActive ? 'bg-white border-b-2 ' : 'bg-slate-600')}>
            <div className="flex justify-around max-md:hidden pc items-center ">

                {
                    NavbarProperty.map((item, index) =>
                        <Link to={item.link} key={index} className={item.className}>{item.title}</Link>)
                }

                <div className='Search items-center'>
                    <input type="text" name="" id="" className='block w-full my-4 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Search' />

                </div>
                <div className='switch-color flex justify-center items-center'>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className="group inline-flex h-6 w-11 items-center rounded-full bg-black transition data-[checked]:bg-blue-600"
                    >
                        <span
                            className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                    </Switch>
                </div>
                <div className="Card-Shoping flex justify-center ">
                    <Menu>
                        <MenuButton
                            className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-white relative">
                            Shopping Cart<ShoppingCartIcon className="size-5" /> {number} <span
                                className='top-0 absolute right-0'></span>
                        </MenuButton>
                        <MenuItems
                            transition
                            anchor="bottom start"
                            className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-40 "
                        >
                            <MenuItem>

                                <button
                                    className="flex w-full items-center rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 justify-center">
                                    <img src="https://giaysneakerhcm.com/wp-content/uploads/2022/12/giay-adidas-samba-og-cloud-white-core-black-trang-den-1.jpg" alt="#" className='w-12 h-12' />
                                    Remove
                                </button>
                            </MenuItem>
                            <MenuItem>
                                <button
                                    className="flex w-full items-center rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 justify-center">

                                    Remove
                                </button>
                            </MenuItem>


                        </MenuItems>
                    </Menu>
                </div>
                {/*User ---------------------- */}
                <div className='User flex justify-center '>
                    <Menu>
                        <MenuButton
                            className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-white">
                            "Guest" <UserIcon className="size-5" />
                        </MenuButton>
                        <MenuItems
                            transition
                            anchor="bottom"
                            className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-40 "
                        >
                            {
                                true ?
                                    <>
                                        {NavbarLogin.map((item, index) => (
                                            <div key={index} className="menu-item">
                                                {item.type === 'link' && item.link ? (
                                                    <Link
                                                        to={item.link}
                                                        className={item.className}
                                                    >
                                                        <TrashIcon className="size-4 fill-white/30" />
                                                        {item.title}
                                                    </Link>
                                                ) : (
                                                    <button
                                                    onClick={item.action === 'logout' ? () => authContextValue.handleLogout() : () => { }}
                                                        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                                                    >
                                                        <TrashIcon className="size-4 fill-white/30" />
                                                        {item.title}
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </>


                                    : (


                                        <MenuItem>
                                            <button
                                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                                                onClick={() => {
                                                    setLogin(!Login);
                                                    // deleteProduct();
                                                }}
                                            >
                                                <TrashIcon className="size-4 fill-white/30" />
                                                login
                                                <kbd className="ml-auto font-sans text-xs text-white/50 ">

                                                </kbd>
                                            </button>
                                        </MenuItem>
                                    )
                            }
                        </MenuItems>
                    </Menu>
                </div>
            </div>

            {/* Mobile Phone */}
            <div className='mobile mb-4 h-full md:hidden  '>
                <Menu>
                    <MenuButton
                        className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white h-full">
                        Menu <Bars4Icon className="size-4 fill-white/60 h-full" />
                    </MenuButton>

                    <MenuItems
                        transition
                        anchor="bottom end"
                        className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-40 "
                    >
                        <MenuItem>
                            <button
                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 z-40">
                                <PencilIcon className="size-4 fill-white/30" />
                                Edit
                                <kbd
                                    className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button
                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                <Square2StackIcon className="size-4 fill-white/30" />
                                Duplicate
                                <kbd
                                    className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                            </button>
                        </MenuItem>
                        <div className="my-1 h-px bg-white/5" />
                        <MenuItem>
                            <button
                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />
                                Archive
                                <kbd
                                    className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button
                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                <TrashIcon className="size-4 fill-white/30" />
                                Delete
                                <kbd
                                    className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                            </button>
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
        </nav>
        {

            Login && (!authContextValue.login && <Form />)
        }
    </>


}

export default NavBar;  