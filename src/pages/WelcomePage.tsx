import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/calculator");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl p-12">
        <div className="text-center">
          <button
            onClick={handleNavigate}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
