import React from "react";
import Header from "./header/Header";
import MyCarousel from "./carousel/Carousel";
import Section2 from "./homesection2/Section2";
import Section3 from "./homesection3/Section3";
import Section4 from "./homesection4/Section4";
import Footer from "./footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <MyCarousel />
      <Section2 />
      <Section3
        image="https://jamaicaclassifiedonline.com/images/2019/02/16/65510/apple-macbook-pro-133-l3t8wgiu_1.jpg"
        width="500"
        title="Macbook Pro"
      />
      <Section4 />
      <Section3
        image="https://th.bing.com/th/id/R.604ca31b7162c986bc1cf858266e450b?rik=QDIqfgr9oCxSOg&riu=http%3a%2f%2fbestbeardtrimmerguide.org%2fwp-content%2fuploads%2f2015%2f02%2fnorelco-4014.jpg&ehk=%2bOJRWIQOQvmPAEfW6HcyBgbg6MjD%2f09%2b2X%2bnsJT79To%3d&risl=&pid=ImgRaw&r=0"
        title="Trimmer"
      />
      <Footer />
    </div>
  );
}

export default Home;
