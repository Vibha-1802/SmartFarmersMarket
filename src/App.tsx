import { useState, useEffect } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { LoginScreen } from "./components/LoginScreen";
import { CustomerHomeScreen } from "./components/CustomerHomeScreen";
import { ProductDetailsScreen } from "./components/ProductDetailsScreen";
import { CartScreen } from "./components/CartScreen";
import { OrderConfirmationScreen } from "./components/OrderConfirmationScreen";
import { FarmerDashboardScreen } from "./components/FarmerDashboardScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { AddProductScreen, Product } from "./components/AddProductScreen";
import type { CartItem } from "./components/CartScreen";
import type { Order } from "./types/order";

type Screen = 
  | "splash"
  | "login"
  | "customerHome"
  | "productDetails"
  | "cart"
  | "orderConfirmation"
  | "farmerDashboard"
  | "profile"
  | "addProduct";

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Fresh Strawberries",
    price: 120,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1589533610925-1cffc309ebaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHN0cmF3YmVycmllcyUyMG9yZ2FuaWN8ZW58MXx8fHwxNzYyMjg2NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Fruits",
    stock: 10
  },
  {
    id: 2,
    name: "Organic Apples",
    price: 150,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1664066344258-57ba7ba7115a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwYXBwbGVzJTIwZmFybXxlbnwxfHx8fDE3NjIyODY1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Fruits",
    stock: 15
  },
  {
    id: 3,
    name: "Fresh Milk",
    price: 60,
    unit: "L",
    image: "https://images.unsplash.com/photo-1719532520242-a809140b313d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG1pbGslMjBkYWlyeXxlbnwxfHx8fDE3NjIyMDEwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Dairy",
    stock: 20
  },
  {
    id: 4,
    name: "Organic Tomatoes",
    price: 80,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1745791562822-7ac21012bbb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdG9tYXRvZXN8ZW58MXx8fHwxNzYyMjMwNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Vegetables",
    stock: 12
  },
  {
    id: 5,
    name: "Fresh Carrots",
    price: 70,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNhcnJvdHN8ZW58MXx8fHwxNzYyMjgzMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Vegetables",
    stock: 8
  },
  {
    id: 6,
    name: "Organic Wheat",
    price: 45,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1693593785503-5bfee6d1d5ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGdyYWlucyUyMG9yZ2FuaWN8ZW58MXx8fHwxNzYyMjg3NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Grains",
    stock: 25
  },
  {
    id: 7,
    name: "Fresh Cheese",
    price: 200,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1722718461923-c69728f7640b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNoZWVzZSUyMGRhaXJ5fGVufDF8fHx8MTc2MjI4NzYxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Dairy",
    stock: 5
  },
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("splash");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  const [showSplash, setShowSplash] = useState(true);
  const [userPhoneNumber, setUserPhoneNumber] = useState<string>("");
  const [products, setProducts] = useState<Product[]>(initialProducts);

  // Auto-hide splash screen after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setCurrentScreen("login");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setCurrentScreen("login");
  };

  const handleLoginAsCustomer = (phoneNumber: string) => {
    setUserPhoneNumber(phoneNumber);
    setCurrentScreen("customerHome");
  };

  const handleLoginAsFarmer = (phoneNumber: string) => {
    setUserPhoneNumber(phoneNumber);
    setCurrentScreen("farmerDashboard");
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentScreen("productDetails");
  };

  const handleBackFromProduct = () => {
    setCurrentScreen("customerHome");
    setSelectedProduct(null);
  };

  const handleAddToCart = (quantity: number) => {
    if (!selectedProduct) return;

    // Check stock availability
    const product = products.find(p => p.id === selectedProduct.id);
    if (!product || product.stock < quantity) {
      alert("Insufficient stock available!");
      return;
    }

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === selectedProduct.id);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === selectedProduct.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...selectedProduct, quantity }];
      }
    });

    setCurrentScreen("customerHome");
    setSelectedProduct(null);
  };

  const handleBuyNow = (quantity: number) => {
    if (!selectedProduct) return;

    // Check stock availability
    const product = products.find(p => p.id === selectedProduct.id);
    if (!product || product.stock < quantity) {
      alert("Insufficient stock available!");
      return;
    }

    // Decrease stock
    setProducts(prevProducts =>
      prevProducts.map(p =>
        p.id === selectedProduct.id
          ? { ...p, stock: p.stock - quantity }
          : p
      )
    );

    // Create an order directly from Buy Now
    const orderItems = [{ product: selectedProduct, quantity }];
    const total = selectedProduct.price * quantity;
    const orderId = `FM${Date.now().toString().slice(-6)}`;
    const newOrder: Order = {
      id: orderId,
      items: orderItems,
      total,
      status: "Confirmed",
      date: new Date().toLocaleDateString(),
      customerName: "John Smith"
    };

    setCurrentOrder(newOrder);
    setOrders(prevOrders => [newOrder, ...prevOrders]);
    setCurrentScreen("orderConfirmation");
    setSelectedProduct(null);
  };

  const handleCartClick = () => {
    setCurrentScreen("cart");
  };

  const handleBackFromCart = () => {
    setCurrentScreen("customerHome");
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;

    // Check stock availability for all items
    for (const item of cartItems) {
      const product = products.find(p => p.id === item.id);
      if (!product || product.stock < item.quantity) {
        alert(`Insufficient stock for ${item.name}!`);
        return;
      }
    }

    // Decrease stock for all items
    setProducts(prevProducts =>
      prevProducts.map(p => {
        const cartItem = cartItems.find(item => item.id === p.id);
        if (cartItem) {
          return { ...p, stock: p.stock - cartItem.quantity };
        }
        return p;
      })
    );

    // Create an order from cart items
    const orderItems = cartItems.map(item => ({
      product: item,
      quantity: item.quantity
    }));
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderId = `FM${Date.now().toString().slice(-6)}`;
    const newOrder: Order = {
      id: orderId,
      items: orderItems,
      total,
      status: "Confirmed",
      date: new Date().toLocaleDateString(),
      customerName: "John Smith"
    };

    setCurrentOrder(newOrder);
    setOrders(prevOrders => [newOrder, ...prevOrders]);
    setCartItems([]);
    setCurrentScreen("orderConfirmation");
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleBackToHome = () => {
    setCurrentScreen("customerHome");
  };

  const handleViewFarmerDashboard = () => {
    setCurrentScreen("farmerDashboard");
  };

  const handleAddProduct = () => {
    setCurrentScreen("addProduct");
  };

  const handleBackToCustomerView = () => {
    setCurrentScreen("customerHome");
  };

  const handleOrdersClick = () => {
    setCurrentScreen("profile");
  };

  const handleProfileClick = () => {
    setCurrentScreen("profile");
  };

  const handleBackFromProfile = () => {
    setCurrentScreen("customerHome");
  };

  const handleBackFromAddProduct = () => {
    setCurrentScreen("farmerDashboard");
  };

  const handleSubmitNewProduct = (newProduct: Omit<Product, "id">) => {
    const productWithId: Product = {
      ...newProduct,
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1
    };
    setProducts(prevProducts => [...prevProducts, productWithId]);
    setCurrentScreen("farmerDashboard");
  };

  return (
    <div className="size-full flex items-center justify-center bg-neutral-100">
      <div className="w-full max-w-md h-full bg-white shadow-2xl relative overflow-hidden">
        {currentScreen === "splash" && (
          <SplashScreen onComplete={handleSplashComplete} />
        )}

        {currentScreen === "login" && (
          <LoginScreen
            onLoginAsCustomer={handleLoginAsCustomer}
            onLoginAsFarmer={handleLoginAsFarmer}
          />
        )}

        {currentScreen === "customerHome" && (
          <CustomerHomeScreen
            products={products}
            onProductClick={handleProductClick}
            onCartClick={handleCartClick}
            onOrdersClick={handleOrdersClick}
            onProfileClick={handleProfileClick}
            cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          />
        )}

        {currentScreen === "productDetails" && selectedProduct && (() => {
          const currentProduct = products.find(p => p.id === selectedProduct.id) || selectedProduct;
          return (
            <ProductDetailsScreen
              product={currentProduct}
              onBack={handleBackFromProduct}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          );
        })()}

        {currentScreen === "cart" && (
          <CartScreen
            cartItems={cartItems}
            onBack={handleBackFromCart}
            onPlaceOrder={handlePlaceOrder}
            onRemoveItem={handleRemoveFromCart}
          />
        )}

        {currentScreen === "orderConfirmation" && currentOrder && (
          <OrderConfirmationScreen
            orderItems={currentOrder.items.map(item => ({
              ...item.product,
              quantity: item.quantity
            }))}
            orderId={currentOrder.id}
            totalAmount={currentOrder.total}
            onBackToHome={handleBackToHome}
          />
        )}

        {currentScreen === "farmerDashboard" && (
          <FarmerDashboardScreen
            orders={orders}
            products={products}
            onAddProduct={handleAddProduct}
            onBackToHome={handleBackToCustomerView}
          />
        )}

        {currentScreen === "profile" && (
          <ProfileScreen
            orders={orders}
            phoneNumber={userPhoneNumber}
            onBack={handleBackFromProfile}
          />
        )}

        {currentScreen === "addProduct" && (
          <AddProductScreen
            onBack={handleBackFromAddProduct}
            onAddProduct={handleSubmitNewProduct}
          />
        )}
      </div>
    </div>
  );
}
