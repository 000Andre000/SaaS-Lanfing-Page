import React from 'react';
import { CheckCircle } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  highlights: string[];
  gradient: string;
  visible: boolean;
  index: number;
  cardRef: (el: HTMLDivElement | null) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  highlights,
  gradient,
  visible,
  index,
  cardRef
}) => {
  return (
    <div
      ref={cardRef}
      data-index={index}
      className={`group relative bg-black border border-cyan-200 rounded-2xl p-8 hover:shadow-2xl hover:border-transparent transition-all duration-500 transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Hover Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 rounded-2xl transition-opacity duration-500`} />

      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 opacity-100 transition-opacity duration-500 blur-sm" />

      <div className="relative z-10">
        <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-500 mb-6 leading-relaxed">{description}</p>

        <ul className="space-y-2">
          {highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
              <CheckCircle className="w-4 h-4 group-hover:text-green-500 mr-2 flex-shrink-0" />
              <p className="group-hover:text-green-400 ease-in">{highlight}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureCard;
