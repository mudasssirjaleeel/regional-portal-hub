
import React from 'react';
import Hero from '@/components/Hero';
import CaseStudyCard from '@/components/CaseStudyCard';
import { useRegion } from '@/context/RegionContext';
import { caseStudies } from '@/data';

const CaseStudies = () => {
  const { currentRegion } = useRegion();
  
  // Filter case studies by region
  const filteredCaseStudies = caseStudies.filter(
    study => study.region === currentRegion
  );

  return (
    <div>
      <Hero 
        small 
        title="Our Case Studies" 
        subtitle="Explore our portfolio of successful projects and see how we've helped businesses solve complex challenges."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-600">
              Discover how our software solutions have helped businesses in {currentRegion.replace('-', ' ')} transform their operations and achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.length > 0 ? (
              filteredCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500">
                  No case studies available for this region yet. Please check back later or select a different region.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
