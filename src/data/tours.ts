export interface Tour {
  id: number;
  name: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description: string;
  highlights: string[];
  included: string[];
  itinerary: { day: number; title: string; description: string }[];
  difficulty: string;
  groupSize: string;
  destinations: string[];
}

export const tours: Tour[] = [
  {
    id: 1,
    name: "Northern Pakistan Grand Tour",
    duration: "12 Days",
    price: 85000,
    rating: 4.9,
    reviews: 234,
    image: "https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Adventure",
    description: "Experience the best of Northern Pakistan with this comprehensive tour covering Hunza, Skardu, Gilgit, and more.",
    highlights: ["Visit 6 major destinations", "Professional guide", "All transportation", "Cultural experiences"],
    included: ["Accommodation", "All meals", "Transportation", "Guide", "Entry fees"],
    difficulty: "Moderate",
    groupSize: "8-15 people",
    destinations: ["Hunza Valley", "Skardu", "Gilgit", "Fairy Meadows"],
    itinerary: [
      { day: 1, title: "Arrival in Islamabad", description: "Airport pickup and city tour" },
      { day: 2, title: "Islamabad to Hunza", description: "Drive via Karakoram Highway" },
      { day: 3, title: "Hunza Valley Exploration", description: "Visit Baltit Fort and Karimabad" },
      { day: 4, title: "Hunza to Skardu", description: "Scenic drive through mountains" },
      { day: 5, title: "Skardu Sightseeing", description: "Shangrila Resort and local markets" }
    ]
  },
  {
    id: 2,
    name: "K2 Base Camp Trek",
    duration: "18 Days",
    price: 150000,
    rating: 4.8,
    reviews: 89,
    image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Trekking",
    description: "Ultimate trekking adventure to K2 Base Camp, the world's second highest peak.",
    highlights: ["K2 Base Camp", "Concordia", "Baltoro Glacier", "Expert guides"],
    included: ["Permits", "Porter service", "Camping equipment", "All meals", "Guide"],
    difficulty: "Very Difficult",
    groupSize: "4-8 people",
    destinations: ["Skardu", "Askole", "K2 Base Camp"],
    itinerary: [
      { day: 1, title: "Arrival in Skardu", description: "Rest and preparation day" },
      { day: 2, title: "Drive to Askole", description: "Last village before trek" },
      { day: 3, title: "Trek to Jhola", description: "Begin the adventure" },
      { day: 4, title: "Trek to Paiju", description: "Cross Braldu River" },
      { day: 5, title: "Rest day at Paiju", description: "Acclimatization" }
    ]
  },
  {
    id: 3,
    name: "Fairy Meadows Adventure",
    duration: "5 Days",
    price: 35000,
    rating: 4.7,
    reviews: 156,
    image: "https://images.pexels.com/photos/1131458/pexels-photo-1131458.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Nature",
    description: "Experience the magical Fairy Meadows with stunning views of Nanga Parbat.",
    highlights: ["Nanga Parbat views", "Alpine meadows", "Camping", "Photography"],
    included: ["Accommodation", "Meals", "Guide", "Transportation to Raikot"],
    difficulty: "Moderate",
    groupSize: "6-12 people",
    destinations: ["Fairy Meadows", "Nanga Parbat"],
    itinerary: [
      { day: 1, title: "Drive to Raikot Bridge", description: "Start of adventure" },
      { day: 2, title: "Trek to Fairy Meadows", description: "Jeep ride and trek" },
      { day: 3, title: "Explore Fairy Meadows", description: "Photography and relaxation" },
      { day: 4, title: "Trek to Beyal Camp", description: "Closer to Nanga Parbat" },
      { day: 5, title: "Return journey", description: "Back to Islamabad" }
    ]
  },
  {
    id: 4,
    name: "Swat Valley Cultural Tour",
    duration: "6 Days",
    price: 42000,
    rating: 4.6,
    reviews: 198,
    image: "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Cultural",
    description: "Discover the rich culture and history of Swat Valley, the Switzerland of Pakistan.",
    highlights: ["Buddhist heritage", "Local culture", "Malam Jabba", "Traditional crafts"],
    included: ["Hotel accommodation", "All meals", "Cultural guide", "Entry fees"],
    difficulty: "Easy",
    groupSize: "10-20 people",
    destinations: ["Mingora", "Malam Jabba", "Kalam", "Ushu Forest"],
    itinerary: [
      { day: 1, title: "Arrival in Mingora", description: "City tour and museum visit" },
      { day: 2, title: "Malam Jabba", description: "Ski resort and chairlift" },
      { day: 3, title: "Kalam Valley", description: "Scenic beauty and local culture" },
      { day: 4, title: "Ushu Forest", description: "Nature walk and photography" },
      { day: 5, title: "Local markets", description: "Shopping and cultural exchange" },
      { day: 6, title: "Return to Islamabad", description: "End of tour" }
    ]
  }
];