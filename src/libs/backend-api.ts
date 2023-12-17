import axios from "axios";

export const testBackend = async (token: string) => {
  const baseUrlInput = document.getElementById("backend-url-input") as HTMLInputElement;
  const baseUrl = baseUrlInput.value;
  try {
    const response = await axios.get<{
      message: string;
      token: {
        raw: string;
        decoded: object;
      };
    }>(`${baseUrl}/auth/check`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const logoutBackend = async (token: string) => {
  const baseUrlInput = document.getElementById("backend-url-input") as HTMLInputElement;
  const baseUrl = baseUrlInput.value;
  try {
    const response = await axios.post<{ message: string }>(`${baseUrl}/auth/logout`, undefined, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
