import React, { useState } from "react";

enum Status {
  Pending = "pending",
  Paid = "paid",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled",
}
const collumns = [
  {
    className: "px-16 py-3",
    title: "Image",
  },
  {
    className: "px-6 py-3",
    title: "MaSP",
  },
  {
    className: "px-6 py-3",
    title: "Total QTY",
  },
  {
    className: "px-6 py-3",
    title: "Total",
  },
  {
    className: "px-6 py-3",
    title: "Action",
  },
  {
    className: "px-6 py-3",
    title: "status",
  },
];
let content='Detail';
const UserBilling = () => {
  const [expandedRow, setExpandedRow] = useState(-1);
  const toggleRowDetails = (index: number) => {
    if (expandedRow === index) {
      setExpandedRow(-1);

      content='Detail';
    } else {
      setExpandedRow(index);
      content='Hidden';
    }
  };
  return (
    <>
      <div className="shadow-md sm:rounded-lg mx-auto md:h-[640px] md:w-[1280px] md:my-32  border-2 ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {collumns.map((collumn, index) => (
                <th key={index} className={collumn.className}>
                  {collumn.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4">
                <img
                  src="/docs/images/products/apple-watch.png"
                  className="w-16 md:w-32 max-w-full max-h-full"
                  alt="Apple Watch"
                />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                DHMS01
              </td>
              <td className="px-6 py-4">
                <input type="text" placeholder="2" readOnly disabled />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                $599
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => toggleRowDetails(0)}
                  className="font-medium text-blue-600 hover:underline"
                >
                  {content}
                </button>
              </td>
              <td className="px-6 py-4">{Status.Pending}</td>
            </tr>
            {/* Hiển thị thông tin chi tiết nếu dòng này được mở */}
            {expandedRow === 0 && (
              <tr className=" bg-white border-b  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 w-full">
                <td className="p-4">
                  <img
                    src="/docs/images/products/apple-watch.png"
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
                        disabled
                        required
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  $599
                </td>
                <td className="px-6 py-4"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserBilling;
