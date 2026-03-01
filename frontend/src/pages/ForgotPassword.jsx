import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F25278]/10 via-white to-[#F25278]/20 px-4">

      {/* CARD */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#F25278] text-white flex items-center justify-center text-2xl font-extrabold shadow">
            🔐
          </div>
          <h1 className="text-3xl font-extrabold text-gray-800 mt-4">
            Forgot Password
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Enter your email to receive a password reset link
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 transition
              focus:outline-none focus:ring-2 focus:ring-[#F25278]"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#F25278] text-white py-3 rounded-lg font-semibold
            hover:bg-[#e44468] transition shadow-lg active:scale-[0.98]"
          >
            Send Reset Link
          </button>
        </form>

        {/* BACK TO LOGIN */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-[#F25278] font-semibold hover:underline"
          >
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
