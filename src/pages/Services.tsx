
import React from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data';

const Services = () => {
  return (
    <div>
      <Hero 
        small 
        title="Our Comprehensive Software Development Services" 
        subtitle="From concept to deployment, we deliver end-to-end software solutions tailored to your business needs."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Custom Software Solutions</h2>
            <p className="text-lg text-gray-600">
              We provide a wide range of software development services to help businesses innovate, grow, and stay competitive in today's digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Development Process</h2>
            
            <div className="space-y-12 mt-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-salt-blue text-white flex items-center justify-center font-bold text-lg">1</div>
                  <div className="h-full w-0.5 bg-salt-blue mt-2 md:block hidden"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Discovery & Requirements</h3>
                  <p className="text-gray-600">
                    We begin by understanding your business objectives, challenges, and requirements. This phase involves stakeholder interviews, research, and defining project scope to ensure alignment.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-salt-blue text-white flex items-center justify-center font-bold text-lg">2</div>
                  <div className="h-full w-0.5 bg-salt-blue mt-2 md:block hidden"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Design & Prototyping</h3>
                  <p className="text-gray-600">
                    Our designers create wireframes and interactive prototypes to visualize the solution. We focus on user experience, interface design, and information architecture to ensure usability.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-salt-blue text-white flex items-center justify-center font-bold text-lg">3</div>
                  <div className="h-full w-0.5 bg-salt-blue mt-2 md:block hidden"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Development</h3>
                  <p className="text-gray-600">
                    Our development team builds the solution using modern technologies and best practices. We follow agile methodologies to ensure flexibility, transparency, and regular deliveries.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-salt-blue text-white flex items-center justify-center font-bold text-lg">4</div>
                  <div className="h-full w-0.5 bg-salt-blue mt-2 md:block hidden"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Testing & Quality Assurance</h3>
                  <p className="text-gray-600">
                    Our QA team conducts comprehensive testing to ensure the solution meets the highest quality standards. This includes functional testing, performance testing, security testing, and user acceptance testing.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-salt-blue text-white flex items-center justify-center font-bold text-lg">5</div>
                  <div className="h-full w-0.5 bg-salt-blue mt-2 md:block hidden"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Deployment</h3>
                  <p className="text-gray-600">
                    We deploy the solution to production environments, ensuring a smooth transition. Our DevOps team handles configuration, automation, and monitoring to minimize disruption.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-salt-blue text-white flex items-center justify-center font-bold text-lg">6</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Support & Maintenance</h3>
                  <p className="text-gray-600">
                    We provide ongoing support and maintenance services to ensure your solution continues to perform optimally. This includes bug fixes, updates, security patches, and feature enhancements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
