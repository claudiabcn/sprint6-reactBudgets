import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Service } from "../../../config/types";

export const useUrlSync = (
  services: Service[],
  isAnnualPayment: boolean,
  setServices: (services: Service[]) => void,
  setIsAnnualPayment: (value: boolean) => void
) => {
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    const urlServices = searchParams.get("services");
    const urlPages = searchParams.get("pages");
    const urlLanguages = searchParams.get("languages");
    const urlAnnual = searchParams.get("annual");

    if (urlServices) {
      const selectedIds = urlServices.split(",");
      const updatedServices = services.map((service) => ({
        ...service,
        selected: selectedIds.includes(service.id),
        ...(service.id === "web" && {
          pages: urlPages ? parseInt(urlPages) : 1,
          languages: urlLanguages ? parseInt(urlLanguages) : 1,
        }),
      }));
      setServices(updatedServices);
    }

    if (urlAnnual === "true") {
      setIsAnnualPayment(true);
    }
  }, []); 


  useEffect(() => {
    const selectedServices = services.filter((s) => s.selected);
    const params = new URLSearchParams();

    if (selectedServices.length > 0) {
      params.set("services", selectedServices.map((s) => s.id).join(","));

      const webService = services.find((s) => s.id === "web" && s.selected);
      if (webService) {
        if (webService.pages) params.set("pages", webService.pages.toString());
        if (webService.languages)
          params.set("languages", webService.languages.toString());
      }
    }

    if (isAnnualPayment) {
      params.set("annual", "true");
    }

    setSearchParams(params, { replace: true });
  }, [services, isAnnualPayment]);

  const getShareableUrl = () => {
    return window.location.href;
  };

  return { getShareableUrl };
};