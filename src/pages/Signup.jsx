import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        agency: "No",
    });

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Show SweetAlert Confirmation
        Swal.fire({
            title: "Account Created!",
            text: "Your account has been successfully created.",
            icon: "success",
            confirmButtonText: "Go to Account",
            confirmButtonColor: "#6D28D9",
            timer: 2000, // Auto-close after 2 seconds
            width:"500px",
            timerProgressBar: true,
            allowOutsideClick: false, // optional: prevent closing by clicking outside
        }).then(() => {
            localStorage.setItem("userData", JSON.stringify(formData)); // Save to localStorage
            navigate("/account"); // Navigate after dismiss
        });
        
    };

    return (
        <div className="flex justify-center items-center w-full">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-[400px] w-full flex flex-col flex-grow">

                {/* Header */}
                <div>
                    <h2 className="text-2xl font-bold text-left text-black-700 mb-4">
                        Create your<br /> PopX Account
                    </h2>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 flex-grow">

                    {/* Full Name */}
                    <div className="relative">
                        <label className="absolute left-6 -top-2 text-sm text-[#6a5bc1] bg-white px-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                        <label className="absolute left-6 -top-2 text-sm text-[#6a5bc1] bg-white px-2">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    {/* Email Address */}
                    <div className="relative">
                        <label className="absolute left-6 -top-2 text-sm text-[#6a5bc1] bg-white px-2">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your email address"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label className="absolute left-6 -top-2 text-sm text-[#6a5bc1] bg-white px-2">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Company Name */}
                    <div className="relative">
                        <label className="absolute left-6 -top-2 text-sm text-[#6a5bc1] bg-white px-2">
                            Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your company name"
                        />
                    </div>

                    {/* Are You an Agency? */}
                    <div>
                        <label className=" text-left block text-black-600 mb-1">Are you an Agency? *</label>
                        <div className="flex gap-4 mb-10 pb-20">
                            <label>
                                <input
                                    type="radio"
                                    name="agency"
                                    value="Yes"
                                    checked={formData.agency === "Yes"}
                                    onChange={handleChange}
                                />{" "}
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="agency"
                                    value="No"
                                    checked={formData.agency === "No"}
                                    onChange={handleChange}
                                />{" "}
                                No
                            </label>
                        </div>
                    </div>

                    {/* Submit Button (Moved Inside the Form) */}
                    <div className="pb-20 pt-5">
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition duration-200"
                        >
                            Create Account
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Signup;
