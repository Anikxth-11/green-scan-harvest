
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavBarProps {
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
  return (
    <header className={cn("border-b px-4 py-3 flex items-center justify-between", className)}>
      <div className="flex items-center gap-2">
        <Leaf className="text-primary h-6 w-6 animate-leaf-sway" />
        <span className="font-semibold text-lg">EcoScan</span>
      </div>
      <nav className="flex items-center gap-2">
        <Button variant="ghost" size="sm">History</Button>
        <Button variant="ghost" size="sm">Profile</Button>
      </nav>
    </header>
  );
}
