
import React from 'react';

const PythonPage: React.FC = () => {
  return (
    <div className="bg-bg-card dark:bg-bg-card-dark shadow-2xl rounded-xl p-6 md:p-10 animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-3">
          Python Development
        </h1>
        <p className="text-lg md:text-xl text-text-secondary dark:text-text-secondary-dark">
          Utilizing Python's versatility for web development, data science, and automation.
        </p>
      </header>

      <section className="space-y-6 text-text-secondary dark:text-text-secondary-dark">
        <p className="text-lg leading-relaxed">
          Python's readability and extensive libraries make it one of my preferred languages for a variety of tasks. I use Python for back-end development with frameworks like Django and Flask, for data analysis and machine learning (Pandas, NumPy, Scikit-learn, TensorFlow/PyTorch), and for scripting and automation.
        </p>
        
        <div className="p-6 bg-bg-base dark:bg-bg-base-dark rounded-lg border border-border-subtle dark:border-border-subtle-dark">
          <h2 className="text-2xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-4">
            Application Areas (More Details Coming Soon)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-md">
            <li><strong>Web Development:</strong> Django, Flask, REST APIs</li>
            <li><strong>Data Science & AI/ML:</strong> Pandas, NumPy, Matplotlib, Scikit-learn, TensorFlow, PyTorch</li>
            <li><strong>Automation & Scripting:</strong> System administration, task automation</li>
            <li><strong>API Interaction:</strong> Consuming and building APIs</li>
            <li><strong>Database Management:</strong> SQLAlchemy, ORMs</li>
          </ul>
        </div>

        <p className="mt-6 text-accent dark:text-accent-dark font-semibold text-center py-4">
          Projects showcasing my Python skills in various domains will be featured here shortly.
        </p>
      </section>
    </div>
  );
};

export default PythonPage;