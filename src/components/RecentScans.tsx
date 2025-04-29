
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Barcode, Leaf } from "lucide-react";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface RecentScansProps {
  products: Product[];
}

export function RecentScans({ products }: RecentScansProps) {
  if (products.length === 0) {
    return (
      <Card className="border border-dashed">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Recent Scans</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <Barcode className="h-10 w-10 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">No recent scans</p>
            <p className="text-xs text-muted-foreground mt-1">
              Products you scan will appear here
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Recent Scans</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {products.map((product) => (
            <div 
              key={product.id}
              className="flex items-center justify-between p-2 rounded-md border hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
                  {product.environmental.impact === "Low" && (
                    <Leaf className="h-5 w-5 text-green-500" />
                  )}
                  {product.environmental.impact !== "Low" && (
                    <Barcode className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-sm">{product.name}</p>
                  <p className="text-xs text-muted-foreground">{product.brand}</p>
                </div>
              </div>
              <Badge 
                variant={product.expiryDays > 7 ? "secondary" : product.expiryDays > 3 ? "outline" : "destructive"}
                className={cn(
                  "text-xs",
                  product.expiryDays <= 0 && "bg-destructive text-destructive-foreground"
                )}
              >
                {product.expiryDays <= 0
                  ? "Expired"
                  : product.expiryDays === 1
                  ? "1 day"
                  : `${product.expiryDays} days`}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
