
import React from 'react';
import Hero from '@/components/Hero';
import TechnologyCard from '@/components/TechnologyCard';
import { technologies } from '@/data';

const Technologies = () => {
  return (
    <div>
      <Hero 
        small 
        title="Technologies We Use" 
        subtitle="We leverage cutting-edge technologies to build robust and scalable software solutions."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-lg text-gray-600">
              We use a wide range of modern technologies to deliver high-quality software solutions that meet your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((technology) => (
              <TechnologyCard key={technology.id} technology={technology} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Development Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Frontend Technologies</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>React.js</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>Angular</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>Vue.js</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>Next.js</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>TypeScript</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>Tailwind CSS</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Backend Technologies</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>Node.js</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>Python (Django, Flask)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>Java (Spring)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>.NET Core</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>PHP (Laravel)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>GraphQL</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Mobile Technologies</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>React Native</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>Flutter</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>Swift (iOS)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>Kotlin (Android)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>Xamarin</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>Progressive Web Apps (PWA)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Cloud & DevOps</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>AWS</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>Azure</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>Google Cloud Platform</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>Docker</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>Kubernetes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-salt-blue rounded-full mr-2"></div>
                    <span>CI/CD (Jenkins, GitHub Actions)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
