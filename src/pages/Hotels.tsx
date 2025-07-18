import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Wifi, Car, Coffee, Filter } from 'lucide-react';
import { hotels } from '../data/hotels';

const Hotels = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  const categories = ['All', 'Luxury', 'Resort', 'Budget'];
  const sortOptions = [
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price', label: 'Price: Low to High' },
    { value: 'name', label: 'Name A-Z' }
  ];

  const filteredHotels = selectedCategory === 'All' 
    ? hotels 
    : hotels.filter(hotel => hotel.category === selectedCategory);

  const sortedHotels = [...filteredHotels].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const getAmenityIcon = (amenity: string) => {
    if (amenity.toLowerCase().includes('wifi')) return <Wifi className="h-4 w-4" />;
    if (amenity.toLowerCase().includes('parking')) return <Car className="h-4 w-4" />;
    if (amenity.toLowerCase().includes('restaurant')) return <Coffee className="h-4 w-4" />;
    return <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>;
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hotels & Accommodation</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find comfortable and convenient places to stay during your Northern Pakistan adventure
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedHotels.map(hotel => (
            <div key={hotel.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {hotel.category}
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  PKR {hotel.price.toLocaleString()}/night
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{hotel.rating}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{hotel.location}</span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{hotel.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.slice(0, 4).map(amenity => (
                    <div
                      key={amenity}
                      className="flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-gray-600">{hotel.reviews} reviews</span>
                  </div>
                  <Link
                    to={`/hotels/${hotel.id}`}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedHotels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hotels found for the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotels;