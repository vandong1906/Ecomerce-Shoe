import Hero from "@components/Banner/Hero";
import Footer from "@layout/footer/footer";
import SiderBarMenu from "@layout/SiderBar/SiderBar";
import { ListProduct } from "@Pages/Product/ListProduct";
import React, { useState } from "react";

const GallaryItems = [
  {
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  },
  {
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  },
  {
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  },
  {
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  },
  {
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  },
  {
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  },
];

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  return <>
  <div className="flex">
  <div
      className={`h-full z-50 sticky top-20 left-0 bg-white dark:bg-gray-900 border-0 `}
    >
      <SiderBarMenu />
    </div>
  <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <div className="flex-1 relative">
        <Hero />

        <div className="gallery py-4">
          <div className="tite-gallery flex justify-center">
            <h1 className="rounded-md uppercase bg-gradient-to-r to-blue-700 from-blue-900 p-2 w-64 text-center text-white">
              Our Gallery
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 py-4 md:grid-cols-3">
            {GallaryItems.map((item, index) => (
              <div key={index}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={item.img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        <ListProduct />
      </div>
      <Footer />
      {/* Sidebar */}
    
      
    </div>
     
  </div>

  </>
};

export default Home;