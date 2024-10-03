import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import SectionTitle from "../SectionTitle/SectionTitle";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            {/* Category List */}
            <SectionTitle title='Job Category List' par='Explore thousands of job opportunities with all the information you need. Its your future'></SectionTitle>

            {/* featured jobs */}
            <SectionTitle title='Featured Jobs' par='Explore thousands of job opportunities with all the information you need. Its your future'></SectionTitle>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;