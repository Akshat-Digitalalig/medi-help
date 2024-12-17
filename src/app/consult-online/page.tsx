"use client";
import React, { useState, Suspense } from 'react';
import { toast } from "sonner";
import { countryCityData, countryCodeData } from "@/lib/constant/unversal";
import {  useSearchParams } from 'next/navigation';


const PatientForm: React.FC = () => {
    const searchParams = useSearchParams();
    const hospital = searchParams.get('hospital');
    
    const [countryCode, setCountryCode] = useState(countryCodeData["India"]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        city: '',
        phone: '',
        medicalProblem: '',
        ageOrDOB: '',
        hospital: hospital,

    });
    const [files, setFiles] = useState<File[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === "country") {
            setCountryCode(countryCodeData[value as keyof typeof countryCodeData]);
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            ...(name === 'country' ? { city: '' } : {}),
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files).slice(0, 3);
            setFiles(selectedFiles);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        toast.success("Email Sending...");
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.city || !formData.phone || !formData.medicalProblem || !formData.ageOrDOB) {
            alert('All fields are required');
            return;
        }

        try {
            const formDataPayload = new FormData();
            formDataPayload.append("name", formData.name);
            formDataPayload.append("email", formData.email);
            formDataPayload.append("medicalProblem", formData.medicalProblem);
            formDataPayload.append("country", formData.country);
            formDataPayload.append("city", formData.city);
            formDataPayload.append("phone", countryCode + formData.phone);
            formDataPayload.append("ageOrDOB", formData.ageOrDOB);
            formDataPayload.append("hospital", formData.hospital || '');

            files.forEach((file, index) => {
                formDataPayload.append(`file${index + 1}`, file); // Append each file
            });

            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                body: formDataPayload,
            });

            const data = await response.json();
            if (response.ok) {
                toast.success("Email Sent Successfully");
                setFormData({ name: '', email: '', country: 'India', city: '', phone: '', medicalProblem: '', ageOrDOB: '', hospital: hospital });
                setFiles([]); // Reset file input
            } else {
                toast.error("Failed to send email");
                console.log(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the email');
        }
    };

    return (
        
            <Suspense>
            <div className="max-w-xl mx-auto p-6 my-2 rounded-lg">
                <h2 className="text-center text-xl font-semibold mb-2">Help Us With Patient Details</h2>
                <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                       {hospital && <>
                        <label htmlFor="hospital" className="block py-1 text-sm font-medium">
                            Hospital<span className='text-red-500'>*</span>
                        </label>
                        <input
                            type="text"
                            id="hospital"
                            name="hospital"
                            value={formData.hospital || ''}
                            onChange={handleChange}
                            placeholder="Hospital Name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled
                        />
                       </>}
                        <label htmlFor="name" className="block py-1 text-sm font-medium">
                            Name <span className='text-red-500'>*</span>
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
                            Email<span className='text-red-500'>*</span>
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
                        Country<span className='text-red-500'>*</span>
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
                            City<span className='text-red-500'>*</span>
                        </label>
                        <select
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={!formData.country} // Disable if no country is selected
                        >
                            <option value="">Select City</option>
                            {formData.country && countryCityData[formData.country]?.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block py-1 text-sm font-medium">
                            Phone Number<span className='text-red-500'>*</span>
                        </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-gray-600 bg-gray-200 border border-r-0 rounded-l-md">
                                {countryCode}
                            </span>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Your Phone number"
                                className="w-full px-4 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="medicalProblem" className="block py-1 text-sm font-medium">
                            Medical Problem<span className='text-red-500'>*</span>
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
                            Age or Date of Birth<span className='text-red-500'>*</span>
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
                    <div>
                        <label htmlFor="file" className="block py-1 text-sm font-medium">
                            Attach Files (Max 3)<span className='text-red-500'>*</span>
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            multiple
                            onChange={handleFileChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            accept=".jpg, .jpeg, .png, .pdf" // Accept only images and PDFs
                        />
                        <p className="text-xs text-gray-500">Supported formats: .jpg, .jpeg, .png, .pdf</p>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-red-700 transition duration-300"
                    >
                        Submit
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-2">
                        By submitting the form I agree to the{' '}
                        <a href="#" className="text-blue-600">Terms of Use</a> and{' '}
                        <a href="#" className="text-blue-600">Privacy Policy</a> of Vaidam Health.
                    </p>
                </form>
            </div>
        
        </Suspense>
    );
};

const Page: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PatientForm />
        </Suspense>
    );
};

export default Page;
