import Banner from "@components/Banner/Banner";
import { ListProduct } from "@components/Product/ListProduct";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <div className="gallery py-4">
        <div className="tite-gallery flex justify-center">
          <h1 className="rounded-md bg-gradient-to-r from-orange-500 to-red-200 p-2">
            Our Gallary
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 py-4 md:grid-cols-3">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <ListProduct />
    </>
  );
};

export default Home;
