import React from "react";

const LatestProducts = () => {
  return (
    <div className="mx-auto px-32 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-center">
          Latest <span className="text-[#FF864C]">Products</span>
        </h2>
        <p className="text-[#A87F9A] text-lg text-center">
          We share our best practices, technical solutions, management tips and
          every useful insight we have while working on our projects.
        </p>
      </div>
      <div className="flex gap-20">
        <div className="">
          <img
            src="https://ghaith.om/media/posts/contact-us-figure_G9pObOc.png"
            alt="img1"
            className="bg-[#01486A]"
          />
          <p className="font-semibold text-center mt-4 cursor-pointer hover:bg-red-400">
            CRM Customer Relationship Management
          </p>
        </div>
        <div className="">
          <img
            src="https://ghaith.om/media/posts/contact-us-figure_G9pObOc.png"
            alt="img1"
            className=" bg-[#01486A]"
          />
          <p className="font-semibold text-center mt-4 cursor-pointer">
            CRM Customer Relationship Management
          </p>
        </div>
        <div className="">
          <img
            src="https://ghaith.om/media/posts/contact-us-figure_G9pObOc.png"
            alt="img1"
            className=" bg-[#01486A]"
          />
          <p className="font-semibold text-center mt-4 cursor-pointer">
            CRM Customer Relationship Management
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
