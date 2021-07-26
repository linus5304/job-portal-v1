import React from "react";
import { AdminLayout } from "../../components/AdminLayout";
import {TableLayout} from '../../components/table/TableLayout'
import {columns, data, options} from '../../utils/data'

interface ApplicantsProps {}

const Applicants: React.FC<ApplicantsProps> = ({}) => {
  return (
    <>
          <TableLayout columns={columns} data={data} listTitle="Applicant's" listNumber={12} options={options}/>
</>
  );
};

Applicants.Layout = AdminLayout;
export default Applicants;
