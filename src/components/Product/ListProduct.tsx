import CallProduct from "@components/function/CallProduct";
import CardItem from "@components/function/CardItem";
import { IProduct } from "@components/Types/Product";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
interface ProductProps {
  ProductName: string;
  Number: number;
}
interface Props {}
export const ListProduct = ({}: Props) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(false);
  const { setItemProduct } = CardItem();
  const [products, setProduct] = React.useState<IProduct[]>();
  const pageSize = 8;
  useEffect(() => {
    const fetachdata = async () => {
      const Pagnigation = await CallProduct().getPagnigationProduct(
        currentPage,
        pageSize
      );
      setProduct(Pagnigation?.products);
      setTotalPages(Pagnigation?.pages);
    };
    fetachdata();
  }, [currentPage]);
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <div className="Items  p-7 m-7">
        <div className="Products">
          <div className="flex justify-center">
            <h1 className="rounded-lg bg-gradient-to-r from-slate-400 to-slate-800 p-2 uppercase hover:cursor-pointer hover:from-orange-500 hover:to-red-200">
              outstanding products
            </h1>
          </div>
          <div className="m-4 grid grid-cols-4 gap-4 p-4 max-md:grid-cols-2">
            {products?.map((product, index) => (
              <Link
                key={index}
                to={clsx("/product?product=" + product.product_id)}
                className="transition-all m-2 cursor-pointer rounded-sm border text-center duration-200 hover:border-2 hover:shadow-md"
              >
                <img
                  className="mx-auto h-52 rounded-sm p-2 max-md:w-full"
                  src={
                    import.meta.env.VITE_API_URL +
                    "/uploads/" +
                    product.image_data
                  }
                  alt=""
                />
                <div className="py-5">
                  <h1>Product name</h1>
                  <p>introduce</p>
                </div>
                <div className="">
                  <button className="m-2 cursor-pointer rounded-sm bg-gradient-to-r from-blue-500 to-blue-600 p-2 transition-all duration-200 hover:scale-110 w-auto">
                    Click
                  </button>
                  <button className="m-2 cursor-pointer rounded-sm bg-gradient-to-r from-blue-500 to-blue-600 p-2 transition-all duration-200 hover:scale-110 w-auto">
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))}
           
          </div>
          <div className="flex justify-center p-4">
            <button
              className="px-4"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-4"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
          <div className="flex justify-center">
            <Link to="/totalProduct" className="uppercase">
              xem them
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
