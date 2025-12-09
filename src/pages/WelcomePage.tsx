import { useNavigate } from "react-router-dom";

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
            Transform Your Digital Presence
          </h1>
          <p className="text-xl text-gray-600">
            Solutions that Drive Real Growth
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🔎</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Organic Dominance (SEO)
                </h2>
                <p className="text-lg font-semibold text-green-700 mb-3">
                  Dominate Search. Attract Quality Traffic.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Go beyond rankings. We implement a strategic, technical SEO
                  approach that builds authority, increases your organic
                  visibility, and ensures you capture only the highest-quality
                  leads searching for your solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500">
            <div className="flex items-start gap-4">
              <span className="text-3xl">📢</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Conversion-Focused Campaigns (Advertising)
                </h2>
                <p className="text-lg font-semibold text-orange-700 mb-3">
                  Ads That Convert. Not Just Impress.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Stop wasting budget on clicks that don't convert. Our expert
                  team manages high-performing PPC campaigns across Google Ads
                  and social media, driving measurable results and maximizing
                  your return on ad spend (ROAS).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🌐</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  High-Performance Website (Website)
                </h2>
                <p className="text-lg font-semibold text-blue-700 mb-3">
                  The Foundation for Growth. Built to Perform.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A website is your hardest-working employee. We deliver modern,
                  responsive, and blazing-fast web design and development,
                  optimized not just for aesthetics, but for seamless user
                  experience and the highest conversion rates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleNavigate}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get your budget here →
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
