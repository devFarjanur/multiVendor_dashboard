

const Register = () => {

    const handleRegister = event => {

    }





    return (
        <div className="pb-40">
            <div className="grid grid-cols-2 gap-x-6">
                <div className="pr-10 border-[1px] border-[#D0D0D0] w-[611px] h-[790px] mt-20 px-20 bg-white rounded shadow-md">
                    <h2 className="text-4xl font-semibold text-center pt-16 pb-8 text-black">Registration</h2>
                    <form onSubmit={handleRegister} className="mt-4">

                        <div className="mb-4">
                            <label className="text-[#444] text-lg font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input bg-white w-[461px] h-[60px] border-[1px] hover:border-[1px] border-[#E8E8E8] mt-5 pl-6 rounded"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-[#444] text-lg font-medium">
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
                            <label className="text-[#444] text-lg font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-input bg-white w-[461px] h-[60px] border-[1px] hover:border-[1px] border-[#E8E8E8] mt-5 pl-6 rounded"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="px-20px mt-7">
                            <button
                                type="submit"
                                className="w-[461px] h-[64px] bg-[#FF3811] hover:bg-[#FF3811] text-white text-xl font-semibold rounded-md"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div>
                        <p className="text-center pt-10">Already Have an Account? <Link to="/logIn" className='text-[#FF3811]'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;