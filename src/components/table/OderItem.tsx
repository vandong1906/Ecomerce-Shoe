import CardItem from "@components/Api/CardItem";
import clsx from "clsx";
import * as React from "react";

function OrderItem() {
  const [OptionValue, setOptionValue] = React.useState(0);
  const [totalPrice, settotalPrice] = React.useState(0);
  const [isChecked, setIsChecked] = React.useState(false);
  const [noticeError, setnoticeError] = React.useState(false);
  const src =
    "https://product.hstatic.net/1000312752/product/09a661c8a5a5aec10a8fc85c77d6416b069f4b1091662927387f7bb38624078f777ed3_acafc873ad214e18af6e481d53ada1e8.jpg";
  const { removeProduct, getItem } = CardItem();
  const handlerSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    if (isChecked) {
    }
    setIsChecked(true);
  };
  const handlerSubmit = () => {};
  return (
    <>
      <div className="flex justify-around m-9">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 ">
          <h1 className="title text-center font-semibold">Order Item</h1>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-1">
            <tbody>
              {getItem()?.map(
                (items) => (
                  console.log(items),
                  (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 w-full">
                      <td className="p-4">
                        <img
                          src={
                            import.meta.env.VITE_API_URL +
                            "/uploads/" +
                            items?.image_data
                          }
                          className="w-16 md:w-32 max-w-full max-h-full"
                          alt="Apple Watch"
                        />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {items.product_Name}
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
                        {items.price ? items.price : 0}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          type="submit"
                          className="font-medium  dark:text-red-500 border-2 p-4 rounded-xl hover:bg-red-400"
                          onClick={() => {
                            removeProduct(items.product_id);
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  )
                )
              )}
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
                      removeProduct(1);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="FormPayMent w-1/3">
          <form className="mx-auto max-w-sm" onSubmit={(e) => handlerSumit(e)}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Total Price
              </label>
              <input
                type="text"
                id="password"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value="$5990"
                disabled
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="method"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Payment Method
              </label>
              <select
                id="method"
                name="method"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setOptionValue(Number(e.target.value))
                }
                value={OptionValue}
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                <option value={1} className="rounded-lg">
                  Card
                </option>
                <option value={0} className="rounded-lg">
                  QRcode
                </option>
              </select>
            </div>
            {OptionValue == 1 ? (
              <>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    required
                  />
                </div>
              </>
            ) : (
              <></>
            )}
            <div className="mb-5 flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  onChange={(e) => {
                    setIsChecked(e.target.checked);
                  }}
                  className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="terms"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              onClick={() => setnoticeError(true)}
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit for Payment
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default OrderItem;
