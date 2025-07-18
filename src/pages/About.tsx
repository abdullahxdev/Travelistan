import { Mountain, Users, Heart, Award, MapPin, Camera } from 'lucide-react';
import Background from '../images/download.jpeg';
import Founder from '../images/Founder.png';
import Footerimg from '../images/taobut village , neelum valley azad kashmir.jpeg';

const About = () => {
  const team = [
    {
      name: "Muhammad Abdullah",
      role: "Founder & CEO",
      image: Founder,
      description: "Passionate about hiking with 2+ years of experience exploring Northern Pakistan."
    },
  ];

  const values = [
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Adventure",
      description: "We believe in the transformative power of adventure and exploration."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Supporting local communities and promoting sustainable tourism practices."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description: "Our love for Pakistan's natural beauty drives everything we do."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "Committed to providing exceptional experiences and service quality."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4">About Travelistan</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted partner in discovering the breathtaking beauty of Northern Pakistan
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Travelistan, we are dedicated to showcasing the unparalleled beauty of Northern Pakistan
                while promoting sustainable and responsible tourism. Our mission is to connect travelers with
                authentic experiences that celebrate the rich culture, stunning landscapes, and warm hospitality
                of Pakistan's northern regions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work closely with local communities to ensure that tourism benefits everyone - from the
                travelers who experience life-changing adventures to the local people who call these magnificent
                places home.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Northern Pakistan landscape"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and shape our commitment to exceptional travel experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-emerald-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to creating unforgettable travel experiences
            </p>
          </div>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-[center_30%]"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-cover bg-center text-white py-16" style={{ backgroundImage: `url(${Footerimg})` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-emerald-100 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and community development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-emerald-100">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-emerald-100">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-emerald-100">Local Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-emerald-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mountain adventure"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Travelistan was born from a simple dream - to share the incredible beauty of Northern Pakistan
                with the world. Founded in 2016 by a group of passionate travelers and local guides, we started
                with just a handful of destinations and a commitment to authentic, responsible tourism.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the years, we've grown into Pakistan's leading platform for northern tourism, but our
                core values remain unchanged. We continue to prioritize sustainable practices, community
                engagement, and creating meaningful connections between travelers and the places they visit.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Based in Islamabad</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Camera className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Est. 2016</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;