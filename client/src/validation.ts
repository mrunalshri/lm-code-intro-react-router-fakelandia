import { ConfessionFormData } from "./types/types";

export const validateSubject = (value: string | null): boolean => {
  if (!value) return false;
  const regex = /^[a-zA-Z]{3,23}$/;
  return regex.test(value);
};

export const validateReason = (value: string | null): boolean => {
  return Boolean(value);
};
export const validateConfession = (value: string | null): boolean => {
  if (!value) return false;
  const regex = /^.{10,153}$/;
  return regex.test(value);
};

export const hasValidFormData = (data: ConfessionFormData): boolean => {
  if (!validateSubject(data.subject)) {
    return false;
  }
  if (!validateReason(data.reason)) {
    return false;
  }
  if (!validateConfession(data.details)) {
    return false;
  }
  return true;
};
