import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Users, Heart, Share2, Filter } from 'lucide-react';
import { destinations } from '../data/destinations';

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState('rating');

  const categories = ['All', 'Valley', 'City', 'Meadow'];
  const sortOptions = [
    { value: 'rating', label: 'Highest Rated' },
    { value: 'reviews', label: 'Most Reviewed' },
    { value: 'name', label: 'Name A-Z' }
  ];

  const filteredDestinations = selectedCategory === 'All' 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  const sortedDestinations = [...filteredDestinations].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Destinations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the most beautiful and adventurous destinations in Northern Pakistan
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

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedDestinations.length} destination{sortedDestinations.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedDestinations.map(destination => (
            <div key={destination.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {destination.category}
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => toggleFavorite(destination.id)}
                    className={`p-2 rounded-full ${
                      favorites.includes(destination.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white bg-opacity-80 text-gray-700 hover:bg-opacity-100'
                    } transition-colors`}
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-full bg-white bg-opacity-80 text-gray-700 hover:bg-opacity-100 transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{destination.rating}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{destination.location}</span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.slice(0, 3).map(highlight => (
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
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{destination.reviews} reviews</span>
                  </div>
                  <Link
                    to={`/destinations/${destination.id}`}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No destinations found for the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;