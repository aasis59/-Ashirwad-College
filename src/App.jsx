import Why_best from "./component/choose/Why_best"
import Why_we from "./component/choose/Why_we"
import Courses from "./component/courses/Courses"
import Gridimage from "./component/home/wellcome_image"
import {NavbarSimple } from "./component/navbar/Navbar"


function App() {
  

  return (
    <>
        
   <NavbarSimple/>
   <Gridimage/>
   <Courses/>
   <Why_best/>
   <Why_we/>

   
    </>
  )
}

export default App
