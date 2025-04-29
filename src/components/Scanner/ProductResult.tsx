
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TreeDeciduous, Recycle, Sprout } from "lucide-react";
import { Product } from "@/types/product";

interface ProductResultProps {
  product: Product;
  onReset: () => void;
}

export function ProductResult({ product, onReset }: ProductResultProps) {
  const daysLeft = product.expiryDays;
  
  return (
    <Card className="border-2 border-primary/50">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-muted-foreground text-sm">{product.brand}</p>
          </div>
          <Badge 
            variant={daysLeft > 7 ? "secondary" : daysLeft > 3 ? "outline" : "destructive"}
            className="ml-2"
          >
            {daysLeft <= 0
              ? "Expired"
              : daysLeft === 1
              ? "Expires tomorrow"
              : `Expires in ${daysLeft} days`}
          </Badge>
        </div>
      </CardHeader>
      
      <Separator />
      
      <CardContent className="pt-4">
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-medium mb-1">Nutrition Information</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-muted/50 p-2 rounded-md">
                <p className="text-xs text-muted-foreground">Calories</p>
                <p className="font-medium">{product.nutrition.calories} kcal</p>
              </div>
              <div className="bg-muted/50 p-2 rounded-md">
                <p className="text-xs text-muted-foreground">Protein</p>
                <p className="font-medium">{product.nutrition.protein}g</p>
              </div>
              <div className="bg-muted/50 p-2 rounded-md">
                <p className="text-xs text-muted-foreground">Carbs</p>
                <p className="font-medium">{product.nutrition.carbs}g</p>
              </div>
              <div className="bg-muted/50 p-2 rounded-md">
                <p className="text-xs text-muted-foreground">Fat</p>
                <p className="font-medium">{product.nutrition.fat}g</p>
              </div>
            </div>
          </div>
          
          <div>
            <p className="font-medium mb-1">Environmental Impact</p>
            <div className="flex gap-2">
              <div className="flex-1 bg-muted/50 p-2 rounded-md flex items-center gap-2">
                <TreeDeciduous className="h-5 w-5 text-green-600" />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Carbon</p>
                  <p className="font-medium">{product.environmental.carbon}</p>
                </div>
              </div>
              <div className="flex-1 bg-muted/50 p-2 rounded-md flex items-center gap-2">
                <Recycle className="h-5 w-5 text-green-600" />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Packaging</p>
                  <p className="font-medium">{product.environmental.packaging}</p>
                </div>
              </div>
            </div>
          </div>

          {product.tips && product.tips.length > 0 && (
            <div className="bg-green-50 border border-green-100 p-3 rounded-lg">
              <div className="flex items-start gap-2">
                <Sprout className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Storage Tip</p>
                  <p className="text-sm">{product.tips[0]}</p>
                </div>
              </div>
            </div>
          )}

          <div className="text-center text-xs text-muted-foreground mt-2">
            <p>Barcode: {product.barcode}</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <div className="w-full flex gap-2">
          <Button onClick={onReset} variant="outline" className="flex-1">
            Scan Another
          </Button>
          <Button className="flex-1">
            Save Product
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
