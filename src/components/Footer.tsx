
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useRegion } from '@/context/RegionContext';
import { regions } from '@/data';

const Footer = () => {
  const { currentRegion } = useRegion();
  const regionData = regions.find(r => r.id === currentRegion);

  return (
    <footer className="bg-salt-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-bold text-white">SALT</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Delivering innovative software solutions across industries, tailored to your business needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-salt-blue">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-salt-blue">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-salt-blue">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-salt-blue">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-salt-blue">Web Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-salt-blue">Mobile App Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-salt-blue">Custom Software Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-salt-blue">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-salt-blue">Quality Assurance & Testing</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-salt-blue">DevOps Services</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-salt-blue">About Us</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-salt-blue">Case Studies</Link>
              </li>
              <li>
                <Link to="/technologies" className="text-gray-300 hover:text-salt-blue">Technologies</Link>
              </li>
              <li>
                <Link to="/estimation" className="text-gray-300 hover:text-salt-blue">Get Estimation</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-salt-blue">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact {regionData?.flag} {regionData?.name}</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin size={20} className="mr-3 flex-shrink-0 text-salt-blue" />
                <span className="text-gray-300">{regionData?.address}</span>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-3 flex-shrink-0 text-salt-blue" />
                <span className="text-gray-300">{regionData?.phone}</span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-3 flex-shrink-0 text-salt-blue" />
                <span className="text-gray-300">{regionData?.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SALT Technologies. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-salt-blue">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-salt-blue">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 text-sm hover:text-salt-blue">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
