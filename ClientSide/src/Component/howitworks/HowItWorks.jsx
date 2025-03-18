import React from 'react';
import './HowItWorks.css'; // Assuming you'll add CSS in a separate file

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Tell Us What You Need',
      description: 'Simply type or voice your shopping needs - from specific products to general categories. Our AI understands natural language!',
    },
    {
      number: '02',
      title: 'Smart Product Matching',
      description: 'Our AI analyzes millions of products across stores, considering your preferences, budget, and reviews to find the best matches.',
    },
    {
      number: '03',
      title: 'Get Personalized Results',
      description: 'Receive curated recommendations with prices, store options, and direct links - all tailored just for you.',
    },
    {
      number: '04',
      title: 'Shop with Confidence',
      description: 'Compare options, track prices, and complete your purchase through our secure checkout process.',
    },
  ];

  return (
    <>
    <section className="how-it-works">
      <div className="container">
      <div className="relative overflow-hidden whitespace-nowrap mt-8">
  <div className="animate-marquee text-orange-500 text-xl font-bold text-center px-4 py-2" style={{animationDuration: "10s" ,margin: "1.5rem 0" }}>
    Our AI Shopping Assistant makes finding the perfect products effortless
  </div>
</div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">What Our Users Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The AI shopping assistant helped me find exactly what I was looking for at 30% less than I would have paid elsewhere.",
                author: "Sarah J.",
                role: "Pro User"
              },
              {
                quote: "I used to spend hours comparison shopping online. Now I just open the app and within minutes I've found what I need at the best price.",
                author: "Michael T.",
                role: "Family Plan User"
              },
              {
                quote: "The personalized recommendations are spot on! It's like having a personal shopper who knows my style perfectly.",
                author: "Emma L.",
                role: "Pro User"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <div className="relative py-20 bg-gradient-to-br from-purple-600 to-blue-600" style={{paddingTop: "3rem", paddingBottom: "3rem"}}>
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Shopping Experience?
            </h2>
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                Get Started Now
              </button>
              <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
    </>
    
  );
};

export default HowItWorks;