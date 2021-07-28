
import React from "react";

import { Home } from "../components/Home";
import { HomeLayout } from "../components/HomeLayout";

interface indexProps {}
const index: React.FC<indexProps> = ({}) => {
  return (
    <Home/>
  );
};

index.Layout = "L2"
export default index;
