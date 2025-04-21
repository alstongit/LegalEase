import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-sm mr-2"></div>
              <span className="font-bold text-lg">LegalEase</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              AI-powered legal document analysis to identify unfair clauses and protect your interests.
            </p>
            <div className="flex gap-4">
              <Facebook size={20} className="text-gray-400 hover:text-white" />
              <Twitter size={20} className="text-gray-400 hover:text-white" />
              <Linkedin size={20} className="text-gray-400 hover:text-white" />
            </div>
          </div>
          
          {/* Product Column */}
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Case Studies</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          {/* Legal Column */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          © 2025 LegalEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;