"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { hospitalData } from "@/lib/constant/Hospital";
import { toast } from "sonner";
import { failedMail, sendingMail, sendSuccuss } from "@/components/Universal/UniversalToast";
import PhoneInput from "react-phone-number-input";
import "./phone.css";
import "react-phone-number-input/style.css";

export default function VisaInvitation() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    patientName: "",
    phoneNumber: "",
    email: "",
    numberOfPeople: "",
    roomType: "",
    hospital: "",
    city: "",
    message: "",
  });

  const [documents, setDocuments] = useState<File[]>([]);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).slice(0, 3);
      setDocuments(selectedFiles);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    // Validate required fields
    if (
      !formData.patientName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.numberOfPeople ||
      !formData.roomType ||
      !formData.hospital ||
      !formData.city ||
      !formData.message
    ) {
      setLoading(false)
      toast.error("All fields are required.");
      return;
    }
    sendingMail();

    // Prepare form data
    const data = new FormData();
    data.append("name", formData.patientName);
    data.append("phone", formData.phoneNumber);
    data.append("email", formData.email);
    data.append("numberOfPeople", formData.numberOfPeople);
    data.append("roomType", formData.roomType);
    data.append("hospitalName", formData.hospital);
    data.append("city", formData.city);
    data.append("messageForUs", formData.message);

    // Add document files to form data
    documents.forEach((file) => {
      data.append("documents", file);
    });

    try {
      // Make API call
      const response = await fetch("/api/accommodation", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setLoading(false)
        sendSuccuss();
        setFormData({
          patientName: "",
          phoneNumber: "",
          email: "",
          numberOfPeople: "",
          roomType: "",
          hospital: "",
          city: "",
          message: "",
        });
        setDocuments([]);
        setSuccess(true);
      } else {
        const errorData = await response.json();
        failedMail();
        setLoading(false)
        toast.error(`Failed to send request: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("Something went wrong. Please try again later.");
      setLoading(false);
      failedMail();
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
            Accommodation Arrangement
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                htmlFor="documents"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Patient Passport (Max 3)
              </label>
              <input
                type="file"
                id="documents"
                name="documents"
                multiple
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                accept=".jpg, .jpeg, .png, .pdf"
              />
              <p className="text-xs text-gray-500">
                Supported formats: .jpg, .jpeg, .png, .pdf
              </p>
            </div>
            <div>
              <label
                htmlFor="hospital"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Choose Hospital
              </label>
              <select
                id="hospital"
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select</option>
                {hospitalData.map((hospital, index) => (
                  <option key={index} value={hospital.name}>
                    {hospital.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="numberOfPeople"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Number of People
              </label>
              <select
                id="numberOfPeople"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="roomType"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Room Type
              </label>
              <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select</option>
                <option value="economy room">Economy Room</option>
                <option value="economy plus room">Economy Plus Room</option>
                <option value="twin-sharing room">Twin-Sharing Room</option>
                <option value="deluxe room">Deluxe Room</option>
                <option value="premium deluxe">Premium Deluxe</option>
                <option value="junior suite">Junior Suite</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Enter City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
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
