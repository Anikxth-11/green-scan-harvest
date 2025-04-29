
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Barcode, Image, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScannerState } from "@/hooks/use-scanner-state";
import { ProductResult } from "./ProductResult";

export function BarcodeScanner() {
  const [cameraActive, setCameraActive] = useState(false);
  const { scanResult, scanning, scanBarcode, resetScan } = useScannerState();
  const [fileUploadActive, setFileUploadActive] = useState(false);

  const handleCameraToggle = () => {
    setCameraActive(!cameraActive);
    if (!cameraActive) {
      // This would activate the real camera in a native app
      console.log("Camera activated");
    } else {
      console.log("Camera deactivated");
    }
  };

  const handleScanClick = () => {
    scanBarcode("5901234123457"); // Mock barcode value
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log("File uploaded:", e.target.files[0]);
      // In a real app, we would process the image here
      scanBarcode("8901234567890"); // Different mock barcode
    }
  };

  const triggerFileUpload = () => {
    document.getElementById('fileInput')?.click();
    setFileUploadActive(true);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6">
      {scanResult ? (
        <ProductResult product={scanResult} onReset={resetScan} />
      ) : (
        <div className="space-y-4">
          <Card className={cn(
            "relative overflow-hidden transition-all duration-300 border-2",
            cameraActive ? "border-primary h-[350px]" : "h-[200px]",
            "flex items-center justify-center bg-muted/50"
          )}>
            {cameraActive ? (
              <div className="relative w-full h-full flex flex-col">
                <div className="flex-1 bg-black relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[250px] h-[150px] border-2 border-white/70 rounded-md relative">
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary -translate-x-1 -translate-y-1"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary translate-x-1 -translate-y-1"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary -translate-x-1 translate-y-1"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary translate-x-1 translate-y-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-background">
                  <Button onClick={handleScanClick} className="w-full">
                    {scanning ? "Scanning..." : "Tap to Scan"}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center p-6">
                <Barcode className="mx-auto h-12 w-12 text-primary mb-2" />
                <p className="text-muted-foreground">Ready to scan barcodes</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Tap the camera button below to begin
                </p>
              </div>
            )}
          </Card>
          
          <div className="flex justify-center gap-4">
            <Button 
              variant={cameraActive ? "default" : "outline"} 
              size="icon" 
              className="h-14 w-14 rounded-full"
              onClick={handleCameraToggle}
            >
              <Barcode className="h-6 w-6" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className={cn("h-14 w-14 rounded-full", fileUploadActive && "border-primary")}
              onClick={triggerFileUpload}
            >
              <Image className="h-6 w-6" />
              <input 
                id="fileInput" 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleFileUpload} 
              />
            </Button>
          </div>

          <div className="text-center mt-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted gap-2">
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-sm">Help reduce food waste</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
