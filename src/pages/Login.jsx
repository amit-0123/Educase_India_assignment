import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem("userData"));

        if (
            storedUser &&
            storedUser.email === formData.email &&
            storedUser.password === formData.password
        ) {
            Swal.fire({
                title: "Login Successful!",
                text: "Welcome back!",
                icon: "success",
                confirmButtonText: "Go to Dashboard",
                confirmButtonColor: "#6D28D9",
            }).then(() => {
                navigate("/account");
            });
        } else {
            Swal.fire({
                title: "Login Failed!",
                text: "Invalid email or password.",
                icon: "error",
                confirmButtonText: "Try Again",
            });
        }
    };

    return (
        <div className=" flex justify-center items-center px-4">
            <div className=" bg-white rounded-lg shadow-md p-8 max-w-[400px] w-full flex flex-col text-left">
                {/* Header */}
                <h2 className="text-2xl font-bold text-gray-700 mb-4 text-left">
                    Signin to Your<br /> PopX Account
                </h2>

                <p className="mb-6">
                    Lorem ipsum dolor sit amet <br />consectetur adipisicing elit.
                </p>


                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
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

                    {/* Button directly under Password with bottom space */}
                    <div className="pt-2 pb-80">
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition duration-200"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
