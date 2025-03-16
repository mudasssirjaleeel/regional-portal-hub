
import React from 'react';
import Hero from '@/components/Hero';
import { useRegion } from '@/context/RegionContext';
import { regions, teamMembers } from '@/data';
import TeamMemberCard from '@/components/TeamMemberCard';

const About = () => {
  const { currentRegion } = useRegion();
  
  // Filter team members by region
  const filteredTeamMembers = teamMembers.filter(
    member => member.region === currentRegion
  );

  const regionData = regions.find(r => r.id === currentRegion);

  return (
    <div>
      <Hero 
        small 
        title="About Salt Technologies" 
        subtitle="We build innovative software solutions that drive business growth and transformation."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Salt Technologies is a leading software development company with a global presence in Saudi Arabia, Pakistan, USA, and Europe. We specialize in creating custom software solutions that help businesses innovate, grow, and stay competitive in today's rapidly evolving digital landscape.
              </p>
              
              <p>
                Founded with a vision to deliver high-quality software solutions that drive real business value, we have grown into a team of passionate developers, designers, and technology experts who are dedicated to our clients' success. Our diverse team brings together a wealth of expertise in various technologies and industries, allowing us to provide comprehensive solutions tailored to your specific needs.
              </p>

              <h3 className="mt-8">Our Mission</h3>
              <p>
                Our mission is to empower businesses through innovative software solutions that solve complex challenges, improve operational efficiency, and create exceptional user experiences. We are committed to delivering high-quality software that exceeds our clients' expectations and helps them achieve their business goals.
              </p>

              <h3 className="mt-8">Our Values</h3>
              <ul>
                <li><strong>Excellence:</strong> We strive for excellence in everything we do, from the code we write to the service we provide.</li>
                <li><strong>Innovation:</strong> We embrace new technologies and approaches to solve complex problems and create cutting-edge solutions.</li>
                <li><strong>Collaboration:</strong> We believe in working closely with our clients to ensure we understand their needs and deliver solutions that meet their expectations.</li>
                <li><strong>Integrity:</strong> We conduct our business with honesty, transparency, and respect for our clients, partners, and employees.</li>
                <li><strong>Continuous Improvement:</strong> We are committed to learning and growth, constantly improving our skills and processes to deliver better results.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team in {regionData?.name}</h2>
            <p className="text-lg text-gray-600">
              Meet our talented team of professionals who are passionate about creating innovative software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTeamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">
              We are committed to delivering exceptional software solutions that meet your unique business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-salt-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-salt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-gray-600">
                Our team consists of experienced developers, designers, and project managers who are experts in their respective fields.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-salt-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-salt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
              <p className="text-gray-600">
                We understand the importance of deadlines and are committed to delivering projects on time and within budget.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-salt-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-salt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
              <p className="text-gray-600">
                We leverage the latest technologies and approaches to create innovative solutions that give our clients a competitive edge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
