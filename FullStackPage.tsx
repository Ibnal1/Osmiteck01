
import React from 'react';

const FullStackPage: React.FC = () => {
  return (
    <div className="bg-bg-card dark:bg-bg-card-dark shadow-2xl rounded-xl p-6 md:p-10 animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-3">
          Full-Stack Development
        </h1>
        <p className="text-lg md:text-xl text-text-secondary dark:text-text-secondary-dark">
          Building comprehensive and scalable web solutions from client-side to server-side.
        </p>
      </header>

      <section className="space-y-6 text-text-secondary dark:text-text-secondary-dark">
        <p className="text-lg leading-relaxed">
          My expertise in Full-Stack Development encompasses the entire software development lifecycle. I am proficient in designing responsive user interfaces, developing robust server-side logic, managing databases, and deploying applications. I enjoy creating seamless user experiences powered by efficient and maintainable code.
        </p>
        
        <div className="p-6 bg-bg-base dark:bg-bg-base-dark rounded-lg border border-border-subtle dark:border-border-subtle-dark">
          <h2 className="text-2xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-4">
            Key Areas & Technologies (More Details Coming Soon)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-md">
            <li><strong>Frontend:</strong> React, Next.js, Vue.js, Angular, HTML5, CSS3, JavaScript/TypeScript, Tailwind CSS</li>
            <li><strong>Backend:</strong> Node.js (Express.js), Python (Django/Flask), Java (Spring Boot)</li>
            <li><strong>Databases:</strong> MongoDB, PostgreSQL, MySQL, Firebase</li>
            <li><strong>APIs:</strong> RESTful API Design, GraphQL</li>
            <li><strong>DevOps & Deployment:</strong> Docker, CI/CD, AWS, Azure, GCP</li>
            <li><strong>Version Control:</strong> Git & GitHub/GitLab</li>
          </ul>
        </div>

        <p className="mt-6 text-accent dark:text-accent-dark font-semibold text-center py-4">
          Detailed project showcases and further insights into my full-stack capabilities are under development. Stay tuned!
        </p>
      </section>
    </div>
  );
};

export default FullStackPage;