import React from 'react'

export default function GetFreeConsult() {
    return (
        <div className="max-w-md mx-auto p-6 my-2  rounded-lg bg-gray-100 shadow-lg">
            <h2 className="text-center text-xl font-semibold mb-2">Let Us Help You</h2>
            <form className="space-y-2">
                <input
                    type="text"
                    placeholder="Patient Name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                </select>
                <select
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option>Select City</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bangalore</option>
                    <option>Kolkata</option>

                </select>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-gray-600 bg-gray-200 border border-r-0 rounded-l-md">
                        +91
                    </span>
                    <input
                        type="text"
                        placeholder="Your Phone number"
                        className="w-full px-4 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <textarea
                    placeholder="Describe The Current Medical Problem .."
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <input
                    type="text"
                    placeholder="Example: 30 Yrs or 29-05-1985"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 font-semibold text-white rounded-md hover:bg-blue-900 transition duration-300"
                >
                    Get FREE Quote
                </button>
                <p className="text-xs text-center text-gray-500 mt-2">
                    By submitting the form I agree to the
                    <a href="#" className="text-blue-600">Terms of Use</a> and
                    <a href="#" className="text-blue-600">Privacy Policy</a> of Vaidam Health.
                </p>
            </form>
        </div>

    )
}
