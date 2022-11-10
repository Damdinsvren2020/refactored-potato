import React from "react";
import { Layout, Menu, Row, Dropdown, Avatar } from "antd";
import { BiLogOut, BiUser } from "react-icons/bi";
import "./Navbar.css";
// const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout>
      <div className="Ant_Header">
        <Row
          align="middle"
          type="flex"
          justify="space-between"
          style={{ height: "100%", width: "98%" }}
        >
          <Dropdown
            style={{ marginRight: "2rem" }}
            overlay={
              <Menu style={{ minWidth: 120 }}>
                <Menu.Divider />
                <Menu.Item>
                  <a style={{ fontSize: 14 }}>
                    <BiLogOut /> Гарах
                  </a>
                </Menu.Item>
              </Menu>
            }
          >
            <a className="ant-dropdown-link">
              <Avatar icon={<BiUser />}></Avatar>
              <span style={{ marginLeft: "0.25rem" }}></span>
            </a>
          </Dropdown>
        </Row>
      </div>
    </Layout>
  );
};

export default Navbar;
