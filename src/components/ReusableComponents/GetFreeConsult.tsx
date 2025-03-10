"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { countryCityData } from "@/lib/constant/unversal";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";

export default function GetFreeConsult() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "India",
    city: "",
    phone: "",
    medicalProblem: "",
    ageOrDOB: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    // if (name === "country") {
    //   setCountryCode(countryCodeData[value as keyof typeof countryCodeData]);
    // }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === "country" ? { city: "" } : {}),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    toast.success("Email Sending...");

    if (Object.values(formData).some((val) => val.trim() === "")) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await fetch("/api/getFreeConsult", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // ✅ Set JSON content type
        body: JSON.stringify(formData), // ✅ Send JSON instead of FormData
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to send email");
      }

      toast.success("Email Sent Successfully");
      setSuccess(true);
      setLoading(false)
      setFormData({
        name: "",
        email: "",
        country: "India",
        city: "",
        phone: "",
        medicalProblem: "",
        ageOrDOB: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send mail.");
      setLoading(false);
    }
  };

  return (
    <div className=" max-w-md mx-auto p-6 my-2  rounded-lg bg-gray-100 shadow-lg">
      <h2 className="text-center text-xl font-semibold mb-2">
        Let Us Help You
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label htmlFor="name" className="block py-1 text-sm font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Patient Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block py-1 text-sm font-medium">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="country" className="block py-1 text-sm font-medium">
            Country<span className="text-red-500">*</span>
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.keys(countryCityData).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city" className="block py-1 text-sm font-medium">
            City<span className="text-red-500">*</span>
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!formData.country}
          >
            <option value="">Select City</option>
            {formData.country &&
              countryCityData[formData.country]?.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
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
            value={formData.phone}
            onChange={(value) => setFormData({ ...formData, phone: value || '' })} />
        </div>
        
        <div>
          <label
            htmlFor="medicalProblem"
            className="block py-1 text-sm font-medium"
          >
            Medical Problem<span className="text-red-500">*</span>
          </label>
          <textarea
            id="medicalProblem"
            name="medicalProblem"
            value={formData.medicalProblem}
            onChange={handleChange}
            placeholder="Describe The Current Medical Problem .."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div>
          <label htmlFor="ageOrDOB" className="block py-1 text-sm font-medium">
            Age or Date of Birth<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="ageOrDOB"
            name="ageOrDOB"
            value={formData.ageOrDOB}
            onChange={handleChange}
            placeholder="Example: 30 Yrs or 29-05-1985"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
              {loading ? "Please wait..." : "Submit"}
            </button>
          )}
        </div>
        <p className="text-xs text-center text-gray-500 mt-2">
          By submitting the form I agree to the{" "}
          <Link href="/info/terms-conditions" className="text-blue-600">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/info/privacy-policy" className="text-blue-600">
            Privacy Policy
          </Link>{" "}
          of MediHelp Global.
        </p>
      </form>
    </div>
  );
}
