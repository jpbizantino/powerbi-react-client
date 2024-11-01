import axios, { AxiosInstance } from "axios";
import {
  CommonResponse,
  LoginResponse,
  PowerBiComponentConfig,
} from "../types/common.type";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let axiosInstance: AxiosInstance;
const baseURL = "http://localhost:8080";

export const login = async (): Promise<LoginResponse | null> => {
  let loginResponse: LoginResponse | null = null;

  await axios
    .request<LoginResponse>({
      method: "post",
      url: `${baseURL}/login`,
      data: {
        username: "Koby_Littel44@yahoo.com",
        password: "Fwdh",
      },
    })
    .then((response) => {
      loginResponse = response.data;

      //  Only load Axios instance for getToken
      axiosInstance = axios.create({
        baseURL,
        headers: { Authorization: `Bearer ${loginResponse?.token}` },
      });
    })
    .catch(() => {
      loginResponse = null;
    });

  return loginResponse;
};

export const getReportData = async (): Promise<
  CommonResponse<PowerBiComponentConfig | string>
> => {
  let reportResponse: CommonResponse<PowerBiComponentConfig | string> = {
    error: false,
  };

  await axiosInstance
    .get(`/powerbi/reports/default`)
    .then((response) => {
      reportResponse = response.data;
    })
    .catch((error) => {
      reportResponse = error.response.data;
    });

  return reportResponse;
};
