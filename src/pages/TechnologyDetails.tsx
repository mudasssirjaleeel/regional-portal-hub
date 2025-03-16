
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { technologies } from '@/data';
import NotFound from './NotFound';

const TechnologyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const technology = technologies.find(t => t.id === id);

  if (!technology) {
    return <NotFound />;
  }

  return (
    <div>
      <div className="hero-gradient py-16">
        <div className="container mx-auto px-4">
          <Link to="/technologies" className="inline-flex items-center text-white mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Technologies
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{technology.name}</h1>
          <p className="text-xl text-white max-w-3xl">{technology.description}</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2>About {technology.name}</h2>
              <p className="text-gray-600">
                {technology.name} is a powerful technology that enables businesses to create robust and scalable software solutions.
                Our team of experts has extensive experience working with {technology.name} to deliver high-quality applications
                that meet our clients' specific requirements.
              </p>

              <h2 className="mt-8">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="flex items-start">
                  <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Scalability</h3>
                    <p className="text-gray-600">Build applications that can grow with your business and handle increasing loads.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Performance</h3>
                    <p className="text-gray-600">Deliver fast and responsive applications that provide an excellent user experience.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Security</h3>
                    <p className="text-gray-600">Implement robust security measures to protect your application and user data.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Flexibility</h3>
                    <p className="text-gray-600">Adapt to changing requirements and integrate with other technologies seamlessly.</p>
                  </div>
                </div>
              </div>

              <h2 className="mt-8">Our Expertise</h2>
              <p className="text-gray-600">
                At Salt Technologies, we have a team of {technology.name} specialists who can help you leverage this technology
                to build innovative solutions. Our developers stay up-to-date with the latest advancements and best practices
                to ensure we deliver cutting-edge applications.
              </p>

              <h2 className="mt-8">Case Studies</h2>
              <p className="text-gray-600">
                We have successfully implemented {technology.name} in various projects across different industries.
                Our case studies demonstrate how we've used this technology to solve complex business challenges and
                deliver value to our clients.
              </p>
              
              <div className="mt-6 bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold">E-commerce Platform Modernization</h3>
                <p className="text-gray-600 mt-2">
                  We helped a retail client modernize their legacy e-commerce platform using {technology.name},
                  resulting in a 40% increase in page load speed and a 25% improvement in conversion rates.
                </p>
              </div>
              
              <div className="mt-4 bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold">Healthcare Management System</h3>
                <p className="text-gray-600 mt-2">
                  We developed a comprehensive healthcare management system using {technology.name} that streamlined
                  patient record management and improved operational efficiency by 30%.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Want to use {technology.name} for your next project?</h3>
              <p className="text-gray-600 mb-6">Contact us today to discuss how we can help you leverage {technology.name} for your specific needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-salt-blue hover:bg-salt-darkBlue text-white w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/estimation">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Request a Free Estimation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyDetails;
