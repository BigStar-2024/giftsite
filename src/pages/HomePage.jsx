import React from "react";
import "./index.css"
import logo from "../assets/logo.svg"
import skynight from "../assets/nightsky.svg"

const HomePage = () => {

  return (
    <div className="bg-black w-screen h-screen z-[-1] flex justify-center">
      <img className="w-screen h-screen absolute" src={skynight} alt="skyNight"></img>
      <div className="absolute flex flex-col w-[1220px] border border-white items-center">
        <img className="absolute top-[30px] left-0 w-[97px] h-[40px]" src={logo} alt="logo"></img>
        <div className="flex font-bold  text-[40px] text-white mt-[80px] leading-10">This is a default webpage generated for</div>
        <div className="flex">
          <a href="https://tienda.mundoeli.com/?utm_campaign=plesk_site_default_page_js/" className="text-[40px] font-bold text-[#39b6e8] hover:text-[#39b6e8] opacity-80 hover:opacity-100 cursor-pointer">tienda.mundoeli.com</a>
          <div className="flex font-bold  text-[40px] text-white mx-2">by Plesk</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
