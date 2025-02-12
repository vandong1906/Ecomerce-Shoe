import CallProduct from "@components/function/CallProduct";
import CardItem from "@components/function/CardItem";
import NavBar from "@components/Navbar/navbar";
import { IProduct } from "@components/Types/Product";
import clsx from "clsx";
import { useEffect } from "react";
import * as React from "react";
import { Link } from "react-router-dom";

function TotalProduct() {
  const [filters, setFilters] = React.useState({
    category: "",
    priceMin: "",
    priceMax: "",
  });
  const [state, setstate] = React.useState(false);
  const [Status, setStatus] = React.useState(false);
  const handleFilterChange = (e: any) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };
  const handlerSubmit = (e: any) => {
    e.preventDefault();
    setStatus(!Status);
  };
  const [products, setProduct] = React.useState<IProduct[]>();
  const { setItemProduct } = CardItem();
  useEffect(() => {
    const fetachdata = async () => {
      const Pagnigation = await CallProduct().getProductWithFilter(filters);
      setProduct(Pagnigation);
    };
    fetachdata();
  }, [Status]);
  return (
    <>
      <div className="flex h-full w-full">
        <div className={clsx("sider-bar w-1/3", state ? "block" : "hidden")}>
          <div className="p-4">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h1 className="text-xl font-bold">BỘ LỌC</h1>
              <button
                className="text-xl font-bold text-red-500 hover:text-red-700"
                onClick={() => setstate(!state)}
              >
                ×
              </button>
            </div>

            {/* Filter UI */}
            <form className="space-y-4" onSubmit={(e) => handlerSubmit(e)}>
              {/* Category Filter */}
              <div className="flex flex-col space-y-2">
                <label className="text-lg font-medium">Category:</label>
                <select
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                  className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="home-appliances">Home Appliances</option>
                  {/* Add other categories as needed */}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="flex flex-col space-y-2">
                <label className="text-lg font-medium">Price Range:</label>
                <div className="flex space-x-4">
                  <input
                    type="number"
                    name="priceMin"
                    placeholder="Min Price"
                    value={filters.priceMin}
                    onChange={handleFilterChange}
                    className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                  <input
                    type="number"
                    name="priceMax"
                    placeholder="Max Price"
                    value={filters.priceMax}
                    onChange={handleFilterChange}
                    className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                </div>
              </div>
              {/* Optional: Add a Submit Button for Filters */}
              <div className="mt-4">
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Apply Filters
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className={clsx(
            "w-1/3 h-full items-center flex bottom-0 sticky ",
            state ? "hidden" : "block"
          )}
        >
          <button
            type="submit"
            className="text-xl font-bold text-red-500 hover:text-red-700"
            onClick={() => setstate(!state)}
          >
            Filter
          </button>
        </div>
        <div className="ListProduct grid grid-cols-4 gap-4">
          {products?.map((product, index) => (
            <Link
              key={index}
              to={clsx("/product?product=" + product.product_id)}
              className="text-center transition duration-0 hover:shadow-2xl hover:duration-700"
            >
              <img
                className="rounded-t-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 h-52 w-full"
                src={
                  import.meta.env.VITE_API_URL +
                  "/uploads/" +
                  product.image_data
                }
                alt=""
              />
              <div>
                <h1>Product name</h1>
                <p>introduce</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default TotalProduct;
