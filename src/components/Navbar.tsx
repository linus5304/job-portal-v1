import { Button, Menu, Badge, Dropdown, Avatar, Image } from "antd";
import React from "react";
import { BsPlus } from "react-icons/bs";
import { FaBell, FaChevronDown } from "react-icons/fa";

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
          <div>
            <Button
              type="primary"
              size="large"
              icon={<BsPlus style={{ fontSize: 20 }} />}
              style={{ margin: "0 auto !important" }}
            >
              logo
            </Button>
          </div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px", textAlign: "center" }}
          >
            <div className="menu-item">
            <div key="1">
              <Button type="link" size="large">
                Login
              </Button>
            </div>
            <div key="2">
              <Button type="primary" size="large">
                Sign up
              </Button>
            </div>
                </div>  
            
          </Menu>
        </div>
      </>
    );
  } else if (user === "admin") {
    navbar = (<div className="header">
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
        style={{ lineHeight: "64px", textAlign: "center", justifyContent:'space-between' }}
      >
          <div key="1" >
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
    </div>);
  }
  return <>{navbar}</>;
};
