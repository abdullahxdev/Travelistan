import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, MapPin, Filter } from 'lucide-react';
import { tours } from '../data/tours';

const Tours = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  const categories = ['All', 'Adventure', 'Trekking', 'Nature', 'Cultural'];
  const sortOptions = [
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price', label: 'Price: Low to High' },
    { value: 'duration', label: 'Duration' }
  ];

  const filteredTours = selectedCategory === 'All' 
    ? tours 
    : tours.filter(tour => tour.category === selectedCategory);

  const sortedTours = [...filteredTours].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'duration':
        return parseInt(a.duration) - parseInt(b.duration);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Adventure Tours</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our expertly guided tours to explore Northern Pakistan's most spectacular destinations
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

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedTours.map(tour => (
            <div key={tour.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {tour.category}
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  PKR {tour.price.toLocaleString()}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{tour.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{tour.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{tour.destinations.slice(0, 2).join(', ')}</span>
                    {tour.destinations.length > 2 && <span>+{tour.destinations.length - 2} more</span>}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.highlights.slice(0, 2).map(highlight => (
                    <span
                      key={highlight}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-gray-600">{tour.reviews} reviews</span>
                  </div>
                  <Link
                    to={`/tours/${tour.id}`}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedTours.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No tours found for the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tours;