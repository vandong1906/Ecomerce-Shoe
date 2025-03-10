import { useState } from "react";
import { useLocation } from "react-router-dom";
import * as React from "react";
import axiosInstance from "@components/CustomAxios/AxiosCustom";
import { IProduct } from "Types/Product";
import { useCartContext } from "@contexts/CartContext";
import CallProduct from "@components/Api/ApiProduct";

const ProductDetail = () => {
  const local = useLocation();
  const param = new URLSearchParams(local.search);
  const [data, setData] = useState<IProduct>();
  const [loading, SetLoading] = useState(false);
  const [isnotice, setnotice] = useState(false);
  console.log(param.get("product"));
  const CartContext = useCartContext();
  React.useEffect(() => {
    const handler = async () => {
      try {
       const response =await CallProduct().getProductById(Number(param.get("product")));
        setData(response.data);
        SetLoading(true);
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    handler();
  }, []);
 
  return (   
    <>
        <div className=" p-4 md:p-8 my-11 mx-auto flex justify-center">
          <div className="  md:w-[640px]">
          <nav className="text-sm text-gray-500 mb-4 w-full">
          <a href="#" className="hover:underline">
            Nike Court
          </a>{" "}
          &gt;
          <a href="#" className="hover:underline">
            {" "}
            Nike Tennis
          </a>{" "}
          &gt;
          <a href="#" className="hover:underline">
            {" "}
            Nike Zoom Vapor
          </a>
        </nav>
            {loading && (
              <img
                src={
                data?.ProductVariants[0]?.image_url
                }
                alt="Nike Zoom Vapor Pro 2 HC ‘White’ DR6191-101"
                className="w-3/4 h-1/2 mb-4"
              />
            )}

            <div className="flex space-x-2">
              <img
                src="https://placehold.co/100x100"
                alt="Side view of Nike Zoom Vapor Pro 2 HC ‘White’"
                className="w-1/5"
              />
              <img
                src="https://placehold.co/100x100"
                alt="Person wearing Nike Zoom Vapor Pro 2 HC ‘White’ on a tennis court"
                className="w-1/5"
              />
              <img
                src="https://placehold.co/100x100"
                alt="Person sitting on a tennis court wearing Nike Zoom Vapor Pro 2 HC ‘White’"
                className="w-1/5"
              />
              <img
                src="https://placehold.co/100x100"
                alt="Person playing tennis wearing Nike Zoom Vapor Pro 2 HC ‘White’"
                className="w-1/5"
              />
            </div>
          </div>
          <div className=" md:w-[640px] md:pl-8">
            <h1 className="text-xl md:text-2xl font-bold mb-2">
             {data?.name}
            </h1>
            <p className="text-lg md:text-xl text-red-500 mb-4">
              3,100,000 ₫ – 3,500,000 ₫
            </p>
            <div className="mb-4">
              <span className="text-sm text-gray-500">Kích thước</span>
              <div className="mt-2 flex flex-wrap space-x-2">
                {
                  data?.ProductVariants.map((item,index)=>(
                    <button key={index} className="mb-2 rounded-full border border-gray-300 px-4 py-2 hover:scale-105 hover:bg-blue-500/25">
                    {item.size}
                  </button>
                  ))
                }
              
              </div>
            </div>
            <div className="border border-gray-300 p-4 mb-4">
              <div className="flex items-center mb-2">
                {/* <PhoneIcon className="text-blue-500 mr-2 h-16" /> */}
                <span className="text-sm">Gọi ngay để có giá tốt</span>
              </div>
              <p className="text-sm mb-1">
                Hotline HN : 0984918486 - 0785499555 - 72 Tây Sơn Đống Đa
              </p>
              <p className="text-sm">
                Hotline HCM : 0786665444 - 561 Nguyễn Đình Chiểu Q.3
              </p>
              <p className="text-sm text-gray-500">
                Tổng đài hoạt động từ 10h00 - 22h00 mỗi ngày
              </p>
            </div>
            <button
              className="w-full bg-pink-200 text-white py-3 rounded mb-4 hover:bg-pink-500"
              onClick={() => {
                if (data != null) CartContext.setItemCart(data);
              }}
            >
              THÊM VÀO GIỎ HÀNG
            </button>
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <button className="w-full rounded bg-red-500 py-3 text-white transition-all duration-700 hover:scale-105 hover:shadow-2xl md:w-1/3">
                MUA NGAY
                <br />
                Giao Tận Nơi Hoặc Nhận Tại Cửa Hàng
              </button>
              <button className="w-full rounded bg-blue-500 py-3 text-white transition-all duration-700 hover:scale-105 hover:shadow-2xl md:w-1/3">
                TRẢ GÓP QUA THẺ
                <br />
                Visa, Master, JCB
              </button>
              <button className="w-full rounded bg-yellow-500 py-3 text-white transition-all duration-700 hover:scale-105 hover:shadow-2xl md:w-1/3">
                MUA NGAY - TRẢ SAU
                <br />
                HOME PayLater
              </button>
            </div>
            <ul className="grid grid-cols-2 space-y-2 text-sm text-gray-500">
              <li>
                <button className="hover:text-blue-700/75">
                  Hệ Thống Cửa Hàng
                </button>
              </li>
              <li>
                <button className="hover:text-blue-700/75">
                  Cam Kết Khách Hàng
                </button>
              </li>
              <li>
                <button className="hover:text-blue-700/75">
                  Chính Sách Đổi Trả, Bảo Hành
                </button>
              </li>
              <li>
                <button className="hover:text-blue-700/75">
                  Chính Sách Vận Chuyển
                </button>
              </li>
            </ul>
          </div>
        </div>
    </>
  );
};
export default ProductDetail;
