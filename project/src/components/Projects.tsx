// import React from 'react';
import { ExternalLink, Github, Home, CheckSquare, Film } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Real Estate Website',
      description: 'A comprehensive MERN-stack platform where users can list, search, buy, or sell properties without brokers. Features an integrated ML-based property price prediction system using the Bangalore housing dataset.',
      icon: Home,
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Machine Learning', 'Python'],
      features: [
        'User authentication and profiles',
        'Property listing and search',
        'ML price prediction',
        'Interactive maps integration',
        'Real-time chat system'
      ],
      liveDemo: 'https://heroic-mousse-a26ba3.netlify.app/',
      github: 'https://github.com/TechiePihu90/RealEstateApp',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Task Manager App',
      description: 'A full-featured task tracking web application built with the MERN stack. Enables users to create, update, and delete tasks while managing priorities and tracking progress with secure authentication.',
      icon: CheckSquare,
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
      features: [
        'Task CRUD operations',
        'Priority management',
        'Progress tracking',
        'User authentication',
        'Responsive design'
      ],
      liveDemo: null,
      github: 'https://github.com/TechiePihu90/TaskManager',
      color: 'green'
    },
    {
      id: 3,
      title: 'Movie Plot Generator',
      description: 'An innovative AI-powered application using the Gemini API that takes custom input outlines and generates unique, creative movie plots using generative AI technology.',
      icon: Film,
      tech: ['React', 'Gemini API', 'JavaScript', 'CSS3', 'REST API'],
      features: [
        'AI-powered plot generation',
        'Custom input handling',
        'Real-time API integration',
        'Interactive UI design',
        'Export functionality'
      ],
      liveDemo: null,
      github: 'https://github.com/TechiePihu90/MoviePlotGenerator',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        icon: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
        button: 'bg-blue-600 hover:bg-blue-700 text-white',
        outline: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        icon: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
        button: 'bg-green-600 hover:bg-green-700 text-white',
        outline: 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        icon: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
        button: 'bg-purple-600 hover:bg-purple-700 text-white',
        outline: 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-gray-900'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my development journey from full-stack web applications to AI-powered solutions
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`md:flex ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                {/* Project Info */}
                <div className="md:w-2/3 p-8 md:p-12">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-lg mr-4 ${getColorClasses(project.color).icon}`}>
                      <project.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${getColorClasses(project.color).button}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-6 py-3 border-2 rounded-lg font-medium transition-all duration-300 ${getColorClasses(project.color).outline}`}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </div>
                </div>

                {/* Features List */}
                <div className={`md:w-1/3 p-8 md:p-12 ${getColorClasses(project.color).bg}`}>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start"
                      >
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                          project.color === 'blue' ? 'bg-blue-500' :
                          project.color === 'green' ? 'bg-green-500' :
                          'bg-purple-500'
                        }`}></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more projects or collaborate?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;