import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Star, Phone, Mail, Wifi, Car, Coffee, CheckCircle } from 'lucide-react';
import { hotels } from '../data/hotels';

const HotelDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(0);

  const hotel = hotels.find(h => h.id === parseInt(id || '0'));

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Hotel not found</h1>
          <Link to="/hotels" className="text-emerald-600 hover:text-emerald-700">
            Back to Hotels
          </Link>
        </div>
      </div>
    );
  }

  const getAmenityIcon = (amenity: string) => {
    if (amenity.toLowerCase().includes('wifi')) return <Wifi className="h-5 w-5" />;
    if (amenity.toLowerCase().includes('parking')) return <Car className="h-5 w-5" />;
    if (amenity.toLowerCase().includes('restaurant')) return <Coffee className="h-5 w-5" />;
    return <CheckCircle className="h-5 w-5" />;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={hotel.gallery[selectedImage]}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <div className="text-white">
              <div className="flex items-center space-x-2 mb-2">
                <Link
                  to="/hotels"
                  className="flex items-center space-x-2 text-white hover:text-emerald-300 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>Back to Hotels</span>
                </Link>
              </div>
              <h1 className="text-4xl font-bold mb-2">{hotel.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-5 w-5" />
                  <span>{hotel.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span>{hotel.rating}</span>
                  <span>({hotel.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {hotel.gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                selectedImage === index ? 'ring-2 ring-emerald-500' : ''
              }`}
            >
              <img
                src={image}
                alt={`${hotel.name} ${index + 1}`}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {hotel.name}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{hotel.description}</p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="text-emerald-600">
                      {getAmenityIcon(amenity)}
                    </div>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Room Types</h3>
              <div className="space-y-4">
                {hotel.rooms.map((room, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedRoom === index
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedRoom(index)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{room.type}</h4>
                      <span className="text-lg font-bold text-emerald-600">
                        PKR {room.price.toLocaleString()}/night
                      </span>
                    </div>
                    <p className="text-gray-600">{room.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  PKR {hotel.rooms[selectedRoom].price.toLocaleString()}
                </div>
                <div className="text-gray-600">per night</div>
                <div className="text-sm text-gray-500 mt-1">
                  {hotel.rooms[selectedRoom].type}
                </div>
              </div>

              <button className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium mb-4">
                Book Now
              </button>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Questions? Contact the hotel</p>
                <div className="space-y-2 text-sm">
                  <a
                    href={`tel:${hotel.contact.phone}`}
                    className="flex items-center justify-center space-x-2 text-emerald-600 hover:text-emerald-700"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{hotel.contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${hotel.contact.email}`}
                    className="flex items-center justify-center space-x-2 text-emerald-600 hover:text-emerald-700"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{hotel.contact.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                  <span className="text-gray-700">{hotel.contact.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">{hotel.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">{hotel.contact.email}</span>
                </div>
              </div>
            </div>

            {/* Reviews Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guest Reviews</h3>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(hotel.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold">{hotel.rating}</span>
              </div>
              <p className="text-gray-600 mb-4">
                Based on {hotel.reviews} guest reviews
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

export default HotelDetail;