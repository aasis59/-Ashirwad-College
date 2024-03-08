import LazyBackgroundImage from "./LazyBackgroundImage";
import { Suspense } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Footer() {
  const iconStyle = {
    color: 'green', 
    width: '60px',
    height: '30px', 
    margin: '2px', 
    
  };
  const phone = {
    color: 'darkblue', 
    width: '60px',
    height: '30px', 
    margin: '2px', 
    
  };
  const instagram = {
    color: 'red', 
    width: '60px',
    height: '30px', 
    margin: '2px', 
    
  };
  return (
    <>
      <section className="py-10 relative ">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyBackgroundImage />
        </Suspense>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 page-width">
          <div className="flex flex-col justify-center   ">
            <div className="text-2xl font-semibold">About Us</div>
            <div className="flex items-center mt-5 mb-5">
              <img
                src="https://ashirwadcollage.netlify.app/assets/logo-BdV4TzW1.png"
                className="w-24 h-auto"
              />
              <div className="text-xl font-semibold">
                Ashirwad
                <br /> Collage
              </div>
            </div>
            <div className="font-xl font-semibold ">
              Knowledge is Power, Work is Worship
            </div>
          </div>
          <div className="flex flex-col justify-center ">
            <div className="text-2xl font-semibold">Useful Links</div>
            <ul className="mt-4 cursor-pointer text-lg font-semibold ">
              <li className="hover:text-blue-500 hover:underline flex items-center mb-2"> <MdKeyboardDoubleArrowRight />Home</li>
              <li className="hover:text-blue-500 hover:underline flex items-center mb-2"><MdKeyboardDoubleArrowRight />About</li>
              <li className="hover:text-blue-500 hover:underline flex items-center mb-2"><MdKeyboardDoubleArrowRight />Blogs</li>
              <li className="hover:text-blue-500 hover:underline flex items-center mb-2">
              <MdKeyboardDoubleArrowRight /> Academic Programs
              </li>
              <li className="hover:text-blue-500 hover:underline flex items-center">
              <MdKeyboardDoubleArrowRight />Contact Us
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-semibold mb-3">Contact Info</div>
            <div className="flex items-center mb-3">
            <FaMapLocationDot  style={iconStyle} />
            <div className="cursor-pointer">Kapoordhara Chowk, Samakhusi, Kathmandu</div>
            </div>
            <div className="flex items-center mb-3">
            <SiGmail  style={phone} />
            <div className="cursor-pointer">ashirwad.college1@example.com</div>
            </div>
            <div className="flex items-center mb-3">
            <FaPhoneAlt   style={phone} />
            <div className="cursor-pointer">01-4352589</div>
            </div>
            <div className="text-2xl font-semibold mt-3 mb-3">Follow Us</div>
            <div className="flex"><div>
            <FaFacebookSquare   style={phone} />
            </div>
            <div>
            <FaInstagramSquare   style={ instagram} />
            </div></div>

          </div>
        </div>
        <div>
          <div className="mt-10 text-medium font-semibold border-t border-black text-center pt-10">
            © Copyright 2024 Aashirwad College. All Rights Reserved Powered By:
            Aashirwad College
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
