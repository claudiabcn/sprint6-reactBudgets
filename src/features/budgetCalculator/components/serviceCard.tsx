import { useState } from 'react';
import { ServiceCardProps } from "../../../config/types";
import HelpModal from "../components/helpModal";

function ServiceCard({
  service,
  onChange,
  onPagesChange,
  onLanguagesChange,
}: ServiceCardProps) {
  const isWebService = service.id === "web";
  const showWebOptions = isWebService && service.selected;
  
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <span className="text-lg font-semibold text-blue-600">
              {service.price}€
            </span>
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
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  title="Ayuda"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
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

      <HelpModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default ServiceCard;