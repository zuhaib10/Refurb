"use client";
import { FC, useState } from "react";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Search } from "lucide-react";
import { Loader2 } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

interface FormProps {}

const Form: FC<FormProps> = ({}) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    model: "",
    condition: "",
    pin: "",
    coupon: "",
  });
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setLoaded(true);

      setTimeout(() => {
        setLoaded(false);
      }, 1000);
    }, 1000);
  };

  const conditions = ["Excellent", "Good", "Fair", "Damaged"];

  return (
    <form aria-label="Sell Your Phone Form" className="rounded-xl p-10 relative flex flex-col gap-2 bg-[#FAFAFA] border border-[#DADADA] " onSubmit={handleFormSubmit}>
      <h5 className="absolute bg-[#5E3DB1] text-white p-2 -top-5 left-0 right-0 w-[177px] mx-auto">Sell Your Phone Now</h5>
      <div className="flex items-center gap-5 ">
        <div className="flex flex-col flex-grow">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input type="text" name="name" id="name" className="border p-3.5 my-2 text-sm" placeholder="Enter Your Full Name" aria-required="true" aria-placeholder="Enter Your Full Name" />
        </div>
        <div className="flex flex-col flex-grow">
          <label htmlFor="phone" className="text-sm">
            Phone Number
          </label>
          <input type="number" name="phone" id="phone" className="border p-3.5 my-2 text-sm" placeholder="+91 -" aria-required="true" aria-placeholder="+91 -" />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="model" className="text-sm">
          Device Model
        </label>
        <div className="border flex justify-between items-center my-2 px-2">
          <input type="text" name="model" id="model" className=" p-3.5 text-sm w-full" placeholder="Select Your Device" aria-required="true" aria-placeholder="Select Your Device" />
          <Search aria-label="Search device model" />
        </div>
      </div>
      <div className="flex justify-between">
        <h5 className="text-sm">Device Condition</h5>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger aria-describedby="conditionGuide" className="text-sm flex items-center gap-1.5 underline decoration-dashed underline-offset-4">
              Condition Guide <Info fill="black" className="text-white" aria-hidden="true" />
            </TooltipTrigger>
            <TooltipContent id="conditionGuide">
              <p>Guide</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex gap-3 my-2">
        {conditions.map((condition, index) => (
          <button aria-label="condition of Phone" className="p-2 px-5 text-sm rounded-md bg-[#E9E9E9] text-black font-normal" key={index}>
            {condition}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex flex-col flex-grow">
          <label htmlFor="pin" className="text-sm">
            Pincode
          </label>
          <input type="number" name="pin" id="pin" className="border p-3.5 my-2 rounded-md text-sm" placeholder="Enter Pincode" aria-required="true" aria-placeholder="Enter Pincode" />
        </div>
        <div className="flex flex-col flex-grow">
          <label htmlFor="coupon" className="text-sm">
            Coupon Code
          </label>
          <input type="text" name="coupon" id="coupon" className="border p-3.5 my-2 rounded-md text-sm" placeholder="Enter Coupon Code" aria-placeholder="Enter Coupon Code" />
        </div>
      </div>
      <button disabled={loading || loaded} type="submit" className="w-full p-4 rounded-md bg-[#5E3DB1] text-white font-semibold " aria-label="Get Price for your phone">
        {loading ? <Loader2 className="animate-spin m-auto " /> : loaded ? <CheckCircle2 className="m-auto"/> : "Get Price"}
      </button>
    </form>
  );
};

export default Form;
