import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../JobDetails/JobDetails";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { CiLocationOn, CiDollar } from "react-icons/ci";
import Vector1 from "../../pic/Vector.png";
import Vector2 from "../../pic/Vector (1).png";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState(appliedJobs);
const [appliedJobType, setAppliedJobType] = useState('Empty');
    const handleFilter = filter => {
        if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'onsite');
            setDisplayJobs(onsiteJobs);
            setAppliedJobType('Onsite');
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
            setAppliedJobType('Remote');
        }
        else {
            setDisplayJobs(appliedJobs);
            setAppliedJobType('All')
        }
    }
  useEffect(() => {
    const storedJobs = getStoredJobApplication();
    const filterJobs = jobs.filter((job) => storedJobs.includes(job.id));
      setAppliedJobs(filterJobs);
      setDisplayJobs(filterJobs);
      console.log(filterJobs)
      if (filterJobs.length>=1) {
        setAppliedJobType('All')
      }
    // console.log(jobs, storedJobs, filterJobs);
  }, [jobs]);
  return (
    <div className="mb-5">
      <section className="relative h-[15rem] w-full flex justify-center items-center">
        <div className="absolute top-32 md:-left-64">
          <img
            src={Vector1}
            alt="Pic 2"
            className="w-44 max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
        <div className="absolute bottom-0 -top-16 md:-right-48">
          <img
            src={Vector2}
            alt="Pic 1"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
              <h2 className="z-10 text-2xl">Applied Jobs : {appliedJobType}</h2>
      </section>
      <div className="flex justify-end">
        <details className="dropdown">
          <summary className="btn m-1">
            Filter By
            <MdOutlineArrowDropDown className="size-10" />
          </summary>

          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={()=>handleFilter('all')}>
              <a>All</a>
            </li>
            <li onClick={()=>handleFilter('remote')}>
              <a>Remote</a>
            </li>
            <li onClick={()=>handleFilter('onsite')}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      {displayJobs.map((job) => (
        <>
          <section className="grid md:grid-cols-3 gap-5 space-y-5 mt-5 max-w-6xl ">
            <div>
              <img src={job.logo} alt="" className="w-80 m-5 rounded-md" />
            </div>
            <article className="flex flex-col space-y-5 ml-10">
              <h2>{job.job_title}</h2>
              <p>{job.company_name}</p>
              <div>
                <button className="text-md text-[#9873FF] px-5 py-2 border border-[#9873FF] mr-4">
                  {job.remote_or_onsite}
                </button>
                <button className="text-md text-[#9873FF] px-5 py-2 border border-[#9873FF] mr-4">
                  {job.job_type}
                </button>
              </div>
              <div className="flex space-x-5">
                <div className="flex justify-center items-center space-x-1">
                  <CiLocationOn />
                  <p>{job.location}</p>
                </div>
                <div className="flex justify-center items-center space-x-1">
                  <CiDollar />
                  <p>Salary:{job.salary}</p>
                </div>
              </div>
            </article>
            <div className="flex md:justify-end justify-center items-center md:mb-0 mb-5 mr-3">
              <Link to={`/FeaturedJobs/${job.id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </section>
        </>
      ))}
    </div>
  );
};

export default AppliedJobs;
