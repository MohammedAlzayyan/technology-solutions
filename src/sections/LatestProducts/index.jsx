import React from "react";

const LatestProducts = () => {
  return (
    <div className="mx-auto px-32 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-center">
          Latest <span className="text-red">Products</span>
        </h2>
        <p className="text-lg text-center">
          We share our best practices, technical solutions, management tips and
          every useful insight we have while working on our projects.
        </p>
      </div>
      <div className="flex gap-20">
        <div className="relative group">
          <img
            src="https://ghaith.om/media/posts/contact-us-figure_G9pObOc.png"
            alt="img1"
            className="bg-secondary rounded-xl"
          />
          <div className="relative group font-semibold text-center py-2 ">
            <p className="group-hover:text-white group-hover:delay-300 ">
              CRM Customer Relationship Management
            </p>
            <span className="absolute left-0 -bottom-1 rounded-lg -z-10 w-full h-1 bg-green group-hover:h-11 group-hover:transition-all group-hover:duration-700 "></span>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://ghaith.om/media/posts/contact-us-figure_G9pObOc.png"
            alt="img1"
            className="bg-secondary rounded-xl"
          />
          <div className="font-semibold text-center py-2 ">
            <p className="group-hover:text-white group-hover:delay-300 ">
              CRM Customer Relationship Management
            </p>
            <span className="absolute left-0 -bottom-1 rounded-lg -z-10 w-full h-1 bg-green group-hover:h-11 group-hover:transition-all group-hover:duration-700 "></span>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://ghaith.om/media/posts/contact-us-figure_G9pObOc.png"
            alt="img1"
            className="bg-secondary rounded-xl"
          />
          <div className="font-semibold text-center py-2 ">
            <p className="group-hover:text-white group-hover:delay-300 ">
              CRM Customer Relationship Management
            </p>
            <span className="absolute left-0 -bottom-1 rounded-lg -z-10 w-full h-1 bg-green group-hover:h-11 group-hover:transition-all group-hover:duration-700 "></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
