import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import "./Sidebar.css";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Layout className="Sidebar">
      <Sider width={400}>
        <Menu mode="inline">
          <Menu.ItemGroup key="g1" title="Каталог">
            <Menu.Item key="/admin/banner_images">
              <Link to="/admin/home_banner">
                <span>Баннер</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/admin/brand">
              <Link to="/admin/brand">
                <span>Брэнд</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="/admin/category">
              <Link to="/admin/category">
                <span>Ангилал</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/admin/users">
              <Link to="/admin/user">
                <span>Хэрэглэгч</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/admin/product">
              <Link to="/admin/product">
                <span>Бүтээгдхүүн</span>
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g1" title="Мэдээ">
            <Menu.Item key="/admin/news_category">
              <Link to="/admin/news_category">
                <span>Ангилал</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/admin/news">
              <Link to="/admin/news">
                <span>Мэдээ</span>
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="contact_1" title="Холбоо барих">
            <Menu.Item key="/admin/online_credit">
              <Link to="/admin/pages">
                <span>Холбоо барих</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/admin/about">
              <Link to="/admin/about">
                <span>Бидний тухай</span>
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Sidebar;
