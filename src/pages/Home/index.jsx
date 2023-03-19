import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Features from "../../sections/Features";
import LatestProducts from "../../sections/LatestProducts";
import Button from "../../components/Button";
import DevelopBusiness from "../../sections/DevelopBusiness";
import OurExperiences from "../../sections/OurExperiences";
import Blogs from "../../sections/Blogs";
import AppointmentBooking from "../../sections/AppointmentBooking";

const Home = () => {
  return (
    <MainLayout>
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-green to-red ">
        <div className="flex flex-col space-y-7 text-center w-[650px] mt-20">
          <h1 className="text-4xl font-bold text-white">
            Technology solutions to develop your prestigious projects
          </h1>
          <p className="text-lg text-white">
            Upgrading your project to a high level of performance, providing
            prestigious technology solutions according to international
            standards, and pioneering new and innovative products.
          </p>
          <Button className="mx-auto">Book a meeting</Button>
        </div>
      </div>
      <Features />
      <LatestProducts />
      <DevelopBusiness />
      <OurExperiences />
      <Blogs />
      <AppointmentBooking />
    </MainLayout>
  );
};

export default Home;
