
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { services } from '@/data';
import NotFound from './NotFound';

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  if (!service) {
    return <NotFound />;
  }

  return (
    <div>
      <div className="hero-gradient py-16">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-white mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h1>
          <p className="text-xl text-white max-w-3xl">{service.description}</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2>Overview</h2>
              <p className="text-gray-600">{service.details}</p>

              <h2 className="mt-8">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="flex items-start">
                  <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Increased Efficiency</h3>
                    <p className="text-gray-600">Streamline your business operations and automate repetitive tasks to save time and resources.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Enhanced User Experience</h3>
                    <p className="text-gray-600">Create intuitive interfaces that make it easy for users to interact with your application.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Improved Security</h3>
                    <p className="text-gray-600">Protect your sensitive data with robust security measures and adherence to best practices.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Scalable Solutions</h3>
                    <p className="text-gray-600">Build applications that can grow and evolve with your business needs.</p>
                  </div>
                </div>
              </div>

              <h2 className="mt-8">Our Approach</h2>
              <p className="text-gray-600">
                At Salt Technologies, we follow a collaborative and iterative approach to {service.title.toLowerCase()}. We work closely with our clients throughout the development process to ensure the final product meets their requirements and exceeds expectations. Our team of experienced professionals uses the latest technologies and industry best practices to deliver high-quality solutions on time and within budget.
              </p>

              <h2 className="mt-8">Technologies We Use</h2>
              <p className="text-gray-600">
                Depending on your project requirements, we leverage a variety of modern technologies to build robust and scalable solutions. Our technology stack includes but is not limited to:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600">
                <li>Frontend: React, Angular, Vue.js, Next.js</li>
                <li>Backend: Node.js, Python, Java, .NET</li>
                <li>Mobile: React Native, Flutter, Swift, Kotlin</li>
                <li>Database: MySQL, PostgreSQL, MongoDB, Firebase</li>
                <li>Cloud: AWS, Azure, Google Cloud Platform</li>
                <li>DevOps: Docker, Kubernetes, Jenkins, GitHub Actions</li>
              </ul>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-gray-600 mb-6">Contact us today to discuss how we can help with your {service.title.toLowerCase()} needs.</p>
              <Link to="/contact">
                <Button className="bg-salt-blue hover:bg-salt-darkBlue text-white">
                  Request a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
