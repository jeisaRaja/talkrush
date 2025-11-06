export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-[#0f172a] to-[#1e293b] text-gray-100 p-6">
      <div className="gap-4 justify-center w-full max-w-sm">
        <form className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="username" className="mb-2 text-sm font-medium text-gray-300">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              className="p-3 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="p-3 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="confirmPassword" className="mb-2 text-sm font-medium text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter your password"
              className="p-3 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-cyan-600/70 hover:bg-cyan-600/50 text-white font-medium py-3 rounded-lg transition active:scale-95 cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <div className="my-6 flex items-center justify-center">
          <div className="w-full border-t border-slate-600"></div>
          <span className="px-4 text-gray-400 text-sm">or</span>
          <div className="w-full border-t border-slate-600"></div>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-200/90 text-gray-800 font-medium py-3 rounded-lg shadow transition active:scale-95 cursor-pointer"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google Logo"
            className="w-5 h-5"
          />
          Sign up with Google
        </button>

        <p className="text-sm text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
