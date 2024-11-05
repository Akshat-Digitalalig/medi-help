"use client"
import React, { useState } from 'react';

const countryCityData = {
    India: ["Delhi", "Mumbai", "Bangalore", "Kolkata"],
    "United States": ["New York", "Los Angeles", "Chicago", "Houston"],
    "United Kingdom": ["London", "Manchester", "Birmingham", "Liverpool"],
    Australia: ["Sydney", "Melbourne", "Brisbane", "Perth"],
};

const Page: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: 'India',
        city: '',
        phone: '',
        medicalProblem: '',
        ageOrDOB: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            // Reset city if country is changed
            ...(name === 'country' ? { city: '' } : {}),
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <div className="max-w-xl mx-auto p-6 my-2 rounded-lg">
                <h2 className="text-center text-xl font-semibold mb-2">Help Us With Patient Details</h2>
                <form onSubmit={handleSubmit} className="space-y-2">
                    <div>
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
                                +91
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
        </div>
    );
};

export default Page;
