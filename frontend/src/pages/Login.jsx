import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans relative">
            <div className="flex-grow flex flex-col overflow-y-auto overflow-x-hidden">

                {/* Minimal Header */}
                <header className="p-6">
                    <Link to="/" className="text-[#0047fb] font-black text-3xl tracking-tighter inline-block">
                        Airtasker
                    </Link>
                </header>

                {/* Form Container */}
                <main className="flex-grow flex flex-col items-center justify-center -mt-16 px-4 py-12 relative z-10 w-full">
                    <div className="w-full max-w-[400px]">

                        <h1 className="text-[32px] font-black text-[#071343] tracking-tighter mb-8 text-center leading-tight">
                            Login to your account
                        </h1>

                        <form className="flex flex-col gap-5">

                            {/* Email Input Solid Gray Style */}
                            <div className="relative">
                                <input
                                    type="email"
                                    id="login-email"
                                    className="w-full bg-[#f4f5f9] rounded-lg px-4 py-4 text-[#071343] font-medium focus:outline-none focus:ring-2 focus:ring-[#071343] transition"
                                    placeholder="Email Address*"
                                />
                            </div>

                            {/* Captcha Mock */}
                            <div className="bg-[#2d2d2d] rounded-sm p-4 flex items-center gap-4 text-white shadow-sm border border-gray-600">
                                <div className="w-6 h-6 border-2 border-gray-400 rounded-sm bg-transparent cursor-pointer hover:border-white transition flex-shrink-0"></div>
                                <span className="text-sm">Verify you are human</span>
                            </div>

                            {/* Submit */}
                            <button type="button" className="w-full bg-[#0047fb] text-white py-3.5 rounded-full font-bold text-lg hover:bg-blue-700 transition mt-2">
                                Continue
                            </button>
                        </form>

                        <div className="text-center mt-6 text-sm text-[#071343] font-medium">
                            Don't have an account? <Link to="/signup" className="text-[#0047fb] font-bold hover:underline">Sign up</Link>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center justify-center my-6 gap-3">
                            <span className="text-[10px] font-bold text-[#071343] uppercase tracking-wider">OR</span>
                        </div>

                        {/* Social Logins */}
                        <div className="space-y-3 relative z-10 bg-white">
                            <button className="w-full border border-gray-300 text-[#071343] bg-white py-3 rounded-full font-bold hover:bg-gray-50 transition flex items-center justify-center gap-3 relative z-10">
                                <span className="text-lg">G</span> Continue with Google
                            </button>
                            <button className="w-full border border-gray-300 text-[#071343] bg-white py-3 rounded-full font-bold hover:bg-gray-50 transition flex items-center justify-center gap-3 relative z-10">
                                <span className="text-lg text-blue-600">f</span> Continue with Facebook
                            </button>
                            <button className="w-full border border-gray-300 text-[#071343] bg-white py-3 rounded-full font-bold hover:bg-gray-50 transition flex items-center justify-center gap-3 relative z-10">
                                <span className="text-lg"></span> Continue with Apple
                            </button>
                        </div>

                    </div>
                </main>

            </div>

            {/* Footer sticky to bottom layout */}
            <footer className="w-full py-4 text-center bg-white border-t border-transparent z-10 mt-auto shrink-0 relative">
                <p className="text-[#848fa5] text-[11px] md:text-xs">
                    By proceeding, I agree to Airtasker's <a href="#" className="text-[#0047fb] hover:underline">Terms & Conditions</a>, <a href="#" className="text-[#0047fb] hover:underline">Community Guidelines</a>, & <a href="#" className="text-[#0047fb] hover:underline">Privacy Policy</a>
                </p>
            </footer>
        </div>
    );
};

export default Login;
