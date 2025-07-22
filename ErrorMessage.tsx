import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return (
    <div 
      className="bg-red-900/30 border border-red-600 text-red-200 px-4 py-3 rounded-md relative my-4" 
      role="alert"
    >
      <strong className="font-bold text-red-100">Error: </strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default ErrorMessage;