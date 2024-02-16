import { Typography } from "@material-tailwind/react";

function Why_best() {
  return (
    <section className=" back_ground_one p-5 pb-10 lg:p-20  ">
      <div className="text-center py-5  md:py-10 ">
        <Typography variant="h2" > Why Choose Ashirwad?</Typography>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-5 p-5 md:p-10 lg:p-20  bg-white rounded-lg shadow-lg  page-width ">
        <div className="border   border-gray-200 shadow-md rounded-lg p-1 md:p-5 ">
          <Typography  color="blue" textGradient className="text-lg sm:text-xl md:text-2xl font-bold">
          <span className="mr-3">[ ]</span> ACADEMIC EXCELLENCE
          </Typography>
          <Typography className="mt-3" variant="body">
            We have a history of offering profound academic excellence and world class alumni
          </Typography>
        </div>
        <div className="border  border-gray-200 shadow-md rounded-lg p-1 md:p-5">
          <Typography className="text-lg sm:text-xl md:text-2xl font-bold" color="blue" textGradient>
          <span className="mr-3">[ ]</span> PASSIONATE AND PROFESSIONAL STAFF
          </Typography>
          <Typography className="mt-3" variant="body">
           Our teaching and non teaching comprises of professionals who have passion what they do and love to make a difference
          </Typography>
        </div>
        <div className="border   border-gray-200 shadow-md rounded-lg p-1 md:p-5">
          <Typography className="text-lg sm:text-xl md:text-2xl font-bold" color="blue" textGradient>
          <span className="mr-3">[ ]</span> SECURITY
          </Typography>
          <Typography className="mt-3" variant="body">
           We partner with top security firms to provides 24/7 security in our establishments. Our facilities are also equiped  with security cameras, providing all round security for all our student          </Typography>
        </div>
        <div className="border   border-gray-200 shadow-md rounded-lg p-1 md:p-5">
          <Typography className="text-lg sm:text-xl md:text-2xl font-bold" color="blue" textGradient>
          <span className="mr-3">[ ]</span> DIVERSITY
          </Typography>
          <Typography className="mt-3" variant="body">
          We are well known for diverse culture and we practice. We have students of different races and we treat  all the student equally
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default Why_best;