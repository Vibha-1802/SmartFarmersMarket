import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  stock: number;
}

interface AddProductScreenProps {
  onBack: () => void;
  onAddProduct: (product: Omit<Product, "id">) => void;
}

export function AddProductScreen({ onBack, onAddProduct }: AddProductScreenProps) {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("kg");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Vegetables");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = () => {
    if (!productName || !price || !stock) {
      alert("Please fill in all required fields");
      return;
    }

    const newProduct: Omit<Product, "id"> = {
      name: productName,
      price: parseFloat(price),
      unit,
      image: imageUrl || "https://images.unsplash.com/photo-1540420773420-3366772f4999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHByb2R1Y2V8ZW58MXx8fHwxNzYyMjg2NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category,
      stock: parseFloat(stock)
    };

    onAddProduct(newProduct);
    
    // Reset form
    setProductName("");
    setPrice("");
    setStock("");
    setImageUrl("");
  };

  return (
    <div className="h-full w-full bg-neutral-50 flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-3 shadow-sm sticky top-0 z-10">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-6 h-6 text-neutral-700" />
        </button>
        <h2 className="text-neutral-900">Add New Product</h2>
      </div>

      {/* Form */}
      <div className="p-4 space-y-4">
        <div className="bg-white rounded-xl p-6 shadow-sm space-y-5">
          {/* Product Name */}
          <div className="space-y-2">
            <Label htmlFor="productName" className="text-neutral-700">
              Product Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="productName"
              type="text"
              placeholder="e.g., Fresh Tomatoes"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="rounded-xl border-neutral-300"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category" className="text-neutral-700">
              Category <span className="text-red-500">*</span>
            </Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="rounded-xl border-neutral-300">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Vegetables">🥕 Vegetables</SelectItem>
                <SelectItem value="Fruits">🍎 Fruits</SelectItem>
                <SelectItem value="Grains">🌾 Grains</SelectItem>
                <SelectItem value="Dairy">🥛 Dairy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <Label htmlFor="price" className="text-neutral-700">
              Price (₹) <span className="text-red-500">*</span>
            </Label>
            <Input
              id="price"
              type="number"
              placeholder="e.g., 40"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="rounded-xl border-neutral-300"
              min="0"
              step="0.01"
            />
          </div>

          {/* Unit */}
          <div className="space-y-2">
            <Label htmlFor="unit" className="text-neutral-700">
              Unit <span className="text-red-500">*</span>
            </Label>
            <Select value={unit} onValueChange={setUnit}>
              <SelectTrigger className="rounded-xl border-neutral-300">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kg">Per Kilogram (kg)</SelectItem>
                <SelectItem value="L">Per Liter (L)</SelectItem>
                <SelectItem value="dozen">Per Dozen</SelectItem>
                <SelectItem value="piece">Per Piece</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Stock */}
          <div className="space-y-2">
            <Label htmlFor="stock" className="text-neutral-700">
              Maximum Yield Available <span className="text-red-500">*</span>
            </Label>
            <Input
              id="stock"
              type="number"
              placeholder="e.g., 6"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="rounded-xl border-neutral-300"
              min="0"
              step="0.1"
            />
            <p className="text-xs text-neutral-500">
              Enter the total amount available in {unit}
            </p>
          </div>

          {/* Image URL (Optional) */}
          <div className="space-y-2">
            <Label htmlFor="imageUrl" className="text-neutral-700">
              Image URL (Optional)
            </Label>
            <Input
              id="imageUrl"
              type="url"
              placeholder="https://example.com/image.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="rounded-xl border-neutral-300"
            />
            <p className="text-xs text-neutral-500">
              Leave blank to use a default image
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pb-6">
          <Button
            onClick={handleSubmit}
            className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-xl h-12"
          >
            Add Product
          </Button>
          <Button
            onClick={onBack}
            variant="outline"
            className="w-full border-neutral-300 text-neutral-700 hover:bg-neutral-100 rounded-xl h-12"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
