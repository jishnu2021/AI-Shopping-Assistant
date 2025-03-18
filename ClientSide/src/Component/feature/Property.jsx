import  { 
    ShoppingCart, 
    Sparkles, 
    TagsIcon, 
    Clock, 
    TrendingUp, 
    Shield, 
    Gift, 
    CreditCard,
    ChevronRight
  } from 'lucide-react';
  
  const features = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "AI-Powered Recommendations",
      description: "Get personalized suggestions powered by advanced machine learning algorithms",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <TagsIcon className="w-10 h-10" />,
      title: "Smart Price Tracking",
      description: "Never miss a deal with real-time price alerts and predictions",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "Intelligent Lists",
      description: "Auto-categorized shopping lists with smart reordering suggestions",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Time-Saving Features",
      description: "Cut your shopping time in half with AI-powered shortcuts",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Trend Analysis",
      description: "Stay ahead with predictive trend analysis and market insights",
      color: "from-red-500 to-rose-600"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Secure Shopping",
      description: "Bank-grade encryption and advanced fraud protection systems",
      color: "from-indigo-500 to-violet-600"
    },
    {
      icon: <Gift className="w-10 h-10" />,
      title: "Exclusive Deals",
      description: "Access to members-only discounts and early-bird offers",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "Smart Budgeting",
      description: "AI-driven budget optimization and spending analytics",
      color: "from-teal-500 to-emerald-600"
    }
  ];
  
  const Property = () => {
    return (
      <div className="min-h-screen bg-[#fafafa] overflow-hidden">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-70" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
                Shopping Reimagined
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience the future of shopping with our AI-powered assistant that learns your preferences and makes every purchase decision effortless.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-2">
                  Start Your Journey
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-gray-800 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{paddingTop: "1rem", paddingBottom: "1rem"}}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 p-6 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`rounded-xl p-3 bg-gradient-to-br ${feature.color} text-white inline-block`}>
                  {feature.icon}
                </div>
                
                <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="mt-4 flex items-center text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* CTA Section */}
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
      </div>
    );
  };
  
  export default Property;
   