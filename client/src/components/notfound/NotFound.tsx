import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6">
      
      <div className="text-center max-w-md">
        
        {/* 404 Text */}
        <h1 className="text-7xl font-extrabold text-blue-600 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold text-slate-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-slate-500 mb-6">
          Sorry bro, the page you are looking for doesn’t exist or was moved.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="border border-blue-200 px-5 py-2.5 rounded-full text-slate-700 hover:bg-blue-50 transition"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};