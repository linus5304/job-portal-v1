import React from "react";
import {Employers} from "./Employers";
import { FeaturedJobs } from "./FeaturedJobs";
import { Hero } from "./Hero";
import { HeroPost } from "./HeroPost";
import { JobsBy } from "./JobsBy";
import { LatestJobs } from "./LatestJobs";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <Hero />
      <Employers />
      <HeroPost />
      <FeaturedJobs />
      <LatestJobs />
      <JobsBy />
    </>
  );
};
