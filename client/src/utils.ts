import { ConfessionFormData } from "./types/types";

export const postData = async (data: ConfessionFormData): Promise<any> => {
  const result = await fetch("http://localhost:8080/api/confess", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const response = await result.json();
  return response;
};
