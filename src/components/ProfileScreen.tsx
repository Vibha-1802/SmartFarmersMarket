import { ArrowLeft, User, Mail, Phone, MapPin } from "lucide-react";
import type { Order } from "../types/order";

interface ProfileScreenProps {
  orders: Order[];
  phoneNumber: string;
  onBack: () => void;
}

export function ProfileScreen({ orders, phoneNumber, onBack }: ProfileScreenProps) {
  return (
    <div className="h-full w-full bg-neutral-50 flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-3 shadow-sm">
        <button onClick={onBack} className="p-1">
          <ArrowLeft className="w-6 h-6 text-neutral-700" />
        </button>
        <h2 className="text-neutral-900">Profile</h2>
      </div>

      {/* Profile Info */}
      <div className="bg-[#2E7D32] px-6 pt-6 pb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
            <User className="w-10 h-10 text-[#2E7D32]" />
          </div>
          <div>
            <h2 className="text-white mb-1">John Smith</h2>
            <p className="text-white/80">Premium Customer</p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="px-4 -mt-4 pb-4">
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <h3 className="text-neutral-900 mb-3">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#2E7D32]" />
              <span className="text-neutral-600">john.smith@email.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#2E7D32]" />
              <span className="text-neutral-600">{phoneNumber || "+91 98765 43210"}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#2E7D32]" />
              <span className="text-neutral-600">123 Green Street, Mumbai</span>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="text-neutral-900 mb-3">Recent Orders</h3>
          {orders.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-neutral-500">No orders yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {orders.slice(0, 5).map((order) => (
                <div key={order.id} className="border border-neutral-200 rounded-xl p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-sm text-neutral-900">Order #{order.id}</p>
                      <p className="text-xs text-neutral-500">{order.date}</p>
                    </div>
                    <span className="text-xs bg-[#2E7D32]/10 text-[#2E7D32] px-2 py-1 rounded-full">
                      {order.status}
                    </span>
                  </div>
                  <div className="space-y-1 mb-2">
                    {order.items.map((item, idx) => (
                      <p key={idx} className="text-xs text-neutral-600">
                        {item.product.name} x {item.quantity} {item.product.unit}
                      </p>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-neutral-100">
                    <span className="text-sm text-neutral-600">Total</span>
                    <span className="text-[#2E7D32]">₹{order.total.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
