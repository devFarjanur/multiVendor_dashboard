import React from 'react';


const Login = () => {

    const handleResetPassword = event => {

    }

    const handleLogin = event => {

    }

    return (
        <div className="pb-40 m-auto w-2/4 mt-20">
            <div className="grid grid-cols-2 gap-x-6">
                <div className="pr-10 border-[1px] border-[#D0D0D0] w-[611px] h-[782px] px-20 bg-white rounded shadow-md">
                    <h2 className="text-4xl font-semibold text-center pt-20 pb-8 text-black">Log in</h2>
                    <form onSubmit={handleLogin} className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="email" className="text-[#444] text-lg font-medium mb-5">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input bg-white w-[461px] h-[60px] border-[1px] hover:border-[1px] border-[#E8E8E8] mt-5 pl-6 rounded"
                                placeholder="Your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="text-[#444] text-lg font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-input bg-white w-[461px] h-[60px] border-[1px] hover:border-[1px] border-[#E8E8E8] mt-5 pl-6 rounded"
                                placeholder="Your password"
                                required
                            />
                            <label className="label">
                                <a onClick={handleResetPassword} href="#" className="text-sm label-text-alt">Forgot password?</a>
                            </label>
                        </div>
                        <div className="px-20px mt-7">
                            <button
                                type="submit"
                                className="w-[461px] h-[64px] bg-[#FF3811] hover:bg-[#FF3811] text-white text-xl font-semibold rounded-md"
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;