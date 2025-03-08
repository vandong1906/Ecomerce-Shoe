import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CallProduct from "@components/Api/ApiProduct";
import clsx from "clsx";
import { useEffect } from "react";
import * as React from "react";
import { Link } from "react-router-dom";
function FillterProduct() {
    const [filters, setFilters] = React.useState({
        category: "",
        priceMin: "",
        priceMax: "",
    });
    const [state, setstate] = React.useState(false);
    const [Status, setStatus] = React.useState(false);
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };
    const handlerSubmit = (e) => {
        e.preventDefault();
        setStatus(!Status);
    };
    const [products, setProduct] = React.useState();
    useEffect(() => {
        const fetachdata = async () => {
            const Pagnigation = await CallProduct().getProductWithFilter(filters);
            setProduct(Pagnigation);
        };
        fetachdata();
    }, [Status]);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex h-full w-full", children: [_jsx("div", { className: clsx("sider-bar w-1/3", state ? "block" : "hidden"), children: _jsxs("div", { className: "p-4", children: [_jsxs("div", { className: "flex justify-between items-center border-b pb-2 mb-4", children: [_jsx("h1", { className: "text-xl font-bold", children: "B\u1ED8 L\u1ECCC" }), _jsx("button", { className: "text-xl font-bold text-red-500 hover:text-red-700", onClick: () => setstate(!state), children: "\u00D7" })] }), _jsxs("form", { className: "space-y-4", onSubmit: (e) => handlerSubmit(e), children: [_jsxs("div", { className: "flex flex-col space-y-2", children: [_jsx("label", { className: "text-lg font-medium", children: "Category:" }), _jsxs("select", { name: "category", value: filters.category, onChange: handleFilterChange, className: "border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "", children: "All" }), _jsx("option", { value: "electronics", children: "Electronics" }), _jsx("option", { value: "clothing", children: "Clothing" }), _jsx("option", { value: "home-appliances", children: "Home Appliances" })] })] }), _jsxs("div", { className: "flex flex-col space-y-2", children: [_jsx("label", { className: "text-lg font-medium", children: "Price Range:" }), _jsxs("div", { className: "flex space-x-4", children: [_jsx("input", { type: "number", name: "priceMin", placeholder: "Min Price", value: filters.priceMin, onChange: handleFilterChange, className: "border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" }), _jsx("input", { type: "number", name: "priceMax", placeholder: "Max Price", value: filters.priceMax, onChange: handleFilterChange, className: "border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" })] })] }), _jsx("div", { className: "mt-4", children: _jsx("button", { className: "w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500", children: "Apply Filters" }) })] })] }) }), _jsx("div", { className: clsx("w-1/3 h-full items-center flex bottom-0 sticky ", state ? "hidden" : "block"), children: _jsx("button", { type: "submit", className: "text-xl font-bold text-red-500 hover:text-red-700", onClick: () => setstate(!state), children: "Filter" }) }), _jsx("div", { className: "ListProduct grid grid-cols-4 gap-4", children: products?.map((product, index) => (_jsxs(Link, { to: clsx("/product?product=" + product.id), className: "text-center transition duration-0 hover:shadow-2xl hover:duration-700", children: [_jsx("img", { className: "rounded-t-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 h-52 w-full", src: import.meta.env.VITE_API_URL +
                                    "/uploads/", alt: "" }), _jsxs("div", { children: [_jsx("h1", { children: "Product name" }), _jsx("p", { children: "introduce" })] })] }, index))) })] }) }));
}
export default FillterProduct;
