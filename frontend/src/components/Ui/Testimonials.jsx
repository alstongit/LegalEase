import React from 'react';

const TestimonialCard = ({ quote, name, title }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-sm shadow-sm">
      <div className="text-blue-500 text-xl mb-4">"</div>
      <p className="text-gray-700 mb-4 text-left">{quote}</p>
      <div className="text-left">
        <p className="font-bold">{name}</p>
        <p className="text-gray-600 text-sm">{title}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-100 py-22 px-4 text-center">
      <p className="text-blue-500 text-sm">Testimonials</p>
      <h2 className="text-3xl font-bold mt-2 mb-4">What Our Users Say</h2>
      <p className="text-gray-600 mb-10">Trusted by legal professionals and businesses worldwide.</p>
      
      <div className="flex flex-wrap justify-center gap-6">
        <TestimonialCard 
          quote="LegalEase has transformed our contract review process. We've saved countless hours and identified several unfair clauses that would have caused problems down the line."
          name="Sarah Johnson"
          title="Legal Counsel, TechCorp"
        />
        
        <TestimonialCard 
          quote="As a small business owner, I don't have the resources for extensive legal reviews. LegalEase gives me peace of mind when signing contracts with larger companies."
          name="Michael Chen"
          title="CEO, Startup Innovations"
        />
        
        <TestimonialCard 
          quote="The AI analysis is impressively accurate. It caught subtle language that our team missed during manual review. A game-changer for our legal department."
          name="David Rodriguez"
          title="Head of Legal, Enterprise Solutions"
        />
      </div>
    </div>
  );
};

export default TestimonialsSection;