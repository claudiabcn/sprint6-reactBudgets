import { useNavigate } from "react-router-dom";
import { welcomePageContent } from "../config/appData";
import Button from "../common/components/button";

function WelcomePage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/calculator");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl p-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {welcomePageContent.hero.title}
          </h1>
          <p className="text-xl text-gray-600">
            {welcomePageContent.hero.subtitle}
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {welcomePageContent.services.map((service) => (
            <div
              key={service.id}
              className={`bg-gradient-to-r ${service.colorFrom} ${service.colorTo} rounded-xl p-6 border-l-4 ${service.borderColor}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{service.emoji}</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h2>
                  <p
                    className={`text-lg font-semibold ${service.taglineColor} mb-3`}
                  >
                    {service.tagline}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={handleNavigate}>
            {welcomePageContent.cta.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;