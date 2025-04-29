
import { Product } from '@/types/product';

export const mockProductDatabase: Product[] = [
  {
    id: "1",
    barcode: "5901234123457",
    name: "Organic Greek Yogurt",
    brand: "Green Farm",
    expiryDays: 6,
    nutrition: {
      calories: 150,
      protein: 15,
      carbs: 11,
      fat: 5
    },
    environmental: {
      impact: "Low",
      carbon: "0.8kg CO2e",
      packaging: "Recyclable"
    },
    tips: [
      "Store in refrigerator below 5°C. Consume within 3 days after opening."
    ]
  },
  {
    id: "2",
    barcode: "8901234567890",
    name: "Whole Grain Bread",
    brand: "Nature's Bakery",
    expiryDays: 2,
    nutrition: {
      calories: 80,
      protein: 4,
      carbs: 15,
      fat: 1
    },
    environmental: {
      impact: "Low",
      carbon: "0.6kg CO2e",
      packaging: "Compostable"
    },
    tips: [
      "Keep in a cool, dry place. Freeze to extend shelf life up to 3 months."
    ]
  },
  {
    id: "3",
    barcode: "7501234567890",
    name: "Free Range Eggs",
    brand: "Happy Hens",
    expiryDays: 14,
    nutrition: {
      calories: 70,
      protein: 6,
      carbs: 0,
      fat: 5
    },
    environmental: {
      impact: "Medium",
      carbon: "1.2kg CO2e",
      packaging: "Recyclable"
    },
    tips: [
      "Store in refrigerator. Keep in original packaging for best freshness."
    ]
  },
  {
    id: "4",
    barcode: "6901234567890",
    name: "Organic Spinach",
    brand: "Fresh Fields",
    expiryDays: 4,
    nutrition: {
      calories: 25,
      protein: 3,
      carbs: 4,
      fat: 0
    },
    environmental: {
      impact: "Low",
      carbon: "0.3kg CO2e",
      packaging: "Compostable"
    },
    tips: [
      "Store in refrigerator in original packaging. Wash before use."
    ]
  },
];

export const recentScans: Product[] = [
  mockProductDatabase[1], // Bread
  mockProductDatabase[3], // Spinach
  {
    id: "5",
    barcode: "4901234567890",
    name: "Almond Milk",
    brand: "Plant Base",
    expiryDays: 0,
    nutrition: {
      calories: 30,
      protein: 1,
      carbs: 1,
      fat: 3
    },
    environmental: {
      impact: "Medium",
      carbon: "0.7kg CO2e",
      packaging: "Recyclable"
    }
  }
];
