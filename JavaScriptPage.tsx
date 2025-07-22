
import React from 'react';

const JavaScriptPage: React.FC = () => {
  return (
    <div className="bg-bg-card dark:bg-bg-card-dark shadow-2xl rounded-xl p-6 md:p-10 animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-3">
          JavaScript Expertise (React, Node.js)
        </h1>
        <p className="text-lg md:text-xl text-text-secondary dark:text-text-secondary-dark">
          Mastering the JavaScript ecosystem for dynamic front-end and robust back-end development.
        </p>
      </header>

      <section className="space-y-6 text-text-secondary dark:text-text-secondary-dark">
        <p className="text-lg leading-relaxed">
          JavaScript is a cornerstone of my development toolkit. I leverage its versatility for building interactive user interfaces with frameworks like React and Next.js, as well as for creating scalable server-side applications with Node.js and Express. My proficiency extends to modern JavaScript (ES6+), TypeScript, and asynchronous programming.
        </p>
        
        <div className="p-6 bg-bg-base dark:bg-bg-base-dark rounded-lg border border-border-subtle dark:border-border-subtle-dark">
          <h2 className="text-2xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-4">
            Key Proficiencies (More Details Coming Soon)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-md">
            <li><strong>Front-End:</strong> React.js, Next.js, Redux, Context API, Hooks, DOM Manipulation</li>
            <li><strong>Back-End:</strong> Node.js, Express.js, RESTful APIs, Microservices</li>
            <li><strong>Language Features:</strong> ES6+, TypeScript, Asynchronous JavaScript (Promises, Async/Await)</li>
            <li><strong>Tooling:</strong> Webpack, Babel, npm/yarn, Jest, ESLint</li>
            <li><strong>Performance Optimization:</strong> Code splitting, lazy loading, efficient state management</li>
          </ul>
        </div>

        <p className="mt-6 text-accent dark:text-accent-dark font-semibold text-center py-4">
          Specific JavaScript projects and code examples demonstrating these skills are being compiled. Please visit again!
        </p>
      </section>
    </div>
  );
};

export default JavaScriptPage;