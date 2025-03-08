import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Hero from "@components/Banner/Hero";
import Footer from "@layout/footer/footer";
import { ListProduct } from "@Pages/Product/productHome/ListProduct";
import { useState } from "react";
const GallaryItems = [
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    },
];
const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return _jsx(_Fragment, { children: _jsx("div", { className: "flex", children: _jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsxs("div", { className: "flex-1 relative", children: [_jsx(Hero, {}), _jsxs("div", { className: "gallery py-4", children: [_jsx("div", { className: "tite-gallery flex justify-center", children: _jsx("h1", { className: "rounded-md uppercase bg-gradient-to-r to-blue-700 from-blue-900 p-2 w-64 text-center text-white  ", children: "Our Gallery" }) }), _jsx("div", { className: "grid grid-cols-2 gap-4 py-4 md:grid-cols-3", children: GallaryItems.map((item, index) => (_jsx("div", { children: _jsx("img", { className: "h-auto max-w-full rounded-lg", src: item.img, alt: "" }) }, index))) })] }), _jsx(ListProduct, {})] }), _jsx(Footer, {})] }) }) });
};
export default Home;
