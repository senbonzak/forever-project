import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Aloe Vera Gel",
    price: 29.99,
    image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Pure stabilized aloe vera gel with 99.7% inner leaf gel",
    category: "Wellness",
    benefits: ["Supports digestive health", "Natural antioxidants", "Immune system support"],
    ingredients: ["Aloe Vera Gel", "Citric Acid", "Potassium Sorbate"],
    inStock: true
  },
  {
    id: 2,
    name: "Forever Bee Pollen",
    price: 24.99,
    image: "https://images.pexels.com/photos/4021887/pexels-photo-4021887.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Natural bee pollen tablets for energy and vitality",
    category: "Nutrition",
    benefits: ["Natural energy boost", "Rich in vitamins", "Supports metabolism"],
    ingredients: ["Bee Pollen", "Honey", "Natural enzymes"],
    inStock: true
  },
  {
    id: 3,
    name: "Aloe Propolis Creme",
    price: 19.99,
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Moisturizing cream with aloe vera and propolis",
    category: "Skincare",
    benefits: ["Deep moisturization", "Skin protection", "Anti-aging properties"],
    ingredients: ["Aloe Vera", "Propolis", "Chamomile", "Comfrey"],
    inStock: true
  },
  {
    id: 4,
    name: "Forever Royal Jelly",
    price: 34.99,
    image: "https://images.pexels.com/photos/4021805/pexels-photo-4021805.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Premium royal jelly tablets for enhanced wellness",
    category: "Nutrition",
    benefits: ["Cellular regeneration", "Energy enhancement", "Immune support"],
    ingredients: ["Royal Jelly", "Honey", "Natural preservatives"],
    inStock: false
  },
  {
    id: 5,
    name: "Aloe Vera Gelly",
    price: 16.99,
    image: "https://images.pexels.com/photos/4021881/pexels-photo-4021881.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Topical aloe vera gel for skin care",
    category: "Skincare",
    benefits: ["Soothes irritated skin", "Moisturizes", "Cooling effect"],
    ingredients: ["Aloe Vera", "Triethanolamine", "Tocopherol"],
    inStock: true
  },
  {
    id: 6,
    name: "Forever Garcinia Plus",
    price: 42.99,
    image: "https://images.pexels.com/photos/4021844/pexels-photo-4021844.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Natural weight management supplement",
    category: "Wellness",
    benefits: ["Weight management", "Metabolism support", "Appetite control"],
    ingredients: ["Garcinia Cambogia", "Chromium", "Gymnema Sylvestre"],
    inStock: true
  }
];