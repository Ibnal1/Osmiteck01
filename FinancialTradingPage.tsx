
import React from 'react';

const TradingExpertiseCard: React.FC<{ title: string; description: string; icon: string; delay: string }> = ({ title, description, icon, delay }) => (
  <div 
    className="bg-bg-base dark:bg-bg-base-dark p-6 rounded-lg shadow-lg dark:shadow-lg hover:shadow-xl dark:hover:shadow-xl hover:shadow-primary/20 dark:hover:shadow-primary/20 border border-border-subtle dark:border-border-subtle-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 opacity-0 animate-fadeInUp"
    style={{ animationDelay: delay }}
  >
    <div className="flex justify-center mb-4">
      <div className="w-16 h-16 rounded-full bg-bg-card dark:bg-bg-card-dark flex items-center justify-center text-primary text-3xl">
        {icon}
      </div>
    </div>
    <h4 className="text-xl font-semibold font-heading text-primary mb-2 text-center">{title}</h4>
    <p className="text-text-secondary dark:text-text-secondary-dark text-sm leading-relaxed text-center">
      {description}
    </p>
  </div>
);

const MarketFocusItem: React.FC<{ title: string; items: string[]; delay: string }> = ({ title, items, delay }) => (
 <div className="mb-6 opacity-0 animate-fadeInUp" style={{ animationDelay: delay }}>
    <h4 className="text-xl font-medium font-heading text-primary mb-3">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="bg-bg-base dark:bg-bg-base-dark text-text-secondary dark:text-text-secondary-dark border border-border-subtle/70 dark:border-border-subtle-dark/70 hover:border-primary/70 dark:hover:border-primary/70 hover:text-primary dark:hover:text-primary px-3 py-1 rounded-full text-xs font-medium shadow-sm transition-colors duration-200">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const FinancialTradingPage: React.FC = () => {
  const tradingExpertise = [
    { 
      title: "Technical Analysis", 
      description: "Utilizing chart patterns, indicators, and price action to forecast market movements and identify trading opportunities.",
      icon: "📊",
      delay: "0.4s"
    },
    { 
      title: "Algorithmic Strategies", 
      description: "Developing and backtesting automated trading systems to execute trades based on predefined rules and quantitative analysis.",
      icon: "⚙️",
      delay: "0.6s"
    },
    { 
      title: "Risk Management", 
      description: "Implementing robust risk control techniques, including position sizing and stop-loss orders, to protect capital and optimize returns.",
      icon: "🛡️",
      delay: "0.8s"
    },
     { 
      title: "Market Psychology", 
      description: "Understanding investor sentiment and behavioral patterns to anticipate market trends and make informed trading decisions.",
      icon: "🧠",
      delay: "1.0s"
    },
  ];

  const marketFocus = {
    forex: ["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD", "XAU/USD (Gold)"],
    crypto: ["Bitcoin (BTC)", "Ethereum (ETH)", "Solana (SOL)", "Selected Altcoins", "DeFi Tokens"],
  };
  
  const tradingTools = ["MetaTrader 4/5", "TradingView", "Python (Pandas, NumPy)", "Binance", "KuCoin", "Custom Analysis Scripts"];

  return (
    <div className="bg-bg-card dark:bg-bg-card-dark shadow-2xl dark:shadow-2xl rounded-xl overflow-hidden transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/80 via-primary/60 to-bg-base dark:to-bg-base-dark p-8 md:p-12 text-text-primary dark:text-text-primary-dark">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-4 opacity-0 animate-fadeInUp">
            Navigating Financial Markets
          </h1>
          <p className="text-xl md:text-2xl font-light text-text-primary dark:text-text-primary-dark mb-8 max-w-3xl mx-auto opacity-0 animate-fadeInUp animation-delay-200">
            Strategic insights and disciplined execution in Forex and Cryptocurrency trading.
          </p>
        </div>
      </div>

      <div className="p-6 md:p-10">
        {/* My Trading Expertise Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-8 md:mb-10 text-center opacity-0 animate-fadeInUp animation-delay-200">
            My Trading Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {tradingExpertise.map(area => <TradingExpertiseCard key={area.title} {...area} />)}
          </div>
        </section>

        {/* Market Focus Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-8 md:mb-10 text-center opacity-0 animate-fadeInUp animation-delay-400">
            Market Focus
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-8 gap-y-6">
            <MarketFocusItem title="Forex Markets" items={marketFocus.forex} delay="0.6s" />
            <MarketFocusItem title="Cryptocurrency Markets" items={marketFocus.crypto} delay="0.7s" />
          </div>
        </section>
        
        {/* Trading Tools & Platforms Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-8 text-center opacity-0 animate-fadeInUp animation-delay-600">
            Trading Tools & Platforms
          </h2>
          <div className="max-w-3xl mx-auto text-center opacity-0 animate-fadeInUp animation-delay-800">
            <div className="flex flex-wrap justify-center gap-3">
                {tradingTools.map((tool) => (
                    <span key={tool} className="bg-bg-base dark:bg-bg-base-dark text-text-secondary dark:text-text-secondary-dark border border-border-subtle/70 dark:border-border-subtle-dark/70 hover:border-primary/70 dark:hover:border-primary/70 hover:text-primary dark:hover:text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-colors duration-200">
                    {tool}
                    </span>
                ))}
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="mb-12 md:mb-16 opacity-0 animate-fadeInUp" style={{animationDelay: '1s'}}>
          <h3 className="text-2xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-4 text-center">Trading Philosophy & Disclaimer</h3>
          <div className="max-w-3xl mx-auto bg-bg-base dark:bg-bg-base-dark p-6 rounded-lg shadow-md dark:shadow-md border border-border-subtle dark:border-border-subtle-dark">
            <p className="text-sm text-text-secondary dark:text-text-secondary-dark leading-relaxed text-center">
              My trading approach is rooted in continuous learning, disciplined risk management, and adapting to evolving market conditions. The information shared is for educational and demonstrative purposes only and should not be considered financial advice. Trading involves substantial risk of loss.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center py-8 md:py-12 opacity-0 animate-fadeInUp" style={{animationDelay: '1.2s'}}>
          <h2 className="text-3xl md:text-4xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-6">
            Discuss Trading Strategies?
          </h2>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark mb-8 max-w-xl mx-auto">
            I'm open to discussing market analysis, strategies, and the evolving landscape of financial technologies.
          </p>
          <button 
            className="bg-gradient-to-r from-primary-light to-primary text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:shadow-primary/40 dark:hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300 text-lg"
            onClick={() => alert('Contact functionality coming soon!')} 
          >
            Let's Connect
          </button>
        </section>
      </div>
    </div>
  );
};

export default FinancialTradingPage;