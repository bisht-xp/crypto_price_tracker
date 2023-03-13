import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center sm:pt-16 sm:py-8 py-6 flex-col">
      <div className="w-full flex justify-between items-center md:flex-row flex-col pb-5">
        <p className="font-poppins font-normal text-center text-[20px] leading-[27px] text-white">
          CoinWatch
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-[21px] h-[21px] object-contain cursor-pointer mr-6"
          />
          <img
            src="/assets/facebook.svg"
            alt="instagram"
            className="w-[21px] h-[21px] object-contain cursor-pointer mr-6"
          />
          <img
            src="/assets/linkedin.svg"
            alt="instagram"
            className="w-[21px] h-[21px] object-contain cursor-pointer mr-6"
          />
          <img
            src="/assets/twitter.svg"
            alt="instagram"
            className="w-[21px] h-[21px] object-contain cursor-pointer mr-0"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
       <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-dimWhite">
       Copyright Ⓒ {new Date().getFullYear()} CoinWatch. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
