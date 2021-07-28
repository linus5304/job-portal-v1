import React from "react";
import { Carousel } from "antd";
import { EmployerCard } from "./EmployerCard";

interface EmployersProps {}

export const Employers: React.FC<EmployersProps> = ({}) => {
  return (
    <div className="hero-employer-section">
      <div className="container">
        <div className="section-heading">Featured Companies</div>
        <Carousel autoplay>
          <EmployerCard />
          <EmployerCard />
          <EmployerCard />
          <EmployerCard />
        </Carousel>
      </div>
    </div>
  );
};

