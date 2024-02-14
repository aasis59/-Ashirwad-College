import { Typography } from "@material-tailwind/react";

function Why_best() {
  return (
    <section className=" back_ground_one py-10 px-20">
      <div className="text-center mb-10">
        <Typography variant="h2">WHY WE ARE THE BEST?</Typography>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-5 page-width bg-white rounded-lg shadow-lg shadow-cyan-900/100  mt-10 p-20 ">
        <div>
          <Typography variant="h4" color="blue" textGradient>
          <span className="mr-3">[ ]</span> ACADEMIC EXCELLENCE
          </Typography>
          <Typography className="mt-3" variant="body">
            We have a history of offering profound academic excellence and world class alumni
          </Typography>
        </div>
        <div>
          <Typography variant="h4" color="blue" textGradient>
          <span className="mr-3">[ ]</span> PASSIONATE AND PROFESSIONAL STAFF
          </Typography>
          <Typography className="mt-3" variant="body">
           Our teaching and non teaching comprises of professionals who have passion what they do and love to make a difference
          </Typography>
        </div>
        <div>
          <Typography variant="h4" color="blue" textGradient>
          <span className="mr-3">[ ]</span> SECURITY
          </Typography>
          <Typography className="mt-3" variant="body">
           We partner with top security firms to provides 24/7 security in our establishments. Our facilities are also equiped  with security cameras, providing all round security for all our student          </Typography>
        </div>
        <div>
          <Typography variant="h4" color="blue" textGradient>
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
