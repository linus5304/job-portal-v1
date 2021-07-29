import React from 'react';
import { PostJob } from './../components/forms/PostJob';
import {Divider} from 'antd'

interface NewJobProps{

}


 const NewJob: React.FC<NewJobProps> = ({}) => {
        return (
            <>
            <div className="container">
           
            <PostJob heading="Post a Job"/>
            </div>
            </>
        );
};

NewJob.Layout = 'L2'

export default NewJob