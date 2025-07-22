
import React, { useState, useEffect } from 'react';
import { TabID, TabOption } from './types';
import { TABS } from './constants';
import MainHomePage from './features/MainHomePage';
import AboutMe from './features/TextGeneration';
import SoftwareDevelopmentPage from './features/SoftwareDevelopmentPage';
import FinancialTradingPage from './features/FinancialTradingPage';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './contexts/ThemeContext';

// Import Skill Pages
import FullStackPage from './features/skills/FullStackPage';
import AiMlPage from './features/skills/AiMlPage';
import FinTechPage from './features/skills/FinTechPage';
import JavaScriptPage from './features/skills/JavaScriptPage';
import PythonPage from './features/skills/PythonPage';
import ApiDesignPage from './features/skills/ApiDesignPage';
import MarketAnalysisPage from './features/skills/MarketAnalysisPage';
import AlgoThinkingPage from './features/skills/AlgoThinkingPage';
import BlockchainPage from './features/skills/BlockchainPage';


const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabID>(TABS[0].id);
  const { theme } = useTheme(); // Get current theme
  const currentYear = new Date().getFullYear();

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <MainHomePage setActiveTab={setActiveTab} />;
      case 'software':
        return <SoftwareDevelopmentPage />;
      case 'trading':
        return <FinancialTradingPage />;
      case 'text':
        return <AboutMe setActiveTab={setActiveTab} />;
      // Skill Page Cases
      case 'fullStack':
        return <FullStackPage />;
      case 'aiMl':
        return <AiMlPage />;
      case 'finTech':
        return <FinTechPage />;
      case 'javascript':
        return <JavaScriptPage />;
      case 'python':
        return <PythonPage />;
      case 'apiDesign':
        return <ApiDesignPage />;
      case 'marketAnalysis':
        return <MarketAnalysisPage />;
      case 'algoThinking':
        return <AlgoThinkingPage />;
      case 'blockchain':
        return <BlockchainPage />;
      default:
        return <MainHomePage setActiveTab={setActiveTab} />;
    }
  };

  const handleNavClick = (tabId: TabID) => {
    setActiveTab(tabId);
  };
  
  const handleContactClick = () => {
    // Navigate to 'About Me' page which contains skills that can then lead to contact options or more details.
    // Or, if 'Contact' should be its own section eventually, this could be 'contact' TabID.
    // For now, pointing to 'text' (About Me) which has the skills buttons.
    setActiveTab('text');
  };

  return (
    <div className="flex h-screen bg-bg-base dark:bg-bg-base-dark text-text-primary dark:text-text-primary-dark transition-colors duration-300">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-bg-card dark:bg-bg-card-dark shadow-xl flex flex-col">
        {/* Logo and Title */}
        <div 
          className="flex items-center justify-center space-x-3 p-5 cursor-pointer border-b border-border-subtle dark:border-border-subtle-dark" 
          onClick={() => handleNavClick('home')}
        >
          <img src="/assets/logo.png" alt="Osmiteck Logo" className="h-10 w-10" />
          <h1 className="text-2xl font-bold font-heading text-text-primary dark:text-text-primary-dark">Osmiteck</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {TABS.map((tab: TabOption) => (
              <li key={tab.id}>
                <button
                  onClick={() => handleNavClick(tab.id)}
                  className={`w-full flex items-center p-2.5 rounded-lg group transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-primary/50
                    ${activeTab === tab.id 
                      ? 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary font-semibold shadow-sm' 
                      : 'text-text-secondary dark:text-text-secondary-dark hover:bg-bg-base dark:hover:bg-bg-base-dark hover:text-text-primary dark:hover:text-text-primary-dark'}
                  `}
                  aria-current={activeTab === tab.id ? 'page' : undefined}
                >
                  {/* Optional: Add icons here later if desired */}
                  <span className="ml-3">{tab.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Controls: Contact and Theme Toggle */}
        <div className="mt-auto p-4 border-t border-border-subtle dark:border-border-subtle-dark space-y-3">
           <div className="flex items-center space-x-2 w-full">
            <button 
                onClick={handleContactClick}
                className="flex-grow bg-gradient-to-r from-primary-light to-primary text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-primary/40 dark:hover:shadow-primary/40 transition-all duration-300 text-sm text-center"
                aria-label="Navigate to About Me / Contact section"
              >
                About / Skills
              </button>
              <ThemeToggle />
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow sm:ml-64 flex flex-col overflow-y-auto">
        <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-8 w-full">
          {renderContent()}
        </main>

        {/* Footer */}
        <footer className="bg-bg-card dark:bg-bg-card-dark text-text-secondary dark:text-text-secondary-dark text-center p-5 text-sm border-t border-border-subtle dark:border-border-subtle-dark mt-auto transition-colors duration-300">
          © {currentYear} Osman Ali - osmiteck.com. <span className="font-semibold text-primary">Powered by Osmiteck.</span>
        </footer>
      </div>
    </div>
  );
};

export default App;