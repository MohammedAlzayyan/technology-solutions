import React from "react";

const Blogs = () => {
  return (
    <div className="px-32 space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-center">
          Latest <span className="text-[#FF864C]">articles</span>
        </h2>
        <p className="text-[#A87F9A] text-lg text-center">
          We share our best practices, technical solutions, management tips and
          every useful insight we have while working on our projects.
        </p>
      </div>

      <div className="flex gap-10">
        <div className="[&>*:nth-child(2)]:hover:bg-red-400 cursor-pointer">
          <img
            src="https://ghaith.om/media/posts/contact-us-figure_G9pObOc.png"
            alt="img1"
            className="bg-[#01486A] rounded-2xl"
          />
          <p className="font-semibold text-center mt-4 ">
            CRM Customer Relationship Management
          </p>
        </div>
        <div className="[&>*:nth-child(2)]:hover:bg-red-400 cursor-pointer">
          <img
            src="https://ghaith.om/media/posts/contact-us-figure_G9pObOc.png"
            alt="img1"
            className=" bg-[#01486A] rounded-2xl"
          />
          <p className="font-semibold text-center mt-4">
            CRM Customer Relationship Management
          </p>
        </div>
        <div className="[&>*:nth-child(2)]:hover:bg-red-400 cursor-pointer">
          <img
            src="https://ghaith.om/media/posts/contact-us-figure_G9pObOc.png"
            alt="img1"
            className="bg-[#01486A] rounded-2xl"
          />
          <p className="font-semibold text-center mt-4">
            CRM Customer Relationship Management
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
