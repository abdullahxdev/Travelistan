import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Star, MapPin, Calendar, CheckCircle, Phone, Mail } from 'lucide-react';
import { tours } from '../data/tours';

const TourDetail = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState('overview');

  const tour = tours.find(t => t.id === parseInt(id || '0'));

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tour not found</h1>
          <Link to="/tours" className="text-emerald-600 hover:text-emerald-700">
            Back to Tours
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'included', label: 'What\'s Included' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <div className="text-white">
              <div className="flex items-center space-x-2 mb-2">
                <Link
                  to="/tours"
                  className="flex items-center space-x-2 text-white hover:text-emerald-300 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>Back to Tours</span>
                </Link>
              </div>
              <h1 className="text-4xl font-bold mb-2">{tour.name}</h1>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span>{tour.rating}</span>
                  <span>({tour.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-5 w-5" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-5 w-5" />
                  <span>{tour.groupSize}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        selectedTab === tab.id
                          ? 'border-emerald-500 text-emerald-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {selectedTab === 'overview' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Overview</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{tour.description}</p>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {tour.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-emerald-500" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Destinations</h3>
                    <div className="flex flex-wrap gap-2">
                      {tour.destinations.map((destination, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                        >
                          {destination}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTab === 'itinerary' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Tour Itinerary</h2>
                    <div className="space-y-6">
                      {tour.itinerary.map((day, index) => (
                        <div key={index} className="flex space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                              {day.day}
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{day.title}</h3>
                            <p className="text-gray-600">{day.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTab === 'included' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tour.included.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-emerald-500" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  PKR {tour.price.toLocaleString()}
                </div>
                <div className="text-gray-600">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Duration</span>
                  <span className="font-medium">{tour.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Group Size</span>
                  <span className="font-medium">{tour.groupSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Difficulty</span>
                  <span className="font-medium">{tour.difficulty}</span>
                </div>
              </div>

              <button className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium mb-4">
                Book Now
              </button>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Need help planning?</p>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <a href="tel:+923001234567" className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-700">
                    <Phone className="h-4 w-4" />
                    <span>Call Us</span>
                  </a>
                  <a href="mailto:info@travelistan.pk" className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-700">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tour Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Available year-round</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Starts from Islamabad</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Professional guide included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;