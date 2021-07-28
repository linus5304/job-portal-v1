import React from "react";
import { JobItem } from "./JobItem";
import { Button } from "antd";

interface LatestJobsProps {}

export const LatestJobs: React.FC<LatestJobsProps> = ({}) => {
  return (
    <div className="latest-jobs-section">
      <div className="section-heading">Latest Job</div>
      <div className="container">
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <Button
          type="primary"
          size="large"
          style={{ width: "20%", marginLeft: "40%" }}
        >
          View all jobs
        </Button>
      </div>
    </div>
  );
};
