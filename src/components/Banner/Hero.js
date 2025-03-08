import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import "./hero.css";
const image = [
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
        class: "list-item1 ",
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        class: "list-item2 ",
    },
    {
        img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        class: "list-item1 ",
    },
];
const Hero = () => {
    return (_jsx(_Fragment, { children: _jsxs("section", { className: "h-[900px] bg-hero max-md:h-[700px] max-md:pl-7 bg-no-repeat bg-cover  flex bg-center py-20 gap-2 mr-4 p-7 ", children: [_jsx("div", { className: "container mx-auto flex justify-around h-full", children: _jsxs("div", { className: "flex flex-col justify-center", children: [_jsxs("div", { className: "font-semibold flex items-center uppercase", children: [_jsx("div", { className: "w-10 h-[2px] mr-3 bg-cyan-700" }), "Hot Trend"] }), _jsxs("h1", { className: "uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4", children: ["Fresh Shoes Finds", _jsx("br", {}), _jsx("span", { className: "font-light", children: "new collection" })] }), _jsx(Link, { to: "/", className: "self-start uppercase font-semibold border-b-2 border-primary", children: "Discover More" })] }) }), image.map((item, index) => (_jsx("div", { className: `${item.class} w-1/3 p-4 border-0 rounded-2xl text-center `, children: _jsx("img", { src: item.img, alt: `Image ${index}`, className: "w-full h-full object-cover rounded-2xl" }) }, index)))] }) }));
};
export default Hero;
