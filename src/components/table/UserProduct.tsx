
import React, { useState } from "react";

const Table = () => {
    const [expandedRow, setExpandedRow] = useState(-1);
    const toggleRowDetails = (index: number) => {
        if (expandedRow === index) {
            setExpandedRow(-1);
        } else {
            setExpandedRow(index);
        }
    };
    return <>
 
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-16 py-3">
                            <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            MaSP
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total QTY
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
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
                                onClick={() => toggleRowDetails(0)} // Toggle khi nhấn vào nút "Details"
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Details
                            </button>
                        </td>
                    </tr>
                    {/* Hiển thị thông tin chi tiết nếu dòng này được mở */}
                    {expandedRow === 0 && (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 w-full">
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
                                    <button
                                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                    >
                                        <span className="sr-only">Quantity button</span>
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 2"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M1 1h16"
                                            />
                                        </svg>
                                    </button>
                                    <div>
                                        <input
                                            type="number"
                                            id="first_product"
                                            className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="1"
                                            required
                                        />
                                    </div>
                                    <button
                                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                    >
                                        <span className="sr-only">Quantity button</span>
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 18"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 1v16M1 9h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                $599
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                    Remove
                                </a>
                            </td>
                        </tr>

                    )}
                </tbody>
            </table>
        </div>
    </>
};

export default Table;
