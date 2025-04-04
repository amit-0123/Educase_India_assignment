import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <>
        
        <div className="flex justify-center items-center w-full">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-[400px] w-full flex flex-col text-left">
                <div className="fix-mt-40 pt-[400px]">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-1">
                        Welcome to PopX
                    </h1>
                    <p className="text-sm text-gray-500 mb-4">
                        Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscing elit.
                    </p>

                    <button
                        onClick={() => navigate('/signup')}
                        className="w-full py-2 mb-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-base font-medium cursor-pointer transition-colors duration-300 "
                    >
                        Create Account
                    </button>
                   <div className='pb-20'>
                    <button
                        onClick={() => navigate('/login')}
                        className=" w-full py-2 bg-gray-500 text-white rounded-md text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-gray-400"
                    >
                        Already Registered? Login
                    </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Welcome;
