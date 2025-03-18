import  { Sparkles, ShoppingCart, Gift } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Shopping Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 mb-8">
          <Sparkles className="h-4 w-4 text-indigo-600 mr-2" />
          <span className="text-indigo-600 text-sm font-medium">AI-Powered Shopping Experience</span>
        </div> */}
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Your Personal</span>
              <span className="block text-indigo-600">Shopping Assistant</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              Get personalized product recommendations, compare prices, and discover deals tailored just for you with our AI-powered shopping companion.
            </p>
            <div className="mt-10 flex gap-4">
              <button className="px-8 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors">
                Start Shopping
              </button>
              <button className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Shopping Experience"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6">
              <img 
                src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=240&q=80"
                alt="AI Technology"
                className="w-40 h-40 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left" style={{marginTop: '5rem'}}>
          <div className="bg-white/80 backdrop-blur rounded-xl shadow-sm p-6 border border-gray-100">
            <ShoppingCart className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Smart Recommendations</h3>
            <p className="mt-2 text-gray-500">Get personalized product suggestions based on your preferences and shopping history.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur rounded-xl shadow-sm p-6 border border-gray-100">
            <Gift className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Best Deals</h3>
            <p className="mt-2 text-gray-500">Never miss a deal with our AI-powered price tracking and comparison system.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur rounded-xl shadow-sm p-6 border border-gray-100">
            <Sparkles className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Trend Analysis</h3>
            <p className="mt-2 text-gray-500">Stay ahead with insights on trending products and upcoming sales events.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
 