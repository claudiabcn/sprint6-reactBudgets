import { useState } from "react";
import { ServiceCardProps } from "../../../config/types";
import HelpModal from "../components/helpModal";

function ServiceCard({
  service,
  onChange,
  onPagesChange,
  onLanguagesChange,
  isAnnualPayment,
}: ServiceCardProps) {
  const isWebService = service.id === "web";
  const showWebOptions = isWebService && service.selected;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayPrice = isAnnualPayment ? service.price * 0.8 : service.price;

  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          checked={service.selected}
          onChange={() => onChange(service.id)}
          className="mt-1 w-5 h-5 cursor-pointer"
        />

        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
            <div className="text-right">
              {isAnnualPayment ? (
                <>
                  <span className="text-sm text-gray-500 line-through block">
                    {service.price}€
                  </span>
                  <span className="text-lg font-semibold text-green-600">
                    {displayPrice}€
                  </span>
                </>
              ) : (
                <span className="text-lg font-semibold text-blue-600">
                  {service.price}€
                </span>
              )}
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4">{service.description}</p>

          {showWebOptions && onPagesChange && onLanguagesChange && (
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-md font-semibold text-blue-800">
                  Website Options
                </h4>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-blue-600 hover:text-blue-800 transition-colors text-xl"
                  title="Help"
                >
                  ℹ️
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <label className="w-28 text-sm font-medium text-gray-700">
                    Pages:
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={service.pages || 1}
                    onChange={(e) => onPagesChange(Number(e.target.value))}
                    className="w-16 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <label className="w-28 text-sm font-medium text-gray-700">
                    Languages:
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={service.languages || 1}
                    onChange={(e) => onLanguagesChange(Number(e.target.value))}
                    className="w-16 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <HelpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default ServiceCard;
