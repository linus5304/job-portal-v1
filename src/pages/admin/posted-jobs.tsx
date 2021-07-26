import React from "react";
import { AdminLayout } from "../../components/AdminLayout";
import {TableLayout} from '../../components/table/TableLayout'
import {columns, data, options} from '../../utils/data'

interface PostedJobsProps {}

const PostedJobs: React.FC<PostedJobsProps> = ({}) => {
  return (
    <>
          <TableLayout columns={columns} data={data} listTitle="Posted Jobs" listNumber={4} options={options}/>
</>
  );
};

PostedJobs.Layout = AdminLayout;
export default PostedJobs;
