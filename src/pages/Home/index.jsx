import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Features from "../../sections/Features";
import LatestProducts from "../../sections/LatestProducts";
import Button from "../../components/Button";
import DevelopBusiness from "../../sections/DevelopBusiness";

const Home = () => {
  return (
    <MainLayout>
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#557EB6] to-[#139EDC] ">
        <div className="flex flex-col space-y-7 text-center w-[650px] mt-20">
          <h1 className="text-4xl font-bold text-white">
            Technology solutions to develop your prestigious projects
          </h1>
          <p className="text-lg text-white">
            Upgrading your project to a high level of performance, providing
            prestigious technology solutions according to international
            standards, and pioneering new and innovative products.
          </p>
          <Button>Book a meeting</Button>
        </div>
      </div>
      <Features />
      <LatestProducts />
      <DevelopBusiness />
    </MainLayout>
  );
};

export default Home;
