
import React from 'react';

const ChatInterface: React.FC = () => {
  return (
    <div className="p-6 bg-bg-card dark:bg-bg-card-dark shadow-xl rounded-lg h-[calc(100vh-200px)] flex flex-col">
      <h2 className="text-2xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-4">Chat with Gemini</h2>
      <p className="text-text-secondary dark:text-text-secondary-dark">
        Chat functionality is currently unavailable.
      </p>
    </div>
  );
};

export default ChatInterface;