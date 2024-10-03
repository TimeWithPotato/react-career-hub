import { useEffect } from "react";
import { useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
    // This is not the best way to load all data
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const fetchFeaturedJobs = async () => {
      const res = await fetch("FeaturedJobs.json");
      const data = await res.json();
      setFeaturedJobs(data);
    };

    fetchFeaturedJobs();
  }, []);
  return (
    <>
      <div className="grid grid-cols-2 gap-6 space-x-5">
        {featuredJobs.slice(0, dataLength).map((featuredJob) => (
          <FeaturedJob
            key={featuredJob.id}
            featuredJob={featuredJob}
          ></FeaturedJob>
        ))}
      </div>
      <div className={`flex justify-center my-5 ${dataLength === featuredJobs.length && 'hidden'}`}>
        <button className="px-5 bg-[#9873FF] py-2 text-black rounded-md btn-ghost" onClick={()=>setDataLength(featuredJobs.length)}>
          Show All Jobs
        </button>
      </div>
    </>
  );
};

export default FeaturedJobs;
