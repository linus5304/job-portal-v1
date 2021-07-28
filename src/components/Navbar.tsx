import { Button, Menu, Badge, Dropdown, Avatar, Image } from "antd";
import Link from "next/link";
import React from "react";
import { BsPlus } from "react-icons/bs";
import { FaBell, FaChevronDown, FaKeycdn } from "react-icons/fa";

interface NavbarProps {
  user: string;
}

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

export const Navbar: React.FC<NavbarProps> = ({ user }) => {
  let navbar;
  if (user === "user") {
    navbar = (
      <>
        <div className="header">
        <Link href="/">
          <div style={{alignItems: 'center', display: 'flex', cursor: 'pointer'}}>
            
            <FaKeycdn style={{fontSize: 35, fontWeight:'bold'}}/>
            <div style={{fontSize: 20, fontWeight:'bold'}}>goJobs</div>
            
          </div>
          </Link>
          <Menu
            mode="horizontal"
            style={{width:500}}
          >
            <Menu.Item key="1" className="menu-item">
              <Link href="/jobs">
                Jobs
              </Link>
            </Menu.Item>
            <Menu.Item key="2">Companies</Menu.Item>
            <Menu.Item key="3">
              <Button type="link" size="large">
                Login
              </Button>
            </Menu.Item>
            <Menu.Item key="4" style={{border: 'none !important'}}>
              <Button type="link" size="large" style={{fontWeight:'bold'}}>
                Sign up
              </Button>
            </Menu.Item>
          </Menu>
        </div>
      </>
    );
  } else if (user === "admin") {
    navbar = (
      <div className="header">
        <div>
          <Button
            type="primary"
            size="large"
            icon={<BsPlus style={{ fontSize: 20 }} />}
            style={{ margin: "0 auto !important" }}
          >
            Post new Job
          </Button>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{
            lineHeight: "64px",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          <div key="1">
            <Button type="primary" size="large">
              Login
            </Button>
          </div>
          <div key="2" style={{ marginTop: "5px" }}>
            <Badge count={3}>
              <FaBell style={{ fontSize: 25 }} />
            </Badge>
          </div>
          <div key="3">
            <Dropdown overlay={menu} placement="bottomRight" arrow={true}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Avatar
                  size={50}
                  src={
                    <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                />{" "}
                <FaChevronDown />
              </a>
            </Dropdown>
          </div>
        </Menu>
      </div>
    );
  }
  return <>{navbar}</>;
};
