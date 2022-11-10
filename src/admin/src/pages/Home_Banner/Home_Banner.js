import React from "react";
import { Card } from "antd";
import SideBar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
import Banner_Tables from "../../components/tables/banner/banner";
import "./Home_Banner.css";

const HomeBanner = () => {
  return (
    <div className="Home_Banner_Containers">
      <div className="Home_Container_Sidebar">
        <SideBar />
      </div>
      <div className="Home_Container_Navbar">
        <Card style={{ marginLeft: "20px" }}>
          <Banner_Tables />
        </Card>
      </div>
    </div>
  );
};

export default HomeBanner;
