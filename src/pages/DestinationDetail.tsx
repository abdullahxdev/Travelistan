import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, Users, Heart, Share2, Calendar, Clock, Mountain, Camera, ArrowLeft } from 'lucide-react';
import { destinations } from '../data/destinations';

const DestinationDetail = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const destination = destinations.find(dest => dest.id === parseInt(id || '0'));

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Destination not found</h1>
          <Link to="/destinations" className="text-emerald-600 hover:text-emerald-700">
            Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={destination.gallery[selectedImage]}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <div className="flex items-center justify-between text-white">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Link
                    to="/destinations"
                    className="flex items-center space-x-2 text-white hover:text-emerald-300 transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    <span>Back to Destinations</span>
                  </Link>
                </div>
                <h1 className="text-4xl font-bold mb-2">{destination.name}</h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-5 w-5" />
                    <span>{destination.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span>{destination.rating}</span>
                    <span>({destination.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-3 rounded-full ${
                    isFavorite ? 'bg-red-500' : 'bg-white bg-opacity-20'
                  } transition-colors`}
                >
                  <Heart className="h-6 w-6" />
                </button>
                <button className="p-3 rounded-full bg-white bg-opacity-20 transition-colors">
                  <Share2 className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {destination.gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                selectedImage === index ? 'ring-2 ring-emerald-500' : ''
              }`}
            >
              <img
                src={image}
                alt={`${destination.name} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {destination.name}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{destination.description}</p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Activities</h3>
              <div className="flex flex-wrap gap-2">
                {destination.activities.map((activity, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">Best Time</span>
                  </div>
                  <span className="font-medium">{destination.bestTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">Duration</span>
                  </div>
                  <span className="font-medium">{destination.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Mountain className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">Altitude</span>
                  </div>
                  <span className="font-medium">{destination.altitude}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">Difficulty</span>
                  </div>
                  <span className="font-medium">{destination.difficulty}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Plan Your Visit</h3>
              <div className="space-y-3">
                <Link
                  to="/tours"
                  className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors text-center block font-medium"
                >
                  Book a Tour
                </Link>
                <Link
                  to="/hotels"
                  className="w-full bg-white border-2 border-emerald-600 text-emerald-600 py-3 px-4 rounded-lg hover:bg-emerald-50 transition-colors text-center block font-medium"
                >
                  Find Hotels
                </Link>
                <Link
                  to="/contact"
                  className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center block font-medium"
                >
                  Get Travel Guide
                </Link>
              </div>
            </div>

            {/* Reviews Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reviews</h3>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(destination.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold">{destination.rating}</span>
              </div>
              <p className="text-gray-600 mb-4">
                Based on {destination.reviews} reviews from travelers
              </p>
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                Read All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;