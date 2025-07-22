
import React from 'react';
import { TabID } from '../types';

interface AboutMeProps {
  setActiveTab: (tabId: TabID) => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ setActiveTab }) => {
  const skills = [
    { name: 'Full-Stack Development', id: 'fullStack' as TabID },
    { name: 'AI/ML Integration', id: 'aiMl' as TabID },
    { name: 'FinTech Solutions', id: 'finTech' as TabID },
    { name: 'JavaScript (React, Node.js)', id: 'javascript' as TabID },
    { name: 'Python', id: 'python' as TabID },
    { name: 'API Design', id: 'apiDesign' as TabID },
    { name: 'Market Analysis', id: 'marketAnalysis' as TabID },
    { name: 'Algorithmic Thinking', id: 'algoThinking' as TabID },
    { name: 'Blockchain Basics', id: 'blockchain' as TabID },
  ];

  return (
    <div className="bg-bg-card dark:bg-bg-card-dark shadow-2xl dark:shadow-2xl rounded-xl overflow-hidden transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-bg-base dark:bg-bg-base-dark p-8 md:p-12 text-text-primary dark:text-text-primary-dark">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold font-heading leading-tight mb-3 opacity-0 animate-fadeInUp text-text-primary dark:text-text-primary-dark">
              Osman Ali
            </h1>
            <p className="text-2xl md:text-3xl font-light text-primary mb-6 opacity-0 animate-fadeInUp animation-delay-200">
              Software Developer | Forex & Crypto Trader
            </p>
            <p className="text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed opacity-0 animate-fadeInUp animation-delay-400">
              Crafting innovative digital solutions and navigating the dynamic world of financial markets.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="w-40 h-40 md:w-48 md:h-48 bg-bg-card dark:bg-bg-card-dark rounded-full border-4 border-primary shadow-xl flex items-center justify-center opacity-0 animate-scaleIn animation-delay-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-10">
        {/* Introduction Text */}
        <div className="mb-12 text-center max-w-3xl mx-auto opacity-0 animate-fadeInSlow animation-delay-200">
          <h2 className="text-3xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-4">Welcome to My Portfolio</h2>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed">
            Hello! I'm Osman Ali. As a 22-year-old innovator, I'm deeply passionate about the intersection of technology and finance. My journey involves building robust software and exploring the exciting realms of Forex and Cryptocurrency trading. This space is a reflection of my skills, projects, and my enthusiasm for continuous learning and growth.
          </p>
        </div>

        {/* Core Interests Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-8 text-center opacity-0 animate-fadeInUp animation-delay-400">My Core Interests</h3>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Software Development Card */}
            <div className="bg-bg-base dark:bg-bg-base-dark p-6 rounded-lg shadow-lg dark:shadow-lg hover:shadow-xl dark:hover:shadow-xl hover:shadow-primary/20 dark:hover:shadow-primary/20 border border-border-subtle dark:border-border-subtle-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 opacity-0 animate-fadeInUp animation-delay-600">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-bg-card dark:bg-bg-card-dark flex items-center justify-center text-primary text-3xl">
                  💻
                </div>
              </div>
              <h4 className="text-xl font-semibold text-primary mb-2 text-center font-heading">Software Development</h4>
              <p className="text-text-secondary dark:text-text-secondary-dark text-sm leading-relaxed text-center">
                Building scalable, efficient, and user-centric applications. From web solutions to AI integrations, I love bringing ideas to life with code.
              </p>
            </div>

            {/* Forex Trading Card */}
            <div className="bg-bg-base dark:bg-bg-base-dark p-6 rounded-lg shadow-lg dark:shadow-lg hover:shadow-xl dark:hover:shadow-xl hover:shadow-primary/20 dark:hover:shadow-primary/20 border border-border-subtle dark:border-border-subtle-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 opacity-0 animate-fadeInUp animation-delay-800">
              <div className="flex justify-center mb-4">
                 <div className="w-16 h-16 rounded-full bg-bg-card dark:bg-bg-card-dark flex items-center justify-center text-primary text-3xl">
                  📈
                </div>
              </div>
              <h4 className="text-xl font-semibold text-primary mb-2 text-center font-heading">Forex Trading</h4>
              <p className="text-text-secondary dark:text-text-secondary-dark text-sm leading-relaxed text-center">
                Analyzing global currency markets, developing trading strategies, and navigating the complexities of foreign exchange with a data-driven approach.
              </p>
            </div>

            {/* Crypto Trading Card */}
            <div className="bg-bg-base dark:bg-bg-base-dark p-6 rounded-lg shadow-lg dark:shadow-lg hover:shadow-xl dark:hover:shadow-xl hover:shadow-primary/20 dark:hover:shadow-primary/20 border border-border-subtle dark:border-border-subtle-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 opacity-0 animate-fadeInUp" style={{animationDelay: '1s'}}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-bg-card dark:bg-bg-card-dark flex items-center justify-center text-primary text-3xl">
                  🔗
                </div>
              </div>
              <h4 className="text-xl font-semibold text-primary mb-2 text-center font-heading">Cryptocurrency</h4>
              <p className="text-text-secondary dark:text-text-secondary-dark text-sm leading-relaxed text-center">
                Exploring the innovative world of digital currencies, blockchain technology, and decentralized finance (DeFi). Keen on market analysis and emerging trends.
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="pt-8 border-t border-border-subtle dark:border-border-subtle-dark opacity-0 animate-fadeIn" style={{animationDelay: '0.5s'}}>
          <h3 className="text-2xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-6 text-center">Skills & Technologies</h3>
          <div className="max-w-4xl mx-auto text-center">
            <ul className="inline-flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <li
                  key={skill.id}
                  className="opacity-0 animate-fadeInUp" // Animation applied to li for container
                  style={{ animationDelay: `${0.7 + index * 0.08}s` }}
                >
                  <button
                    onClick={() => setActiveTab(skill.id)}
                    className="bg-bg-card dark:bg-bg-card-dark text-text-primary dark:text-text-primary-dark border border-border-subtle dark:border-border-subtle-dark px-5 py-2.5 rounded-lg shadow-md font-medium hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary hover:border-primary/70 dark:hover:border-primary/70 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg-card dark:focus:ring-offset-bg-card-dark"
                    aria-label={`Learn more about ${skill.name}`}
                  >
                    {skill.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;