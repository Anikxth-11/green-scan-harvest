
import { useState } from 'react';
import { Product } from '@/types/product';
import { mockProductDatabase } from '@/lib/mock-data';

export function useScannerState() {
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<Product | null>(null);

  const scanBarcode = async (barcode: string) => {
    setScanning(true);
    
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Find product in mock database
    const product = mockProductDatabase.find(p => p.barcode === barcode);
    
    if (product) {
      setScanResult(product);
    } else {
      // If barcode not found, create generic product
      setScanResult({
        id: `unknown-${Date.now()}`,
        barcode: barcode,
        name: "Unknown Product",
        brand: "Not in database",
        expiryDays: 7, // Default expiry
        nutrition: {
          calories: 0,
          protein: 0,
          carbs: 0,
          fat: 0
        },
        environmental: {
          impact: "Medium",
          carbon: "Unknown",
          packaging: "Unknown"
        },
        tips: ["No specific storage information available for this product."]
      });
    }
    
    setScanning(false);
  };

  const resetScan = () => {
    setScanResult(null);
  };

  return {
    scanning,
    scanResult,
    scanBarcode,
    resetScan
  };
}
