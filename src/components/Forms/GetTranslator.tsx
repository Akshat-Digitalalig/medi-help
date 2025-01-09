"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { countryCityData, language } from "@/lib/constant/unversal";
import { toast } from "sonner";

export default function GetTranslator() {
  const [formData, setFormData] = useState({
    patientName: "",
    phoneNumber: "",
    email: "",
    country: "",
    language: "",
    message: "",
  });

  const [patientPassport, setPatientPassport] = useState<File[]>([]);
  const [success, setSuccess] = useState(false);

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

  const handlePassportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).slice(0, 3);
      setPatientPassport(selectedFiles);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Sending request...");

    // Validate required fields
    if (
      !formData.patientName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.country ||
      !formData.language ||
      !formData.message
    ) {
      toast.error("All fields are required.");
      return;
    }

    // Prepare form data
    const data = new FormData();
    data.append("name", formData.patientName);
    data.append("phone", formData.phoneNumber);
    data.append("email", formData.email);
    data.append("country", formData.country);
    data.append("language", formData.language);
    data.append("messageForUs", formData.message);

    // Add patient passport files to form data
    patientPassport.forEach((file) => {
      data.append("passportFiles", file);
    });

    try {
      // Make API call
      const response = await fetch("/api/translator", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        toast.success("Request sent successfully!");
        setFormData({
          patientName: "",
          phoneNumber: "",
          email: "",
          country: "",
          language: "",
          message: "",
        });
        setPatientPassport([]);
        setSuccess(true);
      } else {
        const errorData = await response.json();
        toast.error(`Failed to send request: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-blue-500 text-xs text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Send Request
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] sm:max-w-[50%] h-[85%] sm:h-[90%] rounded-lg overflow-y-scroll overflow-x-hidden p-4 sm:p-6">
        <DialogTitle></DialogTitle>
        <div className="w-full mx-auto p-4 sm:p-6 bg-white rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Get Translator
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
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
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter Phone number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
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
                htmlFor="passport"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Passport (Max 3)
              </label>
              <input
                type="file"
                id="passport"
                name="passport"
                multiple
                onChange={handlePassportChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                accept=".jpg, .jpeg, .png, .pdf"
              />
              <p className="text-xs text-gray-500">
                Supported formats: .jpg, .jpeg, .png, .pdf
              </p>
            </div>

            <div>
              <label
                htmlFor="language"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Language
              </label>
              <select
                id="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select</option>
                {language.map((language, index) => (
                  <option value={language} key={index}>
                    {language}
                  </option>
                ))}
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

            <div>
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

            <div>
            {success ? (
                <p className="text-green-500 text-center">
                  Request sent successfully!
                </p>
              ) : (
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
