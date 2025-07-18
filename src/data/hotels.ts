export interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  category: string;
  description: string;
  amenities: string[];
  rooms: { type: string; price: number; description: string }[];
  gallery: string[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Hunza Serena Inn",
    location: "Karimabad, Hunza",
    rating: 4.8,
    reviews: 342,
    price: 15000,
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Luxury",
    description: "A luxury hotel offering breathtaking views of the Hunza Valley and surrounding peaks.",
    amenities: ["Free WiFi", "Restaurant", "Room Service", "Parking", "Garden", "Mountain Views"],
    rooms: [
      { type: "Deluxe Room", price: 15000, description: "Spacious room with mountain views" },
      { type: "Suite", price: 25000, description: "Luxury suite with separate living area" },
      { type: "Family Room", price: 20000, description: "Perfect for families with children" }
    ],
    gallery: [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    contact: {
      phone: "+92 5813 457001",
      email: "hunza@serena.com.pk",
      address: "Karimabad, Hunza Valley, Gilgit-Baltistan"
    }
  },
  {
    id: 2,
    name: "Shangrila Resort Skardu",
    location: "Skardu, Gilgit-Baltistan",
    rating: 4.7,
    reviews: 289,
    price: 12000,
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Resort",
    description: "Famous resort known as 'Heaven on Earth' with beautiful lake views and comfortable accommodation.",
    amenities: ["Lake Views", "Restaurant", "Boating", "Garden", "Conference Hall", "Parking"],
    rooms: [
      { type: "Standard Room", price: 12000, description: "Comfortable room with basic amenities" },
      { type: "Lake View Room", price: 18000, description: "Room with stunning lake views" },
      { type: "Cottage", price: 22000, description: "Private cottage with garden access" }
    ],
    gallery: [
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    contact: {
      phone: "+92 5815 460263",
      email: "info@shangrilaresorts.com",
      address: "Shangrila, Skardu, Gilgit-Baltistan"
    }
  },
  {
    id: 3,
    name: "PTDC Motel Gilgit",
    location: "Gilgit City",
    rating: 4.2,
    reviews: 156,
    price: 8000,
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Budget",
    description: "Government-run motel offering clean and comfortable accommodation at affordable rates.",
    amenities: ["Restaurant", "WiFi", "Parking", "24/7 Reception", "Laundry", "Tour Desk"],
    rooms: [
      { type: "Single Room", price: 6000, description: "Basic single occupancy room" },
      { type: "Double Room", price: 8000, description: "Comfortable double bed room" },
      { type: "Triple Room", price: 10000, description: "Room for three guests" }
    ],
    gallery: [
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    contact: {
      phone: "+92 5811 455562",
      email: "ptdcgilgit@gmail.com",
      address: "Chinar Bagh, Gilgit, Gilgit-Baltistan"
    }
  },
  {
    id: 4,
    name: "Swat Serena Hotel",
    location: "Saidu Sharif, Swat",
    rating: 4.6,
    reviews: 234,
    price: 14000,
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Luxury",
    description: "Elegant hotel in the heart of Swat Valley offering modern amenities and traditional hospitality.",
    amenities: ["Spa", "Fitness Center", "Restaurant", "Room Service", "Business Center", "Garden"],
    rooms: [
      { type: "Superior Room", price: 14000, description: "Well-appointed room with modern amenities" },
      { type: "Deluxe Room", price: 18000, description: "Spacious room with valley views" },
      { type: "Executive Suite", price: 28000, description: "Luxury suite with separate living area" }
    ],
    gallery: [
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    contact: {
      phone: "+92 946 710247",
      email: "swat@serena.com.pk",
      address: "Saidu Sharif, Swat, Khyber Pakhtunkhwa"
    }
  }
];