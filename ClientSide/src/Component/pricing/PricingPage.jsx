import  { Check, Star } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for getting started",
    features: [
      "AI-powered recommendations",
      "Basic price tracking",
      "Shopping list management",
      "Email support"
    ],
    color: "from-gray-500 to-gray-600",
    popular: false
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "Best for active shoppers",
    features: [
      "Everything in Basic",
      "Advanced price predictions",
      "Instant deal alerts",
      "Priority support",
      "Smart budget planning",
      "Multiple wishlists"
    ],
    color: "from-purple-500 to-blue-600",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$29.99",
    period: "per month",
    description: "For power users & teams",
    features: [
      "Everything in Pro",
      "Family accounts",
      "API access",
      "Custom integrations",
      "24/7 phone support",
      "Advanced analytics"
    ],
    color: "from-blue-600 to-cyan-600",
    popular: false
  }
];

const Pricing = () => {
  return (
    <div className="bg-gray-50 py-20" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent <span className="text-purple-600">Pricing</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl p-8 transition-transform duration-300 hover:scale-105 ${
                plan.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <div className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4 fill-current" /> Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`rounded-full p-1 bg-gradient-to-r ${plan.color}`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/30'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-full shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Plan?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us for customized solutions that fit your specific requirements.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
 