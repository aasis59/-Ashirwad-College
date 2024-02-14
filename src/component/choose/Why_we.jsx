import { Typography } from "@material-tailwind/react";

function Why_we() {
  return (
    <section className="my-8 p-3 md:p-10    ">
      <div className="  flex flex-col md:flex-row gap-2 justify-center items-center px-3 ">
      <div className="md:flex-[1.5] border rounded-md overflow-hidden">
  <div className="border-gradient border-l-4 border-r-4 border-t-0 border-b-0 border-opacity-100 border-blue-500 border-solid p-4">
    <Typography variant="h2" color="blue-gray" textGradient>
      Why Choose Ashirwad?
    </Typography>
    <ul className="max-w-md space-y-1 text-gray-900 list-disc list-inside dark:text-gray-400 mt-5">
      <li>First ever Hotel Management College in +2 level in Nepal</li>
      <li>Highly Qualified and experienced teacher</li>
      <li>Well established lab, laboratories and libraries</li>
      <li>Arrays of scholarship schemes for deserving and needy one</li>
      <li>Student-oriented interactive tutorial classes</li>
      <li>Updated modern day teaching learning methodologies</li>
    </ul>
  </div>
</div>


        <div className="md:flex-[2]">
          <iframe
            className="w-full aspect-video rounded-2xl  "
            src="https://www.youtube.com/embed/9Rl6IRac79k"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Why_we;
