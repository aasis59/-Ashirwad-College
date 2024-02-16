import { RiDoubleQuotesL } from "react-icons/ri";
import { Suspense } from 'react';
import { RiDoubleQuotesR } from "react-icons/ri";
import principal from "../../assets/images/principal.jpg";

function Principle() {
  const iconStyle = {
    color: 'white', 
    backgroundColor: 'darkblue', 
    width: '40px',
    height: '30px',
    borderRadius: '50%', 
    margin: '10px', 
  };

  return (
    <section className="mx-auto text-center p-2 md:p-10 ">
      <div className= " text-xl sm:text-3xl md:text-5xl p-10 bg-gradient-to-r from-blue-900 to-red-900 text-transparent bg-clip-text">
        Message from the ChairPerson
      </div>
      
      <div className="flex flex-col-reverse md:flex-row page-width justify-center items-center ">
        <div className="text-xl text-left leading-[1] md:leading-[1.5] lg:leading-[2.5]  tracking-[0.05em] md:tracking-[0.07em] lg:tracking-[0.1em] md:p-10 md:w-[70%]  ">
          <RiDoubleQuotesL style={iconStyle}  /> Ashirwad Higher
          Secondary School and College, established with a view" Let's Be A Good
          Citizen, Not Only A Good Student" in 2056 B.S. has been proving to be
          one of the leading Management Colleges in Nepal, notably the First
          Hotel Management College in the history of HSEB in Nepal. The students
          who graduated from the AC have been serving in renowned institutions,
          business corporate houses, and governments all over the world. We are
          here to provide quality education with a good culture to our students
          who have come to join Ashirwad with their colorful dreams.
          <div>
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more....</a>
          </div>
          
          <RiDoubleQuotesR style={iconStyle}   />
        </div>
        <div className=" md:w-[30%]">
          <Suspense fallback={<div>Loading...</div>}>
            <img
              src={principal}
              className=" w-full h-[400px]  lg:h-[700px] md:object-cover object-contain rounded-full shadow-lg"
              loading="lazy" 
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default Principle;
