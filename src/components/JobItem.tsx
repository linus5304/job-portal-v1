import React from "react";
import { Card, Col, Row, Image, Button, Space } from "antd";
import Link from "next/link";
import { BsBookmark } from "react-icons/bs";
import { MdWork, MdLocationOn } from "react-icons/md";

interface JobItemProps {}

export const JobItem: React.FC<JobItemProps> = ({}) => {
  return (
    <div className="card-item">
      <Card hoverable>
        <Row gutter={[8, 16]}>
          <Col span={4}>
            <Image
              src="/images/logo.png"
              preview={false}
              alt="hello"
              style={{width: 100, height: 100}}
            />
          </Col>
          <Col span={16}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            > 
              <div className="card-link">
              <Link href="/">Credit Analyst [Sample Job] </Link>
              </div>
              
              <BsBookmark style={{ fontSize: 25 }} />
            </div>
            <Space style={{ display: "flex" }} size={16}>
              <div style={{ alignItems: "center", display:'flex', color: '#a0a0a0' }}>
                <MdWork style={{ fontSize: 20 }} />
                <div>Sample Employer</div>
              </div>
              <div style={{ alignItems: "center", display:'flex',  color: '#a0a0a0' }}>
                <MdLocationOn style={{ fontSize: 20  }} />
                <div> Cambridge, MA, United States</div>
              </div>
            </Space>
            <div>
              This is not a real job. Please don't apply to it. Credit Analyst
              should analyze financial information and assess the risks of
              credit offer to individuals and businesses.
            </div>
          </Col>
          <Col span={4}>
            <div style={{ marginBottom: 5 }}>May 15, 2017</div>
            <div>
              <Button type="default" >
                Full time
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
