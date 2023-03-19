import React from "react";
import Button from "../../components/Button";

const AppointmentBooking = () => {
  return (
    <div className=" bg-[#064C6F]">
      <div className="flex px-32 p-20 gap-20 items-center">
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-white">
            Book a free appointment for a consultation about your project
          </h2>
          <p className="text-[#A87F9A] text-lg">
            A technical expert specializing in business development will contact
            you as soon as possible to talk about the details of your project
            and the possibility of implementation
          </p>
        </div>

        <div>
          <Button className="rounded-full">Book a meeting</Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
