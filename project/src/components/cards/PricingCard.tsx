// PricingCard.tsx
import React from 'react';
import { Check, Star, ArrowRight, Zap } from 'lucide-react';

interface PricingCardProps {
  plan: {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    popular: boolean;
    gradient: string;
  };
  index: number;
  visible: boolean;
  hovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  cardRef: (el: HTMLDivElement | null) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  index,
  visible,
  hovered,
  onHoverStart,
  onHoverEnd,
  cardRef,
}) => {
  const [fromColor, toColor] = plan.gradient.split(' '); // e.g., ['from-teal-100', 'to-green-200']

  return (
    <div
      ref={cardRef}
      data-index={index}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className={`relative bg-white rounded-3xl p-8 transition-all duration-500 transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${
        plan.popular
          ? 'border-2 border-blue-600 shadow-2xl scale-105 z-10'
          : 'border border-gray-200 hover:border-blue-200 hover:shadow-xl hover:scale-105'
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
            <Star className="w-4 h-4 mr-1 fill-current" />
            Most Popular
          </div>
        </div>
      )}

      {/* Card Hover Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 ${hovered ? 'opacity-50' : ''} rounded-3xl transition-opacity duration-500`}></div>

      <div className="relative z-10 group">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${plan.gradient} rounded-xl flex items-center justify-center ${hovered ? 'scale-110' : ''} transition-transform duration-300`}>
              <Zap className="w-6 h-6 text-white" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
          <p className="text-gray-600 mb-4">{plan.description}</p>
          <div className="flex items-baseline justify-center mb-4">
            <span className={`text-4xl font-bold transition-colors duration-300 ${
              plan.popular ? 'text-blue-600' : 'text-gray-900'
            }`}>
              {plan.price}
            </span>
            <span className="text-gray-600 ml-1">{plan.period}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button with Gradient */}
        <button
          className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center relative overflow-hidden 
            group-hover:bg-gradient-to-r ${fromColor} ${toColor}  text-white`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10">{plan.cta}</span>
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
        </button>
      </div>
    </div>
  );
};
