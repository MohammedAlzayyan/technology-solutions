import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";

const DevelopBusiness = () => {
  return (
    <div className="flex px-32 gap-4">
      <div className="flex flex-col gap-10  w-1/2">
        <Card className="flex gap-2 justify-between items-center ">
          <div className="">
            <p>E-commerce platform</p>
            <p>E-commerce platform</p>
          </div>
          <img
            src="https://ghaith.om/media/posts/contact-us-figure_G9pObOc.png"
            alt="img1"
            className="bg-[#01486A] w-[200px]"
          />
        </Card>
        <Card className="flex gap-2 justify-between items-center">
          <div className="">
            <p>E-commerce platform</p>
            <p>E-commerce platform</p>
          </div>
          <img
            src="https://ghaith.om/media/posts/contact-us-figure_G9pObOc.png"
            alt="img1"
            className="bg-[#01486A] w-[200px]"
          />
        </Card>
        <Card className="flex gap-2 justify-between items-center">
          <div className="">
            <p>E-commerce platform</p>
            <p>E-commerce platform</p>
          </div>
          <img
            src="https://ghaith.om/media/posts/contact-us-figure_G9pObOc.png"
            alt="img1"
            className="bg-[#01486A] w-[200px]"
          />
        </Card>
      </div>
      <div className="space-y-8 w-1/2">
        <h1 className="text-3xl font-bold">
          Develop your business and go from success to{" "}
          <span className="text-[#FF864C]">greater success</span>
        </h1>
        <div>
          <h4 className="font-semibold text-xl">Fintech solutions</h4>
          <p>
            The financial products we build bridge the gap between the customer
            and your business and simplify the process of accessing services and
            products from anywhere.
            <hr />
            We create online mortgage and investment platforms as well as
            trading and accounting software, no matter how complex. We also
            support you after the product is released.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-xl">Logistics solutions</h4>
          <p>
            The transportation apps we create are all about quick and easy
            interaction, smooth logic, and rich functionality. They include
            customizable panels, statistics and management tools, filtering
            options, location tracking, payment processors and other features.
            <hr />
            We're a technology partner, which means we build web logistics
            solutions from prototypes and MVPs, maintain them past the release
            date, and guide you through the entire process.
          </p>
        </div>
        <Button>Book a meeting</Button>
      </div>
    </div>
  );
};

export default DevelopBusiness;
