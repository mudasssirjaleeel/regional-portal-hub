
import React from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, caseStudies } from '@/data';
import { useRegion } from '@/context/RegionContext';

const Index = () => {
  const { currentRegion } = useRegion();
  
  // Filter case studies by region or show all if none available for the current region
  const filteredCaseStudies = caseStudies
    .filter(study => study.region === currentRegion)
    .slice(0, 3);
  
  // Fallback to first 3 case studies if none available for the current region
  const displayCaseStudies = filteredCaseStudies.length > 0 
    ? filteredCaseStudies 
    : caseStudies.slice(0, 3);

  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end software development services tailored to your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services">
              <Button className="bg-salt-blue hover:bg-salt-darkBlue text-white">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our latest projects and success stories from {currentRegion.replace('-', ' ')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayCaseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/case-studies">
              <Button className="bg-salt-blue hover:bg-salt-darkBlue text-white">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Salt Technologies?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We deliver high-quality software solutions that help businesses streamline operations, increase efficiency, and drive growth.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Expert Development Team</h3>
                    <p className="text-gray-600">Our team consists of experienced developers, designers, and project managers who are experts in their respective fields.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Tailored Solutions</h3>
                    <p className="text-gray-600">We develop custom software solutions designed specifically to address your business challenges and meet your unique requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Global Presence</h3>
                    <p className="text-gray-600">With offices in Saudi Arabia, Pakistan, USA, and Europe, we provide localized services to clients around the world.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Proven Track Record</h3>
                    <p className="text-gray-600">Our portfolio includes successful projects for clients across various industries, demonstrating our ability to deliver results.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/about">
                  <Button className="bg-salt-blue hover:bg-salt-darkBlue text-white">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/public/lovable-uploads/3a4761fd-2d2b-4092-b132-7eff34d1557d.png" 
                  alt="Team collaboration" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-salt-blue rounded-lg p-6 text-white shadow-lg max-w-xs hidden lg:block">
                <p className="font-semibold text-lg mb-2">Client Satisfaction</p>
                <p>95% of our clients rate our services as excellent and continue to work with us on multiple projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-salt-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with our custom software solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-salt-blue hover:bg-gray-100">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
