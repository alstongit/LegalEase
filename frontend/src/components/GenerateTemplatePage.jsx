import { useNavigate } from "react-router-dom";

const GenerateTemplatePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Choose a Document Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Rent Agreement Card */}
        <div
          onClick={() => navigate("/generate/rent")}
          className="cursor-pointer bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-lg transition-all border border-gray-700"
        >
          <h2 className="text-xl font-semibold mb-2">🏠 Rent Agreement</h2>
          <p className="text-gray-400">
            Auto-generate a rental contract customized with names, rent, dates, and more.
          </p>
        </div>

        {/* Future templates can go here */}
      </div>
    </div>
  );
};

export default GenerateTemplatePage;
