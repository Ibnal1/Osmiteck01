
import React from 'react';

const FinTechPage: React.FC = () => {
  return (
    <div className="bg-bg-card dark:bg-bg-card-dark shadow-2xl rounded-xl p-6 md:p-10 animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-3">
          FinTech Solutions
        </h1>
        <p className="text-lg md:text-xl text-text-secondary dark:text-text-secondary-dark">
          Developing innovative technology solutions for the financial industry.
        </p>
      </header>

      <section className="space-y-6 text-text-secondary dark:text-text-secondary-dark">
        <p className="text-lg leading-relaxed">
          My work in FinTech involves creating secure, scalable, and compliant software for financial applications. This includes building trading systems, payment processing solutions, financial analytics platforms, and integrating with banking APIs, always with a strong focus on security and regulatory requirements.
        </p>
        
        <div className="p-6 bg-bg-base dark:bg-bg-base-dark rounded-lg border border-border-subtle dark:border-border-subtle-dark">
          <h2 className="text-2xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-4">
            Areas of Expertise (More Details Coming Soon)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-md">
            <li><strong>Trading Systems:</strong> Algorithmic trading bots, execution platforms</li>
            <li><strong>Payment Gateways:</strong> Integration and development of payment solutions</li>
            <li><strong>Financial Analytics:</strong> Data visualization, risk management tools</li>
            <li><strong>Blockchain & DLT:</strong> Exploring applications in finance (see Blockchain Basics)</li>
            <li><strong>Security & Compliance:</strong> Adhering to financial regulations and security best practices</li>
          </ul>
        </div>

        <p className="mt-6 text-accent dark:text-accent-dark font-semibold text-center py-4">
          Case studies on FinTech projects and specific solution architectures will be detailed here soon.
        </p>
      </section>
    </div>
  );
};

export default FinTechPage;