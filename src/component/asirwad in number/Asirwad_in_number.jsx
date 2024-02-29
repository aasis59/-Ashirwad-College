import { Suspense } from 'react';
import image1 from "../../assets/images/image1.jpg";
import { GiWhiteBook } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";
function Asirwad_in_number() {
    const iconStyle = {
        color: 'black', 
        width: '90px',
        height: '50px', 
        margin: '10px', 
      };
  return (
   <section className="bg-[#263675]  relative">
    <div style={{ zIndex: 1 }}>
        
    </div>
    <h1 className="font-bold text-4xl p-5 text-center pt-20 text-white" style={{ zIndex: 1 }}>Aashirwad in Number </h1>
    <div>
    <div className="flex w-full items-center justify-center p-10" style={{zIndex: '1'}} >
  <div className="grid" style={{ zIndex: 1 }}>
    <div className="hexagon-1 bg-[#F4BE40]">
      <div className="flex flex-col justify-center items-center">
      <div><strong className="text-5xl">24</strong></div>
      <div className="font-semibold">
      Years of Excellence 
      </div>
      </div>
    </div>
  </div>
  <div className="grid ml-[-70px]" style={{ zIndex: 1 }}>
    <div className="hexagon-1 bg-[#E5CC68]">
    <div className="flex flex-col justify-center items-center">
      <div><GiWhiteBook style={iconStyle} /></div>
      <div className=" font-semibold text-2xl">3</div>
      <div className="font-semibold">
       Programs Launched
      </div>
      </div>
    </div>
    <div className="hexagon-1 bg-[#F6F6F6]" >
    <div className="flex flex-col justify-center items-center">
      <div><FaUniversity  style={iconStyle} /></div>
      <div className=" font-semibold text-2xl">3000+</div>
      <div className="font-semibold">
      Graduates
      </div>
      </div>
   
    </div>
  </div>
  <div className="grid ml-[-70px] " style={{ zIndex: 1 }}>
    <div className="hexagon-1 bg-[#F4BE40]">
    <div className="flex flex-col justify-center items-center">
      <div><PiStudentFill  style={iconStyle} /></div>
      <div className=" font-semibold text-2xl">25+</div>
      <div className="font-semibold">
      TU Toppers 
      </div>
      </div>
    </div>
  </div>
  <div className="grid ml-[-70px]" style={{ zIndex: 1 }}>
    <div className="hexagon-1 bg-[#E5CC68]">
    <div className="flex flex-col justify-center items-center">
      <div><GiTrophyCup style={iconStyle} /></div>
      <div className=" font-semibold text-2xl">50+</div>
      <div className="font-semibold text-wrap text-center ">
      Awards & Competitions Won by Aasirwad collage
      </div>
      </div>
    </div>
    <div className="hexagon-1  bg-[#F6F6F6]">
    <div className="flex flex-col justify-center items-center">
      <div><PiStudentFill  style={iconStyle} /></div>
      <div className=" font-semibold text-2xl">500+</div>
      <div className="font-semibold text-wrap text-center">
      Distinctions
      </div>
      </div>
    </div>
  </div>
  <div className="grid ml-[-70px]" style={{ zIndex: 1 }}>
    <div className="hexagon-1  bg-[#F4BE40] ">
    <div className="flex flex-col justify-center items-center">
   
      <div className=" font-semibold text-5xl">7</div>
      <div className="font-semibold text-wrap text-center ">
      Clubs established grown to over <span className='font-bold text-2xl'>1000</span>  members
      </div>
      </div>
    </div>
  </div>
</div>

    </div>
    <div className='absolute inset-0   '>
    <Suspense fallback={<div>Loading...</div>}>
            <img
              src={ image1}
              className=" w-full object-cover h-full z-[0] opacity-[0.2]"
              loading="lazy" 
            />
          </Suspense>
    </div>
    
   </section>
   
  )
}

export default Asirwad_in_number