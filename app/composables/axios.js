import axios from "axios";

const useAxios = () => {
  const config = useRuntimeConfig();
  const router = useRouter();

  let api = axios.create({
    baseURL: config.public.app_base_url,
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.request.use(
    (config) => {
      // let token = JSON.parse(localStorage.getItem("token"));
      let token = useCookie("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // Adjust the 'Content-Type' header if the request is multipart/form-data
      if (config.data && config.data instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data";
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.data.message === "Unauthorized") {
        router.push("/");
        deleteCookie("token");
        localStorage.clear();
      }
      return Promise.reject(error);
    }
  );

  return { api };
};

export default useAxios;
