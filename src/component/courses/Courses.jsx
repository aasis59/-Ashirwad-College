import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import bbs from "../../assets/images/bbs.jpg";
import bbm from "../../assets/images/bbm.jpg";
import plustwo from "../../assets/images/+2.jpg";

function Courses() {
  return (
    <section className="mb-10 ">
      <div className="text-center mt-5 p-8  ">
      <Typography variant="h2" >
      Popular Courses
    </Typography>
      </div>
    <div className="grid grid-cols-1 grid-rows-1 gap:2  md:grid-cols-3 md:grid-rows-1 md:gap-5 page-width " style={{ width:'50%' }}>
    <div>
        <Card className=" mt-10   " >
          <CardHeader color="blue-gray" className="relative ">
            <img src={plustwo} alt="card-image" className=" w-full h-auto object-cover" preload="true" />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              <a className="" href="">
                +2 in Management
              </a>
            </Typography>
            <Typography >
              +2 management is a two years course. This provides the basic
              principles and knowledge about the management stream. This course
              of higher secondary level aims to set a base for students and
              motivates them to build their career in the management field. To develop students into dynamic managers having ability to handle responsibility in every sector.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="">
        <Card className=" mt-10 md:mt-15 ">
          <CardHeader color="blue-gray" className="relative ">
            <img src={bbs} alt="card-image" className="w-full h-auto object-cover" preload="true" />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              <a className="" href="">
                Bachelors of Business Studies (BBS)
              </a>
            </Typography>
            <Typography>
              Bachelor of Business studies (BBS) is the four year degree program
              conducted by Tribhuvan University (TU), faculty of Management
              (FOM). It is an annual exam based program. The main objective of
              BBS is to develop students into dynamic managers having ability to
              handle responsibility in every sector.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="">
        <Card className=" mt-10 md:mt-15 ">
          <CardHeader color="blue-gray" className="relative">
            <img src={bbm} alt="card-image" className=" w-full h-auto object-cover" preload="true" />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="blue-gray" className="mb-2">
             <a href="" className="">Bachelor of Business Management (BBM)</a>
            </Typography>
            <Typography  >
              Bachelor of Business Management (BBM) is the four year degree
              program comprising 8 semesters divided over 120 credit hours,
              conducted by Tribhuvan University (TU). This course is designed in
              such a way that this can be cornerstone for aspiring business
              leaders and qualified managers of future.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="">Read More</Button>
          </CardFooter>
        </Card>
      </div>
      
      
    </div>
    </section>
  );
}

export default Courses;
