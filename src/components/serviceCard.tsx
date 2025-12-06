import { ServiceCardProps } from "../config/types";

function ServiceCard({ service, onChange }: ServiceCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
            <span className="text-lg font-semibold text-blue-600">
              {service.price}€
            </span>
          </div>

          <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
        <input
          type="checkbox"
          checked={service.selected}
          onChange={() => onChange(service.id)}
          className="mt-1 w-5 h-5 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default ServiceCard;
