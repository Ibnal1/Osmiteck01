
import React from 'react';

const BlockchainPage: React.FC = () => {
  return (
    <div className="bg-bg-card dark:bg-bg-card-dark shadow-2xl rounded-xl p-6 md:p-10 animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-3">
          Blockchain Basics & DLT
        </h1>
        <p className="text-lg md:text-xl text-text-secondary dark:text-text-secondary-dark">
          Understanding the fundamentals of Distributed Ledger Technology and its applications.
        </p>
      </header>

      <section className="space-y-6 text-text-secondary dark:text-text-secondary-dark">
        <p className="text-lg leading-relaxed">
          My interest in Blockchain technology and Distributed Ledger Technologies (DLT) stems from their transformative potential across various industries. I have a solid understanding of core concepts like decentralization, consensus mechanisms, smart contracts, and cryptographic principles. I actively explore its applications in finance (DeFi), supply chain, and beyond.
        </p>
        
        <div className="p-6 bg-bg-base dark:bg-bg-base-dark rounded-lg border border-border-subtle dark:border-border-subtle-dark">
          <h2 className="text-2xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-4">
            Key Concepts Understood (More Details Coming Soon)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-md">
            <li><strong>Core Principles:</strong> Decentralization, Immutability, Transparency</li>
            <li><strong>Consensus Mechanisms:</strong> Proof-of-Work (PoW), Proof-of-Stake (PoS)</li>
            <li><strong>Smart Contracts:</strong> Concept and basic development (e.g., Solidity basics)</li>
            <li><strong>Cryptocurrencies:</strong> Bitcoin, Ethereum, and Altcoins</li>
            <li><strong>Decentralized Finance (DeFi):</strong> Lending, borrowing, DEXs</li>
            <li><strong>Non-Fungible Tokens (NFTs):</strong> Understanding and potential use cases</li>
          </ul>
        </div>

        <p className="mt-6 text-accent dark:text-accent-dark font-semibold text-center py-4">
          Further explanations and explorations into blockchain technology and related projects will be available soon.
        </p>
      </section>
    </div>
  );
};

export default BlockchainPage;