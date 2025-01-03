import React from "react";
import TopNotificationBar from "./HeaderComponents/TopNotificationBar";
import MainHeader from "./HeaderComponents/MainHeader";
import MySwiper from "./HeaderComponents/Swiper";
import Slider from "./HeaderComponents/Slider";

const Header = () => {
  return (
    <div className="sticky top-0">
      <TopNotificationBar />
      <MainHeader />
      <Slider />
    </div>
  );
};

export default Header;
