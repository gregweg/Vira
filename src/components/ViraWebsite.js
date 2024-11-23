'use client';

import React from 'react';
import { Menu, X, Instagram, Facebook, Twitter, ShoppingBag, ChevronRight } from 'lucide-react';

const ViraWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const NavLink = ({ href, children }) => (
    <a href={href} className="hover:text-orange-600 transition-colors">
      {children}
    </a>
  );

  const ProductCard = ({ title, price, imageSrc }) => (
    <div className="group cursor-pointer">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={imageSrc}
          alt={title}
          className="h-64 w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-800">{title}</h3>
          <p className="mt-1 text-sm text-orange-600 font-medium">${price}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-700">VIRA</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-gray-800">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/shop">Shop</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <ShoppingBag className="h-6 w-6 cursor-pointer hover:text-orange-600 transition-colors" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-orange-600">Home</a>
              <a href="/shop" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-orange-600">Shop</a>
              <a href="/about" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-orange-600">About</a>
              <a href="/contact" className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-orange-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/1080"
            alt="Hero"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-orange-700/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Strength Through Balance
          </h1>
          <p className="mt-6 text-xl text-stone-100 max-w-3xl">
            Premium yoga wear designed for men who embrace both power and flexibility.
          </p>
          <div className="mt-10">
            <a href="/shop" className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-orange-700 transition-colors">
              Shop Collection
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            title="Performance Yoga Shorts"
            price="68"
            imageSrc="/api/placeholder/400/400"
          />
          <ProductCard 
            title="Breathable Tank Top"
            price="45"
            imageSrc="/api/placeholder/400/400"
          />
          <ProductCard 
            title="Flex Pants"
            price="85"
            imageSrc="/api/placeholder/400/400"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-500">Shop</h3>
              <ul className="space-y-2">
                <li><a href="/shop/new-arrivals" className="hover:text-orange-400">New Arrivals</a></li>
                <li><a href="/shop/bestsellers" className="hover:text-orange-400">Bestsellers</a></li>
                <li><a href="/shop/pants" className="hover:text-orange-400">Pants</a></li>
                <li><a href="/shop/shorts" className="hover:text-orange-400">Shorts</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-500">About</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-orange-400">Our Story</a></li>
                <li><a href="/sustainability" className="hover:text-orange-400">Sustainability</a></li>
                <li><a href="/blog" className="hover:text-orange-400">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-500">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="hover:text-orange-400">Contact Us</a></li>
                <li><a href="/shipping" className="hover:text-orange-400">Shipping</a></li>
                <li><a href="/returns" className="hover:text-orange-400">Returns</a></li>
                <li><a href="/size-guide" className="hover:text-orange-400">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-500">Connect</h3>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 cursor-pointer hover:text-orange-400" />
                <Facebook className="h-6 w-6 cursor-pointer hover:text-orange-400" />
                <Twitter className="h-6 w-6 cursor-pointer hover:text-orange-400" />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-700">
            <p className="text-sm text-stone-400">© 2024 Vira. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ViraWebsite;