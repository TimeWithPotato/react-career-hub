import { CiLocationOn,CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const FeaturedJob = ({ featuredJob }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = featuredJob;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
              <p>{company_name}</p>
              <div>
                  <button className="text-md text-[#9873FF] px-5 py-2 border border-[#9873FF] mr-4">{remote_or_onsite}</button>
                  <button className="text-md text-[#9873FF] px-5 py-2 border border-[#9873FF] mr-4">{job_type}</button>
              </div>
              <div className="flex space-x-5">
                  <div className="flex justify-center items-center space-x-1">
                      <CiLocationOn />
                      <p>{location}</p>
                  </div>
                  <div className="flex justify-center items-center space-x-1">
                      <CiDollar />
                      <p>Salary:{salary}</p>
                  </div>
              </div>
        <div className="card-actions">
          <Link to={`/FeaturedJobs/${id}`}>
          <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
