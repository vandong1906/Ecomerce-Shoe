import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import * as React from "react";
import { useCartContext } from "@contexts/CartContext";
import CallProduct from "@components/Api/ApiProduct";
const ProductDetail = () => {
    const local = useLocation();
    const param = new URLSearchParams(local.search);
    const [data, setData] = useState();
    const [loading, SetLoading] = useState(false);
    const [isnotice, setnotice] = useState(false);
    console.log(param.get("product"));
    const CartContext = useCartContext();
    React.useEffect(() => {
        const handler = async () => {
            try {
                const response = await CallProduct().getProductById(Number(param.get("product")));
                setData(response.data);
                SetLoading(true);
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        handler();
    }, []);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "p-4 md:p-8", children: [_jsxs("nav", { className: "text-sm text-gray-500 mb-4", children: [_jsx("a", { href: "#", className: "hover:underline", children: "Nike Court" }), " ", ">", _jsxs("a", { href: "#", className: "hover:underline", children: [" ", "Nike Tennis"] }), " ", ">", _jsxs("a", { href: "#", className: "hover:underline", children: [" ", "Nike Zoom Vapor"] })] }), _jsxs("div", { className: "md:flex", children: [_jsxs("div", { className: "md:w-1/2", children: [loading && (_jsx("img", { src: data?.ProductVariants[0]?.image_url, alt: "Nike Zoom Vapor Pro 2 HC \u2018White\u2019 DR6191-101", className: "w-3/4 h-1/2 mb-4" })), _jsxs("div", { className: "flex space-x-2", children: [_jsx("img", { src: "https://placehold.co/100x100", alt: "Side view of Nike Zoom Vapor Pro 2 HC \u2018White\u2019", className: "w-1/5" }), _jsx("img", { src: "https://placehold.co/100x100", alt: "Person wearing Nike Zoom Vapor Pro 2 HC \u2018White\u2019 on a tennis court", className: "w-1/5" }), _jsx("img", { src: "https://placehold.co/100x100", alt: "Person sitting on a tennis court wearing Nike Zoom Vapor Pro 2 HC \u2018White\u2019", className: "w-1/5" }), _jsx("img", { src: "https://placehold.co/100x100", alt: "Person playing tennis wearing Nike Zoom Vapor Pro 2 HC \u2018White\u2019", className: "w-1/5" })] })] }), _jsxs("div", { className: "md:w-1/2 md:pl-8", children: [_jsx("h1", { className: "text-xl md:text-2xl font-bold mb-2", children: data?.name }), _jsx("p", { className: "text-lg md:text-xl text-red-500 mb-4", children: "3,100,000 \u20AB \u2013 3,500,000 \u20AB" }), _jsxs("div", { className: "mb-4", children: [_jsx("span", { className: "text-sm text-gray-500", children: "K\u00EDch th\u01B0\u1EDBc" }), _jsx("div", { className: "mt-2 flex flex-wrap space-x-2", children: data?.ProductVariants.map((item, index) => (_jsx("button", { className: "mb-2 rounded-full border border-gray-300 px-4 py-2 hover:scale-105 hover:bg-blue-500/25", children: item.size }, index))) })] }), _jsxs("div", { className: "border border-gray-300 p-4 mb-4", children: [_jsx("div", { className: "flex items-center mb-2", children: _jsx("span", { className: "text-sm", children: "G\u1ECDi ngay \u0111\u1EC3 c\u00F3 gi\u00E1 t\u1ED1t" }) }), _jsx("p", { className: "text-sm mb-1", children: "Hotline HN : 0984918486 - 0785499555 - 72 T\u00E2y S\u01A1n \u0110\u1ED1ng \u0110a" }), _jsx("p", { className: "text-sm", children: "Hotline HCM : 0786665444 - 561 Nguy\u1EC5n \u0110\u00ECnh Chi\u1EC3u Q.3" }), _jsx("p", { className: "text-sm text-gray-500", children: "T\u1ED5ng \u0111\u00E0i ho\u1EA1t \u0111\u1ED9ng t\u1EEB 10h00 - 22h00 m\u1ED7i ng\u00E0y" })] }), _jsx("button", { className: "w-full bg-pink-200 text-white py-3 rounded mb-4 hover:bg-pink-500", onClick: () => {
                                        if (data != null)
                                            CartContext.setItemCart(data);
                                    }, children: "TH\u00CAM V\u00C0O GI\u1ECE H\u00C0NG" }), _jsxs("div", { className: "mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0", children: [_jsxs("button", { className: "w-full rounded bg-red-500 py-3 text-white transition-all duration-700 hover:scale-105 hover:shadow-2xl md:w-1/3", children: ["MUA NGAY", _jsx("br", {}), "Giao T\u1EADn N\u01A1i Ho\u1EB7c Nh\u1EADn T\u1EA1i C\u1EEDa H\u00E0ng"] }), _jsxs("button", { className: "w-full rounded bg-blue-500 py-3 text-white transition-all duration-700 hover:scale-105 hover:shadow-2xl md:w-1/3", children: ["TR\u1EA2 G\u00D3P QUA TH\u1EBA", _jsx("br", {}), "Visa, Master, JCB"] }), _jsxs("button", { className: "w-full rounded bg-yellow-500 py-3 text-white transition-all duration-700 hover:scale-105 hover:shadow-2xl md:w-1/3", children: ["MUA NGAY - TR\u1EA2 SAU", _jsx("br", {}), "HOME PayLater"] })] }), _jsxs("ul", { className: "grid grid-cols-2 space-y-2 text-sm text-gray-500", children: [_jsx("li", { children: _jsx("button", { className: "hover:text-blue-700/75", children: "H\u1EC7 Th\u1ED1ng C\u1EEDa H\u00E0ng" }) }), _jsx("li", { children: _jsx("button", { className: "hover:text-blue-700/75", children: "Cam K\u1EBFt Kh\u00E1ch H\u00E0ng" }) }), _jsx("li", { children: _jsx("button", { className: "hover:text-blue-700/75", children: "Ch\u00EDnh S\u00E1ch \u0110\u1ED5i Tr\u1EA3, B\u1EA3o H\u00E0nh" }) }), _jsx("li", { children: _jsx("button", { className: "hover:text-blue-700/75", children: "Ch\u00EDnh S\u00E1ch V\u1EADn Chuy\u1EC3n" }) })] })] })] })] }) }));
};
export default ProductDetail;
