import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './index.css';
export const ButtonComponent = ({ element, title }) => {
    return (_jsxs("button", { className: element, children: [" ", _jsx("span", { children: title })] }));
};
