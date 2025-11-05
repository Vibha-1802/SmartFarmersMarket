import { ArrowLeft, Minus, Plus } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { useState } from "react";
import type { Product } from "./CustomerHomeScreen";

interface ProductDetailsScreenProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (quantity: number) => void;
  onBuyNow: (quantity: number) => void;
}

export function ProductDetailsScreen({ product, onBack, onAddToCart, onBuyNow }: ProductDetailsScreenProps) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="h-full w-full bg-neutral-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-3 shadow-sm">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-6 h-6 text-neutral-700" />
        </button>
        <h2 className="text-neutral-900">Product Details</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        {/* Product Image */}
        <div className="relative h-64 bg-white">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="bg-white mt-4 p-6 rounded-t-3xl -mt-6 relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-neutral-900 mb-1">{product.name}</h2>
              <p className="text-neutral-600">Category: {product.category}</p>
              <p className={`text-sm mt-1 ${product.stock <= 5 ? 'text-orange-500' : 'text-[#2E7D32]'}`}>
                {product.stock > 0 ? `${product.stock} ${product.unit} available` : 'Out of Stock'}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[#2E7D32]">₹{product.price}</p>
              <p className="text-sm text-neutral-500">per {product.unit}</p>
            </div>
          </div>

          {/* Farmer Info */}
          <div className="bg-neutral-50 rounded-xl p-4 mb-4">
            <p className="text-sm text-neutral-600 mb-1">Sold by</p>
            <p className="text-[#2E7D32]">Green Valley Farms</p>
            <p className="text-sm text-neutral-500 mt-2">Certified Organic Farmer</p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="mb-2">Description</h3>
            <p className="text-neutral-600">
              Fresh, organically grown {product.name.toLowerCase()} directly from local farms. 
              Handpicked at peak ripeness to ensure maximum flavor and nutrition. 
              No pesticides or harmful chemicals used.
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <p className="mb-3">Quantity ({product.unit})</p>
            <div className="flex items-center gap-4">
              <button
                onClick={handleDecrease}
                className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center hover:bg-neutral-300"
              >
                <Minus className="w-5 h-5 text-neutral-700" />
              </button>
              <span className="text-xl w-12 text-center">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="w-10 h-10 rounded-full bg-[#2E7D32] flex items-center justify-center hover:bg-[#1B5E20]"
              >
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="bg-[#FFA726]/10 rounded-xl p-4 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-neutral-700">Total Price</span>
              <span className="text-[#2E7D32]">₹{(product.price * quantity).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 flex gap-3">
        <Button
          onClick={() => onAddToCart(quantity)}
          variant="outline"
          className="flex-1 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white rounded-xl h-12"
        >
          Add to Cart
        </Button>
        <Button
          onClick={() => onBuyNow(quantity)}
          className="flex-1 bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-xl h-12"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}
