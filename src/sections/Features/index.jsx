import React from "react";
import Card from "../../components/Card";
import { FaAccessibleIcon } from "react-icons/fa";

const Features = () => {
  return (
    <div className="mx-auto px-32 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-center">
          We work to implement your ideas with a high level of{" "}
          <span className="text-[#FF864C]">efficiency</span>
        </h2>
        <p className="text-[#A87F9A] text-lg text-center">
          We remove all technical and technical concerns from your shoulders so
          that you can advance your work to the highest possible level.
        </p>
      </div>
      <div className="flex gap-4">
        <Card>
          <h3 className="text-lg font-semibold">
            Specialized in providing the best solutions for management systems
            for ERP institutions
          </h3>
          <ul className="max-w-md space-y-1 text-[#8B7FA3] list-disc list-inside dark:text-gray-400 mt-3">
            <li>Managing the company's relationships with customers</li>
            <li>Purchasing management, finance and accounting software</li>
            <li>Track and manage the manufacturing process for products</li>
            <li>Human Resource Management</li>
          </ul>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">
            We offer the best sales systems and the most flexible points of sale
            ever
          </h3>
          <ul className="max-w-md space-y-1 text-[#8B7FA3] list-disc list-inside dark:text-gray-400 mt-3">
            <li>We offer the most flexible point of sale system ever</li>
            <li>Sales, purchases and reports management</li>
            <li>Store management, inventory and accounting details</li>
            <li>We offer the best solutions for e-commerce</li>
          </ul>
        </Card>
      </div>
      <div className="flex gap-4 justify-evenly mt-7 relative">
        <Card className="flex flex-col gap-2 h-72">
          <h3 className="text-lg font-semibold">Website development design</h3>
          <p className="text-[#8B7FA3]">
            We make customer's imagination into reality with our development
            expertise.
          </p>
          <div className="bg-red-500 p-3 w-20 h-20 flex justify-center items-center rounded-xl absolute bottom-2">
            <FaAccessibleIcon className="w-10 h-10" />
          </div>
        </Card>
        <Card className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">
            Developing smart phone applications
          </h3>
          <p className="text-[#8B7FA3]">
            We offer a wide range of smart phone applications to suit companies
            and individuals.
          </p>
          <div className="bg-red-500 p-3 w-20 h-20 flex justify-center items-center rounded-xl absolute bottom-2">
            <FaAccessibleIcon className="w-10 h-10" />
          </div>
        </Card>
        <Card className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">
            Design and development of e-commerce systems
          </h3>
          <p className="text-[#8B7FA3]">
            We know what it takes to build e-commerce solutions that grow your
            business online.
          </p>
          <div className="bg-red-500 p-3 w-20 h-20 flex justify-center items-center rounded-xl absolute bottom-2">
            <FaAccessibleIcon className="w-10 h-10" />
          </div>
        </Card>
        <Card className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">
            Developing content management systems "CMS"
          </h3>
          <p className="text-[#8B7FA3]">
            We build easy-to-use content management systems to suit your
            organization's needs.
          </p>
          <div className="bg-red-500 p-3 w-20 h-20 flex justify-center items-center rounded-xl absolute bottom-2">
            <FaAccessibleIcon className="w-10 h-10" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Features;
