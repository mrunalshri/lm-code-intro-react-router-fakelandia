import React from "react";

interface ErrorMessageProps {
  errorMessage: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => {
  return <div className="text-red-700 text-sm">{errorMessage}</div>;
};

export default ErrorMessage;
