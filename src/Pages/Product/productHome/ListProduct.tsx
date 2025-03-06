import CallProduct from "@components/Api/ApiProduct";
import { ButtonComponent } from "@components/Buttons/buttonProduct/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { IProduct } from "@Types/Product";
import clsx from "clsx";
import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './index.css'
interface Props {}
export const ListProduct = ({}: Props) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(false);

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
  console.log(products);
  console.log(currentPage);
  return (
    <>
      <div className="Items  p-7 m-7">
        <div className="Products">
          <div className="flex justify-center ">
            <h1 className="header-3 custom-h p-5 text-center  ">
              <span className="w-[240px] bg-gradient-to-r uppercase rounded-lg  from-slate-400 to-slate-800  hover:from-gray-100 
               ">oustanding products </span>
            </h1>
          </div>
          <div className="m-4 grid grid-cols-4 gap-4 p-4 max-md:grid-cols-2">
            {products?.map(
              (product, index) => (
                console.log(product?.ProductVariants[0]?.image_url),
                (
                  <Link
                    key={index}
                    to={clsx("/product?product=" + product.id)}
                    className="transition-all m-2 cursor-pointer rounded-sm border text-center duration-200  hover:shadow-md"
                  >
                    <img
                      className="mx-auto h-52 rounded-sm p-2 max-md:w-full"
                      src={product?.ProductVariants[0]?.image_url}
                      alt=""
                    />
                    <div className="py-5">
                      <h1>Product name</h1>
                      <p>introduce</p>
                    </div>
                    <div className="flex justify-center gap-4 m-4">
                      <ButtonComponent
                        element="custom-btn btn-3 hover:text-black"
                        title="Add to Cart"
                      />
                      <ButtonComponent
                        element="custom-btn btn-3 hover:text-black "
                        title="Add to Cart"
                      />
                    </div>
                  </Link>
                )
              )
            )}
          </div>
          <div className="flex justify-center p-4">
            <button
              className="px-4 cursor-pointer"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-4 cursor-pointer"
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
