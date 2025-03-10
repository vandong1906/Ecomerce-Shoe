import { Link } from "react-router-dom";
import "./hero.css";

const image = [
  {
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    class: "list-item1 ",
  },
  {
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    class: "list-item2 ",
  },
  {
    img: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    class: "list-item1 ",
  },
];
const Hero = () => {
  return (
    <>
      <section className="h-[900px] bg-hero max-md:h-[700px] max-md:pl-7 flex bg-center py-20 gap-2 mr-4 p-7 ">
        <div className="container mx-auto flex justify-around h-full">
          <div className="flex flex-col justify-center">
            <div className="font-semibold flex items-center uppercase">
              <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>Hot Trend
            </div>
            <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">
              Fresh Shoes Finds
              <br />
              <span className="font-light">new collection</span>
            </h1>
            <Link
              to={"/"}
              className="self-start uppercase font-semibold border-b-2 border-primary"
            >
              Discover More
            </Link>
          </div>
        </div>
        {image.map((item, index) => (
          <div
            key={index}
            className={`${item.class} w-1/3 p-4 border-0 rounded-2xl text-center `}
          >
            <img
              src={item.img}
              alt={`Image ${index}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Hero;
