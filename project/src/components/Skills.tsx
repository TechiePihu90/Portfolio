import React from 'react';
import { Code2, Database, Wrench, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: 'blue',
      skills: ['C', 'C++', 'JavaScript', 'Python']
    },
    {
      title: 'Frameworks & Libraries',
      icon: Database,
      color: 'green',
      skills: ['React', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'purple',
      skills: ['Git', 'GitHub', 'REST APIs', 'Postman', 'Gemini API']
    },
    {
      title: 'Currently Exploring',
      icon: Sparkles,
      color: 'orange',
      skills: ['AI', 'ML', 'TensorFlow', 'Data Structures & Algorithms']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and exploring AI/ML
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`p-3 rounded-lg mb-4 w-fit ${getColorClasses(category.color)}`}>
                <category.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center p-2 bg-white dark:bg-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      category.color === 'blue' ? 'bg-blue-500' :
                      category.color === 'green' ? 'bg-green-500' :
                      category.color === 'purple' ? 'bg-purple-500' :
                      'bg-orange-500'
                    }`}></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill progression bars */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Proficiency Levels
            </h3>
            <div className="space-y-4">
              {[
                { skill: 'JavaScript & React', level: 90 },
                { skill: 'Node.js & Express', level: 85 },
                { skill: 'MongoDB & Databases', level: 80 },
                { skill: 'C++ & DSA', level: 85 },
                { skill: 'AI/ML (Learning)', level: 60 }
              ].map((item) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {item.skill}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {item.level}%
                    </span>
                  </div>
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Quick Stats
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  8.8
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  CGPA
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                  5+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  3
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                  10+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;