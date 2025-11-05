import { Package, IndianRupee, ShoppingBag, Plus, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import type { Order } from "../types/order";

interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  stock: number;
}

interface FarmerDashboardScreenProps {
  orders: Order[];
  products: Product[];
  onAddProduct: () => void;
  onBackToHome: () => void;
}

export function FarmerDashboardScreen({ orders, products, onAddProduct, onBackToHome }: FarmerDashboardScreenProps) {
  const totalEarnings = orders.reduce((sum, order) => sum + order.total, 0);
  const monthlyData = [
    { month: "Jan", earnings: 420 },
    { month: "Feb", earnings: 680 },
    { month: "Mar", earnings: 890 },
    { month: "Apr", earnings: 650 },
    { month: "May", earnings: 820 },
    { month: "Jun", earnings: 480 },
    { month: "Jul", earnings: 920 },
  ];

  const maxEarnings = Math.max(...monthlyData.map(d => d.earnings));

  return (
    <div className="h-full w-full bg-neutral-50 flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="bg-[#2E7D32] px-6 pt-6 pb-8">
        <h2 className="text-white mb-2">Farmer Dashboard</h2>
        <p className="text-white/80">Welcome back, Green Valley Farms</p>
      </div>

      {/* Stats Cards */}
      <div className="px-4 -mt-4 pb-4">
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="bg-[#2E7D32]/10 rounded-full w-10 h-10 flex items-center justify-center mb-2">
              <ShoppingBag className="w-5 h-5 text-[#2E7D32]" />
            </div>
            <p className="text-2xl text-neutral-900 mb-1">{products.length}</p>
            <p className="text-xs text-neutral-600">Total Products</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="bg-[#FFA726]/10 rounded-full w-10 h-10 flex items-center justify-center mb-2">
              <Package className="w-5 h-5 text-[#FFA726]" />
            </div>
            <p className="text-2xl text-neutral-900 mb-1">{orders.length}</p>
            <p className="text-xs text-neutral-600">Orders Received</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="bg-[#2E7D32]/10 rounded-full w-10 h-10 flex items-center justify-center mb-2">
              <IndianRupee className="w-5 h-5 text-[#2E7D32]" />
            </div>
            <p className="text-2xl text-neutral-900 mb-1">₹{totalEarnings.toFixed(0)}</p>
            <p className="text-xs text-neutral-600">Total Earnings</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3 mb-6">
          <Button
            className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white rounded-xl h-12 justify-center"
          >
            View Orders
          </Button>
          <Button
            variant="outline"
            className="w-full border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white rounded-xl h-12 justify-center"
          >
            Earnings Summary
          </Button>
          <Button
            onClick={onAddProduct}
            variant="outline"
            className="w-full border-neutral-300 text-[#2E7D32] hover:bg-neutral-100 rounded-xl h-12 justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add New Product
          </Button>
        </div>

        {/* Earnings Chart */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-neutral-900">Earnings Summary</h3>
            <TrendingUp className="w-5 h-5 text-[#2E7D32]" />
          </div>
          
          <div className="flex items-end justify-between h-40 gap-2 mb-2">
            {monthlyData.map((data, index) => {
              const heightPercentage = (data.earnings / maxEarnings) * 100;
              return (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex items-end justify-center h-32">
                    <div
                      className="w-full bg-gradient-to-t from-[#2E7D32] to-[#66BB6A] rounded-t-lg transition-all duration-500 hover:opacity-80"
                      style={{ height: `${heightPercentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-neutral-600">{data.month}</span>
                </div>
              );
            })}
          </div>
          
          <div className="flex items-center justify-between pt-3 border-t border-neutral-200">
            <span className="text-sm text-neutral-600">Monthly Growth</span>
            <span className="text-[#2E7D32]">+12.5%</span>
          </div>
        </div>

        {/* Inventory Status */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <h3 className="text-neutral-900 mb-4">Inventory Status</h3>
          {products.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-neutral-500">No products added yet</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {products.map((product) => (
                <div key={product.id} className="flex items-center justify-between pb-3 border-b border-neutral-100 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm text-neutral-900">{product.name}</p>
                    <p className="text-xs text-neutral-500">
                      ₹{product.price}/{product.unit}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm ${product.stock <= 5 ? 'text-red-500' : 'text-[#2E7D32]'}`}>
                      {product.stock} {product.unit}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {product.stock <= 5 ? 'Low Stock' : 'In Stock'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <h3 className="text-neutral-900 mb-4">Recent Orders</h3>
          {orders.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-neutral-500">No orders yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {orders.slice(0, 5).map((order) => (
                <div key={order.id} className="flex items-center justify-between pb-3 border-b border-neutral-100 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm text-neutral-900">{order.customerName || "Customer"}</p>
                    <p className="text-xs text-neutral-500">
                      {order.items.map(item => item.product.name).join(", ")}
                    </p>
                  </div>
                  <p className="text-[#2E7D32]">₹{order.total.toFixed(2)}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Back Button */}
        <Button
          onClick={onBackToHome}
          variant="outline"
          className="w-full border-neutral-300 text-neutral-700 hover:bg-neutral-100 rounded-xl h-12"
        >
          Back to Customer View
        </Button>
      </div>
    </div>
  );
}
