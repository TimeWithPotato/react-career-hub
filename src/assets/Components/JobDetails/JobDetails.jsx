import { useLoaderData, useParams } from "react-router-dom";
import { FaDollarSign, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineSubtitles, MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Vector1 from "../../pic/Vector.png";
import Vector2 from "../../pic/Vector (1).png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
  const FeaturedJobs = useLoaderData();
  const { id } = useParams();
  const FeaturedJob = FeaturedJobs.find((job) => job.id === parseInt(id));

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = FeaturedJob;

  const jobApplied = () => {
    const storedJobApplication = getStoredJobApplication();
    const exist = storedJobApplication.find(jobID => jobID === parseInt(id));

    if (!exist) {
      savedJobApplication(parseInt(id));

      const applyJob = new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });

      toast.promise(applyJob, {
        pending: "Applying...",
        success: "Job applied successfully!",
        error: "Failed to apply!",
      });
    } else {
      toast.error("You have already applied for this job!");
    }
  };

  return (
    <div>
      <section className="relative h-[15rem] w-full flex justify-center items-center">
        <div className="absolute top-32 md:-left-64">
          <img
            src={Vector1}
            alt="Pic 2"
            className="w-44 max-w-sm md:max-w-sm lg:max-w-md"
          />
        </div>
        <div className="absolute bottom-0 -top-16 md:-right-48">
          <img
            src={Vector2}
            alt="Pic 1"
            className="w-full max-w-sm md:max-w-sm lg:max-w-md"
          />
        </div>
        <h2 className="z-10 text-2xl">Job Details</h2>
      </section>

      <section className="grid md:grid-cols-2 textarea-md text-white gap-10 md:space-x-60">
        <div>
          <p>
            <span className="font-bold">Job description: </span>
            {job_description}
          </p>
          <p>
            <span className="font-bold">Job Responsibility:</span>{" "}
            {job_responsibility}
          </p>
          <h2 className="font-bold">Education Requirements:</h2>
          <p>{educational_requirements}</p>
          <h2 className="font-bold">Experiences:</h2>
          <p>{experiences}</p>
        </div>
        <aside className="flex flex-col justify-center h-full w-80 relative">
          <article className="relative bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-4 rounded-lg text-black">
            <div className="absolute inset-0 bg-white opacity-70 rounded-lg"></div>
            <div className="relative z-10">
              <h2 className="font-bold">Job Details</h2>
              <hr className="border-slate-700" />
              <div className="flex items-center space-x-1">
                <FaDollarSign />
                <p>
                  <span className="font-bold">Salary:</span> {salary}
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <MdOutlineSubtitles />
                <p>
                  <span className="font-bold">Job Title: </span>
                  {job_title}
                </p>
              </div>
              <h2 className="font-bold">Contact Information</h2>
              <hr className="border-slate-700" />
              <div className="flex items-center space-x-1">
                <FaPhoneAlt />
                <p>
                  <span className="font-bold">Phone: </span>
                  {contact_information.phone}
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <MdOutlineMail />
                <p>
                  <span className="font-bold">Email: </span>
                  {contact_information.email}
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <CiLocationOn />
                <p>
                  <span className="font-bold">Address: </span>
                  {contact_information.address}
                </p>
              </div>
            </div>
          </article>

          <button
            onClick={jobApplied}
            className="mt-4 px-5 py-3 bg-gradient-to-br from-[#7E90FE] to-[#9873FF] rounded-lg"
          >
            Apply Now
          </button>
        </aside>
      </section>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

const getStoredJobApplication = () => {
  const storedJobApplication = window.localStorage.getItem('job-application');
  return (storedJobApplication) ? JSON.parse(storedJobApplication) : [];
}

const savedJobApplication = (id) => {
  const storedJobApplication = getStoredJobApplication();
  const exist = storedJobApplication.find(jobID => jobID === id);

  if (!exist) {
    storedJobApplication.push(id);
    window.localStorage.setItem('job-application', JSON.stringify(storedJobApplication));
  }
}

export { JobDetails, savedJobApplication, getStoredJobApplication };
