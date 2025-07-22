
import React from 'react';

const AlgoThinkingPage: React.FC = () => {
  return (
    <div className="bg-bg-card dark:bg-bg-card-dark shadow-2xl rounded-xl p-6 md:p-10 animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-3">
          Algorithmic Thinking & Problem Solving
        </h1>
        <p className="text-lg md:text-xl text-text-secondary dark:text-text-secondary-dark">
          Developing logical and efficient solutions to complex challenges.
        </p>
      </header>

      <section className="space-y-6 text-text-secondary dark:text-text-secondary-dark">
        <p className="text-lg leading-relaxed">
          Algorithmic thinking is fundamental to my approach in both software development and trading. It involves breaking down complex problems into manageable steps, designing efficient procedures, and evaluating solutions for correctness and performance. This skill is crucial for creating optimized software and effective trading strategies.
        </p>
        
        <div className="p-6 bg-bg-base dark:bg-bg-base-dark rounded-lg border border-border-subtle dark:border-border-subtle-dark">
          <h2 className="text-2xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-4">
            Core Aspects (More Details Coming Soon)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-md">
            <li><strong>Problem Decomposition:</strong> Breaking large problems into smaller, solvable parts.</li>
            <li><strong>Pattern Recognition:</strong> Identifying recurring structures and solutions.</li>
            <li><strong>Algorithm Design:</strong> Creating step-by-step instructions (e.g., sorting, searching, graph traversal).</li>
            <li><strong>Data Structures:</strong> Understanding and applying appropriate data structures (arrays, lists, trees, hash maps).</li>
            <li><strong>Complexity Analysis:</strong> Evaluating time and space efficiency (Big O notation).</li>
            <li><strong>Optimization Techniques:</strong> Improving algorithm performance.</li>
          </ul>
        </div>

        <p className="mt-6 text-accent dark:text-accent-dark font-semibold text-center py-4">
          Examples of algorithmic problem-solving in various contexts will be shared here soon.
        </p>
      </section>
    </div>
  );
};

export default AlgoThinkingPage;