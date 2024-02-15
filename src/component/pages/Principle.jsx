import { RiDoubleQuotesL } from "react-icons/ri";
import { Suspense } from 'react';
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
    <section className="mx-auto text-center p-10 ">
      <div className="text-5xl p-10 bg-gradient-to-r from-blue-900 to-red-900 text-transparent bg-clip-text">
        Message from the ChairPerson
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 page-width place-items-center place-content-center ">
        <div className="text-xl text-left md:leading-[2.5] md:tracking-[0.1em] md:p-10  ">
          <RiDoubleQuotesL style={iconStyle}  /> Ashirwad Higher
          Secondary School and College, established with a view" Let's Be A Good
          Citizen, Not Only A Good Student" in 2056 B.S. has been proving to be
          one of the leading Management Colleges in Nepal, notably the First
          Hotel Management College in the history of HSEB in Nepal. The students
          who graduated from the AC have been serving in renowned institutions,
          business corporate houses, and governments all over the world. We are
          here to provide quality education with a good culture to our students
          who have come to join Ashirwad with their colorful dreams. 
        </div>
        <div className="">
          <Suspense fallback={<div>Loading...</div>}>
            <img
              src={principal}
              className="w-100 h-auto md:h-[700px] object-cover rounded-full shadow-lg"
              loading="lazy" 
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default Principle;
