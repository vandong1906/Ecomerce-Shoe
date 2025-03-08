import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CallProduct from "@components/Api/ApiProduct";
import { ButtonComponent } from "@components/Buttons/buttonProduct/button";
import clsx from "clsx";
import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './index.css';
export const ListProduct = ({}) => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    const [products, setProduct] = React.useState();
    const pageSize = 8;
    useEffect(() => {
        const fetachdata = async () => {
            const Pagnigation = await CallProduct().getPagnigationProduct(currentPage, pageSize);
            setProduct(Pagnigation?.products);
            setTotalPages(Pagnigation?.pages);
        };
        fetachdata();
    }, [currentPage]);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    return (_jsx(_Fragment, { children: _jsx("div", { className: "Items  p-7 m-7", children: _jsxs("div", { className: "Products", children: [_jsx("div", { className: "flex justify-center ", children: _jsx("h1", { className: "header-3 custom-h p-5 text-center  ", children: _jsx("span", { className: "w-[240px] bg-gradient-to-r uppercase rounded-lg  from-slate-400 to-slate-800  hover:from-gray-100 \r\n               ", children: "oustanding products " }) }) }), _jsx("div", { className: "m-4 grid grid-cols-4 gap-4 p-4 max-md:grid-cols-2", children: products?.map((product, index) => (console.log(product?.ProductVariants[0]?.image_url),
                            (_jsxs(Link, { to: clsx("/product?product=" + product.id), className: "transition-all m-2 cursor-pointer rounded-sm border text-center duration-200  hover:shadow-md", children: [_jsx("img", { className: "mx-auto h-52 rounded-sm p-2 max-md:w-full", src: product?.ProductVariants[0]?.image_url, alt: "" }), _jsxs("div", { className: "py-5", children: [_jsx("h1", { children: "Product name" }), _jsx("p", { children: "introduce" })] }), _jsxs("div", { className: "flex justify-center gap-4 m-4", children: [_jsx(ButtonComponent, { element: "custom-btn btn-3 hover:text-black", title: "Add to Cart" }), _jsx(ButtonComponent, { element: "custom-btn btn-3 hover:text-black ", title: "Add to Cart" })] })] }, index)))) }), _jsxs("div", { className: "flex justify-center p-4", children: [_jsx("button", { className: "px-4 cursor-pointer", onClick: () => handlePageChange(currentPage - 1), disabled: currentPage === 1, children: "Previous" }), _jsxs("span", { children: ["Page ", currentPage, " of ", totalPages] }), _jsx("button", { className: "px-4 cursor-pointer", onClick: () => handlePageChange(currentPage + 1), disabled: currentPage === totalPages, children: "Next" })] }), _jsx("div", { className: "flex justify-center", children: _jsx(Link, { to: "/totalProduct", className: "uppercase", children: "xem them" }) })] }) }) }));
};
