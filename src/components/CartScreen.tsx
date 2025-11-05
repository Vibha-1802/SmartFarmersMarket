import { ArrowLeft, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Product } from "./CustomerHomeScreen";

interface CartItem extends Product {
  quantity: number;
}

interface CartScreenProps {
  cartItems: CartItem[];
  onBack: () => void;
  onPlaceOrder: () => void;
  onRemoveItem: (productId: number) => void;
}

export function CartScreen({ cartItems, onBack, onPlaceOrder, onRemoveItem }: CartScreenProps) {
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="h-full w-full bg-neutral-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-3 shadow-sm">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-6 h-6 text-neutral-700" />
        </button>
        <h2 className="text-neutral-900">Cart</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full px-6 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="mb-2 text-neutral-900">Your cart is empty</h3>
            <p className="text-neutral-600 mb-6">Add some fresh produce to get started!</p>
            <Button
              onClick={onBack}
              className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-xl"
            >
              Browse Products
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="px-4 py-4">
              <h3 className="mb-4">Selected Products</h3>
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-xl p-4 flex gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-neutral-100 flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#FFA726] mb-1">{item.name}</p>
                      <p className="text-sm text-neutral-500">Quantity: {item.quantity} {item.unit}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <p className="text-neutral-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Price */}
            <div className="px-4 py-4">
              <h3 className="mb-4">Total Price</h3>
              <div className="bg-white rounded-xl p-4 border border-neutral-200">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Total</span>
                  <span className="text-[#2E7D32]">₹{totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Fixed Bottom Button */}
      {cartItems.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4">
          <Button
            onClick={onPlaceOrder}
            className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-xl h-12"
          >
            Place Order
          </Button>
        </div>
      )}
    </div>
  );
}

export type { CartItem };
