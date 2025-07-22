
import React from 'react';

const ApiDesignPage: React.FC = () => {
  return (
    <div className="bg-bg-card dark:bg-bg-card-dark shadow-2xl rounded-xl p-6 md:p-10 animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-3">
          API Design & Development
        </h1>
        <p className="text-lg md:text-xl text-text-secondary dark:text-text-secondary-dark">
          Crafting robust, scalable, and developer-friendly APIs.
        </p>
      </header>

      <section className="space-y-6 text-text-secondary dark:text-text-secondary-dark">
        <p className="text-lg leading-relaxed">
          I specialize in designing and developing APIs that are not only functional but also intuitive and easy to integrate. My approach focuses on RESTful principles, clear documentation (e.g., OpenAPI/Swagger), versioning strategies, security best practices (authentication, authorization), and performance optimization to ensure a seamless developer experience.
        </p>
        
        <div className="p-6 bg-bg-base dark:bg-bg-base-dark rounded-lg border border-border-subtle dark:border-border-subtle-dark">
          <h2 className="text-2xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-4">
            Core Principles & Technologies (More Details Coming Soon)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-md">
            <li><strong>Design Principles:</strong> REST, HATEOAS, Idempotency</li>
            <li><strong>Documentation:</strong> OpenAPI (Swagger), Postman Collections</li>
            <li><strong>Security:</strong> OAuth 2.0, JWT, API Keys, Rate Limiting</li>
            <li><strong>Technologies:</strong> Node.js (Express), Python (Flask/Django), GraphQL (Apollo)</li>
            <li><strong>Versioning & Lifecycle Management</strong></li>
            <li><strong>Testing:</strong> Unit, Integration, and End-to-End API testing</li>
          </ul>
        </div>

        <p className="mt-6 text-accent dark:text-accent-dark font-semibold text-center py-4">
          Examples of API designs and implementations will be showcased here soon.
        </p>
      </section>
    </div>
  );
};

export default ApiDesignPage;