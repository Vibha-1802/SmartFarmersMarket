import { Search, Home, ShoppingCart, Package, User, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Input } from "./ui/input";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  stock: number;
}

interface CustomerHomeScreenProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  onCartClick: () => void;
  onOrdersClick: () => void;
  onProfileClick: () => void;
  cartItemCount: number;
}

const categories = [
  { name: "Vegetables", icon: "🥕" },
  { name: "Fruits", icon: "🍎" },
  { name: "Grains", icon: "🌾" },
  { name: "Dairy", icon: "🥛" },
];

export function CustomerHomeScreen({ products, onProductClick, onCartClick, onOrdersClick, onProfileClick, cartItemCount }: CustomerHomeScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter out products with no stock
  const inStockProducts = products.filter((product) => product.stock > 0);

  const filteredProducts = selectedCategory
    ? inStockProducts.filter((product) => product.category === selectedCategory)
    : inStockProducts;

  return (
    <div className="h-full w-full bg-neutral-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 pt-3 pb-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          {selectedCategory ? (
            <button 
              onClick={() => setSelectedCategory(null)} 
              className="flex items-center gap-2 text-[#2E7D32]"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>All Products</span>
            </button>
          ) : (
            <h2 className="text-[#2E7D32]">Smart Farmers Market</h2>
          )}
          <div className="relative cursor-pointer" onClick={onCartClick}>
            <ShoppingCart className="w-6 h-6 text-neutral-700" />
            {cartItemCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-[#FFA726] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </div>
            )}
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <Input
            placeholder="Search fresh produce..."
            className="pl-10 rounded-xl border-neutral-300"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Categories */}
        {!selectedCategory && (
          <div className="px-4 py-4">
            <h3 className="mb-3">Categories</h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category) => (
                <div
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className="bg-white rounded-xl p-4 flex items-center gap-3 border border-neutral-200 hover:border-[#FFA726] cursor-pointer transition-colors"
                >
                  <div className="bg-neutral-100 rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                    {category.icon}
                  </div>
                  <span className="text-[#FFA726]">{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products */}
        <div className="px-4 py-4">
          <h3 className="mb-3">
            {selectedCategory ? `${selectedCategory}` : "Fresh Products"}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onProductClick(product)}
                className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-md cursor-pointer transition-shadow"
              >
                <div className="relative h-32 bg-neutral-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm text-neutral-600 mb-1">{product.name}</p>
                  <p className="text-[#2E7D32]">₹{product.price}/{product.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-neutral-200 px-6 py-3 flex justify-around items-center">
        <div className="flex flex-col items-center gap-1 text-[#2E7D32]">
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-neutral-400 cursor-pointer" onClick={onCartClick}>
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            {cartItemCount > 0 && (
              <div className="absolute -top-1 -right-1 bg-[#FFA726] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                {cartItemCount}
              </div>
            )}
          </div>
          <span className="text-xs">Cart</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-neutral-400 cursor-pointer" onClick={onOrdersClick}>
          <Package className="w-6 h-6" />
          <span className="text-xs">Orders</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-neutral-400 cursor-pointer" onClick={onProfileClick}>
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </div>
      </div>
    </div>
  );
}

export type { Product };
