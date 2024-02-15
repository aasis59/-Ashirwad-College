import { Typography} from "@material-tailwind/react";
import image1 from "../../assets/images/image1.jpg";
import main from "../../assets/images/main.jpg";
import image3 from "../../assets/images/image3.jpg";
import image2 from "../../assets/images/image2.jpg";


function Gridimage() {
  

  
  return (
    <section className=" back_ground rounded-xl">
      <div className=" flex flex-col sm:flex-col md:flex-row" style={{ height: '690px' }}>
        <div className="w-full sm:w-full md:w-[40%] flex flex-col justify-center items-center p-5 ">
          <Typography variant="h2">
            Knowledge is Power,
          </Typography>
          <Typography variant="h2">
            Work is Worship
          </Typography>

          <Typography variant="h4" className="mt-5">Be a part of Ashirwad Family</Typography>
          <div className="mt-4">
            <a
              href="#_"
              className=" bg-white relative inline-flex items-center px-11 py-2 overflow-hidden text-md font-medium text-black  rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative">
                <a href="#">Register Now</a>
              </span>
            </a>
          </div>
        </div>

        <div className=" w-full sm:w-full  md:w-[60%] grid grid-cols-3 grid-rows-6 gap-1  p-5 sm:p-5 md:p-20">
          <div className="row-span-4 row-start-2">
            <img
              src={main}
              alt="Image 1"
              className="w-full h-full object-cover rounded-tl-[90px] rounded-md"
              preload="true"
            />
          </div>
          <div className="col-span-2 row-span-3 col-start-2">
            <img
             src={image1}
              alt="Image 2"
              className="w-full h-full object-cover rounded-md "
              preload="true"
            />
          </div>
          <div className="row-span-3 col-start-2 row-start-4">
            <img
               src={image2 }
              alt="Image 3"
              className="w-full h-full object-cover rounded-md"
              preload="true"
            />
          </div>
          <div className="row-span-3 col-start-3 row-start-4">
            <img
               src={ image3 }
               preload="true"
              alt="Image 4"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gridimage;
