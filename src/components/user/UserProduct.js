import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
const collumns = [
    {
        className: "px-16 py-3", title: "Image"
    },
    {
        className: "px-6 py-3", title: "MaSP"
    },
    {
        className: "px-6 py-3", title: "Total QTY"
    },
    {
        className: "px-6 py-3", title: "Total"
    },
    {
        className: "px-6 py-3", title: "Action"
    },
];
const Table = () => {
    const [expandedRow, setExpandedRow] = useState(-1);
    const toggleRowDetails = (index) => {
        if (expandedRow === index) {
            setExpandedRow(-1);
        }
        else {
            setExpandedRow(index);
        }
    };
    return _jsx(_Fragment, { children: _jsx("div", { className: "relative overflow-x-auto shadow-md sm:rounded-lg", children: _jsxs("table", { className: "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400", children: [_jsx("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: _jsx("tr", { children: collumns.map((collumn, index) => (_jsx("th", { className: collumn.className, children: collumn.title }, index))) }) }), _jsxs("tbody", { children: [_jsxs("tr", { className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600", children: [_jsx("td", { className: "p-4", children: _jsx("img", { src: "/docs/images/products/apple-watch.png", className: "w-16 md:w-32 max-w-full max-h-full", alt: "Apple Watch" }) }), _jsx("td", { className: "px-6 py-4 font-semibold text-gray-900 dark:text-white", children: "DHMS01" }), _jsx("td", { className: "px-6 py-4", children: _jsx("input", { type: "text", placeholder: "2", readOnly: true, disabled: true }) }), _jsx("td", { className: "px-6 py-4 font-semibold text-gray-900 dark:text-white", children: "$599" }), _jsx("td", { className: "px-6 py-4", children: _jsx("button", { onClick: () => toggleRowDetails(0), className: "font-medium text-blue-600 hover:underline", children: "Details" }) })] }), expandedRow === 0 && (_jsxs("tr", { className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 w-full", children: [_jsx("td", { className: "p-4", children: _jsx("img", { src: "/docs/images/products/apple-watch.png", className: "w-16 md:w-32 max-w-full max-h-full", alt: "Apple Watch" }) }), _jsx("td", { className: "px-6 py-4 font-semibold text-gray-900 dark:text-white", children: "Apple Watch" }), _jsx("td", { className: "px-6 py-4", children: _jsxs("div", { className: "flex items-center", children: [_jsxs("button", { className: "inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700", type: "button", children: [_jsx("span", { className: "sr-only", children: "Quantity button" }), _jsx("svg", { className: "w-3 h-3", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 18 2", children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M1 1h16" }) })] }), _jsx("div", { children: _jsx("input", { type: "number", id: "first_product", className: "bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "1", required: true }) }), _jsxs("button", { className: "inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700", type: "button", children: [_jsx("span", { className: "sr-only", children: "Quantity button" }), _jsx("svg", { className: "w-3 h-3", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 18 18", children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 1v16M1 9h16" }) })] })] }) }), _jsx("td", { className: "px-6 py-4 font-semibold text-gray-900 dark:text-white", children: "$599" }), _jsx("td", { className: "px-6 py-4", children: _jsx("a", { href: "#", className: "font-medium text-red-600 dark:text-red-500 hover:underline", children: "Remove" }) })] }))] })] }) }) });
};
export default Table;
