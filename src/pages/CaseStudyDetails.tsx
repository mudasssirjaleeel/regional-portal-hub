
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { caseStudies } from '@/data';
import NotFound from './NotFound';

const CaseStudyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies.find(cs => cs.id === id);

  if (!caseStudy) {
    return <NotFound />;
  }

  return (
    <div>
      <div className="hero-gradient py-16">
        <div className="container mx-auto px-4">
          <Link to="/case-studies" className="inline-flex items-center text-white mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-white max-w-3xl">Client: {caseStudy.client}</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl mb-10">
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title} 
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>Overview</h2>
              <p className="text-gray-600">{caseStudy.description}</p>

              <h2 className="mt-8">The Challenge</h2>
              <p className="text-gray-600">{caseStudy.challenge}</p>

              <h2 className="mt-8">Our Solution</h2>
              <p className="text-gray-600">{caseStudy.solution}</p>

              <h2 className="mt-8">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <p className="text-gray-600">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to transform your business?</h3>
              <p className="text-gray-600 mb-6">Contact us today to discuss how we can help you achieve similar results.</p>
              <Link to="/contact">
                <Button className="bg-salt-blue hover:bg-salt-darkBlue text-white">
                  Get Started with a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetails;
