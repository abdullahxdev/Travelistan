export interface Destination {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description: string;
  highlights: string[];
  bestTime: string;
  duration: string;
  difficulty: string;
  altitude: string;
  activities: string[];
  gallery: string[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Hunza Valley",
    location: "Gilgit-Baltistan",
    rating: 4.9,
    reviews: 1247,
    image: "https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Valley",
    description: "A breathtaking valley known for its dramatic landscapes, ancient forts, and warm hospitality. Home to the legendary Hunza people known for their longevity.",
    highlights: ["Baltit Fort", "Altit Fort", "Karimabad", "Attabad Lake"],
    bestTime: "April to October",
    duration: "3-5 days",
    difficulty: "Easy to Moderate",
    altitude: "2,438m",
    activities: ["Sightseeing", "Photography", "Cultural Tours", "Hiking"],
    gallery: [
      "https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1131458/pexels-photo-1131458.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 2,
    name: "Skardu",
    location: "Gilgit-Baltistan",
    rating: 4.8,
    reviews: 892,
    image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "City",
    description: "Gateway to some of the world's highest peaks and pristine alpine lakes. Base camp for K2 expeditions.",
    highlights: ["Shangrila Resort", "Deosai Plains", "Sheosar Lake", "Skardu Fort"],
    bestTime: "May to September",
    duration: "4-6 days",
    difficulty: "Moderate",
    altitude: "2,228m",
    activities: ["Trekking", "Boating", "Camping", "Mountaineering"],
    gallery: [
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1131458/pexels-photo-1131458.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 3,
    name: "Fairy Meadows",
    location: "Gilgit-Baltistan",
    rating: 4.9,
    reviews: 756,
    image: "https://images.pexels.com/photos/1131458/pexels-photo-1131458.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Meadow",
    description: "A magical grassland offering stunning views of Nanga Parbat, the world's 9th highest peak.",
    highlights: ["Nanga Parbat View", "Trekking", "Camping", "Photography"],
    bestTime: "June to September",
    duration: "2-4 days",
    difficulty: "Moderate to Difficult",
    altitude: "3,300m",
    activities: ["Trekking", "Camping", "Photography", "Stargazing"],
    gallery: [
      "https://images.pexels.com/photos/1131458/pexels-photo-1131458.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 4,
    name: "Gilgit",
    location: "Gilgit-Baltistan",
    rating: 4.6,
    reviews: 634,
    image: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "City",
    description: "Historic town at the confluence of three great mountain ranges - Karakoram, Hindukush, and Himalayas.",
    highlights: ["Kargah Buddha", "Gilgit Bazaar", "Confluence Point", "Local Culture"],
    bestTime: "April to October",
    duration: "2-3 days",
    difficulty: "Easy",
    altitude: "1,500m",
    activities: ["Cultural Tours", "Shopping", "Sightseeing", "Local Cuisine"],
    gallery: [
      "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 5,
    name: "Swat Valley",
    location: "Khyber Pakhtunkhwa",
    rating: 4.7,
    reviews: 923,
    image: "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Valley",
    description: "Known as the Switzerland of Pakistan, famous for its lush green valleys and pristine rivers.",
    highlights: ["Mingora", "Malam Jabba", "Ushu Forest", "Kalam Valley"],
    bestTime: "March to October",
    duration: "3-5 days",
    difficulty: "Easy to Moderate",
    altitude: "980m",
    activities: ["Skiing", "Hiking", "River Rafting", "Cultural Tours"],
    gallery: [
      "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1131458/pexels-photo-1131458.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 6,
    name: "Kaghan Valley",
    location: "Khyber Pakhtunkhwa",
    rating: 4.8,
    reviews: 567,
    image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Valley",
    description: "A spectacular valley with alpine meadows, glacial lakes, and towering peaks.",
    highlights: ["Saif-ul-Malook", "Naran", "Babusar Pass", "Lalazar"],
    bestTime: "May to September",
    duration: "3-4 days",
    difficulty: "Moderate",
    altitude: "2,362m",
    activities: ["Lake Boating", "Trekking", "Photography", "Camping"],
    gallery: [
      "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  }
];