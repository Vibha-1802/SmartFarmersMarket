import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface LoginScreenProps {
  onLoginAsCustomer: (phoneNumber: string) => void;
  onLoginAsFarmer: (phoneNumber: string) => void;
}

export function LoginScreen({ onLoginAsCustomer, onLoginAsFarmer }: LoginScreenProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className="h-full w-full bg-neutral-50 flex flex-col overflow-y-auto">
      {/* Header Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1665315302321-46989ca7829a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBmYXJtfGVufDF8fHx8MTc2MjI2Mzk1OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Fresh Vegetables"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-50" />
      </div>

      {/* Content */}
      <div className="flex-1 px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
          <h2 className="text-[#2E7D32] mb-2">Welcome Back</h2>
          <p className="text-neutral-600 mb-6">Sign in to continue</p>

          {/* Mobile Number Input */}
          <div className="mb-4">
            <label className="block text-sm mb-2 text-neutral-700">Mobile Number</label>
            <Input
              type="tel"
              placeholder="Enter your mobile number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full rounded-xl border-neutral-300"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-sm mb-2 text-neutral-700">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border-neutral-300"
            />
          </div>

          {/* Login Buttons */}
          <div className="space-y-3">
            <Button
              onClick={() => onLoginAsFarmer(phoneNumber)}
              className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-xl h-12"
            >
              Login as Farmer
            </Button>
            <Button
              onClick={() => onLoginAsCustomer(phoneNumber)}
              variant="outline"
              className="w-full border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white rounded-xl h-12"
            >
              Login as Buyer
            </Button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-sm text-neutral-600">
            Don't have an account?{" "}
            <span className="text-[#2E7D32] cursor-pointer">Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
}
