import React from 'react';
import { GraduationCap, Code, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate third-year Electronics and Communication Engineering student at{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Arya College of Engineering & IT
              </span>{' '}
              with a strong academic record of{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                8.8 CGPA
              </span>.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in technology spans from mastering core programming languages like C and C++ 
              to building full-stack web applications with the MERN stack. I'm particularly drawn to 
              the intersection of web development and artificial intelligence, constantly exploring 
              new possibilities in AI and Machine Learning.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me experimenting with new technologies, contributing 
              to open-source projects, or learning about the latest trends in AI and web development.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">ECE • CGPA: 8.8</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Arya College of Engineering & IT
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                  <Code className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Development</h3>
                  <p className="text-gray-600 dark:text-gray-400">MERN Stack</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Full-stack web development with modern technologies
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                  <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI/ML</h3>
                  <p className="text-gray-600 dark:text-gray-400">Exploring</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Diving deep into Artificial Intelligence and Machine Learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;