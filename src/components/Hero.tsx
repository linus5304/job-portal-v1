import React from "react";
import { Card } from "antd";
import { SearchBox } from './SearchBox';

interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>SEARCH 9 LIVE JOBS</h1>
        <p>Finding your new job just got easier</p>
      </div>
      <SearchBox/>
    </div>
  );
};
