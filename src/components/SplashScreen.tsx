import { Leaf } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <div 
      className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #2E7D32 0%, #66BB6A 100%)"
      }}
      onClick={onComplete}
    >
      {/* Logo */}
      <div className="flex flex-col items-center gap-6 animate-in fade-in duration-1000">
        <div className="bg-white rounded-full p-6 shadow-lg">
          <Leaf className="w-16 h-16 text-[#2E7D32]" strokeWidth={2} />
        </div>
        
        <div className="text-center">
          <h1 className="text-white mb-2">Smart Farmers Market</h1>
          <p className="text-white/90">Fresh from Farm to You</p>
        </div>
      </div>
      
      {/* Tap to continue hint */}
      <p className="absolute bottom-8 text-white/70 text-sm animate-pulse">Tap to continue</p>
    </div>
  );
}
