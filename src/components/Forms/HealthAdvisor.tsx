"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { countryCityData} from "@/lib/constant/unversal";
import { HeartHandshake } from "lucide-react";
import { toast } from "sonner";
import { failedMail, sendingMail, sendSuccuss } from "@/components/Universal/UniversalToast";
import PhoneInput from "react-phone-number-input";
import "./phone.css";
import "react-phone-number-input/style.css";

export default function HealthAdvisor() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    patientName: "",
    phoneNumber: "",
    email: "",
    country: "",
    age: "",
    gender: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    
    // Validate required fields
    if (
      !formData.patientName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.country ||
      !formData.age ||
      !formData.gender ||
      !formData.message
    ) {
      setLoading(false)
      toast.error("All fields are required.");
      return;
    }
    sendingMail()
    // Prepare form data
    const data = new FormData();
    data.append( "name", formData.patientName);
    data.append( "phone", formData.phoneNumber);
    data.append( "email", formData.email);
    data.append( "country", formData.country);
    data.append( "age", formData.age);
    data.append( "gender", formData.gender);
    data.append( "messageForUs", formData.message);

    try {
      // Make API call
      const response = await fetch("/api/healthadvisor", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        sendSuccuss()
        setFormData({
          patientName: "",
          phoneNumber: "",
          email: "",
          country: "",
          age: "",
          gender: "",
          message: "",
        });
        setSuccess(true);
        setLoading(false);
      } else {
        const errorData = await response.json();
        setLoading(false);
        toast.error(`Failed to send request: ${errorData.message}`);
        
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setLoading(false);
      failedMail()
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hidden lg:flex md:w-[110px] flex-row-reverse md:flex-row w-full md:w-fit  items-center justify-end md:justify-center  leading-none text-xs font-semibold bg-myblue gap-x-4 px-2 py-2 gap-1 lg:px-4  cursor-pointer text-white  rounded-md hover:bg-white hover:text-myblue hover:border-myblue border-2 duration-300">
          Health Advisor
          <HeartHandshake size={25} />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] sm:max-w-[50%] h-[85%] sm:h-[90%] rounded-lg overflow-y-scroll overflow-x-hidden p-4 sm:p-6">
        <DialogTitle></DialogTitle>
        <div className="w-full mx-auto p-6 my-2 bg-white rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Health Advisor
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <div>
              <label
                htmlFor="patientName"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Patient Name
              </label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                placeholder="Enter patient name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Phone Number
              </label>
              <PhoneInput
                className='w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                international
                countryCallingCodeEditable={false}
                defaultCountry="IN"
                placeholder="Enter phone number"
                value={formData.phoneNumber}
                onChange={(value) => setFormData({ ...formData, phoneNumber: value || '' })} />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter Age"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select</option>
                {Object.keys(countryCityData).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-1 sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Message for Us
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              ></textarea>
            </div>

            <div className="col-span-1 sm:col-span-2">
            {success ? (
                <p className="text-green-500 text-center">
                  Request sent successfully!
                </p>
              ) : (
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {loading? "Please wait...":"Submit"}
                </button>
              )}
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
