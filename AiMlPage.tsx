
import React from 'react';

const AiMlPage: React.FC = () => {
  return (
    <div className="bg-bg-card dark:bg-bg-card-dark shadow-2xl rounded-xl p-6 md:p-10 animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-3">
          AI/ML Integration
        </h1>
        <p className="text-lg md:text-xl text-text-secondary dark:text-text-secondary-dark">
          Leveraging Artificial Intelligence and Machine Learning to build intelligent applications.
        </p>
      </header>

      <section className="space-y-6 text-text-secondary dark:text-text-secondary-dark">
        <p className="text-lg leading-relaxed">
          I am passionate about integrating AI and Machine Learning models into software to create smarter, more efficient solutions. This includes natural language processing, predictive analytics, computer vision, and developing custom ML models to solve complex problems and enhance user experiences.
        </p>
        
        <div className="p-6 bg-bg-base dark:bg-bg-base-dark rounded-lg border border-border-subtle dark:border-border-subtle-dark">
          <h2 className="text-2xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-4">
            Focus Areas & Technologies (More Details Coming Soon)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-md">
            <li><strong>Machine Learning:</strong> Supervised & Unsupervised Learning, Deep Learning (Neural Networks)</li>
            <li><strong>Natural Language Processing (NLP):</strong> Text Analysis, Sentiment Analysis, Chatbots (e.g., using Gemini API)</li>
            <li><strong>Data Science Tools:</strong> Python, TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy</li>
            <li><strong>Model Deployment:</strong> Serving ML models via APIs, MLOps practices</li>
            <li><strong>Applications:</strong> Predictive Maintenance, Recommendation Systems, Anomaly Detection</li>
          </ul>
        </div>

        <p className="mt-6 text-accent dark:text-accent-dark font-semibold text-center py-4">
          Examples of AI/ML projects and deeper dives into specific techniques are currently being prepared. Check back soon!
        </p>
      </section>
    </div>
  );
};

export default AiMlPage;