"use client";
import React, { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { doctors } from "@/lib/constant/Doctors";
import { toast } from "sonner";

export default function VideoConsulting() {
  const [formData, setFormData] = useState({
    patientName: "",
    phoneNumber: "",
    email: "",
    doctorName: "",
    disease: "",
    message: "",
  });

  const [passport, setPassport] = useState<File[]>([]);
  const [medicalReports, setMedicalReports] = useState<File[]>([]);
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
      setPassport(selectedFiles);
    }
  };

  const handleMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).slice(0, 5);
      setMedicalReports(selectedFiles);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Sending email...");

    // Validate required fields
    if (
      !formData.patientName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.doctorName ||
      !formData.disease ||
      !formData.message
    ) {
      toast.error("All fields are required.");
      return;
    }
    console.log(passport)

    // Prepare form data
    const data = new FormData();
    data.append("name", formData.patientName);
    data.append("email", formData.email);
    data.append("phone", formData.phoneNumber);
    data.append("doctorName", formData.doctorName);
    data.append("disease", formData.disease);
    data.append("messageForUs", formData.message);

    // Add passport files to form data
    passport.forEach((file) => {
      data.append("passport", file);
    });

    // Add medical reports to form data
    medicalReports.forEach((file) => {
      data.append("medicalReports", file);
    });

    console.log(data.getAll('passport'))


    try {
      // Make an API call to submit the data
      const response = await fetch("/api/videoConsultation", {
        method: "POST",
        body: data,
      });


      if (response.ok) {
        toast.success("Email sent successfully!");
        // Optionally reset the form
        setFormData({
          patientName: "",
          phoneNumber: "",
          email: "",
          doctorName: "",
          disease: "",
          message: "",
        });
        setPassport([]);
        setMedicalReports([]);
        setSuccess(true);
      } else {
        const errorData = await response.json();
        toast.error(`Failed to send email: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Send Request
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] sm:max-w-[50%] h-[85%] sm:h-[90%] rounded-lg overflow-y-scroll overflow-x-hidden p-4 sm:p-6">
        <DialogTitle></DialogTitle>
        <div className="w-full mx-auto p-4 sm:p-6 bg-white rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Video Consulting
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
                htmlFor="doctorName"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Choose Doctor
              </label>
              <select
                id="doctorName"
                name="doctorName"
                value={formData.doctorName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select</option>
                {doctors.map((doctor, index) => (
                  <option key={index} value={doctor.name}>
                    {doctor.name}
                  </option>
                ))}
              </select>
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
                htmlFor="medicalReports"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Medical Report (Max 5)
              </label>
              <input
                type="file"
                id="medicalReports"
                name="medicalReports"
                multiple
                onChange={handleMedicalChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                accept=".jpg, .jpeg, .png, .pdf"
              />
              <p className="text-xs text-gray-500">
                Supported formats: .jpg, .jpeg, .png, .pdf
              </p>
            </div>
            <div>
              <label
                htmlFor="disease"
                className="block text-sm font-medium text-gray-700 labelGap"
              >
                Disease Name
              </label>
              <input
                type="text"
                id="disease"
                name="disease"
                value={formData.disease}
                onChange={handleChange}
                placeholder="Enter disease name"
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
            <div>
              {success && (
                <p className="text-green-500 text-center">
                  Email sent successfully!
                </p>
              )}
              {!success ? <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"

              >
                Submit
              </button> : <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <button
                    className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Close
                  </button>
                </DialogClose>
              </DialogFooter>
              }
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
