import React from 'react';
import { Leaf, Heart, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-green-50 to-green-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Découvrez la Puissance de la
              <span className="text-green-600"> Nature</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Produits Forever Living de qualité supérieure pour votre bien-être et votre beauté, 
              fabriqués à partir d'ingrédients naturels purs.
            </p>
            <a
              href="#products"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Découvrir nos produits
              <Leaf className="ml-2 h-5 w-5" />
            </a>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Produits Forever Living"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  <Shield className="h-6 w-6 text-blue-500" />
                  <Leaf className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">100% Naturel</p>
                  <p className="text-xs text-gray-500">Qualité garantie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;