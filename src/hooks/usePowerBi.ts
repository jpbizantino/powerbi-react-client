import { useState } from "react";
import { getReportData, login } from "../api/siloreal.api";
import { PowerBiComponentConfig } from "../types/common.type";

export const usePowerBi = () => {
  const [reporData, setReportData] = useState<PowerBiComponentConfig | null>(
    null
  );

  const handleGetReportData = async () => {
    const loginResponse = await login();

    if (!loginResponse) return;

    const response = await getReportData();

    if (
      !response.error &&
      response.response &&
      typeof response.response !== "string"
    ) {
      console.log(response.response);
      setReportData(response.response);
    }
  };

  const handleResetReportData = () => {
    setReportData(null);
    handleGetReportData()
  };

  return {
    handleGetReportData,
    handleResetReportData,
    reporData,
  };
};


