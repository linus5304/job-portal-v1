import React from "react";
import { AdminLayout } from "../../components/AdminLayout";
import { Dashboard } from "../../components/Dashboard";

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  return (
      <Dashboard />
    
  );
};

index.Layout = AdminLayout;

export default index;
