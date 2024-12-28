import React from 'react'
import Hero from '../component/Hero';
import HomeCard from "../component/HomeCard";
import JobListings from "../component/JobListings";
import ViewAllJobs from "../component/ViewAllJobs";

const HomePage = () => {
  return ( 
  <> 
    <Hero/>
    <HomeCard/>
    <JobListings isHome = {true}/>
    <ViewAllJobs/>
  </>
  );
}

export default HomePage