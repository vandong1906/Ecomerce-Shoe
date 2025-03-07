import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements, } from "@stripe/react-stripe-js";
import axios from "axios";
const stripePromise = loadStripe("pk_test_51QNmcJL8y9JZYcvb3spJrsQX0HgaW8ZV3QAnlrnDzexAsbzQTD2juu9V3XDSkN25IpdJe5WjjyZ7sadEOxkmMDOj00FNC5AgFA"); // Thay bằng Publishable Key từ Stripe
const productImage = "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg";
const appearance = {
    theme: "stripe",
    variables: {
        colorPrimary: "#4CAF50",
        colorBackground: "#121212",
        colorText: "#ffffff",
        borderRadius: "8px",
    },
    rules: {
        ".Input": {
            borderColor: "#4CAF50",
            color: "#ffffff",
        },
        ".Label": {
            color: "#aaaaaa",
        },
    },
};
const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements)
            return;
        setLoading(true);
        setMessage(null);
        const cardElement = elements.getElement(CardElement);
        if (!cardElement)
            return;
        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
            });
            if (error) {
                setMessage(error.message || "Có lỗi xảy ra khi xử lý thanh toán.");
            }
            else {
                // Gửi thông tin thanh toán lên backend
                const response = await axios.post("http://localhost:4242/pay", {
                    paymentMethodId: paymentMethod.id,
                });
                if (response.data.success) {
                    setMessage("Thanh toán thành công!");
                }
                else {
                    setMessage("Thanh toán thất bại, vui lòng thử lại.");
                }
            }
        }
        catch (error) {
            setMessage("Lỗi hệ thống, vui lòng thử lại.");
        }
        setLoading(false);
    };
    return (_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg w-96 text-center", children: [_jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Stripe_Logo%2C_revised_2016.svg", alt: "Stripe Logo", className: "h-10 mx-auto mb-4" }), _jsx("img", { src: productImage, alt: "S\u1EA3n ph\u1EA9m", className: "w-full h-40 object-cover rounded-lg mb-4 shadow-md" }), _jsx("h2", { className: "text-xl font-bold mb-4", children: "Thanh to\u00E1n v\u1EDBi Stripe" }), _jsx(CardElement, { className: "p-3 border border-gray-300 rounded-lg" }), _jsx("button", { type: "submit", onClick: handleSubmit, className: `mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg w-full transition ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`, disabled: !stripe || loading, children: loading ? "Đang xử lý..." : "Thanh toán" }), message && _jsx("p", { className: "mt-4 text-red-500", children: message })] }));
};
const StripePopup = () => {
    return (_jsx("div", { className: "fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50", children: _jsx(Elements, { stripe: stripePromise, children: _jsx(CheckoutForm, {}) }) }));
};
export default StripePopup;
