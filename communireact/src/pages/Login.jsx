
const Login = () => {
  const loginWithGoogle = () => {
    console.log('login with Google');
    window.open('http://localhost:3000/auth/google', '_self');
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-full max-w-md p-8 bg-slate-200 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="mb-6">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full border border-gray-300 rounded-md py-2 px-4 mb-3 focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md py-2 px-4 mb-3 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white rounded-md py-2 transition duration-300 hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
        </form>
        <p className="text-gray-600 text-center mb-6">
          Not Registered? <a href="#" className="text-blue-500 hover:underline">Create an account</a>
        </p>
        <button
          className="w-full bg-blue-500 text-white rounded-md py-2 transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={loginWithGoogle}
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
