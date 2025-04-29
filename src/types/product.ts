
export interface Product {
  id: string;
  barcode: string;
  name: string;
  brand: string;
  expiryDate?: string;
  expiryDays: number;
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  environmental: {
    impact: "Low" | "Medium" | "High";
    carbon: string;
    packaging: string;
  };
  tips?: string[];
}
