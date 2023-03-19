import React from "react";
import { FaAccessibleIcon } from "react-icons/fa";
import Button from "../../components/Button";
import Card from "../../components/Card";

const DevelopBusiness = () => {
  return (
    <div className="flex flex-col gap-4 px-32 py-7 bg-gray-100">
      <div className="flex  gap-4 ">
        <div className="flex flex-col gap-7 flex-1 justify-center">
          <h2 className="text-3xl font-semibold">
            Our expertise in distinct fields
          </h2>
          <div class="grid grid-rows-3 grid-flow-col gap-8">
            <div className="flex items-center gap-1 border border-red rounded-full ">
              <div className="bg-red w-12 h-12 flex justify-center items-center rounded-full">
                <FaAccessibleIcon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm w-3/4">Financial and accounting systems</p>
            </div>
            <div className="flex items-center gap-1 border border-red rounded-full">
              <div className="bg-red w-12 h-12 flex justify-center items-center rounded-full">
                <FaAccessibleIcon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm w-3/4">Travel and booking apps</p>
            </div>
            <div className="flex items-center gap-1 border border-red rounded-full">
              <div className="bg-red w-12 h-12 flex justify-center items-center rounded-full">
                <FaAccessibleIcon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm w-3/4">
                Taxi and transportation applications
              </p>
            </div>
            <div className="flex items-center gap-1 border border-red rounded-full">
              <div className="bg-red w-12 h-12 flex justify-center items-center rounded-full">
                <FaAccessibleIcon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm w-3/4">Property and real estate</p>
            </div>
            <div className="flex items-center gap-1 border border-red rounded-full">
              <div className="bg-red w-12 h-12 flex justify-center items-center rounded-full">
                <FaAccessibleIcon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm w-3/4">E-commerce and marketplaces</p>
            </div>
            <div className="flex items-center gap-1 border border-red rounded-full">
              <div className="bg-red w-12 h-12 flex justify-center items-center rounded-full">
                <FaAccessibleIcon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm w-3/4">
                Enterprise Resource Planning (ERP) systemss
              </p>
            </div>
          </div>
          <Button className="rounded-full">Book a meeting</Button>
        </div>
        <div className="flex-1 animate-wiggle">
          <img
            src="https://ghaith.om/static/assets/images/resources/cta-3-1.png"
            alt="img2"
            className=""
          />
        </div>
      </div>
      <div className="flex gap-3 justify-between text-center">
        <Card className="flex flex-col items-center justify-center w-[280px] h-[180px] bg-green">
          <p className="text-4xl font-bold text-white">0</p>
          <p className="text-xl font-semibold text-white">E-Commerce</p>
        </Card>
        <Card className="flex flex-col items-center justify-center w-[280px] h-[180px] bg-blue-400">
          <p className="text-4xl font-bold text-white">0</p>
          <p className="text-xl font-semibold text-white">
            Enterprise resource management ERP
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center w-[280px] h-[180px] bg-orange-400">
          <p className="text-4xl font-bold text-white">0</p>
          <p className="text-xl font-semibold text-white">
            Smartphone Applications
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center w-[280px] h-[180px] bg-neutral-400">
          <p className="text-4xl font-bold text-white">0</p>
          <p className="text-xl font-semibold text-white">accounting systems</p>
        </Card>
      </div>
    </div>
  );
};

export default DevelopBusiness;
