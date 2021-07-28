import React from 'react';
import { JobItem } from './JobItem';


interface FeaturedJobsProps{

}


export const FeaturedJobs: React.FC<FeaturedJobsProps> = ({}) => {
        return (
            <div className="featured-jobs-section">
                <div className="section-heading">
              Featured Job
          </div>
                <div className="container">
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                </div>
            </div>
        );
};