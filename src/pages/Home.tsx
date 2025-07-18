import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Users, Camera, Mountain, Navigation, Heart, Share2, ArrowRight } from 'lucide-react';
import { destinations } from '../data/destinations';
import GhizerImage from '../images/Ghizer.jpg';
import HarmoshValley from '../images/Harmosh Valley.jpeg';

const Home = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${GhizerImage})` }}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative text-center px-4">
          <h2 className="text-5xl font-bold mb-4">Discover Northern Pakistan</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore the breathtaking beauty of Pakistan's northern regions - from majestic valleys to towering peaks
          </p>
          <div className="flex items-center justify-center space-x-4 flex-wrap">
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2 mb-2">
              <MapPin className="h-5 w-5" />
              <span>15+ Destinations</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2 mb-2">
              <Users className="h-5 w-5" />
              <span>5000+ Travelers</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2 mb-2">
              <Camera className="h-5 w-5" />
              <span>10k+ Photos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Destinations</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the most popular and breathtaking destinations in Northern Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredDestinations.map(destination => (
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
                    className={`p-2 rounded-full ${favorites.includes(destination.id)
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
                  <h4 className="text-xl font-bold text-gray-900">{destination.name}</h4>
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

        <div className="text-center">
          <Link
            to="/destinations"
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
          >
            <span>View All Destinations</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/tours" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
              <div className="text-emerald-600 mb-4">
                <Mountain className="h-12 w-12" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Adventure Tours</h4>
              <p className="text-gray-600 mb-4">Join guided tours to explore the most spectacular destinations</p>
              <div className="flex items-center text-emerald-600 group-hover:translate-x-2 transition-transform">
                <span className="font-medium">Explore Tours</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link to="/hotels" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
              <div className="text-emerald-600 mb-4">
                <Navigation className="h-12 w-12" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Comfortable Stay</h4>
              <p className="text-gray-600 mb-4">Find the perfect accommodation for your northern adventure</p>
              <div className="flex items-center text-emerald-600 group-hover:translate-x-2 transition-transform">
                <span className="font-medium">Find Hotels</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link to="/about" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
              <div className="text-emerald-600 mb-4">
                <Users className="h-12 w-12" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h4>
              <p className="text-gray-600 mb-4">Learn about our mission to promote sustainable tourism</p>
              <div className="flex items-center text-emerald-600 group-hover:translate-x-2 transition-transform">
                <span className="font-medium">About Us</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
<section 
  className="bg-cover bg-center text-white py-16"
  style={{ backgroundImage: `url(${HarmoshValley})` }}
>        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-emerald-100">Destinations</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-emerald-100">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10k+</div>
              <div className="text-emerald-100">Photos Shared</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8</div>
              <div className="text-emerald-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;