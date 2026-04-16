import React from 'react';
import { Link, useRouteError } from 'react-router';
import { HiOutlineEmojiSad } from "react-icons/hi";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-6">
            <div className="text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-6 bg-red-50 rounded-full">
                        <HiOutlineEmojiSad className="text-red-500 text-8xl" />
                    </div>
                </div>

                <h1 className="text-9xl font-black text-gray-200">404</h1>
                
                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">
                    Oops! Something went wrong.
                </p>

                <p className="mt-4 text-gray-500">
                    {error?.statusText || error?.message || "Page not found"}
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Link
                        to="/"
                        className="btn btn-primary px-8 font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Back to Home
                    </Link>
                    
                    <button 
                        onClick={() => window.location.reload()}
                        className="btn btn-outline px-8 font-semibold hover:bg-gray-100"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;