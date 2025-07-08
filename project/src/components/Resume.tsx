// import React from 'react';
import { Download, FileText, Award, Briefcase } from 'lucide-react';

const Resume = () => {
  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Maintained 8.8 CGPA throughout the course',
      icon: Award,
      color: 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30'
    },
    {
      title: 'Full-Stack Development',
      description: 'Built 5+ production-ready web applications',
      icon: Briefcase,
      color: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30'
    },
    {
      title: 'AI/ML Exploration',
      description: 'Implementing ML models in real-world projects',
      icon: FileText,
      color: 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Download my complete resume to learn more about my experience and qualifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Resume preview */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                  P
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Payal</h3>
                  <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400">B.Tech ECE • CGPA: 8.8</p>
                  <p className="text-gray-500 dark:text-gray-500">Arya College of Engineering & IT</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Skills</h4>
                  <p className="text-gray-600 dark:text-gray-400">MERN Stack, C++, Python, AI/ML</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Projects</h4>
                  <p className="text-gray-600 dark:text-gray-400">Real Estate Platform, Task Manager, AI Movie Plot Generator</p>
                </div>
              </div>

              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent dark:from-gray-900/20 rounded-2xl pointer-events-none"></div>
            </div>
          </div>

          {/* Download section and achievements */}
          <div className="space-y-8">
            {/* Download button */}
            <div className="text-center md:text-left">
  <a
    href="/Resume.pdf"
    download
    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
  >
    <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
    Download Resume
  </a>
  <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
    PDF format • Last updated December 2024
  </p>
</div>


            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Key Highlights
              </h3>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className={`p-2 rounded-lg ${achievement.color}`}>
                    <achievement.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">8.8</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">5+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Skills</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;