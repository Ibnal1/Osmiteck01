
import React from 'react';

const ExpertiseCard: React.FC<{ title: string; description: string; icon: string; delay: string }> = ({ title, description, icon, delay }) => (
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

const TechCategory: React.FC<{ title: string; techs: string[]; delay: string }> = ({ title, techs, delay }) => (
 <div className="mb-6 opacity-0 animate-fadeInUp" style={{ animationDelay: delay }}>
    <h4 className="text-xl font-medium font-heading text-primary mb-3">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {techs.map((tech) => (
        <span key={tech} className="bg-bg-base dark:bg-bg-base-dark text-text-secondary dark:text-text-secondary-dark border border-border-subtle/70 dark:border-border-subtle-dark/70 hover:border-primary/70 dark:hover:border-primary/70 hover:text-primary dark:hover:text-primary px-3 py-1 rounded-full text-xs font-medium shadow-sm transition-colors duration-200">
          {tech}
        </span>
      ))}
    </div>
  </div>
);


const SoftwareDevelopmentPage: React.FC = () => {
  const expertiseAreas = [
    { 
      title: "Full-Stack Web Development", 
      description: "Crafting responsive and dynamic web applications from front-end UIs to back-end logic and APIs. Proficient in MERN, MEAN, and Python-based stacks.",
      icon: "🌐",
      delay: "0.4s"
    },
    { 
      title: "AI & Machine Learning Integration", 
      description: "Developing intelligent systems by integrating AI/ML models for tasks like data analysis, predictive modeling, and process automation.",
      icon: "🤖",
      delay: "0.6s"
    },
    { 
      title: "FinTech Solutions", 
      description: "Building secure, scalable, and compliant financial technology applications, including trading bots, analytics platforms, and payment integrations.",
      icon: "💹",
      delay: "0.8s"
    },
     { 
      title: "Cloud Solutions & DevOps", 
      description: "Designing and deploying scalable applications on cloud platforms (AWS, Azure, GCP) with a focus on CI/CD, containerization, and infrastructure as code.",
      icon: "☁️",
      delay: "1.0s"
    },
  ];

  const techStack = {
    frontend: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "TypeScript"],
    backend: ["Node.js (Express)", "Python (Django, Flask)", "Java (Spring Boot)", "Ruby on Rails", "PHP (Laravel)"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
    aiML: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NLTK"],
    cloudDevOps: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "Git"],
  };

  return (
    <div className="bg-bg-card dark:bg-bg-card-dark shadow-2xl dark:shadow-2xl rounded-xl overflow-hidden transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/80 via-primary/60 to-bg-base dark:to-bg-base-dark p-8 md:p-12 text-text-primary dark:text-text-primary-dark">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-4 opacity-0 animate-fadeInUp">
            Crafting Digital Excellence
          </h1>
          <p className="text-xl md:text-2xl font-light text-text-primary dark:text-text-primary-dark mb-8 max-w-3xl mx-auto opacity-0 animate-fadeInUp animation-delay-200">
            Building innovative, scalable, and user-centric software solutions to bring your vision to life.
          </p>
        </div>
      </div>

      <div className="p-6 md:p-10">
        {/* My Software Development Expertise Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-8 md:mb-10 text-center opacity-0 animate-fadeInUp animation-delay-200">
            My Software Development Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {expertiseAreas.map(area => <ExpertiseCard key={area.title} {...area} />)}
          </div>
        </section>

        {/* Technologies & Tools Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-8 md:mb-10 text-center opacity-0 animate-fadeInUp animation-delay-400">
            Technologies & Tools I Use
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            <TechCategory title="Frontend Development" techs={techStack.frontend} delay="0.6s" />
            <TechCategory title="Backend Development" techs={techStack.backend} delay="0.7s" />
            <TechCategory title="Databases" techs={techStack.databases} delay="0.8s" />
            <TechCategory title="AI & Machine Learning" techs={techStack.aiML} delay="0.9s" />
            <TechCategory title="Cloud & DevOps" techs={techStack.cloudDevOps} delay="1.0s" />
          </div>
        </section>

        {/* Featured Projects Section (Placeholder) */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-8 text-center opacity-0 animate-fadeInUp animation-delay-600">
            Featured Projects
          </h2>
          <div className="text-center p-8 bg-bg-base dark:bg-bg-base-dark rounded-lg shadow-md dark:shadow-md border border-border-subtle dark:border-border-subtle-dark opacity-0 animate-fadeInUp animation-delay-800">
            <p className="text-xl text-text-secondary dark:text-text-secondary-dark mb-4">
              Exciting software projects are in the pipeline!
            </p>
            <p className="text-text-secondary/80 dark:text-text-secondary-dark/80">
              Check back soon to see detailed case studies and live demos of my work.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center py-8 md:py-12 opacity-0 animate-fadeInUp animation-delay-800">
          <h2 className="text-3xl md:text-4xl font-semibold font-heading text-text-primary dark:text-text-primary-dark mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark mb-8 max-w-xl mx-auto">
            Let's collaborate to build something amazing. I'm always excited to discuss new ideas and challenges.
          </p>
          <button 
            className="bg-gradient-to-r from-primary-light to-primary text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:shadow-primary/40 dark:hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300 text-lg"
            onClick={() => alert('Contact functionality coming soon!')}
          >
            Get in Touch
          </button>
        </section>
      </div>
    </div>
  );
};

export default SoftwareDevelopmentPage;