
import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { BarcodeScanner } from "@/components/Scanner/BarcodeScanner";
import { RecentScans } from "@/components/RecentScans";
import { recentScans } from "@/lib/mock-data";

const Index = () => {
  // In a real app, this would fetch from an API or local storage
  const [scannedProducts] = useState(recentScans);
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      
      <main className="flex-1 container max-w-md mx-auto py-4 px-4 sm:px-6">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Food Scanner</h1>
            <p className="text-muted-foreground">
              Scan products to reduce waste and eat sustainably
            </p>
          </div>
          
          <BarcodeScanner />
          
          <RecentScans products={scannedProducts} />
        </div>

        <footer className="mt-10 text-center text-xs text-muted-foreground pb-4">
          <p>EcoScan - Reducing food waste one scan at a time</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
