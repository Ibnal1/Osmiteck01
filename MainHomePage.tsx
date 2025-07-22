
import React from 'react';
import { TabID } from '../types';

interface MainHomePageProps {
  setActiveTab: (tabId: TabID) => void;
}

const GatewayCard: React.FC<{
  title: string;
  description: string;
  icon: string;
  ctaText: string;
  targetTab: TabID;
  delay: string;
  setActiveTab: (tabId: TabID) => void;
}> = ({ title, description, icon, ctaText, targetTab, delay, setActiveTab }) => (
  <div
    className="bg-bg-card dark:bg-bg-card-dark p-6 md:p-8 rounded-xl shadow-xl dark:shadow-xl hover:shadow-2xl dark:hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/20 border border-transparent hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 opacity-0 animate-fadeInUp flex flex-col items-center text-center"
    style={{ animationDelay: delay }}
  >
    <div className="flex justify-center mb-5">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center text-white text-4xl shadow-lg">
        {icon}
      </div>
    </div>
    <h3 className="text-2xl font-semibold font-heading text-primary mb-3">{title}</h3>
    <p className="text-text-secondary dark:text-text-secondary-dark text-md leading-relaxed mb-6 flex-grow">
      {description}
    </p>
    <button
      onClick={() => setActiveTab(targetTab)}
      className="mt-auto bg-gradient-to-r from-primary-light to-primary text-white font-semibold py-2.5 px-8 rounded-lg shadow-md hover:shadow-lg hover:shadow-primary/40 dark:hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300 text-md"
    >
      {ctaText}
    </button>
  </div>
);

const MainHomePage: React.FC<MainHomePageProps> = ({ setActiveTab }) => {
  return (
    <div className="bg-bg-card dark:bg-bg-card-dark shadow-2xl dark:shadow-2xl rounded-xl overflow-hidden transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-bg-base dark:bg-bg-base-dark p-10 md:p-16 text-text-primary dark:text-text-primary-dark text-center min-h-[400px] md:min-h-[450px] flex flex-col justify-center items-center">
        <div className="absolute inset-0 opacity-[0.03] text-text-secondary dark:text-text-secondary-dark">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)"/>
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative z-10">
            <img src="/assets/logo.png" alt="Osmiteck Logo" className="h-20 w-20 md:h-24 md:w-24 mx-auto mb-4 opacity-0 animate-scaleIn animation-delay-200" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading leading-tight mb-3 text-text-primary dark:text-text-primary-dark">
            Osman Ali
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-primary mb-6 opacity-0 animate-fadeInUp animation-delay-400">
            Innovate. Develop. Trade.
          </p>
          <p className="text-lg md:text-xl text-text-secondary dark:text-text-secondary-dark leading-relaxed max-w-3xl mx-auto opacity-0 animate-fadeInUp animation-delay-600">
            A passionate Software Developer & adept Forex/Crypto Trader, crafting digital futures and navigating financial markets with precision and insight.
          </p>
        </div>
      </div>

      <div className="p-6 md:p-10">
        {/* Welcome Note */}
        <section className="mb-12 md:mb-16 text-center max-w-3xl mx-auto opacity-0 animate-fadeInSlow animation-delay-200">
          <h2 className="text-3xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-4">Welcome to Osmiteck</h2>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed">
            Explore my journey at the intersection of cutting-edge technology and dynamic financial markets. Here, I showcase my skills, projects, and dedication to continuous innovation and strategic growth.
          </p>
        </section>

        {/* Gateway Sections */}
        <section className="mb-12 md:mb-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <GatewayCard
              title="Expert Software Development"
              description="Discover my approach to crafting robust, scalable, and innovative software solutions, from intricate web applications to intelligent AI integrations designed for impact."
              icon="💻"
              ctaText="Explore My Tech Portfolio"
              targetTab="software"
              delay="0.6s"
              setActiveTab={setActiveTab}
            />
            <GatewayCard
              title="Strategic Financial Trading"
              description="Delve into my analytical journey in the financial markets. See how I apply strategic thinking and data-driven insights to navigate the complexities of Forex and Cryptocurrencies."
              icon="📈"
              ctaText="Explore Trading Insights"
              targetTab="trading"
              delay="0.8s"
              setActiveTab={setActiveTab}
            />
          </div>
        </section>
        
        {/* General Call to Action (Optional) */}
        <section className="text-center py-8 md:py-10 opacity-0 animate-fadeInUp" style={{animationDelay: '1s'}}>
          <h2 className="text-3xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-6">
            Interested in Collaborating?
          </h2>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark mb-8 max-w-xl mx-auto">
            Whether it's a software project or a discussion about market strategies, I'm always open to connecting with like-minded individuals and exploring new opportunities.
          </p>
          <button
            onClick={() => setActiveTab('text')} 
            className="bg-gradient-to-r from-primary-light to-primary text-white font-semibold py-3 px-10 rounded-lg shadow-lg hover:shadow-xl hover:shadow-primary/40 dark:hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Let's Connect
          </button>
        </section>
      </div>
    </div>
  );
};

export default MainHomePage;