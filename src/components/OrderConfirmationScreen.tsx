import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { CartItem } from "./CartScreen";

interface OrderConfirmationScreenProps {
  orderItems: CartItem[];
  orderId: string;
  totalAmount: number;
  onBackToHome: () => void;
}

export function OrderConfirmationScreen({ orderItems, orderId, totalAmount, onBackToHome }: OrderConfirmationScreenProps) {
  return (
    <div className="h-full w-full bg-neutral-50 flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="bg-white px-4 py-3 shadow-sm">
        <h2 className="text-neutral-900">Order Confirmation</h2>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="bg-[#2E7D32]/10 rounded-full p-6 mb-4 animate-in zoom-in duration-500">
            <CheckCircle2 className="w-20 h-20 text-[#2E7D32]" />
          </div>

          <h2 className="text-neutral-900 mb-2">Order Placed Successfully!</h2>
          <p className="text-neutral-600 mb-6">
            Your fresh produce will be delivered soon. Thank you for supporting local farmers!
          </p>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
          <h3 className="text-neutral-900 mb-3">Order Items</h3>
          <div className="space-y-3">
            {orderItems.map((item) => (
              <div key={item.id} className="flex gap-3 pb-3 border-b border-neutral-100 last:border-0 last:pb-0">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-neutral-100 flex-shrink-0">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-neutral-900">{item.name}</p>
                  <p className="text-xs text-neutral-500">Qty: {item.quantity} {item.unit}</p>
                </div>
                <p className="text-sm text-[#2E7D32]">₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex justify-between items-center mb-3 pb-3 border-b border-neutral-200">
            <span className="text-neutral-600">Order ID</span>
            <span className="text-neutral-900">#{orderId}</span>
          </div>
          <div className="flex justify-between items-center mb-3 pb-3 border-b border-neutral-200">
            <span className="text-neutral-600">Total Amount</span>
            <span className="text-[#2E7D32]">₹{totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-3 pb-3 border-b border-neutral-200">
            <span className="text-neutral-600">Delivery Time</span>
            <span className="text-neutral-900">2-3 Days</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-neutral-600">Status</span>
            <span className="text-[#2E7D32]">Confirmed</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button
            onClick={onBackToHome}
            className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-xl h-12"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}
