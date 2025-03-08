import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import CallBrand from "@components/Api/ApiBrand";
import * as React from "react";
import CallProduct from "@components/Api/ApiProduct";
function ManagingProduct() {
    const [notification, setNotification] = React.useState(false);
    const [alert, setAlert] = React.useState({
        message: "Your changes have been saved!",
        color: "green",
        detail: "You can continue with your work.",
    });
    const [product, setProduct] = React.useState();
    const [brands, setBrands] = React.useState();
    const [formdata, setFormData] = React.useState({
        name: "",
        base_price: 0,
        brand_id: 1,
        description: "",
    });
    const [file, setFile] = React.useState([]);
    /* change area*/
    useEffect(() => {
        const fetachdata = async () => {
            const respon = await CallBrand().getBrand();
            const getProduc = await CallProduct().getProduct();
            setProduct(getProduc);
            setBrands(respon);
        };
        fetachdata();
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleInputChangeArea = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleSelectChange = (e) => {
        const selectedBrand = parseInt(e.target.value, 10); // Ensure it's a number
        setFormData((prevState) => ({
            ...prevState,
            Brand_id: selectedBrand,
        }));
    };
    function handlerProduct(e) {
        e.preventDefault();
        // const form = new FormData();
        // console.log(formdata)
        // form.append("Product_name", formdata?.Product_name);
        // form.append("description", formdata?.description);
        // form.append("Brand_id", formdata?.Brand_id.toString());
        // form.append("number", formdata?.number.toString());
        // if (file) {
        //     file.forEach((file, index) => {
        //         form.append("file[]", file); // Use a name with square brackets to indicate multiple files
        //     });
        // }
        // const handler = async () => {
        //     const response = await CallProduct().createProduct(form);
        //     if (response.status == 200) {
        //         setNotification(true);
        //     }
        // }
        // handler();
    }
    const handleAlertClose = () => {
        console.log("Alert has been closed!");
        setNotification(false); // Cập nhật lại trạng thái sau khi alert tắt
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex mt-16", children: [_jsxs("form", { className: "w-1/3 mx-auto", onSubmit: (e) => handlerProduct(e), encType: "multipart/form-data", children: [_jsx("div", { className: "text-center", children: "Form add Product" }), _jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", id: "floating_outlined", className: "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer", placeholder: " ", name: "Product_name", value: formdata?.name, onChange: handleInputChange }), _jsx("label", { htmlFor: "floating_outlined", className: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1", children: "Name Product" })] }), _jsx("div", { className: "flex items-center justify-center w-full py-6", children: _jsxs("label", { htmlFor: "dropzone-file", className: "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600", children: [_jsxs("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [_jsx("svg", { className: "w-8 h-8 mb-4 text-gray-500 dark:text-gray-400", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 16", children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" }) }), _jsxs("p", { className: "mb-2 text-sm text-gray-500 dark:text-gray-400", children: [_jsx("span", { className: "font-semibold", children: "Click to upload" }), " or drag and drop"] }), _jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "SVG, PNG, JPG or GIF (MAX. 800x400px)" })] }), _jsx("input", { id: "dropzone-file", type: "file", className: "hidden", name: "file[]", multiple: true, onChange: (e) => {
                                            const selectedFile = e.target.files ? e.target.files : null;
                                            if (selectedFile && selectedFile.length > 0) {
                                                for (let i = 0; i < selectedFile.length; i++) {
                                                    const file = selectedFile[i];
                                                    setFile((prev) => {
                                                        if (prev) {
                                                            return [...prev, file];
                                                        }
                                                        return [file];
                                                    });
                                                }
                                            }
                                        } })] }) }), _jsx("div", { className: "flex items-center justify-center w-full py-6 gap-5", children: file &&
                                file?.map((file, index) => ((_jsxs("div", { className: "relative", children: [_jsx("button", { type: "submit", className: "right-0 float-right hover:bg-red-500 hover:text-white rounded-lg p-1", onClick: () => {
                                                setFile((prev) => {
                                                    if (prev) {
                                                        prev.splice(index, 1);
                                                        return [...prev];
                                                    }
                                                    return [];
                                                });
                                            }, children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "size-6", children: _jsx("path", { "fill-rule": "evenodd", d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z", "clip-rule": "evenodd" }) }) }), _jsx("img", { src: URL.createObjectURL(file), alt: "#", className: "w-24" })] }, index)))) }), _jsx("label", { htmlFor: "number-input", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Select a number:" }), _jsx("input", { type: "number", id: "number-input", "aria-describedby": "helper-text-explanation", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "90210", required: true, value: 1, name: "number", min: 1, onChange: handleInputChange }), _jsx("label", { htmlFor: "countries", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Select an option" }), _jsx("select", { id: "countries", className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", value: formdata?.brand_id, name: "Brand_id", onChange: handleSelectChange, children: brands?.map((brand) => (_jsx("option", { value: brand.Brand_id, children: brand.Brand_Name }, brand.Brand_id))) }), _jsx("label", { htmlFor: "message", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Description" }), _jsx("textarea", { id: "message", "aria-rowindex": 4, className: "block p-2.5 mb-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "Write your thoughts here...", name: "description", value: formdata?.description, onChange: handleInputChangeArea }), _jsx("input", { type: "submit", value: "add to product", className: "border-2 rounded-lg hover:shadow-2xl  transition-all active:duration-700 duration-0 hover:scale-105 hover:duration-500 text-center w-full p-3 hover:bg-blue-600 cursor-pointer" })] }), _jsxs("div", { className: "relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 mx-5", children: [_jsxs("div", { className: "pb-6 bg-white dark:bg-gray-900", children: [_jsx("label", { htmlFor: "table-search", className: "sr-only", children: "Search" }), _jsxs("div", { className: "relative mt-1", children: [_jsx("div", { className: "absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none", children: _jsx("svg", { className: "w-4 h-4 text-gray-500 dark:text-gray-400", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 20", children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" }) }) }), _jsx("input", { type: "text", id: "table-search", className: "block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "Search for items" })] })] }), _jsx("div", { className: "overflow-auto h-full", children: _jsxs("table", { className: "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400", children: [_jsx("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0", children: _jsxs("tr", { children: [_jsx("th", { scope: "col", className: "px-6 py-3", children: "Product name" }), _jsx("th", { scope: "col", className: "px-6 py-3", children: "Image" }), _jsx("th", { scope: "col", className: "px-6 py-3", children: "Category" }), _jsx("th", { scope: "col", className: "px-6 py-3", children: "Number" }), _jsx("th", { scope: "col", className: "px-6 py-3", children: "Action" })] }) }), _jsxs("tbody", { children: [product?.map((product, index) => (_jsxs("tr", { className: "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-500/55", children: [_jsx("th", { scope: "row", className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white", children: product.name }), _jsx("td", { className: "px-6 py-4", children: _jsx("img", { src: "http://localhost:3000/uploads/" }) }), _jsx("td", { className: "px-6 py-4", children: product.description }), _jsx("td", { className: "px-6 py-4" }), _jsx("td", { className: "px-6 py-4", children: _jsx("a", { href: "#", className: "font-medium text-blue-600 dark:text-blue-500 hover:underline", children: "Edit" }) })] }, index))), _jsxs("tr", { className: "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700", children: [_jsx("th", { scope: "row", className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white", children: "Apple MacBook Pro 17\"" }), _jsx("td", { className: "px-6 py-4", children: "Silver" }), _jsx("td", { className: "px-6 py-4", children: "Laptop" }), _jsx("td", { className: "px-6 py-4", children: "$2999" }), _jsx("td", { className: "px-6 py-4", children: _jsx("a", { href: "#", className: "font-medium text-blue-600 dark:text-blue-500 hover:underline", children: "Edit" }) })] })] })] }) })] })] }) }));
}
export default ManagingProduct;
