import { useEffect, useState } from "react";

const Account = () => {
    const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        profileImage: "",
    });

    // Fetch Data from localStorage
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("userData"));
        if (storedData) {
            setUserData(storedData);
        }
    }, []);

    return (
        <div className="flex justify-center items-center w-full">
            <div className=" bg-white rounded-lg shadow-md max-w-[400px] w-full flex flex-col text-left mt-5">
                <h2 className="text-left text-gray-600 font-bold p-4 border-b">
                    Account Settings
                </h2>
                <div className="bg-gray-100 w-100">
                    <div className="flex items-center gap-4 mt-5 ml-4">
                        {/* Profile Image */}
                        <img
                            src={userData.profileImage || "https://itbucketo.com/wp-content/uploads/2022/01/wepik-202204-214441.jpg"}
                            alt="Profile"
                            className="w-16 h-16 rounded-full border"
                        />

                        {/* Name and Email */}
                        <div className="text-left mb-7 mb-5">
                            <h3 className=" font-semibold text-gray-800">
                                {userData.fullName || "Your Name"}
                            </h3>
                            <p className="text-gray-500">{userData.email || "your@email.com"}</p>
                        </div>
                    </div>


                    <p className="m-3 text-gray-600 mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
                        nonumy eirmod tempor.
                    </p>
                    <hr className=" mb-80 my-3 border-t border-gray-300 border-dotted-3" />
                    <hr className="mb-80 my-3 border-t border-gray-300 border-dotted-3" />

                </div>
            </div>
        </div>
    );
};

export default Account;
