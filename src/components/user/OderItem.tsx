import { useCartContext } from "@contexts/CartContext";
import axios from "axios";
import * as React from "react";
const src= ""
function OrderItem() {
  const [optionValue, setOptionValue] = React.useState(0);
  const [isChecked, setIsChecked] = React.useState(false);
  const [vnpayUrl, setVnpayUrl] = React.useState("");
  
  const cartContext = useCartContext();
console.log(cartContext.totalPrice())
  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    if (isChecked && optionValue === 1) {
      try {
        const response = await axios.post(import.meta.env.VITE_API_URL+"/api/payments/create-payment",{
          amount: 10000,
          orderInfo: "Payment for order",
          orderId:6
        })
       
        const data =  response.data;
        console.log(data.paymentUrl);
        if (data.paymentUrl) {
          window.location.href = data.paymentUrl; 
        }
    
      } catch (error) {
        console.error("Error fetching VNPAY URL:", error);
      }
    }
  };
  console.log(vnpayUrl);
  return (
    <div className="w-full h-full mx-auto my-10 flex border-2 p-6 md:h-[640px] md:w-[1280px] shadow-md sm:rounded-lg justify-center"> 
      <div className="w-full">
        <h1 className="title text-center font-semibold">Order Item</h1>
        <table className="w-full rounded-lg text-sm text-left text-gray-500 border-1 border-spacing-6">
          <tbody>
            {cartContext.getItem()?.map((item) => (
              <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                <td className="p-4">
                  <img src={item.description} className="w-16 md:w-32 max-w-full max-h-full" alt={item.name} />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">{item.name}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">{item.base_price || 0}</td>
                <td className="px-6 py-4">
                  <button
                    className="font-medium border-2 p-4 rounded-xl hover:bg-red-400"
                    onClick={() => cartContext.removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 w-full">
                <td className="p-4">
                  <img
                    src={src}
                    className="w-16 md:w-32 max-w-full max-h-full"
                    alt="Apple Watch"
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  Apple Watch
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div>
                      <input
                        type="number"
                        id="first_product"
                        className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1"
                        readOnly
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  $599
                </td>
                <td className="px-6 py-4">
                  <button
                    type="submit"
                    className="font-medium  dark:text-red-500 border-2 p-4 rounded-xl hover:bg-red-400"
                    onClick={() => {
                      cartContext.removeFromCart(1);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
      
      <div className="h-full w-full m-5">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium">Your email</label>
            <input type="email" className="block w-full p-2.5 text-sm border rounded-lg" required />
          </div>
          
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium">Select Payment Method</label>
            <select
              onChange={(e) => setOptionValue(Number(e.target.value))}
              value={optionValue}
              className="block w-full p-2.5 text-sm border rounded-lg"
            >
              <option value={1}>Card (VNPAY)</option>
              <option value={0}>QR Code</option>
            </select>
          </div>
          
          <div className="mb-5 flex items-start">
            <input
              type="checkbox"
              onChange={(e) => setIsChecked(e.target.checked)}
              className="h-4 w-4 border border-gray-300 rounded"
              required
            />
            <label className="ml-2 text-sm">I agree with the terms and conditions</label>
          </div>
          
          <button
            type="submit"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-white hover:bg-blue-800"
          >
            Submit for Payment
          </button>
        </form>
        
        {vnpayUrl && (
          <iframe
            src={vnpayUrl}
            className="w-full h-[500px] border mt-5"
            title="VNPAY Payment"
          />
        )}
      </div>
    </div>
  );
}

export default OrderItem;
