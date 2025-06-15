// // // // // // // 'use client';

// // // // // // // import React, { useState } from 'react';
// // // // // // // import { ChevronDown, Filter, ShoppingCart, Check, X, Trash2, Plus, Minus } from 'lucide-react';

// // // // // // // interface Product {
// // // // // // //   id: number;
// // // // // // //   name: string;
// // // // // // //   fullName?: string;
// // // // // // //   price: number;
// // // // // // //   displayPrice: string;
// // // // // // //   originalPrice?: string;
// // // // // // //   discount?: string;
// // // // // // //   image: string;
// // // // // // //   category: string;
// // // // // // // }

// // // // // // // const ProductListing = () => {
// // // // // // //   const [filters, setFilters] = useState({
// // // // // // //     price: false,
// // // // // // //     storage: false,
// // // // // // //     camera: false,
// // // // // // //     display: false,
// // // // // // //     brand: false
// // // // // // //   });

// // // // // // //   const [showCheckout, setShowCheckout] = useState(false);
// // // // // // //   const [checkoutStep, setCheckoutStep] = useState(1);
// // // // // // //   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
// // // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // // //   const [selectedPayment, setSelectedPayment] = useState('');
// // // // // // //   const [deliveryOption, setDeliveryOption] = useState('home');
// // // // // // //   const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
  
// // // // // // //   const searchTexts = [
// // // // // // //     "iphones 11",
// // // // // // //     "iphones 15 pro max",
// // // // // // //     "nikon camera",
// // // // // // //     "samsung galaxy s24",
// // // // // // //     "macbook pro",
// // // // // // //     "drone 4k",
// // // // // // //     "apple watch",
// // // // // // //     "samsung mobile phone"
// // // // // // //   ];

// // // // // // //   // Auto-scroll search text
// // // // // // //   React.useEffect(() => {
// // // // // // //     const interval = setInterval(() => {
// // // // // // //       setCurrentSearchIndex((prev) => (prev + 1) % searchTexts.length);
// // // // // // //     }, 2000);
    
// // // // // // //     return () => clearInterval(interval);
// // // // // // //   }, []);

// // // // // // //   const handleBuyNow = (product: Product) => {
// // // // // // //     setSelectedProduct(product);
// // // // // // //     setShowCheckout(true);
// // // // // // //     setCheckoutStep(1);
// // // // // // //   };

// // // // // // //   const nextStep = () => {
// // // // // // //     if (checkoutStep < 4) {
// // // // // // //       setCheckoutStep(checkoutStep + 1);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const closeCheckout = () => {
// // // // // // //     setShowCheckout(false);
// // // // // // //     setCheckoutStep(1);
// // // // // // //     setSelectedProduct(null);
// // // // // // //   };

// // // // // // //   const getStepTitle = (step: number) => {
// // // // // // //     switch(step) {
// // // // // // //       case 1: return 'Cart';
// // // // // // //       case 2: return 'Shipping';
// // // // // // //       case 3: return 'Payment';
// // // // // // //       case 4: return 'Thank You';
// // // // // // //       default: return '';
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const calculateTotal = () => {
// // // // // // //     if (!selectedProduct) return 0;
// // // // // // //     const subtotal = selectedProduct.price * quantity;
// // // // // // //     const shipping = 250;
// // // // // // //     return subtotal + shipping;
// // // // // // //   };

// // // // // // //   const toggleFilter = (filterName: string) => {
// // // // // // //     setFilters(prev => ({
// // // // // // //       ...prev,
// // // // // // //       [filterName]: !prev[filterName]
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const products: Product[] = [
// // // // // // //     {
// // // // // // //       id: 1,
// // // // // // //       name: "Freestyle -",
// // // // // // //       price: 167995,
// // // // // // //       displayPrice: "KES 167,995",
// // // // // // //       image: "/api/placeholder/300/300",
// // // // // // //       category: "projector"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 2,
// // // // // // //       name: "Samsung Galaxy A15 - 6.5\"",
// // // // // // //       fullName: "Samsung Galaxy A15 - 6.5\" - 128GB ROM - 4GB RAM - Dual SIM - 4G",
// // // // // // //       price: 29499,
// // // // // // //       displayPrice: "KES 29,499",
// // // // // // //       image: "/api/placeholder/300/300",
// // // // // // //       category: "phone"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 3,
// // // // // // //       name: "Samsung Galaxy A35 5G - 6.6\"",
// // // // // // //       fullName: "Samsung Galaxy A35 5G - 6.6\" - 128GB ROM - 6GB RAM - Dual SIM",
// // // // // // //       price: 39585,
// // // // // // //       displayPrice: "KES 39,585",
// // // // // // //       image: "/api/placeholder/300/300",
// // // // // // //       category: "phone"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 4,
// // // // // // //       name: "Samsung Galaxy S24 Ultra",
// // // // // // //       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
// // // // // // //       price: 134945,
// // // // // // //       displayPrice: "KES 134,945",
// // // // // // //       originalPrice: "KES 165,650",
// // // // // // //       discount: "19% Off",
// // // // // // //       image: "/api/placeholder/300/300",
// // // // // // //       category: "phone"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 5,
// // // // // // //       name: "Samsung Galaxy S24 Ultra",
// // // // // // //       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
// // // // // // //       price: 134945,
// // // // // // //       displayPrice: "KES 134,945",
// // // // // // //       originalPrice: "KES 165,650",
// // // // // // //       discount: "19% Off",
// // // // // // //       image: "/api/placeholder/300/300",
// // // // // // //       category: "phone"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 6,
// // // // // // //       name: "Samsung Galaxy Z Fold 6 - 7.6\"",
// // // // // // //       fullName: "Samsung Galaxy Z Fold 6 - 7.6\" - 12GB RAM - 512GB ROM",
// // // // // // //       price: 194979,
// // // // // // //       displayPrice: "KES 194,979",
// // // // // // //       originalPrice: "KES 253,344",
// // // // // // //       discount: "23% Off",
// // // // // // //       image: "/api/placeholder/300/300",
// // // // // // //       category: "phone"
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-50">
// // // // // // //       {/* Checkout Modal */}
// // // // // // //       {showCheckout && (
// // // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 overflow-y-auto">
// // // // // // //           <div className="bg-white rounded-lg w-full max-w-6xl my-4 min-h-[600px]">
// // // // // // //             {/* Header with Progress */}
// // // // // // //             <div className="p-6 border-b">
// // // // // // //               <div className="flex justify-between items-center mb-6">
// // // // // // //                 <h2 className="text-2xl font-bold">Checkout (1 item)</h2>
// // // // // // //                 <button onClick={closeCheckout} className="p-2 hover:bg-gray-100 rounded-full">
// // // // // // //                   <X className="w-6 h-6" />
// // // // // // //                 </button>
// // // // // // //               </div>
              
// // // // // // //               {/* Progress Steps */}
// // // // // // //               <div className="flex items-center justify-between mb-4 overflow-x-auto">
// // // // // // //                 {[1, 2, 3, 4].map((step) => (
// // // // // // //                   <div key={step} className="flex items-center min-w-0">
// // // // // // //                     <div 
// // // // // // //                       className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
// // // // // // //                       style={{
// // // // // // //                         backgroundColor: step <= checkoutStep ? '#2E1065' : '#D1D5DB',
// // // // // // //                         color: step <= checkoutStep ? 'white' : '#6B7280'
// // // // // // //                       }}
// // // // // // //                     >
// // // // // // //                       {step < checkoutStep ? <Check className="w-4 h-4" /> : step}
// // // // // // //                     </div>
// // // // // // //                     <span className="ml-2 text-sm font-medium whitespace-nowrap">{getStepTitle(step)}</span>
// // // // // // //                     {step < 4 && (
// // // // // // //                       <div 
// // // // // // //                         className="w-8 sm:w-16 h-0.5 ml-4 flex-shrink-0"
// // // // // // //                         style={{backgroundColor: step < checkoutStep ? '#2E1065' : '#D1D5DB'}}
// // // // // // //                       />
// // // // // // //                     )}
// // // // // // //                   </div>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* Step Content */}
// // // // // // //             <div className="p-6 min-h-[500px]">
// // // // // // //               {checkoutStep === 1 && (
// // // // // // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // // // // //                   {/* Cart Items */}
// // // // // // //                   <div className="lg:col-span-2 space-y-6">
// // // // // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // // // // //                       <h3 className="text-lg font-semibold mb-4">Your Items</h3>
// // // // // // //                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-lg">
// // // // // // //                         <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
// // // // // // //                           <div className="w-8 h-12 bg-indigo-500 rounded"></div>
// // // // // // //                         </div>
// // // // // // //                         <div className="flex-1 min-w-0">
// // // // // // //                           <h4 className="font-semibold">{selectedProduct?.name}</h4>
// // // // // // //                           <p className="text-sm text-gray-600">{selectedProduct?.fullName}</p>
// // // // // // //                           <p className="font-bold text-lg">{selectedProduct?.displayPrice}</p>
// // // // // // //                         </div>
// // // // // // //                         <div className="flex items-center gap-2 flex-shrink-0">
// // // // // // //                           <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
// // // // // // //                             <Minus className="w-4 h-4" />
// // // // // // //                           </button>
// // // // // // //                           <span className="w-8 text-center">{quantity}</span>
// // // // // // //                           <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
// // // // // // //                             <Plus className="w-4 h-4" />
// // // // // // //                           </button>
// // // // // // //                         </div>
// // // // // // //                         <button className="p-2 text-red-500 hover:bg-red-50 rounded flex-shrink-0">
// // // // // // //                           <Trash2 className="w-4 h-4" />
// // // // // // //                         </button>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   </div>

// // // // // // //                   {/* Order Summary */}
// // // // // // //                   <div className="bg-white border rounded-lg p-6">
// // // // // // //                     <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
// // // // // // //                     <div className="space-y-3">
// // // // // // //                       <div className="flex justify-between">
// // // // // // //                         <span>Subtotal:</span>
// // // // // // //                         <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // // // // // //                       </div>
// // // // // // //                       <div className="flex justify-between">
// // // // // // //                         <span>Shipping & Handling:</span>
// // // // // // //                         <span>KES 250</span>
// // // // // // //                       </div>
// // // // // // //                       <div className="border-t pt-3">
// // // // // // //                         <div className="flex justify-between font-bold text-lg">
// // // // // // //                           <span>Grand Total</span>
// // // // // // //                           <span>KES {calculateTotal().toLocaleString()}</span>
// // // // // // //                         </div>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                     <button 
// // // // // // //                       onClick={nextStep} 
// // // // // // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors"
// // // // // // //                       style={{backgroundColor: '#2E1065'}}
// // // // // // //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // // // // // //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // // // // // //                     >
// // // // // // //                       PROCEED TO CHECKOUT
// // // // // // //                     </button>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               {checkoutStep === 2 && (
// // // // // // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // // // // //                   {/* Shipping Form */}
// // // // // // //                   <div className="lg:col-span-2 space-y-6">
// // // // // // //                     {/* Shipping Address */}
// // // // // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // // // // //                       <div className="flex items-center gap-2 mb-4">
// // // // // // //                         <div 
// // // // // // //                           className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
// // // // // // //                           style={{backgroundColor: '#2E1065'}}
// // // // // // //                         >
// // // // // // //                           2
// // // // // // //                         </div>
// // // // // // //                         <h3 className="text-lg font-semibold">Shipping Address</h3>
// // // // // // //                       </div>
                      
// // // // // // //                       <div className="space-y-4">
// // // // // // //                         <div className="bg-white rounded-lg p-4">
// // // // // // //                           <div className="flex items-center gap-2 mb-3">
// // // // // // //                             <input type="radio" name="delivery" checked={deliveryOption === 'home'} onChange={() => setDeliveryOption('home')} />
// // // // // // //                             <label className="font-medium">Delivery to your home or office</label>
// // // // // // //                           </div>
// // // // // // //                           <p className="text-sm text-gray-600 mb-4">Fill in your Home or office address</p>
                          
// // // // // // //                           {deliveryOption === 'home' && (
// // // // // // //                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // // // // //                               <div>
// // // // // // //                                 <label className="block text-sm font-medium mb-1">Firstname *</label>
// // // // // // //                                 <input type="text" className="w-full border rounded-lg px-3 py-2" />
// // // // // // //                               </div>
// // // // // // //                               <div>
// // // // // // //                                 <label className="block text-sm font-medium mb-1">Lastname *</label>
// // // // // // //                                 <input type="text" className="w-full border rounded-lg px-3 py-2" />
// // // // // // //                               </div>
// // // // // // //                               <div>
// // // // // // //                                 <label className="block text-sm font-medium mb-1">Region</label>
// // // // // // //                                 <select className="w-full border rounded-lg px-3 py-2">
// // // // // // //                                   <option>Nairobi</option>
// // // // // // //                                 </select>
// // // // // // //                               </div>
// // // // // // //                               <div>
// // // // // // //                                 <label className="block text-sm font-medium mb-1">Recipient Number *</label>
// // // // // // //                                 <input type="tel" className="w-full border rounded-lg px-3 py-2" />
// // // // // // //                               </div>
// // // // // // //                               <div className="sm:col-span-2">
// // // // // // //                                 <label className="block text-sm font-medium mb-1">Address</label>
// // // // // // //                                 <textarea className="w-full border rounded-lg px-3 py-2 h-20"></textarea>
// // // // // // //                               </div>
// // // // // // //                             </div>
// // // // // // //                           )}
// // // // // // //                         </div>

// // // // // // //                         <div className="bg-white rounded-lg p-4">
// // // // // // //                           <div className="flex items-center gap-2 mb-3">
// // // // // // //                             <input type="radio" name="delivery" checked={deliveryOption === 'pickup'} onChange={() => setDeliveryOption('pickup')} />
// // // // // // //                             <label className="font-medium">Pickup Station</label>
// // // // // // //                           </div>
// // // // // // //                           <p className="text-sm text-gray-600">I would like to pick my order at the closest Masoko pick up point</p>
// // // // // // //                         </div>
// // // // // // //                       </div>
// // // // // // //                     </div>

// // // // // // //                     {/* Promotion Code */}
// // // // // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // // // // //                       <h3 className="text-lg font-semibold mb-4">Promotion Code(Optional)</h3>
// // // // // // //                       <div className="bg-white rounded-lg p-4">
// // // // // // //                         <h4 className="font-medium mb-2">APPLY A PROMOTION CODE</h4>
// // // // // // //                         <p className="text-sm text-gray-600 mb-3">Do you have a promo code? <a href="#" className="text-blue-500 underline">Check on promo or Log in</a></p>
// // // // // // //                         <input type="text" placeholder="Enter promotion code" className="w-full border rounded-lg px-3 py-2" />
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   </div>

// // // // // // //                   {/* Order Summary */}
// // // // // // //                   <div className="bg-white border rounded-lg p-6">
// // // // // // //                     <div className="flex items-center gap-2 mb-4">
// // // // // // //                       <div 
// // // // // // //                         className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
// // // // // // //                         style={{backgroundColor: '#2E1065'}}
// // // // // // //                       >
// // // // // // //                         3
// // // // // // //                       </div>
// // // // // // //                       <h3 className="text-lg font-semibold">Order Summary</h3>
// // // // // // //                     </div>
                    
// // // // // // //                     <div className="space-y-4">
// // // // // // //                       <div>
// // // // // // //                         <h4 className="font-medium mb-2">PRODUCT</h4>
// // // // // // //                         <div className="flex gap-3">
// // // // // // //                           <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
// // // // // // //                             <div className="w-6 h-8 bg-indigo-500 rounded"></div>
// // // // // // //                           </div>
// // // // // // //                           <div className="flex-1 min-w-0">
// // // // // // //                             <p className="font-medium text-sm">{selectedProduct?.name}</p>
// // // // // // //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// // // // // // //                             <p className="font-bold">{selectedProduct?.displayPrice}</p>
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                       </div>
                      
// // // // // // //                       <div className="space-y-2">
// // // // // // //                         <div className="flex justify-between">
// // // // // // //                           <span>Shipping & Handling:</span>
// // // // // // //                           <span>KES 250</span>
// // // // // // //                         </div>
// // // // // // //                         <div className="flex justify-between">
// // // // // // //                           <span>Subtotal:</span>
// // // // // // //                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // // // // // //                         </div>
// // // // // // //                         <div className="border-t pt-2">
// // // // // // //                           <div className="flex justify-between font-bold text-lg">
// // // // // // //                             <span>Grand Total</span>
// // // // // // //                             <span>KES {calculateTotal().toLocaleString()}</span>
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                       </div>
// // // // // // //                     </div>
                    
// // // // // // //                     <button 
// // // // // // //                       onClick={nextStep} 
// // // // // // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors"
// // // // // // //                       style={{backgroundColor: '#2E1065'}}
// // // // // // //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // // // // // //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // // // // // //                     >
// // // // // // //                       CONTINUE TO PAYMENT
// // // // // // //                     </button>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               {checkoutStep === 3 && (
// // // // // // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // // // // //                   {/* Payment Methods */}
// // // // // // //                   <div className="lg:col-span-2 space-y-6">
// // // // // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // // // // //                       <h3 className="text-lg font-semibold mb-4">SELECT PAYMENT METHOD</h3>
// // // // // // //                       <p className="text-sm text-red-500 mb-4">Select preferred payment method for enhanced shopping experience.</p>
                      
// // // // // // //                       <div className="space-y-3">
// // // // // // //                         <div className="bg-white rounded-lg p-4 border">
// // // // // // //                           <div className="flex items-center gap-3">
// // // // // // //                             <input type="radio" name="payment" value="mpesa" checked={selectedPayment === 'mpesa'} onChange={(e) => setSelectedPayment(e.target.value)} />
// // // // // // //                             <span>Lipa Na M-Pesa</span>
// // // // // // //                             <span className="text-green-600 font-bold">m-pesa</span>
// // // // // // //                           </div>
// // // // // // //                         </div>
                        
// // // // // // //                         <div className="bg-white rounded-lg p-4 border">
// // // // // // //                           <div className="flex items-center gap-3">
// // // // // // //                             <input type="radio" name="payment" value="bonga" checked={selectedPayment === 'bonga'} onChange={(e) => setSelectedPayment(e.target.value)} />
// // // // // // //                             <span>Lipa Na Bonga</span>
// // // // // // //                             <span className="text-orange-600 font-bold">BONGA</span>
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   </div>

// // // // // // //                   {/* Order Summary */}
// // // // // // //                   <div className="bg-white border rounded-lg p-6">
// // // // // // //                     <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                    
// // // // // // //                     <div className="space-y-4">
// // // // // // //                       <div>
// // // // // // //                         <h4 className="font-medium mb-2">PRODUCT</h4>
// // // // // // //                         <div className="flex gap-3">
// // // // // // //                           <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
// // // // // // //                             <div className="w-6 h-8 bg-indigo-500 rounded"></div>
// // // // // // //                           </div>
// // // // // // //                           <div className="flex-1 min-w-0">
// // // // // // //                             <p className="font-medium text-sm">{selectedProduct?.name}</p>
// // // // // // //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// // // // // // //                             <p className="font-bold">{selectedProduct?.displayPrice}</p>
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                       </div>
                      
// // // // // // //                       <div className="space-y-2">
// // // // // // //                         <div className="flex justify-between">
// // // // // // //                           <span>Shipping & Handling:</span>
// // // // // // //                           <span>KES 250</span>
// // // // // // //                         </div>
// // // // // // //                         <div className="flex justify-between">
// // // // // // //                           <span>Subtotal:</span>
// // // // // // //                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // // // // // //                         </div>
// // // // // // //                         <div className="border-t pt-2">
// // // // // // //                           <div className="flex justify-between font-bold text-lg">
// // // // // // //                             <span>Grand Total</span>
// // // // // // //                             <span>KES {calculateTotal().toLocaleString()}</span>
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                       </div>
// // // // // // //                     </div>
                    
// // // // // // //                     <button 
// // // // // // //                       onClick={nextStep} 
// // // // // // //                       disabled={!selectedPayment} 
// // // // // // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 disabled:bg-gray-300 transition-colors"
// // // // // // //                       style={{backgroundColor: selectedPayment ? '#2E1065' : '#D1D5DB'}}
// // // // // // //                       onMouseEnter={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D')}
// // // // // // //                       onMouseLeave={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#2E1065')}
// // // // // // //                     >
// // // // // // //                       COMPLETE PAYMENT
// // // // // // //                     </button>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               {checkoutStep === 4 && (
// // // // // // //                 <div className="text-center py-12">
// // // // // // //                   <div 
// // // // // // //                     className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
// // // // // // //                     style={{backgroundColor: '#2E1065'}}
// // // // // // //                   >
// // // // // // //                     <Check className="w-8 h-8 text-white" />
// // // // // // //                   </div>
// // // // // // //                   <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
// // // // // // //                   <p className="text-lg text-gray-600 mb-8">Your order has been successfully placed.</p>
// // // // // // //                   <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
// // // // // // //                     <h3 className="font-semibold mb-4">Order Details</h3>
// // // // // // //                     <div className="text-left space-y-2">
// // // // // // //                       <div className="flex justify-between">
// // // // // // //                         <span>Order Number:</span>
// // // // // // //                         <span className="font-bold">#MK{Date.now().toString().slice(-6)}</span>
// // // // // // //                       </div>
// // // // // // //                       <div className="flex justify-between">
// // // // // // //                         <span>Total Paid:</span>
// // // // // // //                         <span className="font-bold">KES {calculateTotal().toLocaleString()}</span>
// // // // // // //                       </div>
// // // // // // //                       <div className="flex justify-between">
// // // // // // //                         <span>Payment Method:</span>
// // // // // // //                         <span className="font-bold">{selectedPayment === 'mpesa' ? 'M-Pesa' : 'Bonga Points'}</span>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                   <button 
// // // // // // //                     onClick={closeCheckout} 
// // // // // // //                     className="text-white px-8 py-3 rounded-lg font-semibold mt-8 transition-colors"
// // // // // // //                     style={{backgroundColor: '#2E1065'}}
// // // // // // //                     onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // // // // // //                     onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // // // // // //                   >
// // // // // // //                     Continue Shopping
// // // // // // //                   </button>
// // // // // // //                 </div>
// // // // // // //               )}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       <div className="container mx-auto px-4 py-6">
// // // // // // //         {/* Header/Hero Section with Deep Purple Theme */}
// // // // // // //         <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg mb-8 px-4 sm:px-6 py-6 sm:py-8" style={{background: 'linear-gradient(to right, #2E1065, #1E0A4D)'}}>
// // // // // // //           {/* Navigation Tabs */}
// // // // // // //           <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6">
// // // // // // //             <button className="text-white font-semibold border-b-2 border-white pb-1">
// // // // // // //               Products
// // // // // // //             </button>
// // // // // // //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// // // // // // //               Manufacturers
// // // // // // //             </button>
// // // // // // //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// // // // // // //               Regional supplies
// // // // // // //             </button>
// // // // // // //           </div>

// // // // // // //           {/* Search Section */}
// // // // // // //           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
// // // // // // //             <div className="relative flex-1 max-w-2xl">
// // // // // // //               <div className="relative w-full">
// // // // // // //                 <input
// // // // // // //                   type="text"
// // // // // // //                   className="w-full px-6 py-3 rounded-full text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/30"
// // // // // // //                   style={{ caretColor: 'transparent' }}
// // // // // // //                   readOnly
// // // // // // //                 />
// // // // // // //                 <div className="absolute left-6 top-1/2 -translate-y-1/2 overflow-hidden h-6">
// // // // // // //                   <div 
// // // // // // //                     className="transition-transform duration-500 ease-in-out"
// // // // // // //                     style={{ 
// // // // // // //                       transform: `translateY(-${currentSearchIndex * 24}px)` 
// // // // // // //                     }}
// // // // // // //                   >
// // // // // // //                     {searchTexts.map((text, index) => (
// // // // // // //                       <div key={index} className="h-6 flex items-center text-gray-800">
// // // // // // //                         {text}
// // // // // // //                       </div>
// // // // // // //                     ))}
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //             <div className="flex gap-2 sm:gap-4">
// // // // // // //               <button className="px-4 sm:px-8 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2">
// // // // // // //                 <span>🔍</span> <span className="hidden sm:inline">Search</span>
// // // // // // //               </button>
// // // // // // //               <button className="px-4 sm:px-6 py-3 bg-white rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2" style={{color: '#2E1065'}}>
// // // // // // //                 <span>📷</span> <span className="hidden sm:inline">Image Search</span>
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Frequently Searched */}
// // // // // // //           <div className="text-center">
// // // // // // //             <span className="text-white/90 text-sm">Frequently searched: </span>
// // // // // // //             <div className="inline-flex flex-wrap gap-2 mt-1">
// // // // // // //               {['drone 4K', 'iphones 11', 'samsung mobile phone', 'i phone', 'camera', 'nikon camera'].map((term, index) => (
// // // // // // //                 <button key={index} className="text-white/90 text-sm hover:text-white transition-colors">
// // // // // // //                   {term}
// // // // // // //                 </button>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <div className="flex flex-col lg:flex-row gap-6">
// // // // // // //           {/* Sidebar Filters */}
// // // // // // //           <div className="w-full lg:w-64 bg-white rounded-lg shadow-sm p-4 h-fit">
// // // // // // //             <div className="flex items-center gap-2 mb-4">
// // // // // // //               <Filter className="w-4 h-4" style={{color: '#2E1065'}} />
// // // // // // //               <span className="text-base font-semibold text-gray-800">Filter</span>
// // // // // // //             </div>

// // // // // // //             <div className="space-y-1">
// // // // // // //               {/* Price Filter */}
// // // // // // //               <div className="border-b border-gray-100 pb-2 mb-2">
// // // // // // //                 <button
// // // // // // //                   onClick={() => toggleFilter('price')}
// // // // // // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // // // // // //                 >
// // // // // // //                   <span className="text-gray-800 font-medium text-sm">Price</span>
// // // // // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.price ? 'rotate-180' : ''}`} />
// // // // // // //                 </button>
// // // // // // //               </div>

// // // // // // //               {/* Storage Capacity Filter */}
// // // // // // //               <div className="border-b border-gray-100 pb-2 mb-2">
// // // // // // //                 <button
// // // // // // //                   onClick={() => toggleFilter('storage')}
// // // // // // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // // // // // //                 >
// // // // // // //                   <span className="text-gray-800 font-medium text-sm">Storage Capacity</span>
// // // // // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.storage ? 'rotate-180' : ''}`} />
// // // // // // //                 </button>
// // // // // // //               </div>

// // // // // // //               {/* Camera Megapixel Filter */}
// // // // // // //               <div className="border-b border-gray-100 pb-2 mb-2">
// // // // // // //                 <button
// // // // // // //                   onClick={() => toggleFilter('camera')}
// // // // // // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // // // // // //                 >
// // // // // // //                   <span className="text-gray-800 font-medium text-sm">Camera Megapixel</span>
// // // // // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.camera ? 'rotate-180' : ''}`} />
// // // // // // //                 </button>
// // // // // // //               </div>

// // // // // // //               {/* Display Size Filter */}
// // // // // // //               <div className="border-b border-gray-100 pb-2 mb-2">
// // // // // // //                 <button
// // // // // // //                   onClick={() => toggleFilter('display')}
// // // // // // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // // // // // //                 >
// // // // // // //                   <span className="text-gray-800 font-medium text-sm">Display Size</span>
// // // // // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.display ? 'rotate-180' : ''}`} />
// // // // // // //                 </button>
// // // // // // //               </div>

// // // // // // //               {/* Brand Filter */}
// // // // // // //               <div className="pb-2">
// // // // // // //                 <button
// // // // // // //                   onClick={() => toggleFilter('brand')}
// // // // // // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // // // // // //                 >
// // // // // // //                   <span className="text-gray-800 font-medium text-sm">Brand</span>
// // // // // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.brand ? 'rotate-180' : ''}`} />
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Main Content */}
// // // // // // //           <div className="flex-1">
// // // // // // //             {/* Results Header */}
// // // // // // //             <div className="mb-6">
// // // // // // //               <div className="flex items-center gap-2 mb-4">
// // // // // // //                 <div className="w-12 h-1 rounded-full bg-cyan-300"></div>
// // // // // // //               </div>
// // // // // // //               <h1 className="text-2xl font-bold text-gray-800">45 Results Found</h1>
// // // // // // //             </div>

// // // // // // //             {/* Product Grid - 6 products in 2 rows */}
// // // // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // //               {products.map((product) => (
// // // // // // //                 <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group relative">
// // // // // // //                   {/* Discount Badge */}
// // // // // // //                   {product.discount && (
// // // // // // //                     <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold z-10">
// // // // // // //                       {product.discount}
// // // // // // //                     </div>
// // // // // // //                   )}
                  
// // // // // // //                   <div className="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 h-72 flex items-center justify-center">
// // // // // // //                     {/* Product Design based on category */}
// // // // // // //                     {product.category === 'projector' && (
// // // // // // //                       <div className="relative">
// // // // // // //                         {/* Main projector body */}
// // // // // // //                         <div className="w-32 h-20 bg-gray-800 rounded-lg shadow-lg relative">
// // // // // // //                           {/* Lens */}
// // // // // // //                           <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-900 rounded-full border-4 border-gray-700">
// // // // // // //                             <div className="w-full h-full bg-gray-600 rounded-full flex items-center justify-center">
// // // // // // //                               <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
// // // // // // //                             </div>
// // // // // // //                           </div>
// // // // // // //                           {/* Side panel */}
// // // // // // //                           <div className="absolute -right-2 -top-1 w-6 h-12 bg-gray-200 rounded transform rotate-12"></div>
// // // // // // //                           {/* Top details */}
// // // // // // //                           <div className="absolute top-2 left-4 w-6 h-1 bg-gray-600 rounded"></div>
// // // // // // //                           <div className="absolute top-4 left-6 w-4 h-1 bg-gray-600 rounded"></div>
// // // // // // //                         </div>
// // // // // // //                       </div>
// // // // // // //                     )}
                    
// // // // // // //                     {product.category === 'phone' && (
// // // // // // //                       <div className="relative">
// // // // // // //                         {/* Phone body */}
// // // // // // //                         <div className={`w-28 h-52 rounded-3xl shadow-xl relative overflow-hidden ${
// // // // // // //                           product.id === 2 ? 'bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-900' :
// // // // // // //                           product.id === 3 ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' :
// // // // // // //                           product.id === 4 ? 'bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-700' :
// // // // // // //                           product.id === 5 ? 'bg-gradient-to-b from-gray-700 via-gray-600 to-gray-800' :
// // // // // // //                           'bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900'
// // // // // // //                         }`}>
// // // // // // //                           {/* Screen */}
// // // // // // //                           <div className={`absolute top-3 left-3 right-3 bottom-3 rounded-2xl relative ${
// // // // // // //                             product.id === 2 ? 'bg-gradient-to-b from-pink-200 via-blue-200 to-purple-300' :
// // // // // // //                             product.id === 3 ? 'bg-gradient-to-b from-pink-100 via-purple-100 to-pink-200' :
// // // // // // //                             product.id === 4 ? 'bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100' :
// // // // // // //                             product.id === 5 ? 'bg-gradient-to-b from-gray-100 via-blue-100 to-purple-100' :
// // // // // // //                             'bg-gradient-to-b from-purple-100 via-pink-100 to-blue-100'
// // // // // // //                           }`}>
// // // // // // //                             {/* A35 5G Badge */}
// // // // // // //                             {product.id === 3 && (
// // // // // // //                               <div className="absolute top-2 right-2 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded">
// // // // // // //                                 A35 5G
// // // // // // //                               </div>
// // // // // // //                             )}
                            
// // // // // // //                             {/* Status bar */}
// // // // // // //                             <div className="absolute top-2 left-2 right-2 h-1 bg-gray-800 rounded-full opacity-20"></div>
                            
// // // // // // //                             {/* Camera notch */}
// // // // // // //                             <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-gray-800 rounded-full opacity-30"></div>
                            
// // // // // // //                             {/* S Pen for S24 Ultra */}
// // // // // // //                             {(product.id === 4 || product.id === 5) && (
// // // // // // //                               <div className="absolute -left-8 top-6 w-1 h-20 bg-gray-800 rounded-full rotate-12"></div>
// // // // // // //                             )}
// // // // // // //                           </div>
                          
// // // // // // //                           {/* Camera module */}
// // // // // // //                           <div className={`absolute top-4 left-4 rounded-full ${
// // // // // // //                             (product.id === 4 || product.id === 5) ? 'w-8 h-16 bg-gray-800' : 'w-8 h-8 bg-gray-800'
// // // // // // //                           }`}>
// // // // // // //                             {(product.id === 4 || product.id === 5) ? (
// // // // // // //                               // Triple camera for S24 Ultra
// // // // // // //                               <>
// // // // // // //                                 <div className="absolute top-1 left-1 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
// // // // // // //                                   <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
// // // // // // //                                 </div>
// // // // // // //                                 <div className="absolute top-8 left-1 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
// // // // // // //                                   <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
// // // // // // //                                 </div>
// // // // // // //                               </>
// // // // // // //                             ) : (
// // // // // // //                               // Single camera for A15/A35
// // // // // // //                               <div className="absolute top-1 left-1 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
// // // // // // //                                 <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
// // // // // // //                               </div>
// // // // // // //                             )}
// // // // // // //                           </div>
                          
// // // // // // //                           {/* Secondary camera */}
// // // // // // //                           {(product.id === 2 || product.id === 3) && (
// // // // // // //                             <div className="absolute top-6 left-6 w-3 h-3 bg-gray-700 rounded-full"></div>
// // // // // // //                           )}
// // // // // // //                         </div>
// // // // // // //                       </div>
// // // // // // //                     )}
                    
// // // // // // //                     {/* Hover cart button */}
// // // // // // //                     <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// // // // // // //                       <button 
// // // // // // //                         className="w-10 h-10 bg-purple-900 hover:bg-purple-800 rounded-full flex items-center justify-center text-white transition-colors"
// // // // // // //                       >
// // // // // // //                         <ShoppingCart className="w-5 h-5" />
// // // // // // //                       </button>
// // // // // // //                     </div>
// // // // // // //                   </div>
                  
// // // // // // //                   <div className="p-4">
// // // // // // //                     <h3 className="font-semibold text-gray-800 mb-2 text-lg leading-tight">{product.name}</h3>
// // // // // // //                     {product.fullName && (
// // // // // // //                       <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.fullName}</p>
// // // // // // //                     )}
// // // // // // //                     <div className="flex items-center gap-2 mb-4">
// // // // // // //                       <p className="text-2xl font-bold text-gray-900">{product.displayPrice}</p>
// // // // // // //                       {product.originalPrice && (
// // // // // // //                         <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
// // // // // // //                       )}
// // // // // // //                     </div>
// // // // // // //                     <button 
// // // // // // //                       onClick={() => handleBuyNow(product)}
// // // // // // //                       className="w-full bg-purple-900 hover:bg-purple-800 text-white py-3 px-4 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
// // // // // // //                     >
// // // // // // //                       BUY NOW
// // // // // // //                     </button>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ProductListing;



// // // // // // import React, { useState } from 'react';
// // // // // // import { ChevronDown, Filter, ShoppingCart, Check, X, Trash2, Plus, Minus } from 'lucide-react';

// // // // // // const ProductListing = () => {
// // // // // //   const [filters, setFilters] = useState({
// // // // // //     price: false,
// // // // // //     storage: false,
// // // // // //     camera: false,
// // // // // //     display: false,
// // // // // //     brand: false
// // // // // //   });

// // // // // //   const [showCheckout, setShowCheckout] = useState(false);
// // // // // //   const [checkoutStep, setCheckoutStep] = useState(1);
// // // // // //   const [selectedProduct, setSelectedProduct] = useState(null);
// // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // //   const [deliveryAddress, setDeliveryAddress] = useState({
// // // // // //     firstName: '',
// // // // // //     lastName: '',
// // // // // //     region: 'Nairobi',
// // // // // //     recipientNumber: '',
// // // // // //     address: ''
// // // // // //   });
// // // // // //   const [selectedPayment, setSelectedPayment] = useState('');
// // // // // //   const [promotionCode, setPromotionCode] = useState('');
// // // // // //   const [deliveryOption, setDeliveryOption] = useState('home'); // 'home' or 'pickup'

// // // // // //   const handleBuyNow = (product) => {
// // // // // //     setSelectedProduct(product);
// // // // // //     setShowCheckout(true);
// // // // // //     setCheckoutStep(1);
// // // // // //   };

// // // // // //   const nextStep = () => {
// // // // // //     if (checkoutStep < 4) {
// // // // // //       setCheckoutStep(checkoutStep + 1);
// // // // // //     }
// // // // // //   };

// // // // // //   const prevStep = () => {
// // // // // //     if (checkoutStep > 1) {
// // // // // //       setCheckoutStep(checkoutStep - 1);
// // // // // //     }
// // // // // //   };

// // // // // //   const closeCheckout = () => {
// // // // // //     setShowCheckout(false);
// // // // // //     setCheckoutStep(1);
// // // // // //     setSelectedProduct(null);
// // // // // //   };

// // // // // //   const getStepTitle = (step) => {
// // // // // //     switch(step) {
// // // // // //       case 1: return 'Cart';
// // // // // //       case 2: return 'Shipping';
// // // // // //       case 3: return 'Payment';
// // // // // //       case 4: return 'Thank You';
// // // // // //       default: return '';
// // // // // //     }
// // // // // //   };

// // // // // //   const calculateTotal = () => {
// // // // // //     if (!selectedProduct) return 0;
// // // // // //     const subtotal = selectedProduct.price * quantity;
// // // // // //     const shipping = 250;
// // // // // //     return subtotal + shipping;
// // // // // //   };

// // // // // //   const toggleFilter = (filterName) => {
// // // // // //     setFilters(prev => ({
// // // // // //       ...prev,
// // // // // //       [filterName]: !prev[filterName]
// // // // // //     }));
// // // // // //   };

// // // // // //   const products = [
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       name: "Freestyle -",
// // // // // //       price: 167995,
// // // // // //       displayPrice: "KES 167,995",
// // // // // //       image: "/api/placeholder/300/300",
// // // // // //       category: "projector"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 2,
// // // // // //       name: "Samsung Galaxy A15",
// // // // // //       fullName: "Samsung Galaxy A15 - 6.5\" - 128GB ROM - 4GB RAM - Dual SIM - 4G",
// // // // // //       price: 29499,
// // // // // //       displayPrice: "KES 29,499",
// // // // // //       image: "/api/placeholder/300/300",
// // // // // //       category: "phone"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 3,
// // // // // //       name: "Samsung Galaxy A35 5G",
// // // // // //       fullName: "Samsung Galaxy A35 5G - 6.6\" - 128GB ROM - 6GB RAM - Dual SIM",
// // // // // //       price: 39585,
// // // // // //       displayPrice: "KES 39,585",
// // // // // //       image: "/api/placeholder/300/300",
// // // // // //       category: "phone"
// // // // // //     }
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-50">
// // // // // //       {/* Checkout Modal */}
// // // // // //       {showCheckout && (
// // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 overflow-y-auto">
// // // // // //           <div className="bg-white rounded-lg w-full max-w-6xl my-4 min-h-[600px]">
// // // // // //             {/* Header with Progress */}
// // // // // //             <div className="p-6 border-b">
// // // // // //               <div className="flex justify-between items-center mb-6">
// // // // // //                 <h2 className="text-2xl font-bold">Checkout (1 item)</h2>
// // // // // //                 <button onClick={closeCheckout} className="p-2 hover:bg-gray-100 rounded-full">
// // // // // //                   <X className="w-6 h-6" />
// // // // // //                 </button>
// // // // // //               </div>
              
// // // // // //               {/* Progress Steps */}
// // // // // //               <div className="flex items-center justify-between mb-4">
// // // // // //                 {[1, 2, 3, 4].map((step) => (
// // // // // //                   <div key={step} className="flex items-center">
// // // // // //                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
// // // // // //                       step < checkoutStep ? 'bg-blue-500 text-white' : 
// // // // // //                       step === checkoutStep ? 'bg-blue-500 text-white' : 
// // // // // //                       'bg-gray-300 text-gray-600'
// // // // // //                     }`}>
// // // // // //                       {step < checkoutStep ? <Check className="w-4 h-4" /> : step}
// // // // // //                     </div>
// // // // // //                     <span className="ml-2 text-sm font-medium">{getStepTitle(step)}</span>
// // // // // //                     {step < 4 && <div className={`w-16 h-0.5 ml-4 ${step < checkoutStep ? 'bg-blue-500' : 'bg-gray-300'}`} />}
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Step Content */}
// // // // // //             <div className="p-6 min-h-[500px]">
// // // // // //               {checkoutStep === 1 && (
// // // // // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // // // //                   {/* Cart Items */}
// // // // // //                   <div className="lg:col-span-2 space-y-6">
// // // // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // // // //                       <h3 className="text-lg font-semibold mb-4">Your Items</h3>
// // // // // //                       <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
// // // // // //                         <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
// // // // // //                           <div className="w-8 h-12 bg-indigo-500 rounded"></div>
// // // // // //                         </div>
// // // // // //                         <div className="flex-1">
// // // // // //                           <h4 className="font-semibold">{selectedProduct?.name}</h4>
// // // // // //                           <p className="text-sm text-gray-600">{selectedProduct?.fullName}</p>
// // // // // //                           <p className="font-bold text-lg">{selectedProduct?.displayPrice}</p>
// // // // // //                         </div>
// // // // // //                         <div className="flex items-center gap-2">
// // // // // //                           <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
// // // // // //                             <Minus className="w-4 h-4" />
// // // // // //                           </button>
// // // // // //                           <span className="w-8 text-center">{quantity}</span>
// // // // // //                           <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
// // // // // //                             <Plus className="w-4 h-4" />
// // // // // //                           </button>
// // // // // //                         </div>
// // // // // //                         <button className="p-2 text-red-500 hover:bg-red-50 rounded">
// // // // // //                           <Trash2 className="w-4 h-4" />
// // // // // //                         </button>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>

// // // // // //                   {/* Order Summary */}
// // // // // //                   <div className="bg-white border rounded-lg p-6">
// // // // // //                     <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
// // // // // //                     <div className="space-y-3">
// // // // // //                       <div className="flex justify-between">
// // // // // //                         <span>Subtotal:</span>
// // // // // //                         <span>KES {(selectedProduct?.price * quantity).toLocaleString()}</span>
// // // // // //                       </div>
// // // // // //                       <div className="flex justify-between">
// // // // // //                         <span>Shipping & Handling:</span>
// // // // // //                         <span>KES 250</span>
// // // // // //                       </div>
// // // // // //                       <div className="border-t pt-3">
// // // // // //                         <div className="flex justify-between font-bold text-lg">
// // // // // //                           <span>Grand Total</span>
// // // // // //                           <span>KES {calculateTotal().toLocaleString()}</span>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                     <button onClick={nextStep} className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold mt-6 hover:bg-blue-600 transition-colors">
// // // // // //                       PROCEED TO CHECKOUT
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {checkoutStep === 2 && (
// // // // // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // // // //                   {/* Shipping Form */}
// // // // // //                   <div className="lg:col-span-2 space-y-6">
// // // // // //                     {/* Shipping Address */}
// // // // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // // // //                       <div className="flex items-center gap-2 mb-4">
// // // // // //                         <div className="w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center text-sm font-bold">2</div>
// // // // // //                         <h3 className="text-lg font-semibold">Shipping Address</h3>
// // // // // //                       </div>
                      
// // // // // //                       <div className="space-y-4">
// // // // // //                         <div className="bg-white rounded-lg p-4">
// // // // // //                           <div className="flex items-center gap-2 mb-3">
// // // // // //                             <input type="radio" name="delivery" checked={deliveryOption === 'home'} onChange={() => setDeliveryOption('home')} />
// // // // // //                             <label className="font-medium">Delivery to your home or office</label>
// // // // // //                           </div>
// // // // // //                           <p className="text-sm text-gray-600 mb-4">Fill in your Home or office address</p>
                          
// // // // // //                           {deliveryOption === 'home' && (
// // // // // //                             <div className="grid grid-cols-2 gap-4">
// // // // // //                               <div>
// // // // // //                                 <label className="block text-sm font-medium mb-1">Firstname *</label>
// // // // // //                                 <input type="text" className="w-full border rounded-lg px-3 py-2" />
// // // // // //                               </div>
// // // // // //                               <div>
// // // // // //                                 <label className="block text-sm font-medium mb-1">Lastname *</label>
// // // // // //                                 <input type="text" className="w-full border rounded-lg px-3 py-2" />
// // // // // //                               </div>
// // // // // //                               <div>
// // // // // //                                 <label className="block text-sm font-medium mb-1">Region</label>
// // // // // //                                 <select className="w-full border rounded-lg px-3 py-2">
// // // // // //                                   <option>Nairobi</option>
// // // // // //                                 </select>
// // // // // //                               </div>
// // // // // //                               <div>
// // // // // //                                 <label className="block text-sm font-medium mb-1">Recipient Number *</label>
// // // // // //                                 <input type="tel" className="w-full border rounded-lg px-3 py-2" />
// // // // // //                               </div>
// // // // // //                               <div className="col-span-2">
// // // // // //                                 <label className="block text-sm font-medium mb-1">Address</label>
// // // // // //                                 <textarea className="w-full border rounded-lg px-3 py-2 h-20"></textarea>
// // // // // //                               </div>
// // // // // //                             </div>
// // // // // //                           )}
// // // // // //                         </div>

// // // // // //                         <div className="bg-white rounded-lg p-4">
// // // // // //                           <div className="flex items-center gap-2 mb-3">
// // // // // //                             <input type="radio" name="delivery" checked={deliveryOption === 'pickup'} onChange={() => setDeliveryOption('pickup')} />
// // // // // //                             <label className="font-medium">Pickup Station</label>
// // // // // //                           </div>
// // // // // //                           <p className="text-sm text-gray-600">I would like to pick my order at the closest Masoko pick up point</p>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </div>

// // // // // //                     {/* Promotion Code */}
// // // // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // // // //                       <h3 className="text-lg font-semibold mb-4">Promotion Code(Optional)</h3>
// // // // // //                       <div className="bg-white rounded-lg p-4">
// // // // // //                         <h4 className="font-medium mb-2">APPLY A PROMOTION CODE</h4>
// // // // // //                         <p className="text-sm text-gray-600 mb-3">Do you have a promo code? <a href="#" className="text-blue-500 underline">Check on promo or Log in</a></p>
// // // // // //                         <input type="text" placeholder="Enter promotion code" className="w-full border rounded-lg px-3 py-2" />
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>

// // // // // //                   {/* Order Summary */}
// // // // // //                   <div className="bg-white border rounded-lg p-6">
// // // // // //                     <div className="flex items-center gap-2 mb-4">
// // // // // //                       <div className="w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center text-sm font-bold">3</div>
// // // // // //                       <h3 className="text-lg font-semibold">Order Summary</h3>
// // // // // //                     </div>
                    
// // // // // //                     <div className="space-y-4">
// // // // // //                       <div>
// // // // // //                         <h4 className="font-medium mb-2">PRODUCT</h4>
// // // // // //                         <div className="flex gap-3">
// // // // // //                           <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
// // // // // //                             <div className="w-6 h-8 bg-indigo-500 rounded"></div>
// // // // // //                           </div>
// // // // // //                           <div className="flex-1">
// // // // // //                             <p className="font-medium text-sm">{selectedProduct?.name}</p>
// // // // // //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// // // // // //                             <p className="font-bold">{selectedProduct?.displayPrice}</p>
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       </div>
                      
// // // // // //                       <div className="space-y-2">
// // // // // //                         <div className="flex justify-between">
// // // // // //                           <span>Shipping & Handling:</span>
// // // // // //                           <span>KES 250</span>
// // // // // //                         </div>
// // // // // //                         <div className="flex justify-between">
// // // // // //                           <span>Subtotal:</span>
// // // // // //                           <span>KES {(selectedProduct?.price * quantity).toLocaleString()}</span>
// // // // // //                         </div>
// // // // // //                         <div className="border-t pt-2">
// // // // // //                           <div className="flex justify-between font-bold text-lg">
// // // // // //                             <span>Grand Total</span>
// // // // // //                             <span>KES {calculateTotal().toLocaleString()}</span>
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </div>
                    
// // // // // //                     <button onClick={nextStep} className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold mt-6 hover:bg-blue-600 transition-colors">
// // // // // //                       CONTINUE TO PAYMENT
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {checkoutStep === 3 && (
// // // // // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // // // //                   {/* Payment Methods */}
// // // // // //                   <div className="lg:col-span-2 space-y-6">
// // // // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // // // //                       <h3 className="text-lg font-semibold mb-4">SELECT PAYMENT METHOD</h3>
// // // // // //                       <p className="text-sm text-red-500 mb-4">Select preferred shipping address for enhanced shopping experience.</p>
                      
// // // // // //                       <div className="space-y-3">
// // // // // //                         <div className="bg-white rounded-lg p-4 border">
// // // // // //                           <div className="flex items-center gap-3">
// // // // // //                             <input type="radio" name="payment" value="mpesa" checked={selectedPayment === 'mpesa'} onChange={(e) => setSelectedPayment(e.target.value)} />
// // // // // //                             <span>Lipa Na M-Pesa</span>
// // // // // //                             <span className="text-green-600 font-bold">m-pesa</span>
// // // // // //                           </div>
// // // // // //                         </div>
                        
// // // // // //                         <div className="bg-white rounded-lg p-4 border">
// // // // // //                           <div className="flex items-center gap-3">
// // // // // //                             <input type="radio" name="payment" value="bonga" checked={selectedPayment === 'bonga'} onChange={(e) => setSelectedPayment(e.target.value)} />
// // // // // //                             <span>Lipa Na Bonga</span>
// // // // // //                             <span className="text-orange-600 font-bold">BONGA</span>
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>

// // // // // //                   {/* Order Summary */}
// // // // // //                   <div className="bg-white border rounded-lg p-6">
// // // // // //                     <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                    
// // // // // //                     <div className="space-y-4">
// // // // // //                       <div>
// // // // // //                         <h4 className="font-medium mb-2">PRODUCT</h4>
// // // // // //                         <div className="flex gap-3">
// // // // // //                           <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
// // // // // //                             <div className="w-6 h-8 bg-indigo-500 rounded"></div>
// // // // // //                           </div>
// // // // // //                           <div className="flex-1">
// // // // // //                             <p className="font-medium text-sm">{selectedProduct?.name}</p>
// // // // // //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// // // // // //                             <p className="font-bold">{selectedProduct?.displayPrice}</p>
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       </div>
                      
// // // // // //                       <div className="space-y-2">
// // // // // //                         <div className="flex justify-between">
// // // // // //                           <span>Shipping & Handling:</span>
// // // // // //                           <span>KES 250</span>
// // // // // //                         </div>
// // // // // //                         <div className="flex justify-between">
// // // // // //                           <span>Subtotal:</span>
// // // // // //                           <span>KES {(selectedProduct?.price * quantity).toLocaleString()}</span>
// // // // // //                         </div>
// // // // // //                         <div className="border-t pt-2">
// // // // // //                           <div className="flex justify-between font-bold text-lg">
// // // // // //                             <span>Grand Total</span>
// // // // // //                             <span>KES {calculateTotal().toLocaleString()}</span>
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </div>
                    
// // // // // //                     <button onClick={nextStep} disabled={!selectedPayment} className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold mt-6 hover:bg-orange-600 disabled:bg-gray-300 transition-colors">
// // // // // //                       COMPLETE PAYMENT
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {checkoutStep === 4 && (
// // // // // //                 <div className="text-center py-12">
// // // // // //                   <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
// // // // // //                     <Check className="w-8 h-8 text-white" />
// // // // // //                   </div>
// // // // // //                   <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
// // // // // //                   <p className="text-lg text-gray-600 mb-8">Your order has been successfully placed.</p>
// // // // // //                   <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
// // // // // //                     <h3 className="font-semibold mb-4">Order Details</h3>
// // // // // //                     <div className="text-left space-y-2">
// // // // // //                       <div className="flex justify-between">
// // // // // //                         <span>Order Number:</span>
// // // // // //                         <span className="font-bold">#MK{Date.now().toString().slice(-6)}</span>
// // // // // //                       </div>
// // // // // //                       <div className="flex justify-between">
// // // // // //                         <span>Total Paid:</span>
// // // // // //                         <span className="font-bold">KES {calculateTotal().toLocaleString()}</span>
// // // // // //                       </div>
// // // // // //                       <div className="flex justify-between">
// // // // // //                         <span>Payment Method:</span>
// // // // // //                         <span className="font-bold">{selectedPayment === 'mpesa' ? 'M-Pesa' : 'Bonga Points'}</span>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                   <button onClick={closeCheckout} className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold mt-8 hover:bg-blue-600 transition-colors">
// // // // // //                     Continue Shopping
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       <div className="container mx-auto px-4 py-6">
// // // // // //         {/* Blue Header/Hero Section */}
// // // // // //         <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mb-8 px-6 py-8">
// // // // // //           {/* Navigation Tabs */}
// // // // // //           <div className="flex justify-center gap-8 mb-6">
// // // // // //             <button className="text-white font-semibold border-b-2 border-white pb-1">
// // // // // //               Products
// // // // // //             </button>
// // // // // //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// // // // // //               Manufacturers
// // // // // //             </button>
// // // // // //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// // // // // //               Regional supplies
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           {/* Search Section */}
// // // // // //           <div className="flex justify-center gap-4 mb-4">
// // // // // //             <div className="relative flex-1 max-w-2xl">
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="iphones 11"
// // // // // //                 className="w-full px-6 py-3 rounded-full text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/30"
// // // // // //               />
// // // // // //             </div>
// // // // // //             <button className="px-8 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2">
// // // // // //               <span>🔍</span> Search
// // // // // //             </button>
// // // // // //             <button className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2">
// // // // // //               <span>📷</span> Image Search
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           {/* Frequently Searched */}
// // // // // //           <div className="text-center">
// // // // // //             <span className="text-white/90 text-sm">Frequently searched: </span>
// // // // // //             <div className="inline-flex flex-wrap gap-2 mt-1">
// // // // // //               {['drone 4K', 'iphones 11', 'samsung mobile phone', 'i phone', 'camera', 'nikon camera'].map((term, index) => (
// // // // // //                 <button key={index} className="text-white/90 text-sm hover:text-white transition-colors">
// // // // // //                   {term}
// // // // // //                 </button>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <div className="flex gap-8">
// // // // // //           {/* Sidebar Filters */}
// // // // // //           <div className="w-80 bg-white rounded-lg shadow-sm p-6 h-fit">
// // // // // //             <div className="flex items-center gap-2 mb-6">
// // // // // //               <Filter className="w-5 h-5 text-green-600" />
// // // // // //               <span className="text-lg font-semibold text-gray-800">Filter</span>
// // // // // //             </div>

// // // // // //             <div className="space-y-1">
// // // // // //               {/* Price Filter */}
// // // // // //               <div className="border-b border-gray-100 pb-4 mb-4">
// // // // // //                 <button
// // // // // //                   onClick={() => toggleFilter('price')}
// // // // // //                   className="flex items-center justify-between w-full py-3 text-left hover:bg-gray-50 rounded-lg px-2"
// // // // // //                 >
// // // // // //                   <span className="text-gray-800 font-medium">Price</span>
// // // // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.price ? 'rotate-180' : ''}`} />
// // // // // //                 </button>
// // // // // //               </div>

// // // // // //               {/* Storage Capacity Filter */}
// // // // // //               <div className="border-b border-gray-100 pb-4 mb-4">
// // // // // //                 <button
// // // // // //                   onClick={() => toggleFilter('storage')}
// // // // // //                   className="flex items-center justify-between w-full py-3 text-left hover:bg-gray-50 rounded-lg px-2"
// // // // // //                 >
// // // // // //                   <span className="text-gray-800 font-medium">Storage Capacity</span>
// // // // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.storage ? 'rotate-180' : ''}`} />
// // // // // //                 </button>
// // // // // //               </div>

// // // // // //               {/* Camera Megapixel Filter */}
// // // // // //               <div className="border-b border-gray-100 pb-4 mb-4">
// // // // // //                 <button
// // // // // //                   onClick={() => toggleFilter('camera')}
// // // // // //                   className="flex items-center justify-between w-full py-3 text-left hover:bg-gray-50 rounded-lg px-2"
// // // // // //                 >
// // // // // //                   <span className="text-gray-800 font-medium">Camera Megapixel</span>
// // // // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.camera ? 'rotate-180' : ''}`} />
// // // // // //                 </button>
// // // // // //               </div>

// // // // // //               {/* Display Size Filter */}
// // // // // //               <div className="border-b border-gray-100 pb-4 mb-4">
// // // // // //                 <button
// // // // // //                   onClick={() => toggleFilter('display')}
// // // // // //                   className="flex items-center justify-between w-full py-3 text-left hover:bg-gray-50 rounded-lg px-2"
// // // // // //                 >
// // // // // //                   <span className="text-gray-800 font-medium">Display Size</span>
// // // // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.display ? 'rotate-180' : ''}`} />
// // // // // //                 </button>
// // // // // //               </div>

// // // // // //               {/* Brand Filter */}
// // // // // //               <div className="pb-4">
// // // // // //                 <button
// // // // // //                   onClick={() => toggleFilter('brand')}
// // // // // //                   className="flex items-center justify-between w-full py-3 text-left hover:bg-gray-50 rounded-lg px-2"
// // // // // //                 >
// // // // // //                   <span className="text-gray-800 font-medium">Brand</span>
// // // // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.brand ? 'rotate-180' : ''}`} />
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Main Content */}
// // // // // //           <div className="flex-1">
// // // // // //             {/* Results Header */}
// // // // // //             <div className="mb-6">
// // // // // //               <div className="flex items-center gap-2 mb-4">
// // // // // //                 <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
// // // // // //               </div>
// // // // // //               <h1 className="text-2xl font-bold text-gray-800">45 Results Found</h1>
// // // // // //             </div>

// // // // // //             {/* Product Grid */}
// // // // // //             <div className="grid grid-cols-3 gap-6">
// // // // // //               {/* Product 1 - Freestyle Projector */}
// // // // // //               <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
// // // // // //                 <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 h-64 flex items-center justify-center">
// // // // // //                   <div className="w-48 h-32 bg-white rounded-lg shadow-md flex items-center justify-center relative">
// // // // // //                     <div className="w-24 h-24 bg-gray-800 rounded-full relative">
// // // // // //                       <div className="absolute inset-2 bg-gray-700 rounded-full">
// // // // // //                         <div className="absolute inset-2 bg-gray-600 rounded-full flex items-center justify-center">
// // // // // //                           <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                     <div className="absolute -right-2 -top-2 w-12 h-20 bg-gray-200 rounded transform rotate-12"></div>
// // // // // //                   </div>
// // // // // //                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
// // // // // //                     <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
// // // // // //                       <ShoppingCart className="w-5 h-5" />
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //                 <div className="p-4">
// // // // // //                   <h3 className="font-semibold text-gray-800 mb-2">Freestyle -</h3>
// // // // // //                   <p className="text-xl font-bold text-gray-900 mb-3">KES 167,995</p>
// // // // // //                   <button 
// // // // // //                     onClick={() => handleBuyNow(products[0])}
// // // // // //                     className="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-green-600"
// // // // // //                   >
// // // // // //                     BUY NOW
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Product 2 - Samsung Galaxy A15 */}
// // // // // //               <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
// // // // // //                 <div className="relative p-6 bg-gradient-to-br from-indigo-50 to-purple-50 h-64 flex items-center justify-center">
// // // // // //                   <div className="w-32 h-52 bg-gradient-to-b from-indigo-900 via-indigo-800 to-purple-900 rounded-3xl shadow-lg flex items-start justify-center pt-4 relative overflow-hidden">
// // // // // //                     <div className="w-24 h-40 bg-gradient-to-b from-pink-200 via-blue-200 to-purple-200 rounded-2xl"></div>
// // // // // //                     <div className="absolute top-2 left-6 w-4 h-1 bg-gray-800 rounded-full"></div>
// // // // // //                     <div className="absolute top-6 left-4 w-8 h-8 bg-gray-800 rounded-full"></div>
// // // // // //                     <div className="absolute top-8 left-8 w-3 h-3 bg-gray-700 rounded-full"></div>
// // // // // //                   </div>
// // // // // //                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
// // // // // //                     <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
// // // // // //                       <ShoppingCart className="w-5 h-5" />
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //                 <div className="p-4">
// // // // // //                   <h3 className="font-semibold text-gray-800 mb-2 leading-tight">Samsung Galaxy A15 - 6.5" - 128GB ROM - 4GB RAM - Dual SIM - 4G</h3>
// // // // // //                   <p className="text-xl font-bold text-gray-900 mb-3">KES 29,499</p>
// // // // // //                   <button 
// // // // // //                     onClick={() => handleBuyNow(products[1])}
// // // // // //                     className="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-green-600"
// // // // // //                   >
// // // // // //                     BUY NOW
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Product 3 - Samsung Galaxy A35 */}
// // // // // //               <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
// // // // // //                 <div className="relative p-6 bg-gradient-to-br from-purple-50 to-pink-50 h-64 flex items-center justify-center">
// // // // // //                   <div className="w-32 h-52 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-lg flex items-start justify-center pt-4 relative overflow-hidden">
// // // // // //                     <div className="w-24 h-40 bg-gradient-to-b from-pink-100 via-purple-100 to-pink-200 rounded-2xl relative">
// // // // // //                       <div className="absolute top-2 right-2 text-xs font-bold text-gray-700 bg-white rounded px-1">A35 5G</div>
// // // // // //                     </div>
// // // // // //                     <div className="absolute top-2 left-6 w-4 h-1 bg-gray-800 rounded-full"></div>
// // // // // //                     <div className="absolute top-6 left-4 w-8 h-8 bg-gray-800 rounded-full"></div>
// // // // // //                     <div className="absolute top-8 left-8 w-3 h-3 bg-gray-700 rounded-full"></div>
// // // // // //                   </div>
// // // // // //                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
// // // // // //                     <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
// // // // // //                       <ShoppingCart className="w-5 h-5" />
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //                 <div className="p-4">
// // // // // //                   <h3 className="font-semibold text-gray-800 mb-2 leading-tight">Samsung Galaxy A35 5G - 6.6" - 128GB ROM - 6GB RAM - Dual SIM</h3>
// // // // // //                   <p className="text-xl font-bold text-gray-900 mb-3">KES 39,585</p>
// // // // // //                   <button 
// // // // // //                     onClick={() => handleBuyNow(products[2])}
// // // // // //                     className="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-green-600"
// // // // // //                   >
// // // // // //                     BUY NOW
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProductListing;



// // // // // // 'use client';

// // // // // // import React, { useState } from 'react';
// // // // // // import { ChevronDown, Filter, ShoppingCart, Check, X, Trash2, Plus, Minus } from 'lucide-react';

// // // // // // interface Product {
// // // // // //   id: number;
// // // // // //   name: string;
// // // // // //   fullName?: string;
// // // // // //   price: number;
// // // // // //   displayPrice: string;
// // // // // //   originalPrice?: string;
// // // // // //   discount?: string;
// // // // // //   image: string;
// // // // // //   category: string;
// // // // // // }

// // // // // // const ProductListing = () => {
// // // // // //   const [filters, setFilters] = useState({
// // // // // //     price: false,
// // // // // //     storage: false,
// // // // // //     camera: false,
// // // // // //     display: false,
// // // // // //     brand: false
// // // // // //   });

// // // // // //   const [showCheckout, setShowCheckout] = useState(false);
// // // // // //   const [checkoutStep, setCheckoutStep] = useState(1);
// // // // // //   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
// // // // // //   const [quantity, setQuantity] = useState(1);
// // // // // //   const [selectedPayment, setSelectedPayment] = useState('');
// // // // // //   const [deliveryOption, setDeliveryOption] = useState('home');
// // // // // //   const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
  
// // // // // //   const searchTexts = [
// // // // // //     "iphones 11",
// // // // // //     "iphones 15 pro max",
// // // // // //     "nikon camera",
// // // // // //     "samsung galaxy s24",
// // // // // //     "macbook pro",
// // // // // //     "drone 4k",
// // // // // //     "apple watch",
// // // // // //     "samsung mobile phone"
// // // // // //   ];

// // // // // //   // Auto-scroll search text
// // // // // //   React.useEffect(() => {
// // // // // //     const interval = setInterval(() => {
// // // // // //       setCurrentSearchIndex((prev) => (prev + 1) % searchTexts.length);
// // // // // //     }, 2000);
    
// // // // // //     return () => clearInterval(interval);
// // // // // //   }, []);

// // // // // //   const handleBuyNow = (product: Product) => {
// // // // // //     setSelectedProduct(product);
// // // // // //     setShowCheckout(true);
// // // // // //     setCheckoutStep(1);
// // // // // //   };

// // // // // //   const nextStep = () => {
// // // // // //     if (checkoutStep < 4) {
// // // // // //       setCheckoutStep(checkoutStep + 1);
// // // // // //     }
// // // // // //   };

// // // // // //   const closeCheckout = () => {
// // // // // //     setShowCheckout(false);
// // // // // //     setCheckoutStep(1);
// // // // // //     setSelectedProduct(null);
// // // // // //   };

// // // // // //   const getStepTitle = (step: number) => {
// // // // // //     switch(step) {
// // // // // //       case 1: return 'Cart';
// // // // // //       case 2: return 'Shipping';
// // // // // //       case 3: return 'Payment';
// // // // // //       case 4: return 'Thank You';
// // // // // //       default: return '';
// // // // // //     }
// // // // // //   };

// // // // // //   const calculateTotal = () => {
// // // // // //     if (!selectedProduct) return 0;
// // // // // //     const subtotal = selectedProduct.price * quantity;
// // // // // //     const shipping = 250;
// // // // // //     return subtotal + shipping;
// // // // // //   };

// // // // // //   const toggleFilter = (filterName: string) => {
// // // // // //     setFilters(prev => ({
// // // // // //       ...prev,
// // // // // //       [filterName]: !prev[filterName]
// // // // // //     }));
// // // // // //   };

// // // // // //   const products: Product[] = [
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       name: "Freestyle -",
// // // // // //       price: 167995,
// // // // // //       displayPrice: "KES 167,995",
// // // // // //       image: "/api/placeholder/300/300",
// // // // // //       category: "projector"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 2,
// // // // // //       name: "Samsung Galaxy A15 - 6.5\"",
// // // // // //       fullName: "Samsung Galaxy A15 - 6.5\" - 128GB ROM - 4GB RAM - Dual SIM - 4G",
// // // // // //       price: 29499,
// // // // // //       displayPrice: "KES 29,499",
// // // // // //       image: "/api/placeholder/300/300",
// // // // // //       category: "phone"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 3,
// // // // // //       name: "Samsung Galaxy A35 5G - 6.6\"",
// // // // // //       fullName: "Samsung Galaxy A35 5G - 6.6\" - 128GB ROM - 6GB RAM - Dual SIM",
// // // // // //       price: 39585,
// // // // // //       displayPrice: "KES 39,585",
// // // // // //       image: "/api/placeholder/300/300",
// // // // // //       category: "phone"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 4,
// // // // // //       name: "Samsung Galaxy S24 Ultra",
// // // // // //       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
// // // // // //       price: 134945,
// // // // // //       displayPrice: "KES 134,945",
// // // // // //       originalPrice: "KES 165,650",
// // // // // //       discount: "19% Off",
// // // // // //       image: "/api/placeholder/300/300",
// // // // // //       category: "phone"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 5,
// // // // // //       name: "Samsung Galaxy S24 Ultra",
// // // // // //       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
// // // // // //       price: 134945,
// // // // // //       displayPrice: "KES 134,945",
// // // // // //       originalPrice: "KES 165,650",
// // // // // //       discount: "19% Off",
// // // // // //       image: "/api/placeholder/300/300",
// // // // // //       category: "phone"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 6,
// // // // // //       name: "Samsung Galaxy Z Fold 6 - 7.6\"",
// // // // // //       fullName: "Samsung Galaxy Z Fold 6 - 7.6\" - 12GB RAM - 512GB ROM",
// // // // // //       price: 194979,
// // // // // //       displayPrice: "KES 194,979",
// // // // // //       originalPrice: "KES 253,344",
// // // // // //       discount: "23% Off",
// // // // // //       image: "/api/placeholder/300/300",
// // // // // //       category: "phone"
// // // // // //     }
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-50">
// // // // // //       {/* Checkout Modal */}
// // // // // //       {showCheckout && (
// // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 overflow-y-auto">
// // // // // //           <div className="bg-white rounded-lg w-full max-w-6xl my-4 min-h-[600px]">
// // // // // //             {/* Header with Progress */}
// // // // // //             <div className="p-6 border-b">
// // // // // //               <div className="flex justify-between items-center mb-6">
// // // // // //                 <h2 className="text-2xl font-bold">Checkout (1 item)</h2>
// // // // // //                 <button onClick={closeCheckout} className="p-2 hover:bg-gray-100 rounded-full">
// // // // // //                   <X className="w-6 h-6" />
// // // // // //                 </button>
// // // // // //               </div>
              
// // // // // //               {/* Progress Steps */}
// // // // // //               <div className="flex items-center justify-between mb-4 overflow-x-auto">
// // // // // //                 {[1, 2, 3, 4].map((step) => (
// // // // // //                   <div key={step} className="flex items-center min-w-0">
// // // // // //                     <div 
// // // // // //                       className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
// // // // // //                       style={{
// // // // // //                         backgroundColor: step <= checkoutStep ? '#2E1065' : '#D1D5DB',
// // // // // //                         color: step <= checkoutStep ? 'white' : '#6B7280'
// // // // // //                       }}
// // // // // //                     >
// // // // // //                       {step < checkoutStep ? <Check className="w-4 h-4" /> : step}
// // // // // //                     </div>
// // // // // //                     <span className="ml-2 text-sm font-medium whitespace-nowrap">{getStepTitle(step)}</span>
// // // // // //                     {step < 4 && (
// // // // // //                       <div 
// // // // // //                         className="w-8 sm:w-16 h-0.5 ml-4 flex-shrink-0"
// // // // // //                         style={{backgroundColor: step < checkoutStep ? '#2E1065' : '#D1D5DB'}}
// // // // // //                       />
// // // // // //                     )}
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Step Content */}
// // // // // //             <div className="p-6 min-h-[500px]">
// // // // // //               {checkoutStep === 1 && (
// // // // // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // // // //                   {/* Cart Items */}
// // // // // //                   <div className="lg:col-span-2 space-y-6">
// // // // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // // // //                       <h3 className="text-lg font-semibold mb-4">Your Items</h3>
// // // // // //                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-lg">
// // // // // //                         <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
// // // // // //                           <div className="w-8 h-12 bg-indigo-500 rounded"></div>
// // // // // //                         </div>
// // // // // //                         <div className="flex-1 min-w-0">
// // // // // //                           <h4 className="font-semibold">{selectedProduct?.name}</h4>
// // // // // //                           <p className="text-sm text-gray-600">{selectedProduct?.fullName}</p>
// // // // // //                           <p className="font-bold text-lg">{selectedProduct?.displayPrice}</p>
// // // // // //                         </div>
// // // // // //                         <div className="flex items-center gap-2 flex-shrink-0">
// // // // // //                           <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
// // // // // //                             <Minus className="w-4 h-4" />
// // // // // //                           </button>
// // // // // //                           <span className="w-8 text-center">{quantity}</span>
// // // // // //                           <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
// // // // // //                             <Plus className="w-4 h-4" />
// // // // // //                           </button>
// // // // // //                         </div>
// // // // // //                         <button className="p-2 text-red-500 hover:bg-red-50 rounded flex-shrink-0">
// // // // // //                           <Trash2 className="w-4 h-4" />
// // // // // //                         </button>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>

// // // // // //                   {/* Order Summary */}
// // // // // //                   <div className="bg-white border rounded-lg p-6">
// // // // // //                     <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
// // // // // //                     <div className="space-y-3">
// // // // // //                       <div className="flex justify-between">
// // // // // //                         <span>Subtotal:</span>
// // // // // //                         <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // // // // //                       </div>
// // // // // //                       <div className="flex justify-between">
// // // // // //                         <span>Shipping & Handling:</span>
// // // // // //                         <span>KES 250</span>
// // // // // //                       </div>
// // // // // //                       <div className="border-t pt-3">
// // // // // //                         <div className="flex justify-between font-bold text-lg">
// // // // // //                           <span>Grand Total</span>
// // // // // //                           <span>KES {calculateTotal().toLocaleString()}</span>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                     <button 
// // // // // //                       onClick={nextStep} 
// // // // // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors"
// // // // // //                       style={{backgroundColor: '#2E1065'}}
// // // // // //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // // // // //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // // // // //                     >
// // // // // //                       PROCEED TO CHECKOUT
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {checkoutStep === 2 && (
// // // // // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // // // //                   {/* Shipping Form */}
// // // // // //                   <div className="lg:col-span-2 space-y-6">
// // // // // //                     {/* Shipping Address */}
// // // // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // // // //                       <div className="flex items-center gap-2 mb-4">
// // // // // //                         <div 
// // // // // //                           className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
// // // // // //                           style={{backgroundColor: '#2E1065'}}
// // // // // //                         >
// // // // // //                           2
// // // // // //                         </div>
// // // // // //                         <h3 className="text-lg font-semibold">Shipping Address</h3>
// // // // // //                       </div>
                      
// // // // // //                       <div className="space-y-4">
// // // // // //                         <div className="bg-white rounded-lg p-4">
// // // // // //                           <div className="flex items-center gap-2 mb-3">
// // // // // //                             <input type="radio" name="delivery" checked={deliveryOption === 'home'} onChange={() => setDeliveryOption('home')} />
// // // // // //                             <label className="font-medium">Delivery to your home or office</label>
// // // // // //                           </div>
// // // // // //                           <p className="text-sm text-gray-600 mb-4">Fill in your Home or office address</p>
                          
// // // // // //                           {deliveryOption === 'home' && (
// // // // // //                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // // // //                               <div>
// // // // // //                                 <label className="block text-sm font-medium mb-1">Firstname *</label>
// // // // // //                                 <input type="text" className="w-full border rounded-lg px-3 py-2" />
// // // // // //                               </div>
// // // // // //                               <div>
// // // // // //                                 <label className="block text-sm font-medium mb-1">Lastname *</label>
// // // // // //                                 <input type="text" className="w-full border rounded-lg px-3 py-2" />
// // // // // //                               </div>
// // // // // //                               <div>
// // // // // //                                 <label className="block text-sm font-medium mb-1">Region</label>
// // // // // //                                 <select className="w-full border rounded-lg px-3 py-2">
// // // // // //                                   <option>Nairobi</option>
// // // // // //                                 </select>
// // // // // //                               </div>
// // // // // //                               <div>
// // // // // //                                 <label className="block text-sm font-medium mb-1">Recipient Number *</label>
// // // // // //                                 <input type="tel" className="w-full border rounded-lg px-3 py-2" />
// // // // // //                               </div>
// // // // // //                               <div className="sm:col-span-2">
// // // // // //                                 <label className="block text-sm font-medium mb-1">Address</label>
// // // // // //                                 <textarea className="w-full border rounded-lg px-3 py-2 h-20"></textarea>
// // // // // //                               </div>
// // // // // //                             </div>
// // // // // //                           )}
// // // // // //                         </div>

// // // // // //                         <div className="bg-white rounded-lg p-4">
// // // // // //                           <div className="flex items-center gap-2 mb-3">
// // // // // //                             <input type="radio" name="delivery" checked={deliveryOption === 'pickup'} onChange={() => setDeliveryOption('pickup')} />
// // // // // //                             <label className="font-medium">Pickup Station</label>
// // // // // //                           </div>
// // // // // //                           <p className="text-sm text-gray-600">I would like to pick my order at the closest Masoko pick up point</p>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </div>

// // // // // //                     {/* Promotion Code */}
// // // // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // // // //                       <h3 className="text-lg font-semibold mb-4">Promotion Code(Optional)</h3>
// // // // // //                       <div className="bg-white rounded-lg p-4">
// // // // // //                         <h4 className="font-medium mb-2">APPLY A PROMOTION CODE</h4>
// // // // // //                         <p className="text-sm text-gray-600 mb-3">Do you have a promo code? <a href="#" className="text-blue-500 underline">Check on promo or Log in</a></p>
// // // // // //                         <input type="text" placeholder="Enter promotion code" className="w-full border rounded-lg px-3 py-2" />
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>

// // // // // //                   {/* Order Summary */}
// // // // // //                   <div className="bg-white border rounded-lg p-6">
// // // // // //                     <div className="flex items-center gap-2 mb-4">
// // // // // //                       <div 
// // // // // //                         className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
// // // // // //                         style={{backgroundColor: '#2E1065'}}
// // // // // //                       >
// // // // // //                         3
// // // // // //                       </div>
// // // // // //                       <h3 className="text-lg font-semibold">Order Summary</h3>
// // // // // //                     </div>
                    
// // // // // //                     <div className="space-y-4">
// // // // // //                       <div>
// // // // // //                         <h4 className="font-medium mb-2">PRODUCT</h4>
// // // // // //                         <div className="flex gap-3">
// // // // // //                           <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
// // // // // //                             <div className="w-6 h-8 bg-indigo-500 rounded"></div>
// // // // // //                           </div>
// // // // // //                           <div className="flex-1 min-w-0">
// // // // // //                             <p className="font-medium text-sm">{selectedProduct?.name}</p>
// // // // // //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// // // // // //                             <p className="font-bold">{selectedProduct?.displayPrice}</p>
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       </div>
                      
// // // // // //                       <div className="space-y-2">
// // // // // //                         <div className="flex justify-between">
// // // // // //                           <span>Shipping & Handling:</span>
// // // // // //                           <span>KES 250</span>
// // // // // //                         </div>
// // // // // //                         <div className="flex justify-between">
// // // // // //                           <span>Subtotal:</span>
// // // // // //                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // // // // //                         </div>
// // // // // //                         <div className="border-t pt-2">
// // // // // //                           <div className="flex justify-between font-bold text-lg">
// // // // // //                             <span>Grand Total</span>
// // // // // //                             <span>KES {calculateTotal().toLocaleString()}</span>
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </div>
                    
// // // // // //                     <button 
// // // // // //                       onClick={nextStep} 
// // // // // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors"
// // // // // //                       style={{backgroundColor: '#2E1065'}}
// // // // // //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // // // // //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // // // // //                     >
// // // // // //                       CONTINUE TO PAYMENT
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {checkoutStep === 3 && (
// // // // // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // // // //                   {/* Payment Methods */}
// // // // // //                   <div className="lg:col-span-2 space-y-6">
// // // // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // // // //                       <h3 className="text-lg font-semibold mb-4">SELECT PAYMENT METHOD</h3>
// // // // // //                       <p className="text-sm text-red-500 mb-4">Select preferred payment method for enhanced shopping experience.</p>
                      
// // // // // //                       <div className="space-y-3">
// // // // // //                         <div className="bg-white rounded-lg p-4 border">
// // // // // //                           <div className="flex items-center gap-3">
// // // // // //                             <input type="radio" name="payment" value="mpesa" checked={selectedPayment === 'mpesa'} onChange={(e) => setSelectedPayment(e.target.value)} />
// // // // // //                             <span>Lipa Na M-Pesa</span>
// // // // // //                             <span className="text-green-600 font-bold">m-pesa</span>
// // // // // //                           </div>
// // // // // //                         </div>
                        
// // // // // //                         <div className="bg-white rounded-lg p-4 border">
// // // // // //                           <div className="flex items-center gap-3">
// // // // // //                             <input type="radio" name="payment" value="bonga" checked={selectedPayment === 'bonga'} onChange={(e) => setSelectedPayment(e.target.value)} />
// // // // // //                             <span>Lipa Na Bonga</span>
// // // // // //                             <span className="text-orange-600 font-bold">BONGA</span>
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>

// // // // // //                   {/* Order Summary */}
// // // // // //                   <div className="bg-white border rounded-lg p-6">
// // // // // //                     <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                    
// // // // // //                     <div className="space-y-4">
// // // // // //                       <div>
// // // // // //                         <h4 className="font-medium mb-2">PRODUCT</h4>
// // // // // //                         <div className="flex gap-3">
// // // // // //                           <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
// // // // // //                             <div className="w-6 h-8 bg-indigo-500 rounded"></div>
// // // // // //                           </div>
// // // // // //                           <div className="flex-1 min-w-0">
// // // // // //                             <p className="font-medium text-sm">{selectedProduct?.name}</p>
// // // // // //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// // // // // //                             <p className="font-bold">{selectedProduct?.displayPrice}</p>
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       </div>
                      
// // // // // //                       <div className="space-y-2">
// // // // // //                         <div className="flex justify-between">
// // // // // //                           <span>Shipping & Handling:</span>
// // // // // //                           <span>KES 250</span>
// // // // // //                         </div>
// // // // // //                         <div className="flex justify-between">
// // // // // //                           <span>Subtotal:</span>
// // // // // //                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // // // // //                         </div>
// // // // // //                         <div className="border-t pt-2">
// // // // // //                           <div className="flex justify-between font-bold text-lg">
// // // // // //                             <span>Grand Total</span>
// // // // // //                             <span>KES {calculateTotal().toLocaleString()}</span>
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </div>
                    
// // // // // //                     <button 
// // // // // //                       onClick={nextStep} 
// // // // // //                       disabled={!selectedPayment} 
// // // // // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 disabled:bg-gray-300 transition-colors"
// // // // // //                       style={{backgroundColor: selectedPayment ? '#2E1065' : '#D1D5DB'}}
// // // // // //                       onMouseEnter={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D')}
// // // // // //                       onMouseLeave={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#2E1065')}
// // // // // //                     >
// // // // // //                       COMPLETE PAYMENT
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               {checkoutStep === 4 && (
// // // // // //                 <div className="text-center py-12">
// // // // // //                   <div 
// // // // // //                     className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
// // // // // //                     style={{backgroundColor: '#2E1065'}}
// // // // // //                   >
// // // // // //                     <Check className="w-8 h-8 text-white" />
// // // // // //                   </div>
// // // // // //                   <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
// // // // // //                   <p className="text-lg text-gray-600 mb-8">Your order has been successfully placed.</p>
// // // // // //                   <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
// // // // // //                     <h3 className="font-semibold mb-4">Order Details</h3>
// // // // // //                     <div className="text-left space-y-2">
// // // // // //                       <div className="flex justify-between">
// // // // // //                         <span>Order Number:</span>
// // // // // //                         <span className="font-bold">#MK{Date.now().toString().slice(-6)}</span>
// // // // // //                       </div>
// // // // // //                       <div className="flex justify-between">
// // // // // //                         <span>Total Paid:</span>
// // // // // //                         <span className="font-bold">KES {calculateTotal().toLocaleString()}</span>
// // // // // //                       </div>
// // // // // //                       <div className="flex justify-between">
// // // // // //                         <span>Payment Method:</span>
// // // // // //                         <span className="font-bold">{selectedPayment === 'mpesa' ? 'M-Pesa' : 'Bonga Points'}</span>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                   <button 
// // // // // //                     onClick={closeCheckout} 
// // // // // //                     className="text-white px-8 py-3 rounded-lg font-semibold mt-8 transition-colors"
// // // // // //                     style={{backgroundColor: '#2E1065'}}
// // // // // //                     onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // // // // //                     onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // // // // //                   >
// // // // // //                     Continue Shopping
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       <div className="container mx-auto px-4 py-6">
// // // // // //         {/* Header/Hero Section with Deep Purple Theme */}
// // // // // //         <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg mb-8 px-4 sm:px-6 py-6 sm:py-8" style={{background: 'linear-gradient(to right, #2E1065, #1E0A4D)'}}>
// // // // // //           {/* Navigation Tabs */}
// // // // // //           <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6">
// // // // // //             <button className="text-white font-semibold border-b-2 border-white pb-1">
// // // // // //               Products
// // // // // //             </button>
// // // // // //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// // // // // //               Manufacturers
// // // // // //             </button>
// // // // // //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// // // // // //               Regional supplies
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           {/* Search Section */}
// // // // // //           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
// // // // // //             <div className="relative flex-1 max-w-2xl">
// // // // // //               <div className="relative w-full">
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   className="w-full px-6 py-3 rounded-full text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/30"
// // // // // //                   style={{ caretColor: 'transparent' }}
// // // // // //                   readOnly
// // // // // //                 />
// // // // // //                 <div className="absolute left-6 top-1/2 -translate-y-1/2 overflow-hidden h-6">
// // // // // //                   <div 
// // // // // //                     className="transition-transform duration-500 ease-in-out"
// // // // // //                     style={{ 
// // // // // //                       transform: `translateY(-${currentSearchIndex * 24}px)` 
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     {searchTexts.map((text, index) => (
// // // // // //                       <div key={index} className="h-6 flex items-center text-gray-800">
// // // // // //                         {text}
// // // // // //                       </div>
// // // // // //                     ))}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             <div className="flex gap-2 sm:gap-4">
// // // // // //               <button className="px-4 sm:px-8 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2">
// // // // // //                 <span>🔍</span> <span className="hidden sm:inline">Search</span>
// // // // // //               </button>
// // // // // //               <button className="px-4 sm:px-6 py-3 bg-white rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2" style={{color: '#2E1065'}}>
// // // // // //                 <span>📷</span> <span className="hidden sm:inline">Image Search</span>
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Frequently Searched */}
// // // // // //           <div className="text-center">
// // // // // //             <span className="text-white/90 text-sm">Frequently searched: </span>
// // // // // //             <div className="inline-flex flex-wrap gap-2 mt-1">
// // // // // //               {['drone 4K', 'iphones 11', 'samsung mobile phone', 'i phone', 'camera', 'nikon camera'].map((term, index) => (
// // // // // //                 <button key={index} className="text-white/90 text-sm hover:text-white transition-colors">
// // // // // //                   {term}
// // // // // //                 </button>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div className="flex flex-col lg:flex-row gap-4">
// // // // // //           {/* Sidebar Filters - Made much narrower */}
// // // // // //           <div className="w-full lg:w-48 bg-white rounded-lg shadow-sm p-3 h-fit flex-shrink-0">
// // // // // //             <div className="flex items-center gap-1 mb-3">
// // // // // //               <Filter className="w-3 h-3" style={{color: '#2E1065'}} />
// // // // // //               <span className="text-sm font-semibold text-gray-800">Filter</span>
// // // // // //             </div>

// // // // // //             <div className="space-y-1">
// // // // // //               {/* Price Filter */}
// // // // // //               <div className="border-b border-gray-100 pb-1 mb-1">
// // // // // //                 <button
// // // // // //                   onClick={() => toggleFilter('price')}
// // // // // //                   className="flex items-center justify-between w-full py-1 text-left hover:bg-gray-50 rounded px-1"
// // // // // //                 >
// // // // // //                   <span className="text-gray-800 font-medium text-xs">Price</span>
// // // // // //                   <ChevronDown className={`w-3 h-3 text-gray-600 transition-transform ${filters.price ? 'rotate-180' : ''}`} />
// // // // // //                 </button>
// // // // // //               </div>

// // // // // //               {/* Storage Capacity Filter */}
// // // // // //               <div className="border-b border-gray-100 pb-1 mb-1">
// // // // // //                 <button
// // // // // //                   onClick={() => toggleFilter('storage')}
// // // // // //                   className="flex items-center justify-between w-full py-1 text-left hover:bg-gray-50 rounded px-1"
// // // // // //                 >
// // // // // //                   <span className="text-gray-800 font-medium text-xs">Storage Capacity</span>
// // // // // //                   <ChevronDown className={`w-3 h-3 text-gray-600 transition-transform ${filters.storage ? 'rotate-180' : ''}`} />
// // // // // //                 </button>
// // // // // //               </div>

// // // // // //               {/* Camera Megapixel Filter */}
// // // // // //               <div className="border-b border-gray-100 pb-1 mb-1">
// // // // // //                 <button
// // // // // //                   onClick={() => toggleFilter('camera')}
// // // // // //                   className="flex items-center justify-between w-full py-1 text-left hover:bg-gray-50 rounded px-1"
// // // // // //                 >
// // // // // //                   <span className="text-gray-800 font-medium text-xs">Camera Megapixel</span>
// // // // // //                   <ChevronDown className={`w-3 h-3 text-gray-600 transition-transform ${filters.camera ? 'rotate-180' : ''}`} />
// // // // // //                 </button>
// // // // // //               </div>

// // // // // //               {/* Display Size Filter */}
// // // // // //               <div className="border-b border-gray-100 pb-1 mb-1">
// // // // // //                 <button
// // // // // //                   onClick={() => toggleFilter('display')}
// // // // // //                   className="flex items-center justify-between w-full py-1 text-left hover:bg-gray-50 rounded px-1"
// // // // // //                 >
// // // // // //                   <span className="text-gray-800 font-medium text-xs">Display Size</span>
// // // // // //                   <ChevronDown className={`w-3 h-3 text-gray-600 transition-transform ${filters.display ? 'rotate-180' : ''}`} />
// // // // // //                 </button>
// // // // // //               </div>

// // // // // //               {/* Brand Filter */}
// // // // // //               <div className="pb-1">
// // // // // //                 <button
// // // // // //                   onClick={() => toggleFilter('brand')}
// // // // // //                   className="flex items-center justify-between w-full py-1 text-left hover:bg-gray-50 rounded px-1"
// // // // // //                 >
// // // // // //                   <span className="text-gray-800 font-medium text-xs">Brand</span>
// // // // // //                   <ChevronDown className={`w-3 h-3 text-gray-600 transition-transform ${filters.brand ? 'rotate-180' : ''}`} />
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Main Content - More space for products */}
// // // // // //           <div className="flex-1 min-w-0">
// // // // // //             {/* Results Header */}
// // // // // //             <div className="mb-4">
// // // // // //               <div className="flex items-center gap-2 mb-2">
// // // // // //                 <div className="w-8 h-1 rounded-full bg-cyan-300"></div>
// // // // // //               </div>
// // // // // //               <h1 className="text-xl font-bold text-gray-800">45 Results Found</h1>
// // // // // //             </div>

// // // // // //             {/* Product Grid - Exact layout from reference image */}
// // // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
// // // // // //               {products && products.length > 0 ? products.map((product) => (
// // // // // //                 <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group relative w-full">
// // // // // //                   {/* Discount Badge */}
// // // // // //                   {product.discount && (
// // // // // //                     <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold z-10">
// // // // // //                       {product.discount}
// // // // // //                     </div>
// // // // // //                   )}
                  
// // // // // //                   {/* Product Image Area */}
// // // // // //                   <div className="relative p-8 bg-white h-64 flex items-center justify-center">
// // // // // //                     {/* Product Images - Realistic representations */}
// // // // // //                     {product.category === 'projector' && (
// // // // // //                       <div className="relative w-32 h-24">
// // // // // //                         {/* Projector Base */}
// // // // // //                         <div className="w-full h-16 bg-white rounded-lg shadow-md relative">
// // // // // //                           {/* Projector Body */}
// // // // // //                           <div className="absolute top-2 left-4 w-24 h-12 bg-gray-100 rounded-lg border">
// // // // // //                             {/* Lens */}
// // // // // //                             <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-900 rounded-full border-2 border-gray-800">
// // // // // //                               <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
// // // // // //                                 <div className="w-4 h-4 bg-gray-700 rounded-full flex items-center justify-center">
// // // // // //                                   <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
// // // // // //                                 </div>
// // // // // //                               </div>
// // // // // //                             </div>
// // // // // //                             {/* Projector Details */}
// // // // // //                             <div className="absolute top-1 right-2 w-3 h-1 bg-gray-300 rounded"></div>
// // // // // //                             <div className="absolute top-3 right-2 w-2 h-1 bg-gray-300 rounded"></div>
// // // // // //                           </div>
// // // // // //                           {/* Support Stand */}
// // // // // //                           <div className="absolute -right-1 top-1 w-6 h-8 bg-gray-200 rounded transform rotate-12 shadow-sm"></div>
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     )}
                    
// // // // // //                     {product.category === 'phone' && (
// // // // // //                       <div className="relative">
// // // // // //                         {/* Phone representation matching reference */}
// // // // // //                         <div className={`w-24 h-44 rounded-3xl shadow-lg relative overflow-hidden border-2 ${
// // // // // //                           product.id === 2 ? 'bg-gradient-to-b from-indigo-900 to-black border-indigo-900' :
// // // // // //                           product.id === 3 ? 'bg-gradient-to-b from-gray-900 to-black border-gray-900' :
// // // // // //                           product.id === 4 ? 'bg-gradient-to-b from-yellow-500 to-yellow-700 border-yellow-600' :
// // // // // //                           product.id === 5 ? 'bg-gradient-to-b from-gray-700 to-gray-900 border-gray-800' :
// // // // // //                           'bg-gradient-to-b from-gray-800 to-black border-gray-800'
// // // // // //                         }`}>
                          
// // // // // //                           {/* Phone Screen */}
// // // // // //                           <div className={`absolute top-2 left-2 right-2 bottom-2 rounded-2xl relative overflow-hidden ${
// // // // // //                             product.id === 2 ? 'bg-gradient-to-b from-pink-200 via-blue-200 to-purple-300' :
// // // // // //                             product.id === 3 ? 'bg-gradient-to-b from-pink-100 via-purple-100 to-pink-200' :
// // // // // //                             product.id === 4 ? 'bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50' :
// // // // // //                             product.id === 5 ? 'bg-gradient-to-b from-gray-50 via-blue-50 to-purple-50' :
// // // // // //                             'bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50'
// // // // // //                           }`}>
                            
// // // // // //                             {/* Screen elements */}
// // // // // //                             <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-800 rounded-full opacity-30"></div>
// // // // // //                             <div className="absolute top-2 left-2 right-2 h-0.5 bg-gray-800 rounded-full opacity-20"></div>
                            
// // // // // //                             {/* A35 5G Badge */}
// // // // // //                             {product.id === 3 && (
// // // // // //                               <div className="absolute top-2 right-2 bg-white text-gray-800 text-xs font-bold px-1.5 py-0.5 rounded shadow">
// // // // // //                                 A35 5G
// // // // // //                               </div>
// // // // // //                             )}
                            
// // // // // //                             {/* S24 Ultra specific elements */}
// // // // // //                             {(product.id === 4 || product.id === 5) && (
// // // // // //                               <>
// // // // // //                                 {/* S Pen */}
// // // // // //                                 <div className="absolute -left-6 top-8 w-0.5 h-16 bg-gray-800 rounded-full rotate-12"></div>
// // // // // //                                 {/* Phone reflection/design */}
// // // // // //                                 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
// // // // // //                               </>
// // // // // //                             )}
                            
// // // // // //                             {/* Z Fold 6 fold line */}
// // // // // //                             {product.id === 6 && (
// // // // // //                               <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gray-300 rounded-full opacity-50"></div>
// // // // // //                             )}
// // // // // //                           </div>
                          
// // // // // //                           {/* Camera Module */}
// // // // // //                           <div className={`absolute top-4 left-3 bg-gray-900 rounded-lg ${
// // // // // //                             (product.id === 4 || product.id === 5) ? 'w-6 h-12' : 'w-6 h-6'
// // // // // //                           }`}>
// // // // // //                             {(product.id === 4 || product.id === 5) ? (
// // // // // //                               // S24 Ultra triple camera
// // // // // //                               <>
// // // // // //                                 <div className="absolute top-1 left-1 w-4 h-4 bg-gray-800 rounded-full"></div>
// // // // // //                                 <div className="absolute top-7 left-1 w-4 h-4 bg-gray-800 rounded-full"></div>
// // // // // //                               </>
// // // // // //                             ) : (
// // // // // //                               // Regular phone camera
// // // // // //                               <div className="absolute top-1 left-1 w-4 h-4 bg-gray-800 rounded-full"></div>
// // // // // //                             )}
// // // // // //                           </div>
                          
// // // // // //                           {/* Secondary camera for A15/A35 */}
// // // // // //                           {(product.id === 2 || product.id === 3) && (
// // // // // //                             <div className="absolute top-6 left-5 w-2 h-2 bg-gray-800 rounded-full"></div>
// // // // // //                           )}
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     )}
                    
// // // // // //                     {/* Hover cart button */}
// // // // // //                     <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// // // // // //                       <button 
// // // // // //                         className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
// // // // // //                       >
// // // // // //                         <ShoppingCart className="w-5 h-5" />
// // // // // //                       </button>
// // // // // //                     </div>
// // // // // //                   </div>
                  
// // // // // //                   {/* Product Info */}
// // // // // //                   <div className="p-4 border-t border-gray-100">
// // // // // //                     <h3 className="font-semibold text-gray-800 mb-2 text-base leading-tight">{product.name}</h3>
// // // // // //                     {product.fullName && (
// // // // // //                       <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.fullName}</p>
// // // // // //                     )}
// // // // // //                     <div className="flex items-center gap-2 mb-4">
// // // // // //                       <p className="text-xl font-bold text-gray-900">{product.displayPrice}</p>
// // // // // //                       {product.originalPrice && (
// // // // // //                         <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
// // // // // //                       )}
// // // // // //                     </div>
// // // // // //                     <button 
// // // // // //                       onClick={() => handleBuyNow(product)}
// // // // // //                       className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
// // // // // //                     >
// // // // // //                       BUY NOW
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               )) : (
// // // // // //                 <div className="col-span-full text-center py-8">
// // // // // //                   <p className="text-gray-500">No products found</p>
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProductListing;






// // // // // 'use client';

// // // // // import React, { useState } from 'react';
// // // // // import { ChevronDown, Filter, ShoppingCart, Check, X, Trash2, Plus, Minus } from 'lucide-react';

// // // // // interface Product {
// // // // //   id: number;
// // // // //   name: string;
// // // // //   fullName?: string;
// // // // //   price: number;
// // // // //   displayPrice: string;
// // // // //   originalPrice?: string;
// // // // //   discount?: string;
// // // // //   image: string;
// // // // //   category: string;
// // // // // }

// // // // // const ProductListing = () => {
// // // // //   const [filters, setFilters] = useState({
// // // // //     price: false,
// // // // //     storage: false,
// // // // //     camera: false,
// // // // //     display: false,
// // // // //     brand: false
// // // // //   });

// // // // //   const [showCheckout, setShowCheckout] = useState(false);
// // // // //   const [checkoutStep, setCheckoutStep] = useState(1);
// // // // //   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
// // // // //   const [quantity, setQuantity] = useState(1);
// // // // //   const [selectedPayment, setSelectedPayment] = useState('');
// // // // //   const [deliveryOption, setDeliveryOption] = useState('home');
// // // // //   const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
  
// // // // //   const searchTexts = [
// // // // //     "iphones 11",
// // // // //     "iphones 15 pro max",
// // // // //     "nikon camera",
// // // // //     "samsung galaxy s24",
// // // // //     "macbook pro",
// // // // //     "drone 4k",
// // // // //     "apple watch",
// // // // //     "samsung mobile phone"
// // // // //   ];

// // // // //   // Auto-scroll search text
// // // // //   React.useEffect(() => {
// // // // //     const interval = setInterval(() => {
// // // // //       setCurrentSearchIndex((prev) => (prev + 1) % searchTexts.length);
// // // // //     }, 2000);
    
// // // // //     return () => clearInterval(interval);
// // // // //   }, []);

// // // // //   const handleBuyNow = (product: Product) => {
// // // // //     setSelectedProduct(product);
// // // // //     setShowCheckout(true);
// // // // //     setCheckoutStep(1);
// // // // //   };

// // // // //   const nextStep = () => {
// // // // //     if (checkoutStep < 4) {
// // // // //       setCheckoutStep(checkoutStep + 1);
// // // // //     }
// // // // //   };

// // // // //   const closeCheckout = () => {
// // // // //     setShowCheckout(false);
// // // // //     setCheckoutStep(1);
// // // // //     setSelectedProduct(null);
// // // // //   };

// // // // //   const getStepTitle = (step: number) => {
// // // // //     switch(step) {
// // // // //       case 1: return 'Cart';
// // // // //       case 2: return 'Shipping';
// // // // //       case 3: return 'Payment';
// // // // //       case 4: return 'Thank You';
// // // // //       default: return '';
// // // // //     }
// // // // //   };

// // // // //   const calculateTotal = () => {
// // // // //     if (!selectedProduct) return 0;
// // // // //     const subtotal = selectedProduct.price * quantity;
// // // // //     const shipping = 250;
// // // // //     return subtotal + shipping;
// // // // //   };

// // // // //   const toggleFilter = (filterName: string) => {
// // // // //     setFilters(prev => ({
// // // // //       ...prev,
// // // // //       [filterName]: !prev[filterName]
// // // // //     }));
// // // // //   };

// // // // //   const products: Product[] = [
// // // // //     {
// // // // //       id: 1,
// // // // //       name: "Freestyle -",
// // // // //       price: 167995,
// // // // //       displayPrice: "KES 167,995",
// // // // //       image: "/api/placeholder/300/300",
// // // // //       category: "projector"
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       name: "Samsung Galaxy A15 - 6.5\"",
// // // // //       fullName: "Samsung Galaxy A15 - 6.5\" - 128GB ROM - 4GB RAM - Dual SIM - 4G",
// // // // //       price: 29499,
// // // // //       displayPrice: "KES 29,499",
// // // // //       image: "/api/placeholder/300/300",
// // // // //       category: "phone"
// // // // //     },
// // // // //     {
// // // // //       id: 3,
// // // // //       name: "Samsung Galaxy A35 5G - 6.6\"",
// // // // //       fullName: "Samsung Galaxy A35 5G - 6.6\" - 128GB ROM - 6GB RAM - Dual SIM",
// // // // //       price: 39585,
// // // // //       displayPrice: "KES 39,585",
// // // // //       image: "/api/placeholder/300/300",
// // // // //       category: "phone"
// // // // //     },
// // // // //     {
// // // // //       id: 4,
// // // // //       name: "Samsung Galaxy S24 Ultra",
// // // // //       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
// // // // //       price: 134945,
// // // // //       displayPrice: "KES 134,945",
// // // // //       originalPrice: "KES 165,650",
// // // // //       discount: "19% Off",
// // // // //       image: "/api/placeholder/300/300",
// // // // //       category: "phone"
// // // // //     },
// // // // //     {
// // // // //       id: 5,
// // // // //       name: "Samsung Galaxy S24 Ultra",
// // // // //       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
// // // // //       price: 134945,
// // // // //       displayPrice: "KES 134,945",
// // // // //       originalPrice: "KES 165,650",
// // // // //       discount: "19% Off",
// // // // //       image: "/api/placeholder/300/300",
// // // // //       category: "phone"
// // // // //     },
// // // // //     {
// // // // //       id: 6,
// // // // //       name: "Samsung Galaxy Z Fold 6 - 7.6\"",
// // // // //       fullName: "Samsung Galaxy Z Fold 6 - 7.6\" - 12GB RAM - 512GB ROM",
// // // // //       price: 194979,
// // // // //       displayPrice: "KES 194,979",
// // // // //       originalPrice: "KES 253,344",
// // // // //       discount: "23% Off",
// // // // //       image: "/api/placeholder/300/300",
// // // // //       category: "phone"
// // // // //     }
// // // // //   ];

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-50">
// // // // //       {/* Checkout Modal */}
// // // // //       {showCheckout && (
// // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 overflow-y-auto">
// // // // //           <div className="bg-white rounded-lg w-full max-w-6xl my-4 min-h-[600px]">
// // // // //             {/* Header with Progress */}
// // // // //             <div className="p-6 border-b">
// // // // //               <div className="flex justify-between items-center mb-6">
// // // // //                 <h2 className="text-2xl font-bold">Checkout (1 item)</h2>
// // // // //                 <button onClick={closeCheckout} className="p-2 hover:bg-gray-100 rounded-full">
// // // // //                   <X className="w-6 h-6" />
// // // // //                 </button>
// // // // //               </div>
              
// // // // //               {/* Progress Steps */}
// // // // //               <div className="flex items-center justify-between mb-4 overflow-x-auto">
// // // // //                 {[1, 2, 3, 4].map((step) => (
// // // // //                   <div key={step} className="flex items-center min-w-0">
// // // // //                     <div 
// // // // //                       className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
// // // // //                       style={{
// // // // //                         backgroundColor: step <= checkoutStep ? '#2E1065' : '#D1D5DB',
// // // // //                         color: step <= checkoutStep ? 'white' : '#6B7280'
// // // // //                       }}
// // // // //                     >
// // // // //                       {step < checkoutStep ? <Check className="w-4 h-4" /> : step}
// // // // //                     </div>
// // // // //                     <span className="ml-2 text-sm font-medium whitespace-nowrap">{getStepTitle(step)}</span>
// // // // //                     {step < 4 && (
// // // // //                       <div 
// // // // //                         className="w-8 sm:w-16 h-0.5 ml-4 flex-shrink-0"
// // // // //                         style={{backgroundColor: step < checkoutStep ? '#2E1065' : '#D1D5DB'}}
// // // // //                       />
// // // // //                     )}
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Step Content */}
// // // // //             <div className="p-6 min-h-[500px]">
// // // // //               {checkoutStep === 1 && (
// // // // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // // //                   {/* Cart Items */}
// // // // //                   <div className="lg:col-span-2 space-y-6">
// // // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // // //                       <h3 className="text-lg font-semibold mb-4">Your Items</h3>
// // // // //                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-lg">
// // // // //                         <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
// // // // //                           <div className="w-8 h-12 bg-indigo-500 rounded"></div>
// // // // //                         </div>
// // // // //                         <div className="flex-1 min-w-0">
// // // // //                           <h4 className="font-semibold">{selectedProduct?.name}</h4>
// // // // //                           <p className="text-sm text-gray-600">{selectedProduct?.fullName}</p>
// // // // //                           <p className="font-bold text-lg">{selectedProduct?.displayPrice}</p>
// // // // //                         </div>
// // // // //                         <div className="flex items-center gap-2 flex-shrink-0">
// // // // //                           <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
// // // // //                             <Minus className="w-4 h-4" />
// // // // //                           </button>
// // // // //                           <span className="w-8 text-center">{quantity}</span>
// // // // //                           <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
// // // // //                             <Plus className="w-4 h-4" />
// // // // //                           </button>
// // // // //                         </div>
// // // // //                         <button className="p-2 text-red-500 hover:bg-red-50 rounded flex-shrink-0">
// // // // //                           <Trash2 className="w-4 h-4" />
// // // // //                         </button>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   {/* Order Summary */}
// // // // //                   <div className="bg-white border rounded-lg p-6">
// // // // //                     <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
// // // // //                     <div className="space-y-3">
// // // // //                       <div className="flex justify-between">
// // // // //                         <span>Subtotal:</span>
// // // // //                         <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // // // //                       </div>
// // // // //                       <div className="flex justify-between">
// // // // //                         <span>Shipping & Handling:</span>
// // // // //                         <span>KES 250</span>
// // // // //                       </div>
// // // // //                       <div className="border-t pt-3">
// // // // //                         <div className="flex justify-between font-bold text-lg">
// // // // //                           <span>Grand Total</span>
// // // // //                           <span>KES {calculateTotal().toLocaleString()}</span>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                     <button 
// // // // //                       onClick={nextStep} 
// // // // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors"
// // // // //                       style={{backgroundColor: '#2E1065'}}
// // // // //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // // // //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // // // //                     >
// // // // //                       PROCEED TO CHECKOUT
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               )}

// // // // //               {checkoutStep === 2 && (
// // // // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // // //                   {/* Shipping Form */}
// // // // //                   <div className="lg:col-span-2 space-y-6">
// // // // //                     {/* Shipping Address */}
// // // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // // //                       <div className="flex items-center gap-2 mb-4">
// // // // //                         <div 
// // // // //                           className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
// // // // //                           style={{backgroundColor: '#2E1065'}}
// // // // //                         >
// // // // //                           2
// // // // //                         </div>
// // // // //                         <h3 className="text-lg font-semibold">Shipping Address</h3>
// // // // //                       </div>
                      
// // // // //                       <div className="space-y-4">
// // // // //                         <div className="bg-white rounded-lg p-4">
// // // // //                           <div className="flex items-center gap-2 mb-3">
// // // // //                             <input type="radio" name="delivery" checked={deliveryOption === 'home'} onChange={() => setDeliveryOption('home')} />
// // // // //                             <label className="font-medium">Delivery to your home or office</label>
// // // // //                           </div>
// // // // //                           <p className="text-sm text-gray-600 mb-4">Fill in your Home or office address</p>
                          
// // // // //                           {deliveryOption === 'home' && (
// // // // //                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // // //                               <div>
// // // // //                                 <label className="block text-sm font-medium mb-1">Firstname *</label>
// // // // //                                 <input type="text" className="w-full border rounded-lg px-3 py-2" />
// // // // //                               </div>
// // // // //                               <div>
// // // // //                                 <label className="block text-sm font-medium mb-1">Lastname *</label>
// // // // //                                 <input type="text" className="w-full border rounded-lg px-3 py-2" />
// // // // //                               </div>
// // // // //                               <div>
// // // // //                                 <label className="block text-sm font-medium mb-1">Region</label>
// // // // //                                 <select className="w-full border rounded-lg px-3 py-2">
// // // // //                                   <option>Nairobi</option>
// // // // //                                 </select>
// // // // //                               </div>
// // // // //                               <div>
// // // // //                                 <label className="block text-sm font-medium mb-1">Recipient Number *</label>
// // // // //                                 <input type="tel" className="w-full border rounded-lg px-3 py-2" />
// // // // //                               </div>
// // // // //                               <div className="sm:col-span-2">
// // // // //                                 <label className="block text-sm font-medium mb-1">Address</label>
// // // // //                                 <textarea className="w-full border rounded-lg px-3 py-2 h-20"></textarea>
// // // // //                               </div>
// // // // //                             </div>
// // // // //                           )}
// // // // //                         </div>

// // // // //                         <div className="bg-white rounded-lg p-4">
// // // // //                           <div className="flex items-center gap-2 mb-3">
// // // // //                             <input type="radio" name="delivery" checked={deliveryOption === 'pickup'} onChange={() => setDeliveryOption('pickup')} />
// // // // //                             <label className="font-medium">Pickup Station</label>
// // // // //                           </div>
// // // // //                           <p className="text-sm text-gray-600">I would like to pick my order at the closest Masoko pick up point</p>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </div>

// // // // //                     {/* Promotion Code */}
// // // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // // //                       <h3 className="text-lg font-semibold mb-4">Promotion Code(Optional)</h3>
// // // // //                       <div className="bg-white rounded-lg p-4">
// // // // //                         <h4 className="font-medium mb-2">APPLY A PROMOTION CODE</h4>
// // // // //                         <p className="text-sm text-gray-600 mb-3">Do you have a promo code? <a href="#" className="text-blue-500 underline">Check on promo or Log in</a></p>
// // // // //                         <input type="text" placeholder="Enter promotion code" className="w-full border rounded-lg px-3 py-2" />
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   {/* Order Summary */}
// // // // //                   <div className="bg-white border rounded-lg p-6">
// // // // //                     <div className="flex items-center gap-2 mb-4">
// // // // //                       <div 
// // // // //                         className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
// // // // //                         style={{backgroundColor: '#2E1065'}}
// // // // //                       >
// // // // //                         3
// // // // //                       </div>
// // // // //                       <h3 className="text-lg font-semibold">Order Summary</h3>
// // // // //                     </div>
                    
// // // // //                     <div className="space-y-4">
// // // // //                       <div>
// // // // //                         <h4 className="font-medium mb-2">PRODUCT</h4>
// // // // //                         <div className="flex gap-3">
// // // // //                           <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
// // // // //                             <div className="w-6 h-8 bg-indigo-500 rounded"></div>
// // // // //                           </div>
// // // // //                           <div className="flex-1 min-w-0">
// // // // //                             <p className="font-medium text-sm">{selectedProduct?.name}</p>
// // // // //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// // // // //                             <p className="font-bold">{selectedProduct?.displayPrice}</p>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       </div>
                      
// // // // //                       <div className="space-y-2">
// // // // //                         <div className="flex justify-between">
// // // // //                           <span>Shipping & Handling:</span>
// // // // //                           <span>KES 250</span>
// // // // //                         </div>
// // // // //                         <div className="flex justify-between">
// // // // //                           <span>Subtotal:</span>
// // // // //                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // // // //                         </div>
// // // // //                         <div className="border-t pt-2">
// // // // //                           <div className="flex justify-between font-bold text-lg">
// // // // //                             <span>Grand Total</span>
// // // // //                             <span>KES {calculateTotal().toLocaleString()}</span>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </div>
                    
// // // // //                     <button 
// // // // //                       onClick={nextStep} 
// // // // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors"
// // // // //                       style={{backgroundColor: '#2E1065'}}
// // // // //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // // // //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // // // //                     >
// // // // //                       CONTINUE TO PAYMENT
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               )}

// // // // //               {checkoutStep === 3 && (
// // // // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // // //                   {/* Payment Methods */}
// // // // //                   <div className="lg:col-span-2 space-y-6">
// // // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // // //                       <h3 className="text-lg font-semibold mb-4">SELECT PAYMENT METHOD</h3>
// // // // //                       <p className="text-sm text-red-500 mb-4">Select preferred payment method for enhanced shopping experience.</p>
                      
// // // // //                       <div className="space-y-3">
// // // // //                         <div className="bg-white rounded-lg p-4 border">
// // // // //                           <div className="flex items-center gap-3">
// // // // //                             <input type="radio" name="payment" value="mpesa" checked={selectedPayment === 'mpesa'} onChange={(e) => setSelectedPayment(e.target.value)} />
// // // // //                             <span>Lipa Na M-Pesa</span>
// // // // //                             <span className="text-green-600 font-bold">m-pesa</span>
// // // // //                           </div>
// // // // //                         </div>
                        
// // // // //                         <div className="bg-white rounded-lg p-4 border">
// // // // //                           <div className="flex items-center gap-3">
// // // // //                             <input type="radio" name="payment" value="bonga" checked={selectedPayment === 'bonga'} onChange={(e) => setSelectedPayment(e.target.value)} />
// // // // //                             <span>Lipa Na Bonga</span>
// // // // //                             <span className="text-orange-600 font-bold">BONGA</span>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   {/* Order Summary */}
// // // // //                   <div className="bg-white border rounded-lg p-6">
// // // // //                     <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                    
// // // // //                     <div className="space-y-4">
// // // // //                       <div>
// // // // //                         <h4 className="font-medium mb-2">PRODUCT</h4>
// // // // //                         <div className="flex gap-3">
// // // // //                           <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
// // // // //                             <div className="w-6 h-8 bg-indigo-500 rounded"></div>
// // // // //                           </div>
// // // // //                           <div className="flex-1 min-w-0">
// // // // //                             <p className="font-medium text-sm">{selectedProduct?.name}</p>
// // // // //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// // // // //                             <p className="font-bold">{selectedProduct?.displayPrice}</p>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       </div>
                      
// // // // //                       <div className="space-y-2">
// // // // //                         <div className="flex justify-between">
// // // // //                           <span>Shipping & Handling:</span>
// // // // //                           <span>KES 250</span>
// // // // //                         </div>
// // // // //                         <div className="flex justify-between">
// // // // //                           <span>Subtotal:</span>
// // // // //                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // // // //                         </div>
// // // // //                         <div className="border-t pt-2">
// // // // //                           <div className="flex justify-between font-bold text-lg">
// // // // //                             <span>Grand Total</span>
// // // // //                             <span>KES {calculateTotal().toLocaleString()}</span>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </div>
                    
// // // // //                     <button 
// // // // //                       onClick={nextStep} 
// // // // //                       disabled={!selectedPayment} 
// // // // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 disabled:bg-gray-300 transition-colors"
// // // // //                       style={{backgroundColor: selectedPayment ? '#2E1065' : '#D1D5DB'}}
// // // // //                       onMouseEnter={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D')}
// // // // //                       onMouseLeave={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#2E1065')}
// // // // //                     >
// // // // //                       COMPLETE PAYMENT
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               )}

// // // // //               {checkoutStep === 4 && (
// // // // //                 <div className="text-center py-12">
// // // // //                   <div 
// // // // //                     className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
// // // // //                     style={{backgroundColor: '#2E1065'}}
// // // // //                   >
// // // // //                     <Check className="w-8 h-8 text-white" />
// // // // //                   </div>
// // // // //                   <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
// // // // //                   <p className="text-lg text-gray-600 mb-8">Your order has been successfully placed.</p>
// // // // //                   <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
// // // // //                     <h3 className="font-semibold mb-4">Order Details</h3>
// // // // //                     <div className="text-left space-y-2">
// // // // //                       <div className="flex justify-between">
// // // // //                         <span>Order Number:</span>
// // // // //                         <span className="font-bold">#MK{Date.now().toString().slice(-6)}</span>
// // // // //                       </div>
// // // // //                       <div className="flex justify-between">
// // // // //                         <span>Total Paid:</span>
// // // // //                         <span className="font-bold">KES {calculateTotal().toLocaleString()}</span>
// // // // //                       </div>
// // // // //                       <div className="flex justify-between">
// // // // //                         <span>Payment Method:</span>
// // // // //                         <span className="font-bold">{selectedPayment === 'mpesa' ? 'M-Pesa' : 'Bonga Points'}</span>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                   <button 
// // // // //                     onClick={closeCheckout} 
// // // // //                     className="text-white px-8 py-3 rounded-lg font-semibold mt-8 transition-colors"
// // // // //                     style={{backgroundColor: '#2E1065'}}
// // // // //                     onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // // // //                     onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // // // //                   >
// // // // //                     Continue Shopping
// // // // //                   </button>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       <div className="container mx-auto px-4 py-6">
// // // // //         {/* Header/Hero Section with Deep Purple Theme */}
// // // // //         <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg mb-8 px-4 sm:px-6 py-6 sm:py-8" style={{background: 'linear-gradient(to right, #2E1065, #1E0A4D)'}}>
// // // // //           {/* Navigation Tabs */}
// // // // //           <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6">
// // // // //             <button className="text-white font-semibold border-b-2 border-white pb-1">
// // // // //               Products
// // // // //             </button>
// // // // //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// // // // //               Manufacturers
// // // // //             </button>
// // // // //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// // // // //               Regional supplies
// // // // //             </button>
// // // // //           </div>

// // // // //           {/* Search Section */}
// // // // //           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
// // // // //             <div className="relative flex-1 max-w-2xl">
// // // // //               <div className="relative w-full">
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   className="w-full px-6 py-3 rounded-full text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/30"
// // // // //                   style={{ caretColor: 'transparent' }}
// // // // //                   readOnly
// // // // //                 />
// // // // //                 <div className="absolute left-6 top-1/2 -translate-y-1/2 overflow-hidden h-6">
// // // // //                   <div 
// // // // //                     className="transition-transform duration-500 ease-in-out"
// // // // //                     style={{ 
// // // // //                       transform: `translateY(-${currentSearchIndex * 24}px)` 
// // // // //                     }}
// // // // //                   >
// // // // //                     {searchTexts.map((text, index) => (
// // // // //                       <div key={index} className="h-6 flex items-center text-gray-800">
// // // // //                         {text}
// // // // //                       </div>
// // // // //                     ))}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //             <div className="flex gap-2 sm:gap-4">
// // // // //               <button className="px-4 sm:px-8 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2">
// // // // //                 <span>🔍</span> <span className="hidden sm:inline">Search</span>
// // // // //               </button>
// // // // //               <button className="px-4 sm:px-6 py-3 bg-white rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2" style={{color: '#2E1065'}}>
// // // // //                 <span>📷</span> <span className="hidden sm:inline">Image Search</span>
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Frequently Searched */}
// // // // //           <div className="text-center">
// // // // //             <span className="text-white/90 text-sm">Frequently searched: </span>
// // // // //             <div className="inline-flex flex-wrap gap-2 mt-1">
// // // // //               {['drone 4K', 'iphones 11', 'samsung mobile phone', 'i phone', 'camera', 'nikon camera'].map((term, index) => (
// // // // //                 <button key={index} className="text-white/90 text-sm hover:text-white transition-colors">
// // // // //                   {term}
// // // // //                 </button>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Main Layout - Fixed 3-column grid */}
// // // // //         <div className="flex gap-6">
// // // // //           {/* Filter Sidebar - Narrow */}
// // // // //           <div className="w-64 bg-white rounded-lg shadow-sm p-4 h-fit flex-shrink-0">
// // // // //             <div className="flex items-center gap-2 mb-4">
// // // // //               <Filter className="w-4 h-4 text-green-600" />
// // // // //               <span className="text-base font-semibold text-gray-800">Filter</span>
// // // // //             </div>

// // // // //             <div className="space-y-1">
// // // // //               {/* Price Filter */}
// // // // //               <div className="border-b border-gray-100 pb-3 mb-3">
// // // // //                 <button
// // // // //                   onClick={() => toggleFilter('price')}
// // // // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // // // //                 >
// // // // //                   <span className="text-gray-800 font-medium text-sm">Price</span>
// // // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.price ? 'rotate-180' : ''}`} />
// // // // //                 </button>
// // // // //               </div>

// // // // //               {/* Storage Capacity Filter */}
// // // // //               <div className="border-b border-gray-100 pb-3 mb-3">
// // // // //                 <button
// // // // //                   onClick={() => toggleFilter('storage')}
// // // // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // // // //                 >
// // // // //                   <span className="text-gray-800 font-medium text-sm">Storage Capacity</span>
// // // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.storage ? 'rotate-180' : ''}`} />
// // // // //                 </button>
// // // // //               </div>

// // // // //               {/* Camera Megapixel Filter */}
// // // // //               <div className="border-b border-gray-100 pb-3 mb-3">
// // // // //                 <button
// // // // //                   onClick={() => toggleFilter('camera')}
// // // // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // // // //                 >
// // // // //                   <span className="text-gray-800 font-medium text-sm">Camera Megapixel</span>
// // // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.camera ? 'rotate-180' : ''}`} />
// // // // //                 </button>
// // // // //               </div>

// // // // //               {/* Display Size Filter */}
// // // // //               <div className="border-b border-gray-100 pb-3 mb-3">
// // // // //                 <button
// // // // //                   onClick={() => toggleFilter('display')}
// // // // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // // // //                 >
// // // // //                   <span className="text-gray-800 font-medium text-sm">Display Size</span>
// // // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.display ? 'rotate-180' : ''}`} />
// // // // //                 </button>
// // // // //               </div>

// // // // //               {/* Brand Filter */}
// // // // //               <div className="pb-3">
// // // // //                 <button
// // // // //                   onClick={() => toggleFilter('brand')}
// // // // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // // // //                 >
// // // // //                   <span className="text-gray-800 font-medium text-sm">Brand</span>
// // // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.brand ? 'rotate-180' : ''}`} />
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Products Area - Takes remaining space */}
// // // // //           <div className="flex-1">
// // // // //             {/* Results Header */}
// // // // //             <div className="mb-6">
// // // // //               <div className="flex items-center gap-2 mb-4">
// // // // //                 <div className="w-12 h-1 bg-cyan-300 rounded-full"></div>
// // // // //               </div>
// // // // //               <h1 className="text-2xl font-bold text-gray-800">45 Results Found</h1>
// // // // //             </div>

// // // // //             {/* Product Grid - FIXED 3 columns always */}
// // // // //             <div className="grid grid-cols-3 gap-6 min-w-0">
// // // // //               {products.map((product) => (
// // // // //                 <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group relative">
// // // // //                   {/* Discount Badge */}
// // // // //                   {product.discount && (
// // // // //                     <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold z-10">
// // // // //                       {product.discount}
// // // // //                     </div>
// // // // //                   )}
                  
// // // // //                   <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 h-64 flex items-center justify-center">
// // // // //                     {/* PROJECTOR */}
// // // // //                     {product.category === 'projector' && (
// // // // //                       <div className="w-40 h-28 bg-white rounded-lg shadow-md flex items-center justify-center relative">
// // // // //                         <div className="w-20 h-20 bg-gray-800 rounded-full relative">
// // // // //                           <div className="absolute inset-2 bg-gray-700 rounded-full">
// // // // //                             <div className="absolute inset-2 bg-gray-600 rounded-full flex items-center justify-center">
// // // // //                               <div className="w-6 h-6 bg-cyan-400 rounded-full"></div>
// // // // //                             </div>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                         <div className="absolute -right-2 -top-2 w-10 h-16 bg-gray-200 rounded transform rotate-12"></div>
// // // // //                       </div>
// // // // //                     )}
                    
// // // // //                     {/* PHONES - Restored from v25 */}
// // // // //                     {product.category === 'phone' && (
// // // // //                       <div className="relative">
// // // // //                         <div className={`w-24 h-44 rounded-3xl shadow-xl relative overflow-hidden border-2 ${
// // // // //                           product.id === 2 ? 'bg-gradient-to-b from-indigo-900 to-black border-indigo-900' :
// // // // //                           product.id === 3 ? 'bg-gradient-to-b from-gray-900 to-black border-gray-900' :
// // // // //                           product.id === 4 ? 'bg-gradient-to-b from-yellow-500 to-yellow-700 border-yellow-600' :
// // // // //                           product.id === 5 ? 'bg-gradient-to-b from-gray-700 to-gray-900 border-gray-800' :
// // // // //                           'bg-gradient-to-b from-gray-800 to-black border-gray-800'
// // // // //                         }`}>
                          
// // // // //                           {/* Phone Screen */}
// // // // //                           <div className={`absolute top-2 left-2 right-2 bottom-2 rounded-2xl relative overflow-hidden ${
// // // // //                             product.id === 2 ? 'bg-gradient-to-b from-pink-200 via-blue-200 to-purple-300' :
// // // // //                             product.id === 3 ? 'bg-gradient-to-b from-pink-100 via-purple-100 to-pink-200' :
// // // // //                             product.id === 4 ? 'bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50' :
// // // // //                             product.id === 5 ? 'bg-gradient-to-b from-gray-50 via-blue-50 to-purple-50' :
// // // // //                             'bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50'
// // // // //                           }`}>
                            
// // // // //                             {/* Screen elements */}
// // // // //                             <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-800 rounded-full opacity-30"></div>
// // // // //                             <div className="absolute top-2 left-2 right-2 h-0.5 bg-gray-800 rounded-full opacity-20"></div>
                            
// // // // //                             {/* A35 5G Badge */}
// // // // //                             {product.id === 3 && (
// // // // //                               <div className="absolute top-2 right-2 bg-white text-gray-800 text-xs font-bold px-1.5 py-0.5 rounded shadow">
// // // // //                                 A35 5G
// // // // //                               </div>
// // // // //                             )}
                            
// // // // //                             {/* S24 Ultra specific elements */}
// // // // //                             {(product.id === 4 || product.id === 5) && (
// // // // //                               <>
// // // // //                                 {/* S Pen */}
// // // // //                                 <div className="absolute -left-6 top-8 w-0.5 h-16 bg-gray-800 rounded-full rotate-12"></div>
// // // // //                                 {/* Phone reflection/design */}
// // // // //                                 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
// // // // //                               </>
// // // // //                             )}
                            
// // // // //                             {/* Z Fold 6 fold line */}
// // // // //                             {product.id === 6 && (
// // // // //                               <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gray-300 rounded-full opacity-50"></div>
// // // // //                             )}
// // // // //                           </div>
                          
// // // // //                           {/* Camera Module */}
// // // // //                           <div className={`absolute top-4 left-3 bg-gray-900 rounded-lg ${
// // // // //                             (product.id === 4 || product.id === 5) ? 'w-6 h-12' : 'w-6 h-6'
// // // // //                           }`}>
// // // // //                             {(product.id === 4 || product.id === 5) ? (
// // // // //                               // S24 Ultra triple camera
// // // // //                               <>
// // // // //                                 <div className="absolute top-1 left-1 w-4 h-4 bg-gray-800 rounded-full"></div>
// // // // //                                 <div className="absolute top-7 left-1 w-4 h-4 bg-gray-800 rounded-full"></div>
// // // // //                               </>
// // // // //                             ) : (
// // // // //                               // Regular phone camera
// // // // //                               <div className="absolute top-1 left-1 w-4 h-4 bg-gray-800 rounded-full"></div>
// // // // //                             )}
// // // // //                           </div>
                          
// // // // //                           {/* Secondary camera for A15/A35 */}
// // // // //                           {(product.id === 2 || product.id === 3) && (
// // // // //                             <div className="absolute top-6 left-5 w-2 h-2 bg-gray-800 rounded-full"></div>
// // // // //                           )}
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     )}
                    
// // // // //                     {/* Green Cart Button */}
// // // // //                     <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
// // // // //                       <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
// // // // //                         <ShoppingCart className="w-5 h-5" />
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   </div>
                  
// // // // //                   <div className="p-4">
// // // // //                     <h3 className="font-semibold text-gray-800 mb-2 text-base leading-tight">{product.name}</h3>
// // // // //                     {product.fullName && (
// // // // //                       <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.fullName}</p>
// // // // //                     )}
// // // // //                     <div className="flex items-center gap-2 mb-3">
// // // // //                       <p className="text-xl font-bold text-gray-900">{product.displayPrice}</p>
// // // // //                       {product.originalPrice && (
// // // // //                         <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
// // // // //                       )}
// // // // //                     </div>
// // // // //                     <button 
// // // // //                       onClick={() => handleBuyNow(product)}
// // // // //                       className="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-green-600"
// // // // //                     >
// // // // //                       BUY NOW
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProductListing;


// // // // 'use client';

// // // // import React, { useState } from 'react';
// // // // import { ChevronDown, Filter, ShoppingCart, Check, X, Trash2, Plus, Minus } from 'lucide-react';

// // // // interface Product {
// // // //   id: number;
// // // //   name: string;
// // // //   fullName?: string;
// // // //   price: number;
// // // //   displayPrice: string;
// // // //   originalPrice?: string;
// // // //   discount?: string;
// // // //   image: string;
// // // //   category: string;
// // // // }

// // // // const ProductListing = () => {
// // // //   const [filters, setFilters] = useState({
// // // //     price: false,
// // // //     storage: false,
// // // //     camera: false,
// // // //     display: false,
// // // //     brand: false
// // // //   });

// // // //   const [showCheckout, setShowCheckout] = useState(false);
// // // //   const [checkoutStep, setCheckoutStep] = useState(1);
// // // //   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
// // // //   const [quantity, setQuantity] = useState(1);
// // // //   const [selectedPayment, setSelectedPayment] = useState('');
// // // //   const [deliveryOption, setDeliveryOption] = useState('home');
// // // //   const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
  
// // // //   const searchTexts = [
// // // //     "iphones 11",
// // // //     "iphones 15 pro max",
// // // //     "nikon camera",
// // // //     "samsung galaxy s24",
// // // //     "macbook pro",
// // // //     "drone 4k",
// // // //     "apple watch",
// // // //     "samsung mobile phone"
// // // //   ];

// // // //   // Auto-scroll search text
// // // //   React.useEffect(() => {
// // // //     const interval = setInterval(() => {
// // // //       setCurrentSearchIndex((prev) => (prev + 1) % searchTexts.length);
// // // //     }, 2000);
    
// // // //     return () => clearInterval(interval);
// // // //   }, []);

// // // //   const handleBuyNow = (product: Product) => {
// // // //     setSelectedProduct(product);
// // // //     setShowCheckout(true);
// // // //     setCheckoutStep(1);
// // // //   };

// // // //   const nextStep = () => {
// // // //     if (checkoutStep < 4) {
// // // //       setCheckoutStep(checkoutStep + 1);
// // // //     }
// // // //   };

// // // //   const closeCheckout = () => {
// // // //     setShowCheckout(false);
// // // //     setCheckoutStep(1);
// // // //     setSelectedProduct(null);
// // // //   };

// // // //   const getStepTitle = (step: number) => {
// // // //     switch(step) {
// // // //       case 1: return 'Cart';
// // // //       case 2: return 'Shipping';
// // // //       case 3: return 'Payment';
// // // //       case 4: return 'Thank You';
// // // //       default: return '';
// // // //     }
// // // //   };

// // // //   const calculateTotal = () => {
// // // //     if (!selectedProduct) return 0;
// // // //     const subtotal = selectedProduct.price * quantity;
// // // //     const shipping = 250;
// // // //     return subtotal + shipping;
// // // //   };

// // // //   const toggleFilter = (filterName: string) => {
// // // //     setFilters(prev => ({
// // // //       ...prev,
// // // //       [filterName]: !prev[filterName]
// // // //     }));
// // // //   };

// // // //   const products: Product[] = [
// // // //     {
// // // //       id: 1,
// // // //       name: "Freestyle -",
// // // //       price: 167995,
// // // //       displayPrice: "KES 167,995",
// // // //       image: "/api/placeholder/300/300",
// // // //       category: "projector"
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       name: "Samsung Galaxy A15 - 6.5\"",
// // // //       fullName: "Samsung Galaxy A15 - 6.5\" - 128GB ROM - 4GB RAM - Dual SIM - 4G",
// // // //       price: 29499,
// // // //       displayPrice: "KES 29,499",
// // // //       image: "/api/placeholder/300/300",
// // // //       category: "phone"
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       name: "Samsung Galaxy A35 5G - 6.6\"",
// // // //       fullName: "Samsung Galaxy A35 5G - 6.6\" - 128GB ROM - 6GB RAM - Dual SIM",
// // // //       price: 39585,
// // // //       displayPrice: "KES 39,585",
// // // //       image: "/api/placeholder/300/300",
// // // //       category: "phone"
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       name: "Samsung Galaxy S24 Ultra",
// // // //       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
// // // //       price: 134945,
// // // //       displayPrice: "KES 134,945",
// // // //       originalPrice: "KES 165,650",
// // // //       discount: "19% Off",
// // // //       image: "/api/placeholder/300/300",
// // // //       category: "phone"
// // // //     },
// // // //     {
// // // //       id: 5,
// // // //       name: "Samsung Galaxy S24 Ultra",
// // // //       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
// // // //       price: 134945,
// // // //       displayPrice: "KES 134,945",
// // // //       originalPrice: "KES 165,650",
// // // //       discount: "19% Off",
// // // //       image: "/api/placeholder/300/300",
// // // //       category: "phone"
// // // //     },
// // // //     {
// // // //       id: 6,
// // // //       name: "Samsung Galaxy Z Fold 6 - 7.6\"",
// // // //       fullName: "Samsung Galaxy Z Fold 6 - 7.6\" - 12GB RAM - 512GB ROM",
// // // //       price: 194979,
// // // //       displayPrice: "KES 194,979",
// // // //       originalPrice: "KES 253,344",
// // // //       discount: "23% Off",
// // // //       image: "/api/placeholder/300/300",
// // // //       category: "phone"
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50">
// // // //       {/* Checkout Modal */}
// // // //       {showCheckout && (
// // // //         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 overflow-y-auto">
// // // //           <div className="bg-white rounded-lg w-full max-w-6xl my-4 min-h-[600px]">
// // // //             {/* Header with Progress */}
// // // //             <div className="p-6 border-b">
// // // //               <div className="flex justify-between items-center mb-6">
// // // //                 <h2 className="text-2xl font-bold">Checkout (1 item)</h2>
// // // //                 <button onClick={closeCheckout} className="p-2 hover:bg-gray-100 rounded-full">
// // // //                   <X className="w-6 h-6" />
// // // //                 </button>
// // // //               </div>
              
// // // //               {/* Progress Steps */}
// // // //               <div className="flex items-center justify-between mb-4 overflow-x-auto">
// // // //                 {[1, 2, 3, 4].map((step) => (
// // // //                   <div key={step} className="flex items-center min-w-0">
// // // //                     <div 
// // // //                       className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
// // // //                       style={{
// // // //                         backgroundColor: step <= checkoutStep ? '#2E1065' : '#D1D5DB',
// // // //                         color: step <= checkoutStep ? 'white' : '#6B7280'
// // // //                       }}
// // // //                     >
// // // //                       {step < checkoutStep ? <Check className="w-4 h-4" /> : step}
// // // //                     </div>
// // // //                     <span className="ml-2 text-sm font-medium whitespace-nowrap">{getStepTitle(step)}</span>
// // // //                     {step < 4 && (
// // // //                       <div 
// // // //                         className="w-8 sm:w-16 h-0.5 ml-4 flex-shrink-0"
// // // //                         style={{backgroundColor: step < checkoutStep ? '#2E1065' : '#D1D5DB'}}
// // // //                       />
// // // //                     )}
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>

// // // //             {/* Step Content */}
// // // //             <div className="p-6 min-h-[500px]">
// // // //               {checkoutStep === 1 && (
// // // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // //                   {/* Cart Items */}
// // // //                   <div className="lg:col-span-2 space-y-6">
// // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // //                       <h3 className="text-lg font-semibold mb-4">Your Items</h3>
// // // //                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-lg">
// // // //                         <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
// // // //                           <div className="w-8 h-12 bg-indigo-500 rounded"></div>
// // // //                         </div>
// // // //                         <div className="flex-1 min-w-0">
// // // //                           <h4 className="font-semibold">{selectedProduct?.name}</h4>
// // // //                           <p className="text-sm text-gray-600">{selectedProduct?.fullName}</p>
// // // //                           <p className="font-bold text-lg">{selectedProduct?.displayPrice}</p>
// // // //                         </div>
// // // //                         <div className="flex items-center gap-2 flex-shrink-0">
// // // //                           <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
// // // //                             <Minus className="w-4 h-4" />
// // // //                           </button>
// // // //                           <span className="w-8 text-center">{quantity}</span>
// // // //                           <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
// // // //                             <Plus className="w-4 h-4" />
// // // //                           </button>
// // // //                         </div>
// // // //                         <button className="p-2 text-red-500 hover:bg-red-50 rounded flex-shrink-0">
// // // //                           <Trash2 className="w-4 h-4" />
// // // //                         </button>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>

// // // //                   {/* Order Summary */}
// // // //                   <div className="bg-white border rounded-lg p-6">
// // // //                     <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
// // // //                     <div className="space-y-3">
// // // //                       <div className="flex justify-between">
// // // //                         <span>Subtotal:</span>
// // // //                         <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // // //                       </div>
// // // //                       <div className="flex justify-between">
// // // //                         <span>Shipping & Handling:</span>
// // // //                         <span>KES 250</span>
// // // //                       </div>
// // // //                       <div className="border-t pt-3">
// // // //                         <div className="flex justify-between font-bold text-lg">
// // // //                           <span>Grand Total</span>
// // // //                           <span>KES {calculateTotal().toLocaleString()}</span>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                     <button 
// // // //                       onClick={nextStep} 
// // // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors"
// // // //                       style={{backgroundColor: '#2E1065'}}
// // // //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // // //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // // //                     >
// // // //                       PROCEED TO CHECKOUT
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               )}

// // // //               {checkoutStep === 2 && (
// // // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // //                   {/* Shipping Form */}
// // // //                   <div className="lg:col-span-2 space-y-6">
// // // //                     {/* Shipping Address */}
// // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // //                       <div className="flex items-center gap-2 mb-4">
// // // //                         <div 
// // // //                           className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
// // // //                           style={{backgroundColor: '#2E1065'}}
// // // //                         >
// // // //                           2
// // // //                         </div>
// // // //                         <h3 className="text-lg font-semibold">Shipping Address</h3>
// // // //                       </div>
                      
// // // //                       <div className="space-y-4">
// // // //                         <div className="bg-white rounded-lg p-4">
// // // //                           <div className="flex items-center gap-2 mb-3">
// // // //                             <input type="radio" name="delivery" checked={deliveryOption === 'home'} onChange={() => setDeliveryOption('home')} />
// // // //                             <label className="font-medium">Delivery to your home or office</label>
// // // //                           </div>
// // // //                           <p className="text-sm text-gray-600 mb-4">Fill in your Home or office address</p>
                          
// // // //                           {deliveryOption === 'home' && (
// // // //                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // //                               <div>
// // // //                                 <label className="block text-sm font-medium mb-1">Firstname *</label>
// // // //                                 <input type="text" className="w-full border rounded-lg px-3 py-2" />
// // // //                               </div>
// // // //                               <div>
// // // //                                 <label className="block text-sm font-medium mb-1">Lastname *</label>
// // // //                                 <input type="text" className="w-full border rounded-lg px-3 py-2" />
// // // //                               </div>
// // // //                               <div>
// // // //                                 <label className="block text-sm font-medium mb-1">Region</label>
// // // //                                 <select className="w-full border rounded-lg px-3 py-2">
// // // //                                   <option>Nairobi</option>
// // // //                                 </select>
// // // //                               </div>
// // // //                               <div>
// // // //                                 <label className="block text-sm font-medium mb-1">Recipient Number *</label>
// // // //                                 <input type="tel" className="w-full border rounded-lg px-3 py-2" />
// // // //                               </div>
// // // //                               <div className="sm:col-span-2">
// // // //                                 <label className="block text-sm font-medium mb-1">Address</label>
// // // //                                 <textarea className="w-full border rounded-lg px-3 py-2 h-20"></textarea>
// // // //                               </div>
// // // //                             </div>
// // // //                           )}
// // // //                         </div>

// // // //                         <div className="bg-white rounded-lg p-4">
// // // //                           <div className="flex items-center gap-2 mb-3">
// // // //                             <input type="radio" name="delivery" checked={deliveryOption === 'pickup'} onChange={() => setDeliveryOption('pickup')} />
// // // //                             <label className="font-medium">Pickup Station</label>
// // // //                           </div>
// // // //                           <p className="text-sm text-gray-600">I would like to pick my order at the closest Masoko pick up point</p>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>

// // // //                     {/* Promotion Code */}
// // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // //                       <h3 className="text-lg font-semibold mb-4">Promotion Code(Optional)</h3>
// // // //                       <div className="bg-white rounded-lg p-4">
// // // //                         <h4 className="font-medium mb-2">APPLY A PROMOTION CODE</h4>
// // // //                         <p className="text-sm text-gray-600 mb-3">Do you have a promo code? <a href="#" className="text-blue-500 underline">Check on promo or Log in</a></p>
// // // //                         <input type="text" placeholder="Enter promotion code" className="w-full border rounded-lg px-3 py-2" />
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>

// // // //                   {/* Order Summary */}
// // // //                   <div className="bg-white border rounded-lg p-6">
// // // //                     <div className="flex items-center gap-2 mb-4">
// // // //                       <div 
// // // //                         className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
// // // //                         style={{backgroundColor: '#2E1065'}}
// // // //                       >
// // // //                         3
// // // //                       </div>
// // // //                       <h3 className="text-lg font-semibold">Order Summary</h3>
// // // //                     </div>
                    
// // // //                     <div className="space-y-4">
// // // //                       <div>
// // // //                         <h4 className="font-medium mb-2">PRODUCT</h4>
// // // //                         <div className="flex gap-3">
// // // //                           <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
// // // //                             <div className="w-6 h-8 bg-indigo-500 rounded"></div>
// // // //                           </div>
// // // //                           <div className="flex-1 min-w-0">
// // // //                             <p className="font-medium text-sm">{selectedProduct?.name}</p>
// // // //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// // // //                             <p className="font-bold">{selectedProduct?.displayPrice}</p>
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
                      
// // // //                       <div className="space-y-2">
// // // //                         <div className="flex justify-between">
// // // //                           <span>Shipping & Handling:</span>
// // // //                           <span>KES 250</span>
// // // //                         </div>
// // // //                         <div className="flex justify-between">
// // // //                           <span>Subtotal:</span>
// // // //                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // // //                         </div>
// // // //                         <div className="border-t pt-2">
// // // //                           <div className="flex justify-between font-bold text-lg">
// // // //                             <span>Grand Total</span>
// // // //                             <span>KES {calculateTotal().toLocaleString()}</span>
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
                    
// // // //                     <button 
// // // //                       onClick={nextStep} 
// // // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors"
// // // //                       style={{backgroundColor: '#2E1065'}}
// // // //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // // //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // // //                     >
// // // //                       CONTINUE TO PAYMENT
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               )}

// // // //               {checkoutStep === 3 && (
// // // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // //                   {/* Payment Methods */}
// // // //                   <div className="lg:col-span-2 space-y-6">
// // // //                     <div className="bg-gray-50 rounded-lg p-6">
// // // //                       <h3 className="text-lg font-semibold mb-4">SELECT PAYMENT METHOD</h3>
// // // //                       <p className="text-sm text-red-500 mb-4">Select preferred payment method for enhanced shopping experience.</p>
                      
// // // //                       <div className="space-y-3">
// // // //                         <div className="bg-white rounded-lg p-4 border">
// // // //                           <div className="flex items-center gap-3">
// // // //                             <input type="radio" name="payment" value="mpesa" checked={selectedPayment === 'mpesa'} onChange={(e) => setSelectedPayment(e.target.value)} />
// // // //                             <span>Lipa Na M-Pesa</span>
// // // //                             <span className="text-green-600 font-bold">m-pesa</span>
// // // //                           </div>
// // // //                         </div>
                        
// // // //                         <div className="bg-white rounded-lg p-4 border">
// // // //                           <div className="flex items-center gap-3">
// // // //                             <input type="radio" name="payment" value="bonga" checked={selectedPayment === 'bonga'} onChange={(e) => setSelectedPayment(e.target.value)} />
// // // //                             <span>Lipa Na Bonga</span>
// // // //                             <span className="text-orange-600 font-bold">BONGA</span>
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>

// // // //                   {/* Order Summary */}
// // // //                   <div className="bg-white border rounded-lg p-6">
// // // //                     <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                    
// // // //                     <div className="space-y-4">
// // // //                       <div>
// // // //                         <h4 className="font-medium mb-2">PRODUCT</h4>
// // // //                         <div className="flex gap-3">
// // // //                           <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
// // // //                             <div className="w-6 h-8 bg-indigo-500 rounded"></div>
// // // //                           </div>
// // // //                           <div className="flex-1 min-w-0">
// // // //                             <p className="font-medium text-sm">{selectedProduct?.name}</p>
// // // //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// // // //                             <p className="font-bold">{selectedProduct?.displayPrice}</p>
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
                      
// // // //                       <div className="space-y-2">
// // // //                         <div className="flex justify-between">
// // // //                           <span>Shipping & Handling:</span>
// // // //                           <span>KES 250</span>
// // // //                         </div>
// // // //                         <div className="flex justify-between">
// // // //                           <span>Subtotal:</span>
// // // //                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // // //                         </div>
// // // //                         <div className="border-t pt-2">
// // // //                           <div className="flex justify-between font-bold text-lg">
// // // //                             <span>Grand Total</span>
// // // //                             <span>KES {calculateTotal().toLocaleString()}</span>
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
                    
// // // //                     <button 
// // // //                       onClick={nextStep} 
// // // //                       disabled={!selectedPayment} 
// // // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 disabled:bg-gray-300 transition-colors"
// // // //                       style={{backgroundColor: selectedPayment ? '#2E1065' : '#D1D5DB'}}
// // // //                       onMouseEnter={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D')}
// // // //                       onMouseLeave={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#2E1065')}
// // // //                     >
// // // //                       COMPLETE PAYMENT
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               )}

// // // //               {checkoutStep === 4 && (
// // // //                 <div className="text-center py-12">
// // // //                   <div 
// // // //                     className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
// // // //                     style={{backgroundColor: '#2E1065'}}
// // // //                   >
// // // //                     <Check className="w-8 h-8 text-white" />
// // // //                   </div>
// // // //                   <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
// // // //                   <p className="text-lg text-gray-600 mb-8">Your order has been successfully placed.</p>
// // // //                   <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
// // // //                     <h3 className="font-semibold mb-4">Order Details</h3>
// // // //                     <div className="text-left space-y-2">
// // // //                       <div className="flex justify-between">
// // // //                         <span>Order Number:</span>
// // // //                         <span className="font-bold">#MK{Date.now().toString().slice(-6)}</span>
// // // //                       </div>
// // // //                       <div className="flex justify-between">
// // // //                         <span>Total Paid:</span>
// // // //                         <span className="font-bold">KES {calculateTotal().toLocaleString()}</span>
// // // //                       </div>
// // // //                       <div className="flex justify-between">
// // // //                         <span>Payment Method:</span>
// // // //                         <span className="font-bold">{selectedPayment === 'mpesa' ? 'M-Pesa' : 'Bonga Points'}</span>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                   <button 
// // // //                     onClick={closeCheckout} 
// // // //                     className="text-white px-8 py-3 rounded-lg font-semibold mt-8 transition-colors"
// // // //                     style={{backgroundColor: '#2E1065'}}
// // // //                     onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // // //                     onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // // //                   >
// // // //                     Continue Shopping
// // // //                   </button>
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       <div className="container mx-auto px-4 py-6">
// // // //         {/* Header/Hero Section with Deep Purple Theme */}
// // // //         <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg mb-8 px-4 sm:px-6 py-6 sm:py-8" style={{background: 'linear-gradient(to right, #2E1065, #1E0A4D)'}}>
// // // //           {/* Navigation Tabs */}
// // // //           <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6">
// // // //             <button className="text-white font-semibold border-b-2 border-white pb-1">
// // // //               Products
// // // //             </button>
// // // //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// // // //               Manufacturers
// // // //             </button>
// // // //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// // // //               Regional supplies
// // // //             </button>
// // // //           </div>

// // // //           {/* Search Section */}
// // // //           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
// // // //             <div className="relative flex-1 max-w-2xl">
// // // //               <div className="relative w-full">
// // // //                 <input
// // // //                   type="text"
// // // //                   className="w-full px-6 py-3 rounded-full text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/30"
// // // //                   style={{ caretColor: 'transparent' }}
// // // //                   readOnly
// // // //                 />
// // // //                 <div className="absolute left-6 top-1/2 -translate-y-1/2 overflow-hidden h-6">
// // // //                   <div 
// // // //                     className="transition-transform duration-500 ease-in-out"
// // // //                     style={{ 
// // // //                       transform: `translateY(-${currentSearchIndex * 24}px)` 
// // // //                     }}
// // // //                   >
// // // //                     {searchTexts.map((text, index) => (
// // // //                       <div key={index} className="h-6 flex items-center text-gray-800">
// // // //                         {text}
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //             <div className="flex gap-2 sm:gap-4">
// // // //               <button className="px-4 sm:px-8 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2">
// // // //                 <span>🔍</span> <span className="hidden sm:inline">Search</span>
// // // //               </button>
// // // //               <button className="px-4 sm:px-6 py-3 bg-white rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2" style={{color: '#2E1065'}}>
// // // //                 <span>📷</span> <span className="hidden sm:inline">Image Search</span>
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           {/* Frequently Searched */}
// // // //           <div className="text-center">
// // // //             <span className="text-white/90 text-sm">Frequently searched: </span>
// // // //             <div className="inline-flex flex-wrap gap-2 mt-1">
// // // //               {['drone 4K', 'iphones 11', 'samsung mobile phone', 'i phone', 'camera', 'nikon camera'].map((term, index) => (
// // // //                 <button key={index} className="text-white/90 text-sm hover:text-white transition-colors">
// // // //                   {term}
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Main Layout - Fixed 3-column grid */}
// // // //         <div className="flex gap-6">
// // // //           {/* Filter Sidebar - Narrow */}
// // // //           <div className="w-64 bg-white rounded-lg shadow-sm p-4 h-fit flex-shrink-0">
// // // //             <div className="flex items-center gap-2 mb-4">
// // // //               <Filter className="w-4 h-4 text-green-600" />
// // // //               <span className="text-base font-semibold text-gray-800">Filter</span>
// // // //             </div>

// // // //             <div className="space-y-1">
// // // //               {/* Price Filter */}
// // // //               <div className="border-b border-gray-100 pb-3 mb-3">
// // // //                 <button
// // // //                   onClick={() => toggleFilter('price')}
// // // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // // //                 >
// // // //                   <span className="text-gray-800 font-medium text-sm">Price</span>
// // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.price ? 'rotate-180' : ''}`} />
// // // //                 </button>
// // // //               </div>

// // // //               {/* Storage Capacity Filter */}
// // // //               <div className="border-b border-gray-100 pb-3 mb-3">
// // // //                 <button
// // // //                   onClick={() => toggleFilter('storage')}
// // // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // // //                 >
// // // //                   <span className="text-gray-800 font-medium text-sm">Storage Capacity</span>
// // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.storage ? 'rotate-180' : ''}`} />
// // // //                 </button>
// // // //               </div>

// // // //               {/* Camera Megapixel Filter */}
// // // //               <div className="border-b border-gray-100 pb-3 mb-3">
// // // //                 <button
// // // //                   onClick={() => toggleFilter('camera')}
// // // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // // //                 >
// // // //                   <span className="text-gray-800 font-medium text-sm">Camera Megapixel</span>
// // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.camera ? 'rotate-180' : ''}`} />
// // // //                 </button>
// // // //               </div>

// // // //               {/* Display Size Filter */}
// // // //               <div className="border-b border-gray-100 pb-3 mb-3">
// // // //                 <button
// // // //                   onClick={() => toggleFilter('display')}
// // // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // // //                 >
// // // //                   <span className="text-gray-800 font-medium text-sm">Display Size</span>
// // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.display ? 'rotate-180' : ''}`} />
// // // //                 </button>
// // // //               </div>

// // // //               {/* Brand Filter */}
// // // //               <div className="pb-3">
// // // //                 <button
// // // //                   onClick={() => toggleFilter('brand')}
// // // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // // //                 >
// // // //                   <span className="text-gray-800 font-medium text-sm">Brand</span>
// // // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.brand ? 'rotate-180' : ''}`} />
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Products Area - Takes remaining space */}
// // // //           <div className="flex-1">
// // // //             {/* Results Header */}
// // // //             <div className="mb-6">
// // // //               <div className="flex items-center gap-2 mb-4">
// // // //                 <div className="w-12 h-1 bg-cyan-300 rounded-full"></div>
// // // //               </div>
// // // //               <h1 className="text-2xl font-bold text-gray-800">45 Results Found</h1>
// // // //             </div>

// // // //             {/* Product Grid - FIXED 3 columns always */}
// // // //             <div className="grid grid-cols-3 gap-6 min-w-0">
// // // //               {products.map((product) => (
// // // //                 <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group relative">
// // // //                   {/* Discount Badge */}
// // // //                   {product.discount && (
// // // //                     <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold z-10">
// // // //                       {product.discount}
// // // //                     </div>
// // // //                   )}
                  
// // // //                   <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 h-64 flex items-center justify-center">
// // // //                     {/* PROJECTOR */}
// // // //                     {product.category === 'projector' && (
// // // //                       <div className="w-40 h-28 bg-white rounded-lg shadow-md flex items-center justify-center relative">
// // // //                         <div className="w-20 h-20 bg-gray-800 rounded-full relative">
// // // //                           <div className="absolute inset-2 bg-gray-700 rounded-full">
// // // //                             <div className="absolute inset-2 bg-gray-600 rounded-full flex items-center justify-center">
// // // //                               <div className="w-6 h-6 bg-cyan-400 rounded-full"></div>
// // // //                             </div>
// // // //                           </div>
// // // //                         </div>
// // // //                         <div className="absolute -right-2 -top-2 w-10 h-16 bg-gray-200 rounded transform rotate-12"></div>
// // // //                       </div>
// // // //                     )}
                    
// // // //                     {/* PHONES - Restored from v25 */}
// // // //                     {product.category === 'phone' && (
// // // //                       <div className="relative">
// // // //                         <div className={`w-24 h-44 rounded-3xl shadow-xl relative overflow-hidden border-2 ${
// // // //                           product.id === 2 ? 'bg-gradient-to-b from-indigo-900 to-black border-indigo-900' :
// // // //                           product.id === 3 ? 'bg-gradient-to-b from-gray-900 to-black border-gray-900' :
// // // //                           product.id === 4 ? 'bg-gradient-to-b from-yellow-500 to-yellow-700 border-yellow-600' :
// // // //                           product.id === 5 ? 'bg-gradient-to-b from-gray-700 to-gray-900 border-gray-800' :
// // // //                           'bg-gradient-to-b from-gray-800 to-black border-gray-800'
// // // //                         }`}>
                          
// // // //                           {/* Phone Screen */}
// // // //                           <div className={`absolute top-2 left-2 right-2 bottom-2 rounded-2xl relative overflow-hidden ${
// // // //                             product.id === 2 ? 'bg-gradient-to-b from-pink-200 via-blue-200 to-purple-300' :
// // // //                             product.id === 3 ? 'bg-gradient-to-b from-pink-100 via-purple-100 to-pink-200' :
// // // //                             product.id === 4 ? 'bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50' :
// // // //                             product.id === 5 ? 'bg-gradient-to-b from-gray-50 via-blue-50 to-purple-50' :
// // // //                             'bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50'
// // // //                           }`}>
                            
// // // //                             {/* Screen elements */}
// // // //                             <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-800 rounded-full opacity-30"></div>
// // // //                             <div className="absolute top-2 left-2 right-2 h-0.5 bg-gray-800 rounded-full opacity-20"></div>
                            
// // // //                             {/* A35 5G Badge */}
// // // //                             {product.id === 3 && (
// // // //                               <div className="absolute top-2 right-2 bg-white text-gray-800 text-xs font-bold px-1.5 py-0.5 rounded shadow">
// // // //                                 A35 5G
// // // //                               </div>
// // // //                             )}
                            
// // // //                             {/* S24 Ultra specific elements */}
// // // //                             {(product.id === 4 || product.id === 5) && (
// // // //                               <>
// // // //                                 {/* S Pen */}
// // // //                                 <div className="absolute -left-6 top-8 w-0.5 h-16 bg-gray-800 rounded-full rotate-12"></div>
// // // //                                 {/* Phone reflection/design */}
// // // //                                 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
// // // //                               </>
// // // //                             )}
                            
// // // //                             {/* Z Fold 6 fold line */}
// // // //                             {product.id === 6 && (
// // // //                               <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gray-300 rounded-full opacity-50"></div>
// // // //                             )}
// // // //                           </div>
                          
// // // //                           {/* Camera Module */}
// // // //                           <div className={`absolute top-4 left-3 bg-gray-900 rounded-lg ${
// // // //                             (product.id === 4 || product.id === 5) ? 'w-6 h-12' : 'w-6 h-6'
// // // //                           }`}>
// // // //                             {(product.id === 4 || product.id === 5) ? (
// // // //                               // S24 Ultra triple camera
// // // //                               <>
// // // //                                 <div className="absolute top-1 left-1 w-4 h-4 bg-gray-800 rounded-full"></div>
// // // //                                 <div className="absolute top-7 left-1 w-4 h-4 bg-gray-800 rounded-full"></div>
// // // //                               </>
// // // //                             ) : (
// // // //                               // Regular phone camera
// // // //                               <div className="absolute top-1 left-1 w-4 h-4 bg-gray-800 rounded-full"></div>
// // // //                             )}
// // // //                           </div>
                          
// // // //                           {/* Secondary camera for A15/A35 */}
// // // //                           {(product.id === 2 || product.id === 3) && (
// // // //                             <div className="absolute top-6 left-5 w-2 h-2 bg-gray-800 rounded-full"></div>
// // // //                           )}
// // // //                         </div>
// // // //                       </div>
// // // //                     )}
                    
// // // //                     {/* Green Cart Button */}
// // // //                     <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
// // // //                       <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
// // // //                         <ShoppingCart className="w-5 h-5" />
// // // //                       </button>
// // // //                     </div>
// // // //                   </div>
                  
// // // //                   <div className="p-4">
// // // //                     <h3 className="font-semibold text-gray-800 mb-2 text-base leading-tight">{product.name}</h3>
// // // //                     {product.fullName && (
// // // //                       <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.fullName}</p>
// // // //                     )}
// // // //                     <div className="flex items-center gap-2 mb-3">
// // // //                       <p className="text-xl font-bold text-gray-900">{product.displayPrice}</p>
// // // //                       {product.originalPrice && (
// // // //                         <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
// // // //                       )}
// // // //                     </div>
// // // //                     <button 
// // // //                       onClick={() => handleBuyNow(product)}
// // // //                       className="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-green-600"
// // // //                     >
// // // //                       BUY NOW
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProductListing;


// // // 'use client';

// // // import React, { useState } from 'react';
// // // import { ChevronDown, Filter, ShoppingCart, Check, X, Trash2, Plus, Minus } from 'lucide-react';

// // // interface Product {
// // //   id: number;
// // //   name: string;
// // //   fullName?: string;
// // //   price: number;
// // //   displayPrice: string;
// // //   originalPrice?: string;
// // //   discount?: string;
// // //   image: string;
// // //   category: string;
// // // }

// // // const ProductListing = () => {
// // //   const [filters, setFilters] = useState({
// // //     price: false,
// // //     storage: false,
// // //     camera: false,
// // //     display: false,
// // //     brand: false
// // //   });

// // //   const [showCheckout, setShowCheckout] = useState(false);
// // //   const [checkoutStep, setCheckoutStep] = useState(1);
// // //   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
// // //   const [quantity, setQuantity] = useState(1);
// // //   const [selectedPayment, setSelectedPayment] = useState('');
// // //   const [deliveryOption, setDeliveryOption] = useState('home');
// // //   const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
  
// // //   const searchTexts = [
// // //     "iphones 11",
// // //     "iphones 15 pro max",
// // //     "nikon camera",
// // //     "samsung galaxy s24",
// // //     "macbook pro",
// // //     "drone 4k",
// // //     "apple watch",
// // //     "samsung mobile phone"
// // //   ];

// // //   // Auto-scroll search text
// // //   React.useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentSearchIndex((prev) => (prev + 1) % searchTexts.length);
// // //     }, 2000);
    
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   const handleBuyNow = (product: Product) => {
// // //     setSelectedProduct(product);
// // //     setShowCheckout(true);
// // //     setCheckoutStep(1);
// // //   };

// // //   const nextStep = () => {
// // //     if (checkoutStep < 4) {
// // //       setCheckoutStep(checkoutStep + 1);
// // //     }
// // //   };

// // //   const closeCheckout = () => {
// // //     setShowCheckout(false);
// // //     setCheckoutStep(1);
// // //     setSelectedProduct(null);
// // //   };

// // //   const getStepTitle = (step: number) => {
// // //     switch(step) {
// // //       case 1: return 'Cart';
// // //       case 2: return 'Shipping';
// // //       case 3: return 'Payment';
// // //       case 4: return 'Thank You';
// // //       default: return '';
// // //     }
// // //   };

// // //   const calculateTotal = () => {
// // //     if (!selectedProduct) return 0;
// // //     const subtotal = selectedProduct.price * quantity;
// // //     const shipping = 250;
// // //     return subtotal + shipping;
// // //   };

// // //   const toggleFilter = (filterName: string) => {
// // //     setFilters(prev => ({
// // //       ...prev,
// // //       [filterName]: !prev[filterName]
// // //     }));
// // //   };

// // //   const products: Product[] = [
// // //     {
// // //       id: 1,
// // //       name: "Freestyle -",
// // //       price: 167995,
// // //       displayPrice: "KES 167,995",
// // //       image: "/api/placeholder/300/300",
// // //       category: "projector"
// // //     },
// // //     {
// // //       id: 2,
// // //       name: "Samsung Galaxy A15 - 6.5\"",
// // //       fullName: "Samsung Galaxy A15 - 6.5\" - 128GB ROM - 4GB RAM - Dual SIM - 4G",
// // //       price: 29499,
// // //       displayPrice: "KES 29,499",
// // //       image: "/api/placeholder/300/300",
// // //       category: "phone"
// // //     },
// // //     {
// // //       id: 3,
// // //       name: "Samsung Galaxy A35 5G - 6.6\"",
// // //       fullName: "Samsung Galaxy A35 5G - 6.6\" - 128GB ROM - 6GB RAM - Dual SIM",
// // //       price: 39585,
// // //       displayPrice: "KES 39,585",
// // //       image: "/api/placeholder/300/300",
// // //       category: "phone"
// // //     },
// // //     {
// // //       id: 4,
// // //       name: "Samsung Galaxy S24 Ultra",
// // //       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
// // //       price: 134945,
// // //       displayPrice: "KES 134,945",
// // //       originalPrice: "KES 165,650",
// // //       discount: "19% Off",
// // //       image: "/api/placeholder/300/300",
// // //       category: "phone"
// // //     },
// // //     {
// // //       id: 5,
// // //       name: "Samsung Galaxy S24 Ultra",
// // //       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
// // //       price: 134945,
// // //       displayPrice: "KES 134,945",
// // //       originalPrice: "KES 165,650",
// // //       discount: "19% Off",
// // //       image: "/api/placeholder/300/300",
// // //       category: "phone"
// // //     },
// // //     {
// // //       id: 6,
// // //       name: "Samsung Galaxy Z Fold 6 - 7.6\"",
// // //       fullName: "Samsung Galaxy Z Fold 6 - 7.6\" - 12GB RAM - 512GB ROM",
// // //       price: 194979,
// // //       displayPrice: "KES 194,979",
// // //       originalPrice: "KES 253,344",
// // //       discount: "23% Off",
// // //       image: "/api/placeholder/300/300",
// // //       category: "phone"
// // //     }
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       {/* Checkout Modal */}
// // //       {showCheckout && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 overflow-y-auto">
// // //           <div className="bg-white rounded-lg w-full max-w-6xl my-4 min-h-[600px]">
// // //             {/* Header with Progress */}
// // //             <div className="p-6 border-b">
// // //               <div className="flex justify-between items-center mb-6">
// // //                 <h2 className="text-2xl font-bold">Checkout (1 item)</h2>
// // //                 <button onClick={closeCheckout} className="p-2 hover:bg-gray-100 rounded-full">
// // //                   <X className="w-6 h-6" />
// // //                 </button>
// // //               </div>
              
// // //               {/* Progress Steps */}
// // //               <div className="flex items-center justify-between mb-4 overflow-x-auto">
// // //                 {[1, 2, 3, 4].map((step) => (
// // //                   <div key={step} className="flex items-center min-w-0">
// // //                     <div 
// // //                       className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
// // //                       style={{
// // //                         backgroundColor: step <= checkoutStep ? '#2E1065' : '#D1D5DB',
// // //                         color: step <= checkoutStep ? 'white' : '#6B7280'
// // //                       }}
// // //                     >
// // //                       {step < checkoutStep ? <Check className="w-4 h-4" /> : step}
// // //                     </div>
// // //                     <span className="ml-2 text-sm font-medium whitespace-nowrap">{getStepTitle(step)}</span>
// // //                     {step < 4 && (
// // //                       <div 
// // //                         className="w-8 sm:w-16 h-0.5 ml-4 flex-shrink-0"
// // //                         style={{backgroundColor: step < checkoutStep ? '#2E1065' : '#D1D5DB'}}
// // //                       />
// // //                     )}
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Step Content */}
// // //             <div className="p-6 min-h-[500px]">
// // //               {checkoutStep === 1 && (
// // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //                   {/* Cart Items */}
// // //                   <div className="lg:col-span-2 space-y-6">
// // //                     <div className="bg-gray-50 rounded-lg p-6">
// // //                       <h3 className="text-lg font-semibold mb-4">Your Items</h3>
// // //                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-lg">
// // //                         <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
// // //                           <div className="w-8 h-12 bg-indigo-500 rounded"></div>
// // //                         </div>
// // //                         <div className="flex-1 min-w-0">
// // //                           <h4 className="font-semibold">{selectedProduct?.name}</h4>
// // //                           <p className="text-sm text-gray-600">{selectedProduct?.fullName}</p>
// // //                           <p className="font-bold text-lg">{selectedProduct?.displayPrice}</p>
// // //                         </div>
// // //                         <div className="flex items-center gap-2 flex-shrink-0">
// // //                           <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
// // //                             <Minus className="w-4 h-4" />
// // //                           </button>
// // //                           <span className="w-8 text-center">{quantity}</span>
// // //                           <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
// // //                             <Plus className="w-4 h-4" />
// // //                           </button>
// // //                         </div>
// // //                         <button className="p-2 text-red-500 hover:bg-red-50 rounded flex-shrink-0">
// // //                           <Trash2 className="w-4 h-4" />
// // //                         </button>
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Order Summary */}
// // //                   <div className="bg-white border rounded-lg p-6">
// // //                     <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
// // //                     <div className="space-y-3">
// // //                       <div className="flex justify-between">
// // //                         <span>Subtotal:</span>
// // //                         <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // //                       </div>
// // //                       <div className="flex justify-between">
// // //                         <span>Shipping & Handling:</span>
// // //                         <span>KES 250</span>
// // //                       </div>
// // //                       <div className="border-t pt-3">
// // //                         <div className="flex justify-between font-bold text-lg">
// // //                           <span>Grand Total</span>
// // //                           <span>KES {calculateTotal().toLocaleString()}</span>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                     <button 
// // //                       onClick={nextStep} 
// // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors"
// // //                       style={{backgroundColor: '#2E1065'}}
// // //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // //                     >
// // //                       PROCEED TO CHECKOUT
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               {checkoutStep === 2 && (
// // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //                   {/* Shipping Form */}
// // //                   <div className="lg:col-span-2 space-y-6">
// // //                     {/* Shipping Address */}
// // //                     <div className="bg-gray-50 rounded-lg p-6">
// // //                       <div className="flex items-center gap-2 mb-4">
// // //                         <div 
// // //                           className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
// // //                           style={{backgroundColor: '#2E1065'}}
// // //                         >
// // //                           2
// // //                         </div>
// // //                         <h3 className="text-lg font-semibold">Shipping Address</h3>
// // //                       </div>
                      
// // //                       <div className="space-y-4">
// // //                         <div className="bg-white rounded-lg p-4">
// // //                           <div className="flex items-center gap-2 mb-3">
// // //                             <input type="radio" name="delivery" checked={deliveryOption === 'home'} onChange={() => setDeliveryOption('home')} />
// // //                             <label className="font-medium">Delivery to your home or office</label>
// // //                           </div>
// // //                           <p className="text-sm text-gray-600 mb-4">Fill in your Home or office address</p>
                          
// // //                           {deliveryOption === 'home' && (
// // //                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //                               <div>
// // //                                 <label className="block text-sm font-medium mb-1">Firstname *</label>
// // //                                 <input type="text" className="w-full border rounded-lg px-3 py-2" />
// // //                               </div>
// // //                               <div>
// // //                                 <label className="block text-sm font-medium mb-1">Lastname *</label>
// // //                                 <input type="text" className="w-full border rounded-lg px-3 py-2" />
// // //                               </div>
// // //                               <div>
// // //                                 <label className="block text-sm font-medium mb-1">Region</label>
// // //                                 <select className="w-full border rounded-lg px-3 py-2">
// // //                                   <option>Nairobi</option>
// // //                                 </select>
// // //                               </div>
// // //                               <div>
// // //                                 <label className="block text-sm font-medium mb-1">Recipient Number *</label>
// // //                                 <input type="tel" className="w-full border rounded-lg px-3 py-2" />
// // //                               </div>
// // //                               <div className="sm:col-span-2">
// // //                                 <label className="block text-sm font-medium mb-1">Address</label>
// // //                                 <textarea className="w-full border rounded-lg px-3 py-2 h-20"></textarea>
// // //                               </div>
// // //                             </div>
// // //                           )}
// // //                         </div>

// // //                         <div className="bg-white rounded-lg p-4">
// // //                           <div className="flex items-center gap-2 mb-3">
// // //                             <input type="radio" name="delivery" checked={deliveryOption === 'pickup'} onChange={() => setDeliveryOption('pickup')} />
// // //                             <label className="font-medium">Pickup Station</label>
// // //                           </div>
// // //                           <p className="text-sm text-gray-600">I would like to pick my order at the closest Masoko pick up point</p>
// // //                         </div>
// // //                       </div>
// // //                     </div>

// // //                     {/* Promotion Code */}
// // //                     <div className="bg-gray-50 rounded-lg p-6">
// // //                       <h3 className="text-lg font-semibold mb-4">Promotion Code(Optional)</h3>
// // //                       <div className="bg-white rounded-lg p-4">
// // //                         <h4 className="font-medium mb-2">APPLY A PROMOTION CODE</h4>
// // //                         <p className="text-sm text-gray-600 mb-3">Do you have a promo code? <a href="#" className="text-blue-500 underline">Check on promo or Log in</a></p>
// // //                         <input type="text" placeholder="Enter promotion code" className="w-full border rounded-lg px-3 py-2" />
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Order Summary */}
// // //                   <div className="bg-white border rounded-lg p-6">
// // //                     <div className="flex items-center gap-2 mb-4">
// // //                       <div 
// // //                         className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
// // //                         style={{backgroundColor: '#2E1065'}}
// // //                       >
// // //                         3
// // //                       </div>
// // //                       <h3 className="text-lg font-semibold">Order Summary</h3>
// // //                     </div>
                    
// // //                     <div className="space-y-4">
// // //                       <div>
// // //                         <h4 className="font-medium mb-2">PRODUCT</h4>
// // //                         <div className="flex gap-3">
// // //                           <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
// // //                             <div className="w-6 h-8 bg-indigo-500 rounded"></div>
// // //                           </div>
// // //                           <div className="flex-1 min-w-0">
// // //                             <p className="font-medium text-sm">{selectedProduct?.name}</p>
// // //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// // //                             <p className="font-bold">{selectedProduct?.displayPrice}</p>
// // //                           </div>
// // //                         </div>
// // //                       </div>
                      
// // //                       <div className="space-y-2">
// // //                         <div className="flex justify-between">
// // //                           <span>Shipping & Handling:</span>
// // //                           <span>KES 250</span>
// // //                         </div>
// // //                         <div className="flex justify-between">
// // //                           <span>Subtotal:</span>
// // //                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // //                         </div>
// // //                         <div className="border-t pt-2">
// // //                           <div className="flex justify-between font-bold text-lg">
// // //                             <span>Grand Total</span>
// // //                             <span>KES {calculateTotal().toLocaleString()}</span>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
                    
// // //                     <button 
// // //                       onClick={nextStep} 
// // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors"
// // //                       style={{backgroundColor: '#2E1065'}}
// // //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // //                     >
// // //                       CONTINUE TO PAYMENT
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               {checkoutStep === 3 && (
// // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //                   {/* Payment Methods */}
// // //                   <div className="lg:col-span-2 space-y-6">
// // //                     <div className="bg-gray-50 rounded-lg p-6">
// // //                       <h3 className="text-lg font-semibold mb-4">SELECT PAYMENT METHOD</h3>
// // //                       <p className="text-sm text-red-500 mb-4">Select preferred payment method for enhanced shopping experience.</p>
                      
// // //                       <div className="space-y-3">
// // //                         <div className="bg-white rounded-lg p-4 border">
// // //                           <div className="flex items-center gap-3">
// // //                             <input type="radio" name="payment" value="mpesa" checked={selectedPayment === 'mpesa'} onChange={(e) => setSelectedPayment(e.target.value)} />
// // //                             <span>Lipa Na M-Pesa</span>
// // //                             <span className="text-green-600 font-bold">m-pesa</span>
// // //                           </div>
// // //                         </div>
                        
// // //                         <div className="bg-white rounded-lg p-4 border">
// // //                           <div className="flex items-center gap-3">
// // //                             <input type="radio" name="payment" value="bonga" checked={selectedPayment === 'bonga'} onChange={(e) => setSelectedPayment(e.target.value)} />
// // //                             <span>Lipa Na Bonga</span>
// // //                             <span className="text-orange-600 font-bold">BONGA</span>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Order Summary */}
// // //                   <div className="bg-white border rounded-lg p-6">
// // //                     <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                    
// // //                     <div className="space-y-4">
// // //                       <div>
// // //                         <h4 className="font-medium mb-2">PRODUCT</h4>
// // //                         <div className="flex gap-3">
// // //                           <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
// // //                             <div className="w-6 h-8 bg-indigo-500 rounded"></div>
// // //                           </div>
// // //                           <div className="flex-1 min-w-0">
// // //                             <p className="font-medium text-sm">{selectedProduct?.name}</p>
// // //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// // //                             <p className="font-bold">{selectedProduct?.displayPrice}</p>
// // //                           </div>
// // //                         </div>
// // //                       </div>
                      
// // //                       <div className="space-y-2">
// // //                         <div className="flex justify-between">
// // //                           <span>Shipping & Handling:</span>
// // //                           <span>KES 250</span>
// // //                         </div>
// // //                         <div className="flex justify-between">
// // //                           <span>Subtotal:</span>
// // //                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // //                         </div>
// // //                         <div className="border-t pt-2">
// // //                           <div className="flex justify-between font-bold text-lg">
// // //                             <span>Grand Total</span>
// // //                             <span>KES {calculateTotal().toLocaleString()}</span>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
                    
// // //                     <button 
// // //                       onClick={nextStep} 
// // //                       disabled={!selectedPayment} 
// // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 disabled:bg-gray-300 transition-colors"
// // //                       style={{backgroundColor: selectedPayment ? '#2E1065' : '#D1D5DB'}}
// // //                       onMouseEnter={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D')}
// // //                       onMouseLeave={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#2E1065')}
// // //                     >
// // //                       COMPLETE PAYMENT
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               {checkoutStep === 4 && (
// // //                 <div className="text-center py-12">
// // //                   <div 
// // //                     className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
// // //                     style={{backgroundColor: '#2E1065'}}
// // //                   >
// // //                     <Check className="w-8 h-8 text-white" />
// // //                   </div>
// // //                   <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
// // //                   <p className="text-lg text-gray-600 mb-8">Your order has been successfully placed.</p>
// // //                   <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
// // //                     <h3 className="font-semibold mb-4">Order Details</h3>
// // //                     <div className="text-left space-y-2">
// // //                       <div className="flex justify-between">
// // //                         <span>Order Number:</span>
// // //                         <span className="font-bold">#MK{Date.now().toString().slice(-6)}</span>
// // //                       </div>
// // //                       <div className="flex justify-between">
// // //                         <span>Total Paid:</span>
// // //                         <span className="font-bold">KES {calculateTotal().toLocaleString()}</span>
// // //                       </div>
// // //                       <div className="flex justify-between">
// // //                         <span>Payment Method:</span>
// // //                         <span className="font-bold">{selectedPayment === 'mpesa' ? 'M-Pesa' : 'Bonga Points'}</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                   <button 
// // //                     onClick={closeCheckout} 
// // //                     className="text-white px-8 py-3 rounded-lg font-semibold mt-8 transition-colors"
// // //                     style={{backgroundColor: '#2E1065'}}
// // //                     onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // //                     onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // //                   >
// // //                     Continue Shopping
// // //                   </button>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       <div className="container mx-auto px-4 py-6">
// // //         {/* Header/Hero Section with Deep Purple Theme */}
// // //         <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg mb-8 px-4 sm:px-6 py-6 sm:py-8" style={{background: 'linear-gradient(to right, #2E1065, #1E0A4D)'}}>
// // //           {/* Navigation Tabs */}
// // //           <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6">
// // //             <button className="text-white font-semibold border-b-2 border-white pb-1">
// // //               Products
// // //             </button>
// // //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// // //               Manufacturers
// // //             </button>
// // //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// // //               Regional supplies
// // //             </button>
// // //           </div>

// // //           {/* Search Section */}
// // //           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
// // //             <div className="relative flex-1 max-w-2xl">
// // //               <div className="relative w-full">
// // //                 <input
// // //                   type="text"
// // //                   className="w-full px-6 py-3 rounded-full text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/30"
// // //                   style={{ caretColor: 'transparent' }}
// // //                   readOnly
// // //                 />
// // //                 <div className="absolute left-6 top-1/2 -translate-y-1/2 overflow-hidden h-6">
// // //                   <div 
// // //                     className="transition-transform duration-500 ease-in-out"
// // //                     style={{ 
// // //                       transform: `translateY(-${currentSearchIndex * 24}px)` 
// // //                     }}
// // //                   >
// // //                     {searchTexts.map((text, index) => (
// // //                       <div key={index} className="h-6 flex items-center text-gray-800">
// // //                         {text}
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <div className="flex gap-2 sm:gap-4">
// // //               <button className="px-4 sm:px-8 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2">
// // //                 <span>🔍</span> <span className="hidden sm:inline">Search</span>
// // //               </button>
// // //               <button className="px-4 sm:px-6 py-3 bg-white rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2" style={{color: '#2E1065'}}>
// // //                 <span>📷</span> <span className="hidden sm:inline">Image Search</span>
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {/* Frequently Searched */}
// // //           <div className="text-center">
// // //             <span className="text-white/90 text-sm">Frequently searched: </span>
// // //             <div className="inline-flex flex-wrap gap-2 mt-1">
// // //               {['drone 4K', 'iphones 11', 'samsung mobile phone', 'i phone', 'camera', 'nikon camera'].map((term, index) => (
// // //                 <button key={index} className="text-white/90 text-sm hover:text-white transition-colors">
// // //                   {term}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Main Layout - Fixed 3-column grid */}
// // //         <div className="flex gap-6">
// // //           {/* Filter Sidebar - Narrow */}
// // //           <div className="w-64 bg-white rounded-lg shadow-sm p-4 h-fit flex-shrink-0">
// // //             <div className="flex items-center gap-2 mb-4">
// // //               <Filter className="w-4 h-4 text-green-600" />
// // //               <span className="text-base font-semibold text-gray-800">Filter</span>
// // //             </div>

// // //             <div className="space-y-1">
// // //               {/* Price Filter */}
// // //               <div className="border-b border-gray-100 pb-3 mb-3">
// // //                 <button
// // //                   onClick={() => toggleFilter('price')}
// // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // //                 >
// // //                   <span className="text-gray-800 font-medium text-sm">Price</span>
// // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.price ? 'rotate-180' : ''}`} />
// // //                 </button>
// // //               </div>

// // //               {/* Storage Capacity Filter */}
// // //               <div className="border-b border-gray-100 pb-3 mb-3">
// // //                 <button
// // //                   onClick={() => toggleFilter('storage')}
// // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // //                 >
// // //                   <span className="text-gray-800 font-medium text-sm">Storage Capacity</span>
// // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.storage ? 'rotate-180' : ''}`} />
// // //                 </button>
// // //               </div>

// // //               {/* Camera Megapixel Filter */}
// // //               <div className="border-b border-gray-100 pb-3 mb-3">
// // //                 <button
// // //                   onClick={() => toggleFilter('camera')}
// // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // //                 >
// // //                   <span className="text-gray-800 font-medium text-sm">Camera Megapixel</span>
// // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.camera ? 'rotate-180' : ''}`} />
// // //                 </button>
// // //               </div>

// // //               {/* Display Size Filter */}
// // //               <div className="border-b border-gray-100 pb-3 mb-3">
// // //                 <button
// // //                   onClick={() => toggleFilter('display')}
// // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // //                 >
// // //                   <span className="text-gray-800 font-medium text-sm">Display Size</span>
// // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.display ? 'rotate-180' : ''}`} />
// // //                 </button>
// // //               </div>

// // //               {/* Brand Filter */}
// // //               <div className="pb-3">
// // //                 <button
// // //                   onClick={() => toggleFilter('brand')}
// // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2"
// // //                 >
// // //                   <span className="text-gray-800 font-medium text-sm">Brand</span>
// // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.brand ? 'rotate-180' : ''}`} />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Products Area - Takes remaining space */}
// // //           <div className="flex-1">
// // //             {/* Results Header */}
// // //             <div className="mb-6">
// // //               <div className="flex items-center gap-2 mb-4">
// // //                 <div className="w-12 h-1 bg-cyan-300 rounded-full"></div>
// // //               </div>
// // //               <h1 className="text-2xl font-bold text-gray-800">45 Results Found</h1>
// // //             </div>

// // //             {/* Product Grid - FIXED 3 columns always */}
// // //             <div className="grid grid-cols-3 gap-6 min-w-0">
// // //               {products.map((product) => (
// // //                 <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group relative">
// // //                   {/* Discount Badge */}
// // //                   {product.discount && (
// // //                     <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold z-10">
// // //                       {product.discount}
// // //                     </div>
// // //                   )}
                  
// // //                   <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 h-64 flex items-center justify-center">
// // //                     {/* PROJECTOR */}
// // //                     {product.category === 'projector' && (
// // //                       <div className="w-40 h-28 bg-white rounded-lg shadow-md flex items-center justify-center relative">
// // //                         <div className="w-20 h-20 bg-gray-800 rounded-full relative">
// // //                           <div className="absolute inset-2 bg-gray-700 rounded-full">
// // //                             <div className="absolute inset-2 bg-gray-600 rounded-full flex items-center justify-center">
// // //                               <div className="w-6 h-6 bg-cyan-400 rounded-full"></div>
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                         <div className="absolute -right-2 -top-2 w-10 h-16 bg-gray-200 rounded transform rotate-12"></div>
// // //                       </div>
// // //                     )}
                    
// // //                     {/* PHONES - Restored from v25 */}
// // //                     {product.category === 'phone' && (
// // //                       <div className="relative">
// // //                         <div className={`w-24 h-44 rounded-3xl shadow-xl relative overflow-hidden border-2 ${
// // //                           product.id === 2 ? 'bg-gradient-to-b from-indigo-900 to-black border-indigo-900' :
// // //                           product.id === 3 ? 'bg-gradient-to-b from-gray-900 to-black border-gray-900' :
// // //                           product.id === 4 ? 'bg-gradient-to-b from-yellow-500 to-yellow-700 border-yellow-600' :
// // //                           product.id === 5 ? 'bg-gradient-to-b from-gray-700 to-gray-900 border-gray-800' :
// // //                           'bg-gradient-to-b from-gray-800 to-black border-gray-800'
// // //                         }`}>
                          
// // //                           {/* Phone Screen */}
// // //                           <div className={`absolute top-2 left-2 right-2 bottom-2 rounded-2xl relative overflow-hidden ${
// // //                             product.id === 2 ? 'bg-gradient-to-b from-pink-200 via-blue-200 to-purple-300' :
// // //                             product.id === 3 ? 'bg-gradient-to-b from-pink-100 via-purple-100 to-pink-200' :
// // //                             product.id === 4 ? 'bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50' :
// // //                             product.id === 5 ? 'bg-gradient-to-b from-gray-50 via-blue-50 to-purple-50' :
// // //                             'bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50'
// // //                           }`}>
                            
// // //                             {/* Screen elements */}
// // //                             <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-800 rounded-full opacity-30"></div>
// // //                             <div className="absolute top-2 left-2 right-2 h-0.5 bg-gray-800 rounded-full opacity-20"></div>
                            
// // //                             {/* A35 5G Badge */}
// // //                             {product.id === 3 && (
// // //                               <div className="absolute top-2 right-2 bg-white text-gray-800 text-xs font-bold px-1.5 py-0.5 rounded shadow">
// // //                                 A35 5G
// // //                               </div>
// // //                             )}
                            
// // //                             {/* S24 Ultra specific elements */}
// // //                             {(product.id === 4 || product.id === 5) && (
// // //                               <>
// // //                                 {/* S Pen */}
// // //                                 <div className="absolute -left-6 top-8 w-0.5 h-16 bg-gray-800 rounded-full rotate-12"></div>
// // //                                 {/* Phone reflection/design */}
// // //                                 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
// // //                               </>
// // //                             )}
                            
// // //                             {/* Z Fold 6 fold line */}
// // //                             {product.id === 6 && (
// // //                               <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gray-300 rounded-full opacity-50"></div>
// // //                             )}
// // //                           </div>
                          
// // //                           {/* Camera Module */}
// // //                           <div className={`absolute top-4 left-3 bg-gray-900 rounded-lg ${
// // //                             (product.id === 4 || product.id === 5) ? 'w-6 h-12' : 'w-6 h-6'
// // //                           }`}>
// // //                             {(product.id === 4 || product.id === 5) ? (
// // //                               // S24 Ultra triple camera
// // //                               <>
// // //                                 <div className="absolute top-1 left-1 w-4 h-4 bg-gray-800 rounded-full"></div>
// // //                                 <div className="absolute top-7 left-1 w-4 h-4 bg-gray-800 rounded-full"></div>
// // //                               </>
// // //                             ) : (
// // //                               // Regular phone camera
// // //                               <div className="absolute top-1 left-1 w-4 h-4 bg-gray-800 rounded-full"></div>
// // //                             )}
// // //                           </div>
                          
// // //                           {/* Secondary camera for A15/A35 */}
// // //                           {(product.id === 2 || product.id === 3) && (
// // //                             <div className="absolute top-6 left-5 w-2 h-2 bg-gray-800 rounded-full"></div>
// // //                           )}
// // //                         </div>
// // //                       </div>
// // //                     )}
                    
// // //                     {/* Green Cart Button */}
// // //                     <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
// // //                       <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
// // //                         <ShoppingCart className="w-5 h-5" />
// // //                       </button>
// // //                     </div>
// // //                   </div>
                  
// // //                   <div className="p-4">
// // //                     <h3 className="font-semibold text-gray-800 mb-2 text-base leading-tight">{product.name}</h3>
// // //                     {product.fullName && (
// // //                       <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.fullName}</p>
// // //                     )}
// // //                     <div className="flex items-center gap-2 mb-3">
// // //                       <p className="text-xl font-bold text-gray-900">{product.displayPrice}</p>
// // //                       {product.originalPrice && (
// // //                         <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
// // //                       )}
// // //                     </div>
// // //                     <button 
// // //                       onClick={() => handleBuyNow(product)}
// // //                       className="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-green-600"
// // //                     >
// // //                       BUY NOW
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductListing;








// // // 'use client';

// // // import React, { useState, useEffect } from 'react';
// // // import { ChevronDown, Filter, ShoppingCart, Check, X, Trash2, Plus, Minus, Menu } from 'lucide-react';

// // // // Define the Product interface to ensure type safety for product objects
// // // interface Product {
// // //   id: number;
// // //   name: string;
// // //   fullName?: string; // Optional full name for product
// // //   price: number;
// // //   displayPrice: string; // Formatted price for display
// // //   originalPrice?: string; // Optional original price for showing discounts
// // //   discount?: string; // Optional discount text
// // //   image: string; // URL or path to the product image
// // //   category: string;
// // // }

// // // // Main ProductListing functional component
// // // const ProductListing = () => {
// // //   // State for managing filter visibility
// // //   const [filters, setFilters] = useState({
// // //     price: false,
// // //     storage: false,
// // //     camera: false,
// // //     display: false,
// // //     brand: false
// // //   });

// // //   // State for checkout modal visibility and step management
// // //   const [showCheckout, setShowCheckout] = useState(false);
// // //   const [checkoutStep, setCheckoutStep] = useState(1);
// // //   // State for the product currently selected for purchase
// // //   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
// // //   // State for the quantity of the selected product
// // //   const [quantity, setQuantity] = useState(1);
// // //   // State for selected payment method
// // //   const [selectedPayment, setSelectedPayment] = useState('');
// // //   // State for delivery option (home or pickup)
// // //   const [deliveryOption, setDeliveryOption] = useState('home');
// // //   // State for controlling the auto-scrolling search text in the header
// // //   const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
// // //   // State for mobile filter sidebar visibility
// // //   const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  
// // //   // Array of search texts for auto-scrolling animation
// // //   const searchTexts = [
// // //     "iphones 11",
// // //     "iphones 15 pro max",
// // //     "nikon camera",
// // //     "samsung galaxy s24",
// // //     "macbook pro",
// // //     "drone 4k",
// // //     "apple watch",
// // //     "samsung mobile phone"
// // //   ];

// // //   // Effect hook to handle auto-scrolling search text
// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentSearchIndex((prev) => (prev + 1) % searchTexts.length);
// // //     }, 2000); // Change text every 2 seconds
    
// // //     // Cleanup function to clear the interval on component unmount
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   // Handler for "Buy Now" button click
// // //   const handleBuyNow = (product: Product) => {
// // //     setSelectedProduct(product); // Set the product to be purchased
// // //     setShowCheckout(true); // Open the checkout modal
// // //     setCheckoutStep(1); // Reset to the first step of checkout
// // //   };

// // //   // Function to advance to the next step in the checkout process
// // //   const nextStep = () => {
// // //     if (checkoutStep < 4) { // Max 4 steps
// // //       setCheckoutStep(checkoutStep + 1);
// // //     }
// // //   };

// // //   // Function to close the checkout modal and reset related states
// // //   const closeCheckout = () => {
// // //     setShowCheckout(false);
// // //     setCheckoutStep(1);
// // //     setSelectedProduct(null);
// // //     setQuantity(1);
// // //     setSelectedPayment('');
// // //   };

// // //   // Helper function to get the title for each checkout step
// // //   const getStepTitle = (step: number) => {
// // //     switch(step) {
// // //       case 1: return 'Cart';
// // //       case 2: return 'Shipping';
// // //       case 3: return 'Payment';
// // //       case 4: return 'Thank You';
// // //       default: return '';
// // //     }
// // //   };

// // //   // Function to calculate the total price including shipping
// // //   const calculateTotal = () => {
// // //     if (!selectedProduct) return 0;
// // //     const subtotal = selectedProduct.price * quantity;
// // //     const shipping = 250; // Fixed shipping cost
// // //     return subtotal + shipping;
// // //   };

// // //   // Function to toggle the visibility of filter sections
// // //   const toggleFilter = (filterName: string) => {
// // //     setFilters(prev => ({
// // //       ...prev,
// // //       [filterName]: !prev[filterName] // Toggle the boolean value for the given filter
// // //     }));
// // //   };

// // //   // Static list of products to display
// // //   const products: Product[] = [
// // //     {
// // //       id: 1,
// // //       name: "Freestyle -",
// // //       price: 167995,
// // //       displayPrice: "KES 167,995",
// // //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Projector", // Placeholder image
// // //       category: "projector"
// // //     },
// // //     {
// // //       id: 2,
// // //       name: "Samsung Galaxy A15 - 6.5\"",
// // //       fullName: "Samsung Galaxy A15 - 6.5\" - 128GB ROM - 4GB RAM - Dual SIM - 4G",
// // //       price: 29499,
// // //       displayPrice: "KES 29,499",
// // //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+A15", // Placeholder image
// // //       category: "phone"
// // //     },
// // //     {
// // //       id: 3,
// // //       name: "Samsung Galaxy A35 5G - 6.6\"",
// // //       fullName: "Samsung Galaxy A35 5G - 6.6\" - 128GB ROM - 6GB RAM - Dual SIM",
// // //       price: 39585,
// // //       displayPrice: "KES 39,585",
// // //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+A35", // Placeholder image
// // //       category: "phone"
// // //     },
// // //     {
// // //       id: 4,
// // //       name: "Samsung Galaxy S24 Ultra",
// // //       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
// // //       price: 134945,
// // //       displayPrice: "KES 134,945",
// // //       originalPrice: "KES 165,650",
// // //       discount: "19% Off",
// // //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+S24+Ultra", // Placeholder image
// // //       category: "phone"
// // //     },
// // //     {
// // //       id: 5,
// // //       name: "Samsung Galaxy S24 Ultra",
// // //       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
// // //       price: 134945,
// // //       displayPrice: "KES 134,945",
// // //       originalPrice: "KES 165,650",
// // //       discount: "19% Off",
// // //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+S24+Ultra", // Placeholder image
// // //       category: "phone"
// // //     },
// // //     {
// // //       id: 6,
// // //       name: "Samsung Galaxy Z Fold 6 - 7.6\"",
// // //       fullName: "Samsung Galaxy Z Fold 6 - 7.6\" - 12GB RAM - 512GB ROM",
// // //       price: 194979,
// // //       displayPrice: "KES 194,979",
// // //       originalPrice: "KES 253,344",
// // //       discount: "23% Off",
// // //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+Z+Fold+6", // Placeholder image
// // //       category: "phone"
// // //     }
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 font-sans">
// // //       {/* Checkout Modal */}
// // //       {showCheckout && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 overflow-y-auto">
// // //           <div className="bg-white rounded-lg w-full max-w-6xl my-4 min-h-[600px] shadow-lg">
// // //             {/* Header with Progress */}
// // //             <div className="p-4 sm:p-6 border-b border-gray-200">
// // //               <div className="flex justify-between items-center mb-6">
// // //                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Checkout (1 item)</h2>
// // //                 <button onClick={closeCheckout} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
// // //                   <X className="w-6 h-6 text-gray-600" />
// // //                 </button>
// // //               </div>
              
// // //               {/* Progress Steps */}
// // //               <div className="flex items-center justify-between mb-4 overflow-x-auto">
// // //                 {[1, 2, 3, 4].map((step) => (
// // //                   <div key={step} className="flex items-center min-w-0">
// // //                     <div 
// // //                       className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
// // //                       style={{
// // //                         backgroundColor: step <= checkoutStep ? '#2E1065' : '#D1D5DB',
// // //                         color: step <= checkoutStep ? 'white' : '#6B7280'
// // //                       }}
// // //                     >
// // //                       {step < checkoutStep ? <Check className="w-4 h-4" /> : step}
// // //                     </div>
// // //                     <span className="ml-2 text-xs sm:text-sm font-medium whitespace-nowrap text-gray-700">{getStepTitle(step)}</span>
// // //                     {step < 4 && (
// // //                       <div 
// // //                         className="w-4 sm:w-8 lg:w-16 h-0.5 ml-2 sm:ml-4 flex-shrink-0"
// // //                         style={{backgroundColor: step < checkoutStep ? '#2E1065' : '#D1D5DB'}}
// // //                       />
// // //                     )}
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Step Content */}
// // //             <div className="p-4 sm:p-6 min-h-[500px]">
// // //               {checkoutStep === 1 && (
// // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
// // //                   {/* Cart Items */}
// // //                   <div className="lg:col-span-2 space-y-6">
// // //                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// // //                       <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Items</h3>
// // //                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
// // //                         <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
// // //                           <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover"/>
// // //                         </div>
// // //                         <div className="flex-1 min-w-0">
// // //                           <h4 className="font-semibold text-gray-900">{selectedProduct?.name}</h4>
// // //                           <p className="text-sm text-gray-600">{selectedProduct?.fullName}</p>
// // //                           <p className="font-bold text-lg text-gray-900">{selectedProduct?.displayPrice}</p>
// // //                         </div>
// // //                         <div className="flex items-center gap-2 flex-shrink-0">
// // //                           <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
// // //                             <Minus className="w-4 h-4 text-gray-700" />
// // //                           </button>
// // //                           <span className="w-8 text-center font-medium text-gray-800">{quantity}</span>
// // //                           <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
// // //                             <Plus className="w-4 h-4 text-gray-700" />
// // //                           </button>
// // //                         </div>
// // //                         <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors flex-shrink-0">
// // //                           <Trash2 className="w-4 h-4" />
// // //                         </button>
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Order Summary */}
// // //                   <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// // //                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
// // //                     <div className="space-y-3">
// // //                       <div className="flex justify-between text-gray-700">
// // //                         <span>Subtotal:</span>
// // //                         <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // //                       </div>
// // //                       <div className="flex justify-between text-gray-700">
// // //                         <span>Shipping & Handling:</span>
// // //                         <span>KES 250</span>
// // //                       </div>
// // //                       <div className="border-t border-gray-200 pt-3">
// // //                         <div className="flex justify-between font-bold text-lg text-gray-900">
// // //                           <span>Grand Total</span>
// // //                           <span>KES {calculateTotal().toLocaleString()}</span>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                     <button 
// // //                       onClick={nextStep} 
// // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors shadow"
// // //                       style={{backgroundColor: '#2E1065'}}
// // //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // //                     >
// // //                       PROCEED TO CHECKOUT
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               {checkoutStep === 2 && (
// // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
// // //                   {/* Shipping Form */}
// // //                   <div className="lg:col-span-2 space-y-6">
// // //                     {/* Shipping Address */}
// // //                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// // //                       <div className="flex items-center gap-2 mb-4">
// // //                         <div 
// // //                           className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
// // //                           style={{backgroundColor: '#2E1065'}}
// // //                         >
// // //                           2
// // //                         </div>
// // //                         <h3 className="text-lg font-semibold text-gray-800">Shipping Address</h3>
// // //                       </div>
                      
// // //                       <div className="space-y-4">
// // //                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
// // //                           <div className="flex items-center gap-2 mb-3">
// // //                             <input type="radio" name="delivery" checked={deliveryOption === 'home'} onChange={() => setDeliveryOption('home')} className="form-radio text-indigo-600" />
// // //                             <label className="font-medium text-gray-800">Delivery to your home or office</label>
// // //                           </div>
// // //                           <p className="text-sm text-gray-600 mb-4">Fill in your Home or office address</p>
                          
// // //                           {deliveryOption === 'home' && (
// // //                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //                               <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-1">Firstname *</label>
// // //                                 <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
// // //                               </div>
// // //                               <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-1">Lastname *</label>
// // //                                 <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
// // //                               </div>
// // //                               <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
// // //                                 <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500">
// // //                                   <option>Nairobi</option>
// // //                                   <option>Mombasa</option>
// // //                                   <option>Kisumu</option>
// // //                                 </select>
// // //                               </div>
// // //                               <div>
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-1">Recipient Number *</label>
// // //                                 <input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
// // //                               </div>
// // //                               <div className="sm:col-span-2">
// // //                                 <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
// // //                                 <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
// // //                               </div>
// // //                             </div>
// // //                           )}
// // //                         </div>

// // //                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
// // //                           <div className="flex items-center gap-2 mb-3">
// // //                             <input type="radio" name="delivery" checked={deliveryOption === 'pickup'} onChange={() => setDeliveryOption('pickup')} className="form-radio text-indigo-600" />
// // //                             <label className="font-medium text-gray-800">Pickup Station</label>
// // //                           </div>
// // //                           <p className="text-sm text-gray-600">I would like to pick my order at the closest Masoko pick up point</p>
// // //                         </div>
// // //                       </div>
// // //                     </div>

// // //                     {/* Promotion Code */}
// // //                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// // //                       <h3 className="text-lg font-semibold text-gray-800 mb-4">Promotion Code (Optional)</h3>
// // //                       <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
// // //                         <h4 className="font-medium text-gray-800 mb-2">APPLY A PROMOTION CODE</h4>
// // //                         <p className="text-sm text-gray-600 mb-3">Do you have a promo code? <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">Check on promo or Log in</a></p>
// // //                         <input type="text" placeholder="Enter promotion code" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Order Summary (repeated for consistency with design, could be a component) */}
// // //                   <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// // //                     <div className="flex items-center gap-2 mb-4">
// // //                       <div 
// // //                         className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
// // //                         style={{backgroundColor: '#2E1065'}}
// // //                       >
// // //                         3
// // //                       </div>
// // //                       <h3 className="text-lg font-semibold text-gray-800">Order Summary</h3>
// // //                     </div>
                    
// // //                     <div className="space-y-4">
// // //                       <div>
// // //                         <h4 className="font-medium text-gray-800 mb-2">PRODUCT</h4>
// // //                         <div className="flex gap-3 items-center">
// // //                           <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
// // //                             <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover"/>
// // //                           </div>
// // //                           <div className="flex-1 min-w-0">
// // //                             <p className="font-medium text-sm text-gray-900">{selectedProduct?.name}</p>
// // //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// // //                             <p className="font-bold text-gray-900">{selectedProduct?.displayPrice}</p>
// // //                           </div>
// // //                         </div>
// // //                       </div>
                      
// // //                       <div className="space-y-2 text-gray-700">
// // //                         <div className="flex justify-between">
// // //                           <span>Shipping & Handling:</span>
// // //                           <span>KES 250</span>
// // //                         </div>
// // //                         <div className="flex justify-between">
// // //                           <span>Subtotal:</span>
// // //                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // //                         </div>
// // //                         <div className="border-t border-gray-200 pt-2">
// // //                           <div className="flex justify-between font-bold text-lg text-gray-900">
// // //                             <span>Grand Total</span>
// // //                             <span>KES {calculateTotal().toLocaleString()}</span>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
                    
// // //                     <button 
// // //                       onClick={nextStep} 
// // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors shadow"
// // //                       style={{backgroundColor: '#2E1065'}}
// // //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // //                     >
// // //                       CONTINUE TO PAYMENT
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               {checkoutStep === 3 && (
// // //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
// // //                   {/* Payment Methods */}
// // //                   <div className="lg:col-span-2 space-y-6">
// // //                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// // //                       <h3 className="text-lg font-semibold text-gray-800 mb-4">SELECT PAYMENT METHOD</h3>
// // //                       <p className="text-sm text-red-600 mb-4">Select preferred payment method for enhanced shopping experience.</p>
                      
// // //                       <div className="space-y-3">
// // //                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-center gap-3">
// // //                           <input type="radio" name="payment" value="mpesa" checked={selectedPayment === 'mpesa'} onChange={(e) => setSelectedPayment(e.target.value)} className="form-radio text-green-600" />
// // //                           <span className="font-medium text-gray-800">Lipa Na M-Pesa</span>
// // //                           <span className="text-green-600 font-bold ml-auto">m-pesa</span>
// // //                         </div>
                        
// // //                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-center gap-3">
// // //                           <input type="radio" name="payment" value="bonga" checked={selectedPayment === 'bonga'} onChange={(e) => setSelectedPayment(e.target.value)} className="form-radio text-orange-600" />
// // //                           <span className="font-medium text-gray-800">Lipa Na Bonga</span>
// // //                           <span className="text-orange-600 font-bold ml-auto">BONGA</span>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Order Summary (repeated) */}
// // //                   <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// // //                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
                    
// // //                     <div className="space-y-4">
// // //                       <div>
// // //                         <h4 className="font-medium text-gray-800 mb-2">PRODUCT</h4>
// // //                         <div className="flex gap-3 items-center">
// // //                           <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
// // //                             <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover"/>
// // //                           </div>
// // //                           <div className="flex-1 min-w-0">
// // //                             <p className="font-medium text-sm text-gray-900">{selectedProduct?.name}</p>
// // //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// // //                             <p className="font-bold text-gray-900">{selectedProduct?.displayPrice}</p>
// // //                           </div>
// // //                         </div>
// // //                       </div>
                      
// // //                       <div className="space-y-2 text-gray-700">
// // //                         <div className="flex justify-between">
// // //                           <span>Shipping & Handling:</span>
// // //                           <span>KES 250</span>
// // //                         </div>
// // //                         <div className="flex justify-between">
// // //                           <span>Subtotal:</span>
// // //                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// // //                         </div>
// // //                         <div className="border-t border-gray-200 pt-2">
// // //                           <div className="flex justify-between font-bold text-lg text-gray-900">
// // //                             <span>Grand Total</span>
// // //                             <span>KES {calculateTotal().toLocaleString()}</span>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
                    
// // //                     <button 
// // //                       onClick={nextStep} 
// // //                       disabled={!selectedPayment} 
// // //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 disabled:bg-gray-300 transition-colors shadow"
// // //                       style={{backgroundColor: selectedPayment ? '#2E1065' : '#D1D5DB'}}
// // //                       onMouseEnter={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D')}
// // //                       onMouseLeave={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#2E1065')}
// // //                     >
// // //                       COMPLETE PAYMENT
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               {checkoutStep === 4 && (
// // //                 <div className="text-center py-8 sm:py-12">
// // //                   <div 
// // //                     className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
// // //                     style={{backgroundColor: '#2E1065'}}
// // //                   >
// // //                     <Check className="w-8 h-8 text-white" />
// // //                   </div>
// // //                   <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
// // //                   <p className="text-lg text-gray-600 mb-8">Your order has been successfully placed.</p>
// // //                   <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto border border-gray-200">
// // //                     <h3 className="font-semibold text-gray-800 mb-4">Order Details</h3>
// // //                     <div className="text-left space-y-2 text-gray-700">
// // //                       <div className="flex justify-between">
// // //                         <span>Order Number:</span>
// // //                         <span className="font-bold">#MK{Date.now().toString().slice(-6)}</span>
// // //                       </div>
// // //                       <div className="flex justify-between">
// // //                         <span>Total Paid:</span>
// // //                         <span className="font-bold">KES {calculateTotal().toLocaleString()}</span>
// // //                       </div>
// // //                       <div className="flex justify-between">
// // //                         <span>Payment Method:</span>
// // //                         <span className="font-bold">{selectedPayment === 'mpesa' ? 'M-Pesa' : 'Bonga Points'}</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                   <button 
// // //                     onClick={closeCheckout} 
// // //                     className="text-white px-8 py-3 rounded-lg font-semibold mt-8 transition-colors shadow"
// // //                     style={{backgroundColor: '#2E1065'}}
// // //                     onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // //                     onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // //                   >
// // //                     Continue Shopping
// // //                   </button>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       <div className="container mx-auto px-4 py-6 max-w-7xl font-inter">
// // //         {/* Header/Hero Section with Deep Purple Theme */}
// // //         <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg mb-8 px-4 sm:px-6 py-6 sm:py-8" style={{background: 'linear-gradient(to right, #2E1065, #1E0A4D)'}}>
// // //           {/* Navigation Tabs */}
// // //           <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6">
// // //             <button className="text-white font-semibold border-b-2 border-white pb-1">
// // //               Products
// // //             </button>
// // //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// // //               Manufacturers
// // //             </button>
// // //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// // //               Regional supplies
// // //             </button>
// // //           </div>

// // //           {/* Search Section */}
// // //           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
// // //             <div className="relative flex-1 max-w-2xl">
// // //               <div className="relative w-full">
// // //                 <input
// // //                   type="text"
// // //                   className="w-full px-6 py-3 rounded-full text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/30"
// // //                   style={{ caretColor: 'transparent' }}
// // //                   readOnly
// // //                 />
// // //                 <div className="absolute left-6 top-1/2 -translate-y-1/2 overflow-hidden h-6">
// // //                   <div 
// // //                     className="transition-transform duration-500 ease-in-out"
// // //                     style={{ 
// // //                       transform: `translateY(-${currentSearchIndex * 24}px)` 
// // //                     }}
// // //                   >
// // //                     {searchTexts.map((text, index) => (
// // //                       <div key={index} className="h-6 flex items-center text-gray-800">
// // //                         {text}
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <div className="flex gap-2 sm:gap-4">
// // //               <button className="px-4 sm:px-8 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2">
// // //                 <span>🔍</span> <span className="hidden sm:inline">Search</span>
// // //               </button>
// // //               <button className="px-4 sm:px-6 py-3 bg-white rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2" style={{color: '#2E1065'}}>
// // //                 <span>📷</span> <span className="hidden sm:inline">Image Search</span>
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {/* Frequently Searched */}
// // //           <div className="text-center">
// // //             <span className="text-white/90 text-sm">Frequently searched: </span>
// // //             <div className="inline-flex flex-wrap gap-2 mt-1">
// // //               {['drone 4K', 'iphones 11', 'samsung mobile phone', 'i phone', 'camera', 'nikon camera'].map((term, index) => (
// // //                 <button key={index} className="text-white/90 text-sm hover:text-white transition-colors hover:underline">
// // //                   {term}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Mobile Filter Toggle */}
// // //         <button 
// // //           onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
// // //           className="lg:hidden w-full mb-4 bg-white rounded-lg shadow-sm p-4 flex items-center justify-between border border-gray-200"
// // //         >
// // //           <div className="flex items-center gap-2">
// // //             <Filter className="w-4 h-4 text-green-600" /> {/* Changed color to green as per image */}
// // //             <span className="text-base font-semibold text-gray-800">Filter</span>
// // //           </div>
// // //           <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${mobileFilterOpen ? 'rotate-180' : ''}`} />
// // //         </button>

// // //         {/* Main Layout - Filter and Products Side by Side */}
// // //         <div className="flex flex-col lg:flex-row gap-6">
// // //           {/* Filter Sidebar - Always visible on desktop, collapsible on mobile */}
// // //           <aside className={`${mobileFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 bg-white rounded-lg shadow-sm p-4 h-fit flex-shrink-0 border border-gray-200`}>
// // //             <div className="flex items-center gap-2 mb-4">
// // //               <Filter className="w-4 h-4 text-green-600" /> {/* Changed color to green as per image */}
// // //               <span className="text-base font-semibold text-gray-800">Filter</span>
// // //             </div>

// // //             <div className="space-y-1">
// // //               {/* Price Filter */}
// // //               <div className="border-b border-gray-100 pb-3 mb-3">
// // //                 <button
// // //                   onClick={() => toggleFilter('price')}
// // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
// // //                 >
// // //                   <span className="text-gray-800 font-medium text-sm">Price</span>
// // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.price ? 'rotate-180' : ''}`} />
// // //                 </button>
// // //               </div>

// // //               {/* Storage Capacity Filter */}
// // //               <div className="border-b border-gray-100 pb-3 mb-3">
// // //                 <button
// // //                   onClick={() => toggleFilter('storage')}
// // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
// // //                 >
// // //                   <span className="text-gray-800 font-medium text-sm">Storage Capacity</span>
// // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.storage ? 'rotate-180' : ''}`} />
// // //                 </button>
// // //               </div>

// // //               {/* Camera Megapixel Filter */}
// // //               <div className="border-b border-gray-100 pb-3 mb-3">
// // //                 <button
// // //                   onClick={() => toggleFilter('camera')}
// // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
// // //                 >
// // //                   <span className="text-gray-800 font-medium text-sm">Camera Megapixel</span>
// // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.camera ? 'rotate-180' : ''}`} />
// // //                 </button>
// // //               </div>

// // //               {/* Display Size Filter */}
// // //               <div className="border-b border-gray-100 pb-3 mb-3">
// // //                 <button
// // //                   onClick={() => toggleFilter('display')}
// // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
// // //                 >
// // //                   <span className="text-gray-800 font-medium text-sm">Display Size</span>
// // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.display ? 'rotate-180' : ''}`} />
// // //                 </button>
// // //               </div>

// // //               {/* Brand Filter */}
// // //               <div className="pb-3">
// // //                 <button
// // //                   onClick={() => toggleFilter('brand')}
// // //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
// // //                 >
// // //                   <span className="text-gray-800 font-medium text-sm">Brand</span>
// // //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.brand ? 'rotate-180' : ''}`} />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </aside>

// // //           {/* Products Area - Right side, next to filter */}
// // //           <main className="flex-1 min-w-0">
// // //             {/* Results Header aligned with the design, showing total results */}
// // //             <div className="mb-6">
// // //               <div className="flex justify-between items-center bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200">
// // //                 {/* Changed to "45 Results Found" as per the image */}
// // //                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900">45 Results Found</h2> 
// // //                 <div className="flex items-center gap-2">
// // //                   <span className="text-gray-700 text-sm hidden sm:inline">Sort by:</span>
// // //                   <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-indigo-500 focus:border-indigo-500">
// // //                     <option>Relevance</option>
// // //                     <option>Price: Low to High</option>
// // //                     <option>Price: High to Low</option>
// // //                     <option>Newest Arrivals</option>
// // //                   </select>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Product Grid */}
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
// // //               {products.map((product) => (
// // //                 <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col border border-gray-200 hover:shadow-md transition-shadow">
// // //                   {product.discount && (
// // //                     <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
// // //                       {product.discount}
// // //                     </span>
// // //                   )}
// // //                   <div className="relative w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-lg">
// // //                     <img src={product.image} alt={product.name} className="object-cover w-full h-full" onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = `https://placehold.co/300x300/E0E0E0/5B3A8E?text=${product.name.replace(/[^a-zA-Z0-9 ]/g, '').split(' ')[0]}`; }}/>
// // //                     <button 
// // //                       className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
// // //                       aria-label="Add to cart"
// // //                     >
// // //                       <ShoppingCart className="w-5 h-5 text-gray-700" />
// // //                     </button>
// // //                   </div>
// // //                   <div className="p-4 flex flex-col flex-grow">
// // //                     <h3 className="font-semibold text-base text-gray-900 mb-1 leading-tight">{product.name}</h3>
// // //                     {product.fullName && <p className="text-gray-600 text-sm mb-2 h-10 overflow-hidden">{product.fullName}</p>}
// // //                     <div className="flex items-center gap-2 mb-2 mt-auto">
// // //                       <span className="font-bold text-xl" style={{color: '#2E1065'}}>{product.displayPrice}</span>
// // //                       {product.originalPrice && (
// // //                         <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
// // //                       )}
// // //                     </div>
// // //                     <button 
// // //                       onClick={() => handleBuyNow(product)}
// // //                       className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors mt-2"
// // //                       style={{backgroundColor: '#2E1065'}}
// // //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// // //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// // //                     >
// // //                       Buy Now
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* Pagination (Placeholder) */}
// // //             <div className="flex justify-center mt-8">
// // //               <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
// // //                 Show More
// // //               </button>
// // //             </div>
// // //           </main>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductListing;



// // 'use client';

// // import React, { useState, useEffect } from 'react';
// // import { ChevronDown, Filter, ShoppingCart, Check, X, Trash2, Plus, Minus, Menu } from 'lucide-react';

// // // Define the Product interface to ensure type safety for product objects
// // interface Product {
// //   id: number;
// //   name: string;
// //   fullName?: string; // Optional full name for product
// //   price: number;
// //   displayPrice: string; // Formatted price for display
// //   originalPrice?: string; // Optional original price for showing discounts
// //   discount?: string; // Optional discount text
// //   image: string; // URL or path to the product image
// //   category: string;
// // }

// // // Main ProductListing functional component
// // const ProductListing = () => {
// //   // State for managing filter visibility
// //   const [filters, setFilters] = useState({
// //     price: false,
// //     storage: false,
// //     camera: false,
// //     display: false,
// //     brand: false
// //   });

// //   // State for checkout modal visibility and step management
// //   const [showCheckout, setShowCheckout] = useState(false);
// //   const [checkoutStep, setCheckoutStep] = useState(1);
// //   // State for the product currently selected for purchase
// //   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
// //   // State for the quantity of the selected product
// //   const [quantity, setQuantity] = useState(1);
// //   // State for selected payment method
// //   const [selectedPayment, setSelectedPayment] = useState('');
// //   // State for delivery option (home or pickup)
// //   const [deliveryOption, setDeliveryOption] = useState('home');
// //   // State for controlling the auto-scrolling search text in the header
// //   const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
// //   // State for mobile filter sidebar visibility
// //   const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  
// //   // Array of search texts for auto-scrolling animation
// //   const searchTexts = [
// //     "iphones 11",
// //     "iphones 15 pro max",
// //     "nikon camera",
// //     "samsung galaxy s24",
// //     "macbook pro",
// //     "drone 4k",
// //     "apple watch",
// //     "samsung mobile phone"
// //   ];

// //   // Effect hook to handle auto-scrolling search text
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSearchIndex((prev) => (prev + 1) % searchTexts.length);
// //     }, 2000); // Change text every 2 seconds
    
// //     // Cleanup function to clear the interval on component unmount
// //     return () => clearInterval(interval);
// //   }, []);

// //   // Handler for "Buy Now" button click
// //   const handleBuyNow = (product: Product) => {
// //     setSelectedProduct(product); // Set the product to be purchased
// //     setShowCheckout(true); // Open the checkout modal
// //     setCheckoutStep(1); // Reset to the first step of checkout
// //   };

// //   // Function to advance to the next step in the checkout process
// //   const nextStep = () => {
// //     if (checkoutStep < 4) { // Max 4 steps
// //       setCheckoutStep(checkoutStep + 1);
// //     }
// //   };

// //   // Function to close the checkout modal and reset related states
// //   const closeCheckout = () => {
// //     setShowCheckout(false);
// //     setCheckoutStep(1);
// //     setSelectedProduct(null);
// //     setQuantity(1);
// //     setSelectedPayment('');
// //   };

// //   // Helper function to get the title for each checkout step
// //   const getStepTitle = (step: number) => {
// //     switch(step) {
// //       case 1: return 'Cart';
// //       case 2: return 'Shipping';
// //       case 3: return 'Payment';
// //       case 4: return 'Thank You';
// //       default: return '';
// //     }
// //   };

// //   // Function to calculate the total price including shipping
// //   const calculateTotal = () => {
// //     if (!selectedProduct) return 0;
// //     const subtotal = selectedProduct.price * quantity;
// //     const shipping = 250; // Fixed shipping cost
// //     return subtotal + shipping;
// //   };

// //   // Function to toggle the visibility of filter sections
// //   const toggleFilter = (filterName: string) => {
// //     setFilters(prev => ({
// //       ...prev,
// //       [filterName]: !prev[filterName] // Toggle the boolean value for the given filter
// //     }));
// //   };

// //   // Static list of products to display
// //   const products: Product[] = [
// //     {
// //       id: 1,
// //       name: "Freestyle -",
// //       price: 167995,
// //       displayPrice: "KES 167,995",
// //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Projector", // Placeholder image
// //       category: "projector"
// //     },
// //     {
// //       id: 2,
// //       name: "Samsung Galaxy A15 - 6.5\"",
// //       fullName: "Samsung Galaxy A15 - 6.5\" - 128GB ROM - 4GB RAM - Dual SIM - 4G",
// //       price: 29499,
// //       displayPrice: "KES 29,499",
// //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+A15", // Placeholder image
// //       category: "phone"
// //     },
// //     {
// //       id: 3,
// //       name: "Samsung Galaxy A35 5G - 6.6\"",
// //       fullName: "Samsung Galaxy A35 5G - 6.6\" - 128GB ROM - 6GB RAM - Dual SIM",
// //       price: 39585,
// //       displayPrice: "KES 39,585",
// //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+A35", // Placeholder image
// //       category: "phone"
// //     },
// //     {
// //       id: 4,
// //       name: "Samsung Galaxy S24 Ultra",
// //       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
// //       price: 134945,
// //       displayPrice: "KES 134,945",
// //       originalPrice: "KES 165,650",
// //       discount: "19% Off",
// //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+S24+Ultra", // Placeholder image
// //       category: "phone"
// //     },
// //     {
// //       id: 5,
// //       name: "Samsung Galaxy S24 Ultra",
// //       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
// //       price: 134945,
// //       displayPrice: "KES 134,945",
// //       originalPrice: "KES 165,650",
// //       discount: "19% Off",
// //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+S24+Ultra", // Placeholder image
// //       category: "phone"
// //     },
// //     {
// //       id: 6,
// //       name: "Samsung Galaxy Z Fold 6 - 7.6\"",
// //       fullName: "Samsung Galaxy Z Fold 6 - 7.6\" - 12GB RAM - 512GB ROM",
// //       price: 194979,
// //       displayPrice: "KES 194,979",
// //       originalPrice: "KES 253,344",
// //       discount: "23% Off",
// //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+Z+Fold+6", // Placeholder image
// //       category: "phone"
// //     }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gray-50 font-sans">
// //       {/* Checkout Modal */}
// //       {showCheckout && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 overflow-y-auto">
// //           <div className="bg-white rounded-lg w-full max-w-6xl my-4 min-h-[600px] shadow-lg">
// //             {/* Header with Progress */}
// //             <div className="p-4 sm:p-6 border-b border-gray-200">
// //               <div className="flex justify-between items-center mb-6">
// //                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Checkout (1 item)</h2>
// //                 <button onClick={closeCheckout} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
// //                   <X className="w-6 h-6 text-gray-600" />
// //                 </button>
// //               </div>
              
// //               {/* Progress Steps */}
// //               <div className="flex items-center justify-between mb-4 overflow-x-auto">
// //                 {[1, 2, 3, 4].map((step) => (
// //                   <div key={step} className="flex items-center min-w-0">
// //                     <div 
// //                       className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
// //                       style={{
// //                         backgroundColor: step <= checkoutStep ? '#2E1065' : '#D1D5DB',
// //                         color: step <= checkoutStep ? 'white' : '#6B7280'
// //                       }}
// //                     >
// //                       {step < checkoutStep ? <Check className="w-4 h-4" /> : step}
// //                     </div>
// //                     <span className="ml-2 text-xs sm:text-sm font-medium whitespace-nowrap text-gray-700">{getStepTitle(step)}</span>
// //                     {step < 4 && (
// //                       <div 
// //                         className="w-4 sm:w-8 lg:w-16 h-0.5 ml-2 sm:ml-4 flex-shrink-0"
// //                         style={{backgroundColor: step < checkoutStep ? '#2E1065' : '#D1D5DB'}}
// //                       />
// //                     )}
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Step Content */}
// //             <div className="p-4 sm:p-6 min-h-[500px]">
// //               {checkoutStep === 1 && (
// //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
// //                   {/* Cart Items */}
// //                   <div className="lg:col-span-2 space-y-6">
// //                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// //                       <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Items</h3>
// //                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
// //                         <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
// //                           <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover"/>
// //                         </div>
// //                         <div className="flex-1 min-w-0">
// //                           <h4 className="font-semibold text-gray-900">{selectedProduct?.name}</h4>
// //                           <p className="text-sm text-gray-600">{selectedProduct?.fullName}</p>
// //                           <p className="font-bold text-lg text-gray-900">{selectedProduct?.displayPrice}</p>
// //                         </div>
// //                         <div className="flex items-center gap-2 flex-shrink-0">
// //                           <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
// //                             <Minus className="w-4 h-4 text-gray-700" />
// //                           </button>
// //                           <span className="w-8 text-center font-medium text-gray-800">{quantity}</span>
// //                           <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
// //                             <Plus className="w-4 h-4 text-gray-700" />
// //                           </button>
// //                         </div>
// //                         <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors flex-shrink-0">
// //                           <Trash2 className="w-4 h-4" />
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Order Summary */}
// //                   <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// //                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
// //                     <div className="space-y-3">
// //                       <div className="flex justify-between text-gray-700">
// //                         <span>Subtotal:</span>
// //                         <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// //                       </div>
// //                       <div className="flex justify-between text-gray-700">
// //                         <span>Shipping & Handling:</span>
// //                         <span>KES 250</span>
// //                       </div>
// //                       <div className="border-t border-gray-200 pt-3">
// //                         <div className="flex justify-between font-bold text-lg text-gray-900">
// //                           <span>Grand Total</span>
// //                           <span>KES {calculateTotal().toLocaleString()}</span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <button 
// //                       onClick={nextStep} 
// //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors shadow"
// //                       style={{backgroundColor: '#2E1065'}}
// //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// //                     >
// //                       PROCEED TO CHECKOUT
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}

// //               {checkoutStep === 2 && (
// //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
// //                   {/* Shipping Form */}
// //                   <div className="lg:col-span-2 space-y-6">
// //                     {/* Shipping Address */}
// //                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// //                       <div className="flex items-center gap-2 mb-4">
// //                         <div 
// //                           className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
// //                           style={{backgroundColor: '#2E1065'}}
// //                         >
// //                           2
// //                         </div>
// //                         <h3 className="text-lg font-semibold text-gray-800">Shipping Address</h3>
// //                       </div>
                      
// //                       <div className="space-y-4">
// //                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
// //                           <div className="flex items-center gap-2 mb-3">
// //                             <input type="radio" name="delivery" checked={deliveryOption === 'home'} onChange={() => setDeliveryOption('home')} className="form-radio text-indigo-600" />
// //                             <label className="font-medium text-gray-800">Delivery to your home or office</label>
// //                           </div>
// //                           <p className="text-sm text-gray-600 mb-4">Fill in your Home or office address</p>
                          
// //                           {deliveryOption === 'home' && (
// //                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                               <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-1">Firstname *</label>
// //                                 <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
// //                               </div>
// //                               <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-1">Lastname *</label>
// //                                 <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
// //                               </div>
// //                               <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
// //                                 <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500">
// //                                   <option>Nairobi</option>
// //                                   <option>Mombasa</option>
// //                                   <option>Kisumu</option>
// //                                 </select>
// //                               </div>
// //                               <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-1">Recipient Number *</label>
// //                                 <input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
// //                               </div>
// //                               <div className="sm:col-span-2">
// //                                 <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
// //                                 <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
// //                               </div>
// //                             </div>
// //                           )}
// //                         </div>

// //                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
// //                           <div className="flex items-center gap-2 mb-3">
// //                             <input type="radio" name="delivery" checked={deliveryOption === 'pickup'} onChange={() => setDeliveryOption('pickup')} className="form-radio text-indigo-600" />
// //                             <label className="font-medium text-gray-800">Pickup Station</label>
// //                           </div>
// //                           <p className="text-sm text-gray-600">I would like to pick my order at the closest Masoko pick up point</p>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* Promotion Code */}
// //                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// //                       <h3 className="text-lg font-semibold text-gray-800 mb-4">Promotion Code (Optional)</h3>
// //                       <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
// //                         <h4 className="font-medium text-gray-800 mb-2">APPLY A PROMOTION CODE</h4>
// //                         <p className="text-sm text-gray-600 mb-3">Do you have a promo code? <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">Check on promo or Log in</a></p>
// //                         <input type="text" placeholder="Enter promotion code" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Order Summary (repeated for consistency with design, could be a component) */}
// //                   <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// //                     <div className="flex items-center gap-2 mb-4">
// //                       <div 
// //                         className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
// //                         style={{backgroundColor: '#2E1065'}}
// //                       >
// //                         3
// //                       </div>
// //                       <h3 className="text-lg font-semibold text-gray-800">Order Summary</h3>
// //                     </div>
                    
// //                     <div className="space-y-4">
// //                       <div>
// //                         <h4 className="font-medium text-gray-800 mb-2">PRODUCT</h4>
// //                         <div className="flex gap-3 items-center">
// //                           <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
// //                             <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover"/>
// //                           </div>
// //                           <div className="flex-1 min-w-0">
// //                             <p className="font-medium text-sm text-gray-900">{selectedProduct?.name}</p>
// //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// //                             <p className="font-bold text-gray-900">{selectedProduct?.displayPrice}</p>
// //                           </div>
// //                         </div>
// //                       </div>
                      
// //                       <div className="space-y-2 text-gray-700">
// //                         <div className="flex justify-between">
// //                           <span>Shipping & Handling:</span>
// //                           <span>KES 250</span>
// //                         </div>
// //                         <div className="flex justify-between">
// //                           <span>Subtotal:</span>
// //                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// //                         </div>
// //                         <div className="border-t border-gray-200 pt-2">
// //                           <div className="flex justify-between font-bold text-lg text-gray-900">
// //                             <span>Grand Total</span>
// //                             <span>KES {calculateTotal().toLocaleString()}</span>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
                    
// //                     <button 
// //                       onClick={nextStep} 
// //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors shadow"
// //                       style={{backgroundColor: '#2E1065'}}
// //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// //                     >
// //                       CONTINUE TO PAYMENT
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}

// //               {checkoutStep === 3 && (
// //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
// //                   {/* Payment Methods */}
// //                   <div className="lg:col-span-2 space-y-6">
// //                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// //                       <h3 className="text-lg font-semibold text-gray-800 mb-4">SELECT PAYMENT METHOD</h3>
// //                       <p className="text-sm text-red-600 mb-4">Select preferred payment method for enhanced shopping experience.</p>
                      
// //                       <div className="space-y-3">
// //                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-center gap-3">
// //                           <input type="radio" name="payment" value="mpesa" checked={selectedPayment === 'mpesa'} onChange={(e) => setSelectedPayment(e.target.value)} className="form-radio text-green-600" />
// //                           <span className="font-medium text-gray-800">Lipa Na M-Pesa</span>
// //                           <span className="text-green-600 font-bold ml-auto">m-pesa</span>
// //                         </div>
                        
// //                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-center gap-3">
// //                           <input type="radio" name="payment" value="bonga" checked={selectedPayment === 'bonga'} onChange={(e) => setSelectedPayment(e.target.value)} className="form-radio text-orange-600" />
// //                           <span className="font-medium text-gray-800">Lipa Na Bonga</span>
// //                           <span className="text-orange-600 font-bold ml-auto">BONGA</span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Order Summary (repeated) */}
// //                   <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// //                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
                    
// //                     <div className="space-y-4">
// //                       <div>
// //                         <h4 className="font-medium text-gray-800 mb-2">PRODUCT</h4>
// //                         <div className="flex gap-3 items-center">
// //                           <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
// //                             <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover"/>
// //                           </div>
// //                           <div className="flex-1 min-w-0">
// //                             <p className="font-medium text-sm text-gray-900">{selectedProduct?.name}</p>
// //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// //                             <p className="font-bold text-gray-900">{selectedProduct?.displayPrice}</p>
// //                           </div>
// //                         </div>
// //                       </div>
                      
// //                       <div className="space-y-2 text-gray-700">
// //                         <div className="flex justify-between">
// //                           <span>Shipping & Handling:</span>
// //                           <span>KES 250</span>
// //                         </div>
// //                         <div className="flex justify-between">
// //                           <span>Subtotal:</span>
// //                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// //                         </div>
// //                         <div className="border-t border-gray-200 pt-2">
// //                           <div className="flex justify-between font-bold text-lg text-gray-900">
// //                             <span>Grand Total</span>
// //                             <span>KES {calculateTotal().toLocaleString()}</span>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
                    
// //                     <button 
// //                       onClick={nextStep} 
// //                       disabled={!selectedPayment} 
// //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 disabled:bg-gray-300 transition-colors shadow"
// //                       style={{backgroundColor: selectedPayment ? '#2E1065' : '#D1D5DB'}}
// //                       onMouseEnter={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D')}
// //                       onMouseLeave={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#2E1065')}
// //                     >
// //                       COMPLETE PAYMENT
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}

// //               {checkoutStep === 4 && (
// //                 <div className="text-center py-8 sm:py-12">
// //                   <div 
// //                     className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
// //                     style={{backgroundColor: '#2E1065'}}
// //                   >
// //                     <Check className="w-8 h-8 text-white" />
// //                   </div>
// //                   <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
// //                   <p className="text-lg text-gray-600 mb-8">Your order has been successfully placed.</p>
// //                   <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto border border-gray-200">
// //                     <h3 className="font-semibold text-gray-800 mb-4">Order Details</h3>
// //                     <div className="text-left space-y-2 text-gray-700">
// //                       <div className="flex justify-between">
// //                         <span>Order Number:</span>
// //                         <span className="font-bold">#MK{Date.now().toString().slice(-6)}</span>
// //                       </div>
// //                       <div className="flex justify-between">
// //                         <span>Total Paid:</span>
// //                         <span className="font-bold">KES {calculateTotal().toLocaleString()}</span>
// //                       </div>
// //                       <div className="flex justify-between">
// //                         <span>Payment Method:</span>
// //                         <span className="font-bold">{selectedPayment === 'mpesa' ? 'M-Pesa' : 'Bonga Points'}</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <button 
// //                     onClick={closeCheckout} 
// //                     className="text-white px-8 py-3 rounded-lg font-semibold mt-8 transition-colors shadow"
// //                     style={{backgroundColor: '#2E1065'}}
// //                     onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// //                     onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// //                   >
// //                     Continue Shopping
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <div className="container mx-auto px-4 py-6 max-w-7xl font-inter">
// //         {/* Header/Hero Section with Deep Purple Theme */}
// //         <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg mb-8 px-4 sm:px-6 py-6 sm:py-8" style={{background: 'linear-gradient(to right, #2E1065, #1E0A4D)'}}>
// //           {/* Navigation Tabs */}
// //           <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6">
// //             <button className="text-white font-semibold border-b-2 border-white pb-1">
// //               Products
// //             </button>
// //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// //               Manufacturers
// //             </button>
// //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// //               Regional supplies
// //             </button>
// //           </div>

// //           {/* Search Section */}
// //           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
// //             <div className="relative flex-1 max-w-2xl">
// //               <div className="relative w-full">
// //                 <input
// //                   type="text"
// //                   className="w-full px-6 py-3 rounded-full text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/30"
// //                   style={{ caretColor: 'transparent' }}
// //                   readOnly
// //                 />
// //                 <div className="absolute left-6 top-1/2 -translate-y-1/2 overflow-hidden h-6">
// //                   <div 
// //                     className="transition-transform duration-500 ease-in-out"
// //                     style={{ 
// //                       transform: `translateY(-${currentSearchIndex * 24}px)` 
// //                     }}
// //                   >
// //                     {searchTexts.map((text, index) => (
// //                       <div key={index} className="h-6 flex items-center text-gray-800">
// //                         {text}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="flex gap-2 sm:gap-4">
// //               <button className="px-4 sm:px-8 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2">
// //                 <span>🔍</span> <span className="hidden sm:inline">Search</span>
// //               </button>
// //               <button className="px-4 sm:px-6 py-3 bg-white rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2" style={{color: '#2E1065'}}>
// //                 <span>📷</span> <span className="hidden sm:inline">Image Search</span>
// //               </button>
// //             </div>
// //           </div>

// //           {/* Frequently Searched */}
// //           <div className="text-center">
// //             <span className="text-white/90 text-sm">Frequently searched: </span>
// //             <div className="inline-flex flex-wrap gap-2 mt-1">
// //               {['drone 4K', 'iphones 11', 'samsung mobile phone', 'i phone', 'camera', 'nikon camera'].map((term, index) => (
// //                 <button key={index} className="text-white/90 text-sm hover:text-white transition-colors hover:underline">
// //                   {term}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Mobile Filter Toggle */}
// //         <button 
// //           onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
// //           className="lg:hidden w-full mb-4 bg-white rounded-lg shadow-sm p-4 flex items-center justify-between border border-gray-200"
// //         >
// //           <div className="flex items-center gap-2">
// //             <Filter className="w-4 h-4 text-green-600" /> {/* Changed color to green as per image */}
// //             <span className="text-base font-semibold text-gray-800">Filter</span>
// //           </div>
// //           <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${mobileFilterOpen ? 'rotate-180' : ''}`} />
// //         </button>

// //         {/* Main Layout - Filter and Products Side by Side */}
// //         <div className="flex flex-col lg:flex-row gap-6">
// //           {/* Filter Sidebar - Always visible on desktop, collapsible on mobile */}
// //           <aside className={`${mobileFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 bg-white rounded-lg shadow-sm p-4 h-fit flex-shrink-0 border border-gray-200`}>
// //             {/* The filter header should be within the sidebar, not a separate button */}
// //             <div className="flex items-center gap-2 mb-4">
// //               <Filter className="w-4 h-4 text-green-600" /> {/* Retained this filter icon and text */}
// //               <span className="text-base font-semibold text-gray-800">Filter</span>
// //             </div>

// //             <div className="space-y-1">
// //               {/* Price Filter */}
// //               <div className="border-b border-gray-100 pb-3 mb-3">
// //                 <button
// //                   onClick={() => toggleFilter('price')}
// //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
// //                 >
// //                   <span className="text-gray-800 font-medium text-sm">Price</span>
// //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.price ? 'rotate-180' : ''}`} />
// //                 </button>
// //               </div>

// //               {/* Storage Capacity Filter */}
// //               <div className="border-b border-gray-100 pb-3 mb-3">
// //                 <button
// //                   onClick={() => toggleFilter('storage')}
// //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
// //                 >
// //                   <span className="text-gray-800 font-medium text-sm">Storage Capacity</span>
// //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.storage ? 'rotate-180' : ''}`} />
// //                 </button>
// //               </div>

// //               {/* Camera Megapixel Filter */}
// //               <div className="border-b border-gray-100 pb-3 mb-3">
// //                 <button
// //                   onClick={() => toggleFilter('camera')}
// //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
// //                 >
// //                   <span className="text-gray-800 font-medium text-sm">Camera Megapixel</span>
// //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.camera ? 'rotate-180' : ''}`} />
// //                 </button>
// //               </div>

// //               {/* Display Size Filter */}
// //               <div className="border-b border-gray-100 pb-3 mb-3">
// //                 <button
// //                   onClick={() => toggleFilter('display')}
// //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
// //                 >
// //                   <span className="text-gray-800 font-medium text-sm">Display Size</span>
// //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.display ? 'rotate-180' : ''}`} />
// //                 </button>
// //               </div>

// //               {/* Brand Filter */}
// //               <div className="pb-3">
// //                 <button
// //                   onClick={() => toggleFilter('brand')}
// //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
// //                 >
// //                   <span className="text-gray-800 font-medium text-sm">Brand</span>
// //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.brand ? 'rotate-180' : ''}`} />
// //                 </button>
// //               </div>
// //             </div>
// //           </aside>

// //           {/* Products Area - Right side, next to filter */}
// //           <main className="flex-1 min-w-0">
// //             {/* Results Header aligned with the design, showing total results */}
// //             <div className="mb-6">
// //               <div className="flex justify-between items-center bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200">
// //                 {/* Changed to "45 Results Found" as per the image */}
// //                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900">45 Results Found</h2> 
// //                 <div className="flex items-center gap-2">
// //                   <span className="text-gray-700 text-sm hidden sm:inline">Sort by:</span>
// //                   <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-indigo-500 focus:border-indigo-500">
// //                     <option>Relevance</option>
// //                     <option>Price: Low to High</option>
// //                     <option>Price: High to Low</option>
// //                     <option>Newest Arrivals</option>
// //                   </select>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Product Grid */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
// //               {products.map((product) => (
// //                 <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col border border-gray-200 hover:shadow-md transition-shadow">
// //                   {product.discount && (
// //                     <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
// //                       {product.discount}
// //                     </span>
// //                   )}
// //                   <div className="relative w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-lg">
// //                     <img src={product.image} alt={product.name} className="object-cover w-full h-full" onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = `https://placehold.co/300x300/E0E0E0/5B3A8E?text=${product.name.replace(/[^a-zA-Z0-9 ]/g, '').split(' ')[0]}`; }}/>
// //                     <button 
// //                       className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
// //                       aria-label="Add to cart"
// //                     >
// //                       <ShoppingCart className="w-5 h-5 text-gray-700" />
// //                     </button>
// //                   </div>
// //                   <div className="p-4 flex flex-col flex-grow">
// //                     <h3 className="font-semibold text-base text-gray-900 mb-1 leading-tight">{product.name}</h3>
// //                     {product.fullName && <p className="text-gray-600 text-sm mb-2 h-10 overflow-hidden">{product.fullName}</p>}
// //                     <div className="flex items-center gap-2 mb-2 mt-auto">
// //                       <span className="font-bold text-xl" style={{color: '#2E1065'}}>{product.displayPrice}</span>
// //                       {product.originalPrice && (
// //                         <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
// //                       )}
// //                     </div>
// //                     <button 
// //                       onClick={() => handleBuyNow(product)}
// //                       className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors mt-2"
// //                       style={{backgroundColor: '#2E1065'}}
// //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// //                     >
// //                       Buy Now
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Pagination (Placeholder) */}
// //             <div className="flex justify-center mt-8">
// //               <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
// //                 Show More
// //               </button>
// //             </div>
// //           </main>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductListing;




// // 'use client';

// // import React, { useState, useEffect } from 'react';
// // import { ChevronDown, Filter, ShoppingCart, Check, X, Trash2, Plus, Minus, Menu } from 'lucide-react';

// // // Define the Product interface to ensure type safety for product objects
// // interface Product {
// //   id: number;
// //   name: string;
// //   fullName?: string; // Optional full name for product
// //   price: number;
// //   displayPrice: string; // Formatted price for display
// //   originalPrice?: string; // Optional original price for showing discounts
// //   discount?: string; // Optional discount text
// //   image: string; // URL or path to the product image
// //   category: string;
// // }

// // // Main ProductListing functional component
// // const ProductListing = () => {
// //   // State for managing filter visibility - now only relevant for internal filter sections, not the sidebar itself
// //   const [filters, setFilters] = useState({
// //     price: false,
// //     storage: false,
// //     camera: false,
// //     display: false,
// //     brand: false
// //   });

// //   // State for checkout modal visibility and step management
// //   const [showCheckout, setShowCheckout] = useState(false);
// //   const [checkoutStep, setCheckoutStep] = useState(1);
// //   // State for the product currently selected for purchase
// //   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
// //   // State for the quantity of the selected product
// //   const [quantity, setQuantity] = useState(1);
// //   // State for selected payment method
// //   const [selectedPayment, setSelectedPayment] = useState('');
// //   // State for delivery option (home or pickup)
// //   const [deliveryOption, setDeliveryOption] = useState('home');
// //   // State for controlling the auto-scrolling search text in the header
// //   const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
// //   // State for mobile filter sidebar visibility
// //   const [mobileFilterOpen, setMobileFilterOpen] = useState(false); 

// //   // Array of search texts for auto-scrolling animation
// //   const searchTexts = [
// //     "iphones 11",
// //     "iphones 15 pro max",
// //     "nikon camera",
// //     "samsung galaxy s24",
// //     "macbook pro",
// //     "drone 4k",
// //     "apple watch",
// //     "samsung mobile phone"
// //   ];

// //   // Effect hook to handle auto-scrolling search text
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentSearchIndex((prev) => (prev + 1) % searchTexts.length);
// //     }, 2000); // Change text every 2 seconds
    
// //     // Cleanup function to clear the interval on component unmount
// //     return () => clearInterval(interval);
// //   }, []);

// //   // Handler for "Buy Now" button click
// //   const handleBuyNow = (product: Product) => {
// //     setSelectedProduct(product); // Set the product to be purchased
// //     setShowCheckout(true); // Open the checkout modal
// //     setCheckoutStep(1); // Reset to the first step of checkout
// //   };

// //   // Function to advance to the next step in the checkout process
// //   const nextStep = () => {
// //     if (checkoutStep < 4) { // Max 4 steps
// //       setCheckoutStep(checkoutStep + 1);
// //     }
// //   };

// //   // Function to close the checkout modal and reset related states
// //   const closeCheckout = () => {
// //     setShowCheckout(false);
// //     setCheckoutStep(1);
// //     setSelectedProduct(null);
// //     setQuantity(1);
// //     setSelectedPayment('');
// //   };

// //   // Helper function to get the title for each checkout step
// //   const getStepTitle = (step: number) => {
// //     switch(step) {
// //       case 1: return 'Cart';
// //       case 2: return 'Shipping';
// //       case 3: return 'Payment';
// //       case 4: return 'Thank You';
// //       default: return '';
// //     }
// //   };

// //   // Function to calculate the total price including shipping
// //   const calculateTotal = () => {
// //     if (!selectedProduct) return 0;
// //     const subtotal = selectedProduct.price * quantity;
// //     const shipping = 250; // Fixed shipping cost
// //     return subtotal + shipping;
// //   };

// //   // Function to toggle the visibility of filter sections within the sidebar
// //   const toggleFilter = (filterName: string) => {
// //     setFilters(prev => ({
// //       ...prev,
// //       [filterName]: !prev[filterName] // Toggle the boolean value for the given filter
// //     }));
// //   };

// //   // Static list of products to display
// //   const products: Product[] = [
// //     {
// //       id: 1,
// //       name: "Freestyle -",
// //       price: 167995,
// //       displayPrice: "KES 167,995",
// //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Projector", // Placeholder image
// //       category: "projector"
// //     },
// //     {
// //       id: 2,
// //       name: "Samsung Galaxy A15 - 6.5\"",
// //       fullName: "Samsung Galaxy A15 - 6.5\" - 128GB ROM - 4GB RAM - Dual SIM - 4G",
// //       price: 29499,
// //       displayPrice: "KES 29,499",
// //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+A15", // Placeholder image
// //       category: "phone"
// //     },
// //     {
// //       id: 3,
// //       name: "Samsung Galaxy A35 5G - 6.6\"",
// //       fullName: "Samsung Galaxy A35 5G - 6.6\" - 128GB ROM - 6GB RAM - Dual SIM",
// //       price: 39585,
// //       displayPrice: "KES 39,585",
// //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+A35", // Placeholder image
// //       category: "phone"
// //     },
// //     {
// //       id: 4,
// //       name: "Samsung Galaxy S24 Ultra",
// //       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
// //       price: 134945,
// //       displayPrice: "KES 134,945",
// //       originalPrice: "KES 165,650",
// //       discount: "19% Off",
// //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+S24+Ultra", // Placeholder image
// //       category: "phone"
// //     },
// //     {
// //       id: 5,
// //       name: "Samsung Galaxy S24 Ultra",
// //       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
// //       price: 134945,
// //       displayPrice: "KES 134,945",
// //       originalPrice: "KES 165,650",
// //       discount: "19% Off",
// //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+S24+Ultra", // Placeholder image
// //       category: "phone"
// //     },
// //     {
// //       id: 6,
// //       name: "Samsung Galaxy Z Fold 6 - 7.6\"",
// //       fullName: "Samsung Galaxy Z Fold 6 - 7.6\" - 12GB RAM - 512GB ROM",
// //       price: 194979,
// //       displayPrice: "KES 194,979",
// //       originalPrice: "KES 253,344",
// //       discount: "23% Off",
// //       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+Z+Fold+6", // Placeholder image
// //       category: "phone"
// //     }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gray-50 font-sans">
// //       {/* Checkout Modal */}
// //       {showCheckout && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 overflow-y-auto">
// //           <div className="bg-white rounded-lg w-full max-w-6xl my-4 min-h-[600px] shadow-lg">
// //             {/* Header with Progress */}
// //             <div className="p-4 sm:p-6 border-b border-gray-200">
// //               <div className="flex justify-between items-center mb-6">
// //                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Checkout (1 item)</h2>
// //                 <button onClick={closeCheckout} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
// //                   <X className="w-6 h-6 text-gray-600" />
// //                 </button>
// //               </div>
              
// //               {/* Progress Steps */}
// //               <div className="flex items-center justify-between mb-4 overflow-x-auto">
// //                 {[1, 2, 3, 4].map((step) => (
// //                   <div key={step} className="flex items-center min-w-0">
// //                     <div 
// //                       className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
// //                       style={{
// //                         backgroundColor: step <= checkoutStep ? '#2E1065' : '#D1D5DB',
// //                         color: step <= checkoutStep ? 'white' : '#6B7280'
// //                       }}
// //                     >
// //                       {step < checkoutStep ? <Check className="w-4 h-4" /> : step}
// //                     </div>
// //                     <span className="ml-2 text-xs sm:text-sm font-medium whitespace-nowrap text-gray-700">{getStepTitle(step)}</span>
// //                     {step < 4 && (
// //                       <div 
// //                         className="w-4 sm:w-8 lg:w-16 h-0.5 ml-2 sm:ml-4 flex-shrink-0"
// //                         style={{backgroundColor: step < checkoutStep ? '#2E1065' : '#D1D5DB'}}
// //                       />
// //                     )}
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Step Content */}
// //             <div className="p-4 sm:p-6 min-h-[500px]">
// //               {checkoutStep === 1 && (
// //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
// //                   {/* Cart Items */}
// //                   <div className="lg:col-span-2 space-y-6">
// //                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// //                       <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Items</h3>
// //                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
// //                         <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
// //                           <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover"/>
// //                         </div>
// //                         <div className="flex-1 min-w-0">
// //                           <h4 className="font-semibold text-gray-900">{selectedProduct?.name}</h4>
// //                           <p className="text-sm text-gray-600">{selectedProduct?.fullName}</p>
// //                           <p className="font-bold text-lg text-gray-900">{selectedProduct?.displayPrice}</p>
// //                         </div>
// //                         <div className="flex items-center gap-2 flex-shrink-0">
// //                           <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
// //                             <Minus className="w-4 h-4 text-gray-700" />
// //                           </button>
// //                           <span className="w-8 text-center font-medium text-gray-800">{quantity}</span>
// //                           <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
// //                             <Plus className="w-4 h-4 text-gray-700" />
// //                           </button>
// //                         </div>
// //                         <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors flex-shrink-0">
// //                           <Trash2 className="w-4 h-4" />
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Order Summary */}
// //                   <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// //                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
// //                     <div className="space-y-3">
// //                       <div className="flex justify-between text-gray-700">
// //                         <span>Subtotal:</span>
// //                         <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// //                       </div>
// //                       <div className="flex justify-between text-gray-700">
// //                         <span>Shipping & Handling:</span>
// //                         <span>KES 250</span>
// //                       </div>
// //                       <div className="border-t border-gray-200 pt-3">
// //                         <div className="flex justify-between font-bold text-lg text-gray-900">
// //                           <span>Grand Total</span>
// //                           <span>KES {calculateTotal().toLocaleString()}</span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <button 
// //                       onClick={nextStep} 
// //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors shadow"
// //                       style={{backgroundColor: '#2E1065'}}
// //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// //                     >
// //                       PROCEED TO CHECKOUT
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}

// //               {checkoutStep === 2 && (
// //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
// //                   {/* Shipping Form */}
// //                   <div className="lg:col-span-2 space-y-6">
// //                     {/* Shipping Address */}
// //                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// //                       <div className="flex items-center gap-2 mb-4">
// //                         <div 
// //                           className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
// //                           style={{backgroundColor: '#2E1065'}}
// //                         >
// //                           2
// //                         </div>
// //                         <h3 className="text-lg font-semibold text-gray-800">Shipping Address</h3>
// //                       </div>
                      
// //                       <div className="space-y-4">
// //                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
// //                           <div className="flex items-center gap-2 mb-3">
// //                             <input type="radio" name="delivery" checked={deliveryOption === 'home'} onChange={() => setDeliveryOption('home')} className="form-radio text-indigo-600" />
// //                             <label className="font-medium text-gray-800">Delivery to your home or office</label>
// //                           </div>
// //                           <p className="text-sm text-gray-600 mb-4">Fill in your Home or office address</p>
                          
// //                           {deliveryOption === 'home' && (
// //                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                               <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-1">Firstname *</label>
// //                                 <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
// //                               </div>
// //                               <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-1">Lastname *</label>
// //                                 <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
// //                               </div>
// //                               <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
// //                                 <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500">
// //                                   <option>Nairobi</option>
// //                                   <option>Mombasa</option>
// //                                   <option>Kisumu</option>
// //                                 </select>
// //                               </div>
// //                               <div>
// //                                 <label className="block text-sm font-medium text-gray-700 mb-1">Recipient Number *</label>
// //                                 <input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
// //                               </div>
// //                               <div className="sm:col-span-2">
// //                                 <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
// //                                 <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
// //                               </div>
// //                             </div>
// //                           )}
// //                         </div>

// //                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
// //                           <div className="flex items-center gap-2 mb-3">
// //                             <input type="radio" name="delivery" checked={deliveryOption === 'pickup'} onChange={() => setDeliveryOption('pickup')} className="form-radio text-indigo-600" />
// //                             <label className="font-medium text-gray-800">Pickup Station</label>
// //                           </div>
// //                           <p className="text-sm text-gray-600">I would like to pick my order at the closest Masoko pick up point</p>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     {/* Promotion Code */}
// //                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// //                       <h3 className="text-lg font-semibold text-gray-800 mb-4">Promotion Code (Optional)</h3>
// //                       <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
// //                         <h4 className="font-medium text-gray-800 mb-2">APPLY A PROMOTION CODE</h4>
// //                         <p className="text-sm text-gray-600 mb-3">Do you have a promo code? <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">Check on promo or Log in</a></p>
// //                         <input type="text" placeholder="Enter promotion code" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Order Summary (repeated for consistency with design, could be a component) */}
// //                   <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// //                     <div className="flex items-center gap-2 mb-4">
// //                       <div 
// //                         className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
// //                         style={{backgroundColor: '#2E1065'}}
// //                       >
// //                         3
// //                       </div>
// //                       <h3 className="text-lg font-semibold text-gray-800">Order Summary</h3>
// //                     </div>
                    
// //                     <div className="space-y-4">
// //                       <div>
// //                         <h4 className="font-medium text-gray-800 mb-2">PRODUCT</h4>
// //                         <div className="flex gap-3 items-center">
// //                           <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
// //                             <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover"/>
// //                           </div>
// //                           <div className="flex-1 min-w-0">
// //                             <p className="font-medium text-sm text-gray-900">{selectedProduct?.name}</p>
// //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// //                             <p className="font-bold text-gray-900">{selectedProduct?.displayPrice}</p>
// //                           </div>
// //                         </div>
// //                       </div>
                      
// //                       <div className="space-y-2 text-gray-700">
// //                         <div className="flex justify-between">
// //                           <span>Shipping & Handling:</span>
// //                           <span>KES 250</span>
// //                         </div>
// //                         <div className="flex justify-between">
// //                           <span>Subtotal:</span>
// //                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// //                         </div>
// //                         <div className="border-t border-gray-200 pt-2">
// //                           <div className="flex justify-between font-bold text-lg text-gray-900">
// //                             <span>Grand Total</span>
// //                             <span>KES {calculateTotal().toLocaleString()}</span>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
                    
// //                     <button 
// //                       onClick={nextStep} 
// //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors shadow"
// //                       style={{backgroundColor: '#2E1065'}}
// //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// //                     >
// //                       CONTINUE TO PAYMENT
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}

// //               {checkoutStep === 3 && (
// //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
// //                   {/* Payment Methods */}
// //                   <div className="lg:col-span-2 space-y-6">
// //                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// //                       <h3 className="text-lg font-semibold text-gray-800 mb-4">SELECT PAYMENT METHOD</h3>
// //                       <p className="text-sm text-red-600 mb-4">Select preferred payment method for enhanced shopping experience.</p>
                      
// //                       <div className="space-y-3">
// //                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-center gap-3">
// //                           <input type="radio" name="payment" value="mpesa" checked={selectedPayment === 'mpesa'} onChange={(e) => setSelectedPayment(e.target.value)} className="form-radio text-green-600" />
// //                           <span className="font-medium text-gray-800">Lipa Na M-Pesa</span>
// //                           <span className="text-green-600 font-bold ml-auto">m-pesa</span>
// //                         </div>
                        
// //                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-center gap-3">
// //                           <input type="radio" name="payment" value="bonga" checked={selectedPayment === 'bonga'} onChange={(e) => setSelectedPayment(e.target.value)} className="form-radio text-orange-600" />
// //                           <span className="font-medium text-gray-800">Lipa Na Bonga</span>
// //                           <span className="text-orange-600 font-bold ml-auto">BONGA</span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Order Summary (repeated) */}
// //                   <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
// //                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
                    
// //                     <div className="space-y-4">
// //                       <div>
// //                         <h4 className="font-medium text-gray-800 mb-2">PRODUCT</h4>
// //                         <div className="flex gap-3 items-center">
// //                           <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
// //                             <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover"/>
// //                           </div>
// //                           <div className="flex-1 min-w-0">
// //                             <p className="font-medium text-sm text-gray-900">{selectedProduct?.name}</p>
// //                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
// //                             <p className="font-bold text-gray-900">{selectedProduct?.displayPrice}</p>
// //                           </div>
// //                         </div>
// //                       </div>
                      
// //                       <div className="space-y-2 text-gray-700">
// //                         <div className="flex justify-between">
// //                           <span>Shipping & Handling:</span>
// //                           <span>KES 250</span>
// //                         </div>
// //                         <div className="flex justify-between">
// //                           <span>Subtotal:</span>
// //                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
// //                         </div>
// //                         <div className="border-t border-gray-200 pt-2">
// //                           <div className="flex justify-between font-bold text-lg text-gray-900">
// //                             <span>Grand Total</span>
// //                             <span>KES {calculateTotal().toLocaleString()}</span>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
                    
// //                     <button 
// //                       onClick={nextStep} 
// //                       disabled={!selectedPayment} 
// //                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 disabled:bg-gray-300 transition-colors shadow"
// //                       style={{backgroundColor: selectedPayment ? '#2E1065' : '#D1D5DB'}}
// //                       onMouseEnter={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D')}
// //                       onMouseLeave={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#2E1065')}
// //                     >
// //                       COMPLETE PAYMENT
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}

// //               {checkoutStep === 4 && (
// //                 <div className="text-center py-8 sm:py-12">
// //                   <div 
// //                     className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
// //                     style={{backgroundColor: '#2E1065'}}
// //                   >
// //                     <Check className="w-8 h-8 text-white" />
// //                   </div>
// //                   <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
// //                   <p className="text-lg text-gray-600 mb-8">Your order has been successfully placed.</p>
// //                   <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto border border-gray-200">
// //                     <h3 className="font-semibold text-gray-800 mb-4">Order Details</h3>
// //                     <div className="text-left space-y-2 text-gray-700">
// //                       <div className="flex justify-between">
// //                         <span>Order Number:</span>
// //                         <span className="font-bold">#MK{Date.now().toString().slice(-6)}</span>
// //                       </div>
// //                       <div className="flex justify-between">
// //                         <span>Total Paid:</span>
// //                         <span className="font-bold">KES {calculateTotal().toLocaleString()}</span>
// //                       </div>
// //                       <div className="flex justify-between">
// //                         <span>Payment Method:</span>
// //                         <span className="font-bold">{selectedPayment === 'mpesa' ? 'M-Pesa' : 'Bonga Points'}</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <button 
// //                     onClick={closeCheckout} 
// //                     className="text-white px-8 py-3 rounded-lg font-semibold mt-8 transition-colors shadow"
// //                     style={{backgroundColor: '#2E1065'}}
// //                     onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// //                     onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// //                   >
// //                     Continue Shopping
// //                   </button>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <div className="container mx-auto px-4 py-6 max-w-7xl font-inter">
// //         {/* Header/Hero Section with Deep Purple Theme */}
// //         <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg mb-8 px-4 sm:px-6 py-6 sm:py-8" style={{background: 'linear-gradient(to right, #2E1065, #1E0A4D)'}}>
// //           {/* Navigation Tabs */}
// //           <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6">
// //             <button className="text-white font-semibold border-b-2 border-white pb-1">
// //               Products
// //             </button>
// //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// //               Manufacturers
// //             </button>
// //             <button className="text-white/80 font-semibold hover:text-white transition-colors">
// //               Regional supplies
// //             </button>
// //           </div>

// //           {/* Search Section */}
// //           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
// //             <div className="relative flex-1 max-w-2xl">
// //               <div className="relative w-full">
// //                 <input
// //                   type="text"
// //                   className="w-full px-6 py-3 rounded-full text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/30"
// //                   style={{ caretColor: 'transparent' }}
// //                   readOnly
// //                 />
// //                 <div className="absolute left-6 top-1/2 -translate-y-1/2 overflow-hidden h-6">
// //                   <div 
// //                     className="transition-transform duration-500 ease-in-out"
// //                     style={{ 
// //                       transform: `translateY(-${currentSearchIndex * 24}px)` 
// //                     }}
// //                   >
// //                     {searchTexts.map((text, index) => (
// //                       <div key={index} className="h-6 flex items-center text-gray-800">
// //                         {text}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="flex gap-2 sm:gap-4">
// //               <button className="px-4 sm:px-12 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2">
// //                 <span>🔍</span> <span className="hidden sm:inline">Search</span>
// //               </button>
// //               <button className="px-4 sm:px-6 py-3 bg-white rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2" style={{color: '#2E1065'}}>
// //                 <span>📷</span> <span className="hidden sm:inline">Image Search</span>
// //               </button>
// //             </div>
// //           </div>

// //           {/* Frequently Searched */}
// //           <div className="text-center">
// //             <span className="text-white/90 text-sm">Frequently searched: </span>
// //             <div className="inline-flex flex-wrap gap-2 mt-1">
// //               {['drone 4K', 'iphones 11', 'samsung mobile phone', 'i phone', 'camera', 'nikon camera'].map((term, index) => (
// //                 <button key={index} className="text-white/90 text-sm hover:text-white transition-colors hover:underline">
// //                   {term}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Mobile Filter Toggle - Re-added for mobile accessibility */}
// //         <button 
// //           onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
// //           className="lg:hidden w-full mb-4 bg-white rounded-lg shadow-sm p-4 flex items-center justify-between border border-gray-200"
// //         >
// //           <div className="flex items-center gap-2">
// //             <Filter className="w-4 h-4 text-green-600" />
// //             <span className="text-base font-semibold text-gray-800">Filter</span>
// //           </div>
// //           <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${mobileFilterOpen ? 'rotate-180' : ''}`} />
// //         </button>

// //         {/* Main Layout - Filter and Products Side by Side */}
// //         <div className="flex flex-col lg:flex-row gap-6">
// //           {/* Filter Sidebar - Now correctly uses mobileFilterOpen for mobile, always block on lg screens */}
// //           <aside className={`${mobileFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 bg-white rounded-lg shadow-sm p-4 h-fit flex-shrink-0 border border-gray-200`}>
// //             <div className="flex items-center gap-2 mb-4">
// //               <Filter className="w-4 h-4 text-green-600" />
// //               <span className="text-base font-semibold text-gray-800">Filter</span>
// //             </div>

// //             <div className="space-y-1">
// //               {/* Price Filter */}
// //               <div className="border-b border-gray-100 pb-3 mb-3">
// //                 <button
// //                   onClick={() => toggleFilter('price')}
// //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
// //                 >
// //                   <span className="text-gray-800 font-medium text-sm">Price</span>
// //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.price ? 'rotate-180' : ''}`} />
// //                 </button>
// //               </div>

// //               {/* Storage Capacity Filter */}
// //               <div className="border-b border-gray-100 pb-3 mb-3">
// //                 <button
// //                   onClick={() => toggleFilter('storage')}
// //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
// //                 >
// //                   <span className="text-gray-800 font-medium text-sm">Storage Capacity</span>
// //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.storage ? 'rotate-180' : ''}`} />
// //                 </button>
// //               </div>

// //               {/* Camera Megapixel Filter */}
// //               <div className="border-b border-gray-100 pb-3 mb-3">
// //                 <button
// //                   onClick={() => toggleFilter('camera')}
// //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
// //                 >
// //                   <span className="text-gray-800 font-medium text-sm">Camera Megapixel</span>
// //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.camera ? 'rotate-180' : ''}`} />
// //                 </button>
// //               </div>

// //               {/* Display Size Filter */}
// //               <div className="border-b border-gray-100 pb-3 mb-3">
// //                 <button
// //                   onClick={() => toggleFilter('display')}
// //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
// //                 >
// //                   <span className="text-gray-800 font-medium text-sm">Display Size</span>
// //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.display ? 'rotate-180' : ''}`} />
// //                 </button>
// //               </div>

// //               {/* Brand Filter */}
// //               <div className="pb-3">
// //                 <button
// //                   onClick={() => toggleFilter('brand')}
// //                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
// //                 >
// //                   <span className="text-gray-800 font-medium text-sm">Brand</span>
// //                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.brand ? 'rotate-180' : ''}`} />
// //                 </button>
// //               </div>
// //             </div>
// //           </aside>

// //           {/* Products Area - Right side, next to filter */}
// //           <main className="flex-1 min-w-0">
// //             {/* Results Header aligned with the design, showing total results */}
// //             <div className="mb-6">
// //               <div className="flex justify-between items-center bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200">
// //                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900">45 Results Found</h2> 
// //                 <div className="flex items-center gap-2">
// //                   <span className="text-gray-700 text-sm hidden sm:inline">Sort by:</span>
// //                   <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-indigo-500 focus:border-indigo-500">
// //                     <option>Relevance</option>
// //                     <option>Price: Low to High</option>
// //                     <option>Price: High to Low</option>
// //                     <option>Newest Arrivals</option>
// //                   </select>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Product Grid */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
// //               {products.map((product) => (
// //                 <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col border border-gray-200 hover:shadow-md transition-shadow">
// //                   {product.discount && (
// //                     <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
// //                       {product.discount}
// //                     </span>
// //                   )}
// //                   <div className="relative w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-lg">
// //                     <img src={product.image} alt={product.name} className="object-cover w-full h-full" onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = `https://placehold.co/300x300/E0E0E0/5B3A8E?text=${product.name.replace(/[^a-zA-Z0-9 ]/g, '').split(' ')[0]}`; }}/>
// //                     <button 
// //                       className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
// //                       aria-label="Add to cart"
// //                     >
// //                       <ShoppingCart className="w-5 h-5 text-gray-700" />
// //                     </button>
// //                   </div>
// //                   <div className="p-4 flex flex-col flex-grow">
// //                     <h3 className="font-semibold text-base text-gray-900 mb-1 leading-tight">{product.name}</h3>
// //                     {product.fullName && <p className="text-gray-600 text-sm mb-2 h-10 overflow-hidden">{product.fullName}</p>}
// //                     <div className="flex items-center gap-2 mb-2 mt-auto">
// //                       <span className="font-bold text-xl" style={{color: '#2E1065'}}>{product.displayPrice}</span>
// //                       {product.originalPrice && (
// //                         <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
// //                       )}
// //                     </div>
// //                     <button 
// //                       onClick={() => handleBuyNow(product)}
// //                       className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors mt-2"
// //                       style={{backgroundColor: '#2E1065'}}
// //                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
// //                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
// //                     >
// //                       Buy Now
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Pagination (Placeholder) */}
// //             <div className="flex justify-center mt-8">
// //               <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
// //                 Show More
// //               </button>
// //             </div>
// //           </main>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductListing;


// 'use client';

// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Filter, ShoppingCart, Check, X, Trash2, Plus, Minus, Menu } from 'lucide-react';

// // Define the Product interface to ensure type safety for product objects
// interface Product {
//   id: number;
//   name: string;
//   fullName?: string; // Optional full name for product
//   price: number;
//   displayPrice: string; // Formatted price for display
//   originalPrice?: string; // Optional original price for showing discounts
//   discount?: string; // Optional discount text
//   image: string; // URL or path to the product image
//   category: string;
// }

// // Main ProductListing functional component
// const ProductListing = () => {
//   // State for managing filter visibility within the sidebar sections
//   const [filters, setFilters] = useState({
//     price: false,
//     storage: false,
//     camera: false,
//     display: false,
//     brand: false
//   });

//   // State for checkout modal visibility and step management
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [checkoutStep, setCheckoutStep] = useState(1);
//   // State for the product currently selected for purchase
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   // State for the quantity of the selected product
//   const [quantity, setQuantity] = useState(1);
//   // State for selected payment method
//   const [selectedPayment, setSelectedPayment] = useState('');
//   // State for delivery option (home or pickup)
//   const [deliveryOption, setDeliveryOption] = useState('home');
//   // State for controlling the auto-scrolling search text in the header
//   const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
  
//   // Array of search texts for auto-scrolling animation
//   const searchTexts = [
//     "iphones 11",
//     "iphones 15 pro max",
//     "nikon camera",
//     "samsung galaxy s24",
//     "macbook pro",
//     "drone 4k",
//     "apple watch",
//     "samsung mobile phone"
//   ];

//   // Effect hook to handle auto-scrolling search text
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSearchIndex((prev) => (prev + 1) % searchTexts.length);
//     }, 2000); // Change text every 2 seconds
    
//     // Cleanup function to clear the interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   // Handler for "Buy Now" button click
//   const handleBuyNow = (product: Product) => {
//     setSelectedProduct(product); // Set the product to be purchased
//     setShowCheckout(true); // Open the checkout modal
//     setCheckoutStep(1); // Reset to the first step of checkout
//   };

//   // Function to advance to the next step in the checkout process
//   const nextStep = () => {
//     if (checkoutStep < 4) { // Max 4 steps
//       setCheckoutStep(checkoutStep + 1);
//     }
//   };

//   // Function to close the checkout modal and reset related states
//   const closeCheckout = () => {
//     setShowCheckout(false);
//     setCheckoutStep(1);
//     setSelectedProduct(null);
//     setQuantity(1);
//     setSelectedPayment('');
//   };

//   // Helper function to get the title for each checkout step
//   const getStepTitle = (step: number) => {
//     switch(step) {
//       case 1: return 'Cart';
//       case 2: return 'Shipping';
//       case 3: return 'Payment';
//       case 4: return 'Thank You';
//       default: return '';
//     }
//   };

//   // Function to calculate the total price including shipping
//   const calculateTotal = () => {
//     if (!selectedProduct) return 0;
//     const subtotal = selectedProduct.price * quantity;
//     const shipping = 250; // Fixed shipping cost
//     return subtotal + shipping;
//   };

//   // Function to toggle the visibility of filter sections within the sidebar
//   const toggleFilter = (filterName: string) => {
//     setFilters(prev => ({
//       ...prev,
//       [filterName]: !prev[filterName] // Toggle the boolean value for the given filter
//     }));
//   };

//   // Static list of products to display
//   const products: Product[] = [
//     {
//       id: 1,
//       name: "Freestyle -",
//       price: 167995,
//       displayPrice: "KES 167,995",
//       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Projector", // Placeholder image
//       category: "projector"
//     },
//     {
//       id: 2,
//       name: "Samsung Galaxy A15 - 6.5\"",
//       fullName: "Samsung Galaxy A15 - 6.5\" - 128GB ROM - 4GB RAM - Dual SIM - 4G",
//       price: 29499,
//       displayPrice: "KES 29,499",
//       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+A15", // Placeholder image
//       category: "phone"
//     },
//     {
//       id: 3,
//       name: "Samsung Galaxy A35 5G - 6.6\"",
//       fullName: "Samsung Galaxy A35 5G - 6.6\" - 128GB ROM - 6GB RAM - Dual SIM",
//       price: 39585,
//       displayPrice: "KES 39,585",
//       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+A35", // Placeholder image
//       category: "phone"
//     },
//     {
//       id: 4,
//       name: "Samsung Galaxy S24 Ultra",
//       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
//       price: 134945,
//       displayPrice: "KES 134,945",
//       originalPrice: "KES 165,650",
//       discount: "19% Off",
//       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+S24+Ultra", // Placeholder image
//       category: "phone"
//     },
//     {
//       id: 5,
//       name: "Samsung Galaxy S24 Ultra",
//       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
//       price: 134945,
//       displayPrice: "KES 134,945",
//       originalPrice: "KES 165,650",
//       discount: "19% Off",
//       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+S24+Ultra", // Placeholder image
//       category: "phone"
//     },
//     {
//       id: 6,
//       name: "Samsung Galaxy Z Fold 6 - 7.6\"",
//       fullName: "Samsung Galaxy Z Fold 6 - 7.6\" - 12GB RAM - 512GB ROM",
//       price: 194979,
//       displayPrice: "KES 194,979",
//       originalPrice: "KES 253,344",
//       discount: "23% Off",
//       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+Z+Fold+6", // Placeholder image
//       category: "phone"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       {/* Checkout Modal */}
//       {showCheckout && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 overflow-y-auto">
//           <div className="bg-white rounded-lg w-full max-w-6xl my-4 min-h-[600px] shadow-lg">
//             {/* Header with Progress */}
//             <div className="p-4 sm:p-6 border-b border-gray-200">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Checkout (1 item)</h2>
//                 <button onClick={closeCheckout} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                   <X className="w-6 h-6 text-gray-600" />
//                 </button>
//               </div>
              
//               {/* Progress Steps */}
//               <div className="flex items-center justify-between mb-4 overflow-x-auto">
//                 {[1, 2, 3, 4].map((step) => (
//                   <div key={step} className="flex items-center min-w-0">
//                     <div 
//                       className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
//                       style={{
//                         backgroundColor: step <= checkoutStep ? '#2E1065' : '#D1D5DB',
//                         color: step <= checkoutStep ? 'white' : '#6B7280'
//                       }}
//                     >
//                       {step < checkoutStep ? <Check className="w-4 h-4" /> : step}
//                     </div>
//                     <span className="ml-2 text-xs sm:text-sm font-medium whitespace-nowrap text-gray-700">{getStepTitle(step)}</span>
//                     {step < 4 && (
//                       <div 
//                         className="w-4 sm:w-8 lg:w-16 h-0.5 ml-2 sm:ml-4 flex-shrink-0"
//                         style={{backgroundColor: step < checkoutStep ? '#2E1065' : '#D1D5DB'}}
//                       />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Step Content */}
//             <div className="p-4 sm:p-6 min-h-[500px]">
//               {checkoutStep === 1 && (
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
//                   {/* Cart Items */}
//                   <div className="lg:col-span-2 space-y-6">
//                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
//                       <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Items</h3>
//                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
//                         <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
//                           <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover"/>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="font-semibold text-gray-900">{selectedProduct?.name}</h4>
//                           <p className="text-sm text-gray-600">{selectedProduct?.fullName}</p>
//                           <p className="font-bold text-lg text-gray-900">{selectedProduct?.displayPrice}</p>
//                         </div>
//                         <div className="flex items-center gap-2 flex-shrink-0">
//                           <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
//                             <Minus className="w-4 h-4 text-gray-700" />
//                           </button>
//                           <span className="w-8 text-center font-medium text-gray-800">{quantity}</span>
//                           <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
//                             <Plus className="w-4 h-4 text-gray-700" />
//                           </button>
//                         </div>
//                         <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors flex-shrink-0">
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Order Summary */}
//                   <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
//                     <div className="space-y-3">
//                       <div className="flex justify-between text-gray-700">
//                         <span>Subtotal:</span>
//                         <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
//                       </div>
//                       <div className="flex justify-between text-gray-700">
//                         <span>Shipping & Handling:</span>
//                         <span>KES 250</span>
//                       </div>
//                       <div className="border-t border-gray-200 pt-3">
//                         <div className="flex justify-between font-bold text-lg text-gray-900">
//                           <span>Grand Total</span>
//                           <span>KES {calculateTotal().toLocaleString()}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <button 
//                       onClick={nextStep} 
//                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors shadow"
//                       style={{backgroundColor: '#2E1065'}}
//                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
//                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
//                     >
//                       PROCEED TO CHECKOUT
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {checkoutStep === 2 && (
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
//                   {/* Shipping Form */}
//                   <div className="lg:col-span-2 space-y-6">
//                     {/* Shipping Address */}
//                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
//                       <div className="flex items-center gap-2 mb-4">
//                         <div 
//                           className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
//                           style={{backgroundColor: '#2E1065'}}
//                         >
//                           2
//                         </div>
//                         <h3 className="text-lg font-semibold text-gray-800">Shipping Address</h3>
//                       </div>
                      
//                       <div className="space-y-4">
//                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
//                           <div className="flex items-center gap-2 mb-3">
//                             <input type="radio" name="delivery" checked={deliveryOption === 'home'} onChange={() => setDeliveryOption('home')} className="form-radio text-indigo-600" />
//                             <label className="font-medium text-gray-800">Delivery to your home or office</label>
//                           </div>
//                           <p className="text-sm text-gray-600 mb-4">Fill in your Home or office address</p>
                          
//                           {deliveryOption === 'home' && (
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                               <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Firstname *</label>
//                                 <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
//                               </div>
//                               <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Lastname *</label>
//                                 <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
//                               </div>
//                               <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
//                                 <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500">
//                                   <option>Nairobi</option>
//                                   <option>Mombasa</option>
//                                   <option>Kisumu</option>
//                                 </select>
//                               </div>
//                               <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Recipient Number *</label>
//                                 <input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
//                               </div>
//                               <div className="sm:col-span-2">
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//                                 <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
//                               </div>
//                             </div>
//                           )}
//                         </div>

//                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
//                           <div className="flex items-center gap-2 mb-3">
//                             <input type="radio" name="delivery" checked={deliveryOption === 'pickup'} onChange={() => setDeliveryOption('pickup')} className="form-radio text-indigo-600" />
//                             <label className="font-medium text-gray-800">Pickup Station</label>
//                           </div>
//                           <p className="text-sm text-gray-600">I would like to pick my order at the closest Masoko pick up point</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Promotion Code */}
//                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
//                       <h3 className="text-lg font-semibold text-gray-800 mb-4">Promotion Code (Optional)</h3>
//                       <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
//                         <h4 className="font-medium text-gray-800 mb-2">APPLY A PROMOTION CODE</h4>
//                         <p className="text-sm text-gray-600 mb-3">Do you have a promo code? <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">Check on promo or Log in</a></p>
//                         <input type="text" placeholder="Enter promotion code" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Order Summary (repeated for consistency with design, could be a component) */}
//                   <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
//                     <div className="flex items-center gap-2 mb-4">
//                       <div 
//                         className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
//                         style={{backgroundColor: '#2E1065'}}
//                       >
//                         3
//                       </div>
//                       <h3 className="text-lg font-semibold text-gray-800">Order Summary</h3>
//                     </div>
                    
//                     <div className="space-y-4">
//                       <div>
//                         <h4 className="font-medium text-gray-800 mb-2">PRODUCT</h4>
//                         <div className="flex gap-3 items-center">
//                           <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
//                             <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover"/>
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <p className="font-medium text-sm text-gray-900">{selectedProduct?.name}</p>
//                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
//                             <p className="font-bold text-gray-900">{selectedProduct?.displayPrice}</p>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="space-y-2 text-gray-700">
//                         <div className="flex justify-between">
//                           <span>Shipping & Handling:</span>
//                           <span>KES 250</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span>Subtotal:</span>
//                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
//                         </div>
//                         <div className="border-t border-gray-200 pt-2">
//                           <div className="flex justify-between font-bold text-lg text-gray-900">
//                             <span>Grand Total</span>
//                             <span>KES {calculateTotal().toLocaleString()}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <button 
//                       onClick={nextStep} 
//                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors shadow"
//                       style={{backgroundColor: '#2E1065'}}
//                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
//                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
//                     >
//                       CONTINUE TO PAYMENT
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {checkoutStep === 3 && (
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
//                   {/* Payment Methods */}
//                   <div className="lg:col-span-2 space-y-6">
//                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
//                       <h3 className="text-lg font-semibold text-gray-800 mb-4">SELECT PAYMENT METHOD</h3>
//                       <p className="text-sm text-red-600 mb-4">Select preferred payment method for enhanced shopping experience.</p>
                      
//                       <div className="space-y-3">
//                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-center gap-3">
//                           <input type="radio" name="payment" value="mpesa" checked={selectedPayment === 'mpesa'} onChange={(e) => setSelectedPayment(e.target.value)} className="form-radio text-green-600" />
//                           <span className="font-medium text-gray-800">Lipa Na M-Pesa</span>
//                           <span className="text-green-600 font-bold ml-auto">m-pesa</span>
//                         </div>
                        
//                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-center gap-3">
//                           <input type="radio" name="payment" value="bonga" checked={selectedPayment === 'bonga'} onChange={(e) => setSelectedPayment(e.target.value)} className="form-radio text-orange-600" />
//                           <span className="font-medium text-gray-800">Lipa Na Bonga</span>
//                           <span className="text-orange-600 font-bold ml-auto">BONGA</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Order Summary (repeated) */}
//                   <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
                    
//                     <div className="space-y-4">
//                       <div>
//                         <h4 className="font-medium text-gray-800 mb-2">PRODUCT</h4>
//                         <div className="flex gap-3 items-center">
//                           <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
//                             <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover"/>
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <p className="font-medium text-sm text-gray-900">{selectedProduct?.name}</p>
//                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
//                             <p className="font-bold text-gray-900">{selectedProduct?.displayPrice}</p>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="space-y-2 text-gray-700">
//                         <div className="flex justify-between">
//                           <span>Shipping & Handling:</span>
//                           <span>KES 250</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span>Subtotal:</span>
//                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
//                         </div>
//                         <div className="border-t border-gray-200 pt-2">
//                           <div className="flex justify-between font-bold text-lg text-gray-900">
//                             <span>Grand Total</span>
//                             <span>KES {calculateTotal().toLocaleString()}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <button 
//                       onClick={nextStep} 
//                       disabled={!selectedPayment} 
//                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 disabled:bg-gray-300 transition-colors shadow"
//                       style={{backgroundColor: selectedPayment ? '#2E1065' : '#D1D5DB'}}
//                       onMouseEnter={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D')}
//                       onMouseLeave={(e) => selectedPayment && ((e.target as HTMLButtonElement).style.backgroundColor = '#2E1065')}
//                     >
//                       COMPLETE PAYMENT
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {checkoutStep === 4 && (
//                 <div className="text-center py-8 sm:py-12">
//                   <div 
//                     className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
//                     style={{backgroundColor: '#2E1065'}}
//                   >
//                     <Check className="w-8 h-8 text-white" />
//                   </div>
//                   <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
//                   <p className="text-lg text-gray-600 mb-8">Your order has been successfully placed.</p>
//                   <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto border border-gray-200">
//                     <h3 className="font-semibold text-gray-800 mb-4">Order Details</h3>
//                     <div className="text-left space-y-2 text-gray-700">
//                       <div className="flex justify-between">
//                         <span>Order Number:</span>
//                         <span className="font-bold">#MK{Date.now().toString().slice(-6)}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Total Paid:</span>
//                         <span className="font-bold">KES {calculateTotal().toLocaleString()}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Payment Method:</span>
//                         <span className="font-bold">{selectedPayment === 'mpesa' ? 'M-Pesa' : 'Bonga Points'}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <button 
//                     onClick={closeCheckout} 
//                     className="text-white px-8 py-3 rounded-lg font-semibold mt-8 transition-colors shadow"
//                     style={{backgroundColor: '#2E1065'}}
//                     onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
//                     onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
//                   >
//                     Continue Shopping
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="container mx-auto px-4 py-6 max-w-7xl font-inter">
//         {/* Header/Hero Section with Deep Purple Theme */}
//         <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg mb-8 px-4 sm:px-6 py-6 sm:py-8" style={{background: 'linear-gradient(to right, #2E1065, #1E0A4D)'}}>
//           {/* Navigation Tabs */}
//           <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6">
//             <button className="text-white font-semibold border-b-2 border-white pb-1">
//               Products
//             </button>
//             <button className="text-white/80 font-semibold hover:text-white transition-colors">
//               Manufacturers
//             </button>
//             <button className="text-white/80 font-semibold hover:text-white transition-colors">
//               Regional supplies
//             </button>
//           </div>

//           {/* Search Section */}
//           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
//             <div className="relative flex-1 max-w-2xl">
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   className="w-full px-6 py-3 rounded-full text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/30"
//                   style={{ caretColor: 'transparent' }}
//                   readOnly
//                 />
//                 <div className="absolute left-6 top-1/2 -translate-y-1/2 overflow-hidden h-6">
//                   <div 
//                     className="transition-transform duration-500 ease-in-out"
//                     style={{ 
//                       transform: `translateY(-${currentSearchIndex * 24}px)` 
//                     }}
//                   >
//                     {searchTexts.map((text, index) => (
//                       <div key={index} className="h-6 flex items-center text-gray-800">
//                         {text}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-2 sm:gap-4">
//               <button className="px-4 sm:px-12 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2">
//                 <span>🔍</span> <span className="hidden sm:inline">Search</span>
//               </button>
//               <button className="px-4 sm:px-6 py-3 bg-white rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2" style={{color: '#2E1065'}}>
//                 <span>📷</span> <span className="hidden sm:inline">Image Search</span>
//               </button>
//             </div>
//           </div>

//           {/* Frequently Searched */}
//           <div className="text-center">
//             <span className="text-white/90 text-sm">Frequently searched: </span>
//             <div className="inline-flex flex-wrap gap-2 mt-1">
//               {['drone 4K', 'iphones 11', 'samsung mobile phone', 'i phone', 'camera', 'nikon camera'].map((term, index) => (
//                 <button key={index} className="text-white/90 text-sm hover:text-white transition-colors hover:underline">
//                   {term}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Layout - Filter and Products Side by Side */}
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Filter Sidebar - Always visible on desktop (lg:block), hidden on smaller screens (hidden) */}
//           <aside className="hidden lg:block w-full lg:w-64 bg-white rounded-lg shadow-sm p-4 h-fit flex-shrink-0 border border-gray-200">
//             <div className="flex items-center gap-2 mb-4">
//               <Filter className="w-4 h-4 text-green-600" />
//               <span className="text-base font-semibold text-gray-800">Filter</span>
//             </div>

//             <div className="space-y-1">
//               {/* Price Filter */}
//               <div className="border-b border-gray-100 pb-3 mb-3">
//                 <button
//                   onClick={() => toggleFilter('price')}
//                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
//                 >
//                   <span className="text-gray-800 font-medium text-sm">Price</span>
//                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.price ? 'rotate-180' : ''}`} />
//                 </button>
//               </div>

//               {/* Storage Capacity Filter */}
//               <div className="border-b border-gray-100 pb-3 mb-3">
//                 <button
//                   onClick={() => toggleFilter('storage')}
//                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
//                 >
//                   <span className="text-gray-800 font-medium text-sm">Storage Capacity</span>
//                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.storage ? 'rotate-180' : ''}`} />
//                 </button>
//               </div>

//               {/* Camera Megapixel Filter */}
//               <div className="border-b border-gray-100 pb-3 mb-3">
//                 <button
//                   onClick={() => toggleFilter('camera')}
//                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
//                 >
//                   <span className="text-gray-800 font-medium text-sm">Camera Megapixel</span>
//                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.camera ? 'rotate-180' : ''}`} />
//                 </button>
//               </div>

//               {/* Display Size Filter */}
//               <div className="border-b border-gray-100 pb-3 mb-3">
//                 <button
//                   onClick={() => toggleFilter('display')}
//                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
//                 >
//                   <span className="text-gray-800 font-medium text-sm">Display Size</span>
//                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.display ? 'rotate-180' : ''}`} />
//                 </button>
//               </div>

//               {/* Brand Filter */}
//               <div className="pb-3">
//                 <button
//                   onClick={() => toggleFilter('brand')}
//                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
//                 >
//                   <span className="text-gray-800 font-medium text-sm">Brand</span>
//                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.brand ? 'rotate-180' : ''}`} />
//                 </button>
//               </div>
//             </div>
//           </aside>

//           {/* Products Area - Right side, next to filter */}
//           <main className="flex-1 min-w-0">
//             {/* Top Filter for Mobile - Re-added as per the image logic */}
//             <div className="lg:hidden w-full mb-4 bg-white rounded-lg shadow-sm p-4 flex items-center justify-between border border-gray-200">
//               <div className="flex items-center gap-2">
//                 <Filter className="w-4 h-4 text-green-600" />
//                 <span className="text-base font-semibold text-gray-800">Filter</span>
//               </div>
//               <ChevronDown className="w-4 h-4 text-gray-600" /> {/* No rotation as it's just an indicator */}
//             </div>

//             {/* Results Header aligned with the design, showing total results */}
//             <div className="mb-6">
//               <div className="flex justify-between items-center bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200">
//                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900">45 Results Found</h2> 
//                 <div className="flex items-center gap-2">
//                   <span className="text-gray-700 text-sm hidden sm:inline">Sort by:</span>
//                   <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-indigo-500 focus:border-indigo-500">
//                     <option>Relevance</option>
//                     <option>Price: Low to High</option>
//                     <option>Price: High to Low</option>
//                     <option>Newest Arrivals</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Product Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//               {products.map((product) => (
//                 <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col border border-gray-200 hover:shadow-md transition-shadow">
//                   {product.discount && (
//                     <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
//                       {product.discount}
//                     </span>
//                   )}
//                   <div className="relative w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-lg">
//                     <img src={product.image} alt={product.name} className="object-cover w-full h-full" onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = `https://placehold.co/300x300/E0E0E0/5B3A8E?text=${product.name.replace(/[^a-zA-Z0-9 ]/g, '').split(' ')[0]}`; }}/>
//                     <button 
//                       className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
//                       aria-label="Add to cart"
//                     >
//                       <ShoppingCart className="w-5 h-5 text-gray-700" />
//                     </button>
//                   </div>
//                   <div className="p-4 flex flex-col flex-grow">
//                     <h3 className="font-semibold text-base text-gray-900 mb-1 leading-tight">{product.name}</h3>
//                     {product.fullName && <p className="text-gray-600 text-sm mb-2 h-10 overflow-hidden">{product.fullName}</p>}
//                     <div className="flex items-center gap-2 mb-2 mt-auto">
//                       <span className="font-bold text-xl" style={{color: '#2E1065'}}>{product.displayPrice}</span>
//                       {product.originalPrice && (
//                         <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
//                       )}
//                     </div>
//                     <button 
//                       onClick={() => handleBuyNow(product)}
//                       className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors mt-2"
//                       style={{backgroundColor: '#2E1065'}}
//                       onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E0A4D'}
//                       onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E1065'}
//                     >
//                       Buy Now
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination (Placeholder) */}
//             <div className="flex justify-center mt-8">
//               <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
//                 Show More
//               </button>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductListing;



// 'use client';

// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Filter, ShoppingCart, Check, X, Trash2, Plus, Minus } from 'lucide-react';

// interface Product {
//   id: number;
//   name: string;
//   fullName?: string;
//   price: number;
//   displayPrice: string;
//   originalPrice?: string;
//   discount?: string;
//   image: string;
//   category: string;
// }

// const ProductListing = () => {
//   const [filters, setFilters] = useState({
//     price: false,
//     storage: false,
//     camera: false,
//     display: false,
//     brand: false
//   });

//   const [showCheckout, setShowCheckout] = useState(false);
//   const [checkoutStep, setCheckoutStep] = useState(1);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedPayment, setSelectedPayment] = useState('');
//   const [deliveryOption, setDeliveryOption] = useState('home');
//   const [currentSearchIndex, setCurrentSearchIndex] = useState(0);

//   const searchTexts = [
//     "iphones 11",
//     "iphones 15 pro max", 
//     "nikon camera",
//     "samsung galaxy s24",
//     "macbook pro",
//     "drone 4k",
//     "apple watch",
//     "samsung mobile phone"
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSearchIndex((prev) => (prev + 1) % searchTexts.length);
//     }, 2000);
    
//     return () => clearInterval(interval);
//   }, []);

//   const handleBuyNow = (product: Product) => {
//     setSelectedProduct(product);
//     setShowCheckout(true);
//     setCheckoutStep(1);
//   };

//   const nextStep = () => {
//     if (checkoutStep < 4) {
//       setCheckoutStep(checkoutStep + 1);
//     }
//   };

//   const closeCheckout = () => {
//     setShowCheckout(false);
//     setCheckoutStep(1);
//     setSelectedProduct(null);
//     setQuantity(1);
//     setSelectedPayment('');
//   };

//   const getStepTitle = (step: number) => {
//     switch(step) {
//       case 1: return 'Cart';
//       case 2: return 'Shipping';
//       case 3: return 'Payment';
//       case 4: return 'Thank You';
//       default: return '';
//     }
//   };

//   const calculateTotal = () => {
//     if (!selectedProduct) return 0;
//     const subtotal = selectedProduct.price * quantity;
//     const shipping = 250;
//     return subtotal + shipping;
//   };

//   const toggleFilter = (filterName: string) => {
//     setFilters(prev => ({
//       ...prev,
//       [filterName]: !prev[filterName]
//     }));
//   };

//   const products: Product[] = [
//     {
//       id: 1,
//       name: "Freestyle -",
//       price: 167995,
//       displayPrice: "KES 167,995",
//       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Projector",
//       category: "projector"
//     },
//     {
//       id: 2,
//       name: "Samsung Galaxy A15 - 6.5\"",
//       fullName: "Samsung Galaxy A15 - 6.5\" - 128GB ROM - 4GB RAM - Dual SIM - 4G",
//       price: 29499,
//       displayPrice: "KES 29,499",
//       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+A15",
//       category: "phone"
//     },
//     {
//       id: 3,
//       name: "Samsung Galaxy A35 5G - 6.6\"",
//       fullName: "Samsung Galaxy A35 5G - 6.6\" - 128GB ROM - 6GB RAM - Dual SIM",
//       price: 39585,
//       displayPrice: "KES 39,585",
//       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+A35",
//       category: "phone"
//     },
//     {
//       id: 4,
//       name: "Samsung Galaxy S24 Ultra",
//       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
//       price: 134945,
//       displayPrice: "KES 134,945",
//       originalPrice: "KES 165,650",
//       discount: "19% Off",
//       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+S24+Ultra",
//       category: "phone"
//     },
//     {
//       id: 5,
//       name: "Samsung Galaxy S24 Ultra",
//       fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
//       price: 134945,
//       displayPrice: "KES 134,945",
//       originalPrice: "KES 165,650",
//       discount: "19% Off",
//       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+S24+Ultra",
//       category: "phone"
//     },
//     {
//       id: 6,
//       name: "Samsung Galaxy Z Fold 6 - 7.6\"",
//       fullName: "Samsung Galaxy Z Fold 6 - 7.6\" - 12GB RAM - 512GB ROM",
//       price: 194979,
//       displayPrice: "KES 194,979",
//       originalPrice: "KES 253,344",
//       discount: "23% Off",
//       image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+Z+Fold+6",
//       category: "phone"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       {/* Checkout Modal */}
//       {showCheckout && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 overflow-y-auto">
//           <div className="bg-white rounded-lg w-full max-w-6xl my-4 min-h-[600px] shadow-lg">
//             <div className="p-4 sm:p-6 border-b border-gray-200">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Checkout (1 item)</h2>
//                 <button onClick={closeCheckout} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                   <X className="w-6 h-6 text-gray-600" />
//                 </button>
//               </div>
              
//               <div className="flex items-center justify-between mb-4 overflow-x-auto">
//                 {[1, 2, 3, 4].map((step) => (
//                   <div key={step} className="flex items-center min-w-0">
//                     <div 
//                       className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
//                       style={{
//                         backgroundColor: step <= checkoutStep ? '#2E1065' : '#D1D5DB',
//                         color: step <= checkoutStep ? 'white' : '#6B7280'
//                       }}
//                     >
//                       {step < checkoutStep ? <Check className="w-4 h-4" /> : step}
//                     </div>
//                     <span className="ml-2 text-xs sm:text-sm font-medium whitespace-nowrap text-gray-700">{getStepTitle(step)}</span>
//                     {step < 4 && (
//                       <div 
//                         className="w-4 sm:w-8 lg:w-16 h-0.5 ml-2 sm:ml-4 flex-shrink-0"
//                         style={{backgroundColor: step < checkoutStep ? '#2E1065' : '#D1D5DB'}}
//                       />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="p-4 sm:p-6 min-h-[500px]">
//               {checkoutStep === 1 && (
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
//                   <div className="lg:col-span-2 space-y-6">
//                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
//                       <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Items</h3>
//                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
//                         <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
//                           <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover"/>
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="font-semibold text-gray-900">{selectedProduct?.name}</h4>
//                           <p className="text-sm text-gray-600">{selectedProduct?.fullName}</p>
//                           <p className="font-bold text-lg text-gray-900">{selectedProduct?.displayPrice}</p>
//                         </div>
//                         <div className="flex items-center gap-2 flex-shrink-0">
//                           <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
//                             <Minus className="w-4 h-4 text-gray-700" />
//                           </button>
//                           <span className="w-8 text-center font-medium text-gray-800">{quantity}</span>
//                           <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
//                             <Plus className="w-4 h-4 text-gray-700" />
//                           </button>
//                         </div>
//                         <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors flex-shrink-0">
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
//                     <div className="space-y-3">
//                       <div className="flex justify-between text-gray-700">
//                         <span>Subtotal:</span>
//                         <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
//                       </div>
//                       <div className="flex justify-between text-gray-700">
//                         <span>Shipping & Handling:</span>
//                         <span>KES 250</span>
//                       </div>
//                       <div className="border-t border-gray-200 pt-3">
//                         <div className="flex justify-between font-bold text-lg text-gray-900">
//                           <span>Grand Total</span>
//                           <span>KES {calculateTotal().toLocaleString()}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <button 
//                       onClick={nextStep} 
//                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors shadow"
//                       style={{backgroundColor: '#2E1065'}}
//                     >
//                       PROCEED TO CHECKOUT
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {checkoutStep === 2 && (
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
//                   <div className="lg:col-span-2 space-y-6">
//                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
//                       <div className="flex items-center gap-2 mb-4">
//                         <div 
//                           className="w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
//                           style={{backgroundColor: '#2E1065'}}
//                         >
//                           2
//                         </div>
//                         <h3 className="text-lg font-semibold text-gray-800">Shipping Address</h3>
//                       </div>
                      
//                       <div className="space-y-4">
//                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
//                           <div className="flex items-center gap-2 mb-3">
//                             <input type="radio" name="delivery" checked={deliveryOption === 'home'} onChange={() => setDeliveryOption('home')} className="form-radio text-indigo-600" />
//                             <label className="font-medium text-gray-800">Delivery to your home or office</label>
//                           </div>
//                           <p className="text-sm text-gray-600 mb-4">Fill in your Home or office address</p>
                          
//                           {deliveryOption === 'home' && (
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                               <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Firstname *</label>
//                                 <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
//                               </div>
//                               <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Lastname *</label>
//                                 <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
//                               </div>
//                               <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
//                                 <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500">
//                                   <option>Nairobi</option>
//                                   <option>Mombasa</option>
//                                   <option>Kisumu</option>
//                                 </select>
//                               </div>
//                               <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Recipient Number *</label>
//                                 <input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
//                               </div>
//                               <div className="sm:col-span-2">
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//                                 <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
//                               </div>
//                             </div>
//                           )}
//                         </div>

//                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
//                           <div className="flex items-center gap-2 mb-3">
//                             <input type="radio" name="delivery" checked={deliveryOption === 'pickup'} onChange={() => setDeliveryOption('pickup')} className="form-radio text-indigo-600" />
//                             <label className="font-medium text-gray-800">Pickup Station</label>
//                           </div>
//                           <p className="text-sm text-gray-600">I would like to pick my order at the closest Masoko pick up point</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
//                     <div className="space-y-4">
//                       <div>
//                         <h4 className="font-medium text-gray-800 mb-2">PRODUCT</h4>
//                         <div className="flex gap-3 items-center">
//                           <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
//                             <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover"/>
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <p className="font-medium text-sm text-gray-900">{selectedProduct?.name}</p>
//                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
//                             <p className="font-bold text-gray-900">{selectedProduct?.displayPrice}</p>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="space-y-2 text-gray-700">
//                         <div className="flex justify-between">
//                           <span>Shipping & Handling:</span>
//                           <span>KES 250</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span>Subtotal:</span>
//                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
//                         </div>
//                         <div className="border-t border-gray-200 pt-2">
//                           <div className="flex justify-between font-bold text-lg text-gray-900">
//                             <span>Grand Total</span>
//                             <span>KES {calculateTotal().toLocaleString()}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <button 
//                       onClick={nextStep} 
//                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors shadow"
//                       style={{backgroundColor: '#2E1065'}}
//                     >
//                       CONTINUE TO PAYMENT
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {checkoutStep === 3 && (
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
//                   <div className="lg:col-span-2 space-y-6">
//                     <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
//                       <h3 className="text-lg font-semibold text-gray-800 mb-4">SELECT PAYMENT METHOD</h3>
//                       <p className="text-sm text-red-600 mb-4">Select preferred payment method for enhanced shopping experience.</p>
                      
//                       <div className="space-y-3">
//                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-center gap-3">
//                           <input type="radio" name="payment" value="mpesa" checked={selectedPayment === 'mpesa'} onChange={(e) => setSelectedPayment(e.target.value)} className="form-radio text-green-600" />
//                           <span className="font-medium text-gray-800">Lipa Na M-Pesa</span>
//                           <span className="text-green-600 font-bold ml-auto">m-pesa</span>
//                         </div>
                        
//                         <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-center gap-3">
//                           <input type="radio" name="payment" value="bonga" checked={selectedPayment === 'bonga'} onChange={(e) => setSelectedPayment(e.target.value)} className="form-radio text-orange-600" />
//                           <span className="font-medium text-gray-800">Lipa Na Bonga</span>
//                           <span className="text-orange-600 font-bold ml-auto">BONGA</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
                    
//                     <div className="space-y-4">
//                       <div>
//                         <h4 className="font-medium text-gray-800 mb-2">PRODUCT</h4>
//                         <div className="flex gap-3 items-center">
//                           <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
//                             <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover"/>
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <p className="font-medium text-sm text-gray-900">{selectedProduct?.name}</p>
//                             <p className="text-xs text-gray-600">{selectedProduct?.fullName}</p>
//                             <p className="font-bold text-gray-900">{selectedProduct?.displayPrice}</p>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="space-y-2 text-gray-700">
//                         <div className="flex justify-between">
//                           <span>Shipping & Handling:</span>
//                           <span>KES 250</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span>Subtotal:</span>
//                           <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
//                         </div>
//                         <div className="border-t border-gray-200 pt-2">
//                           <div className="flex justify-between font-bold text-lg text-gray-900">
//                             <span>Grand Total</span>
//                             <span>KES {calculateTotal().toLocaleString()}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <button 
//                       onClick={nextStep} 
//                       disabled={!selectedPayment} 
//                       className="w-full text-white py-3 rounded-lg font-semibold mt-6 disabled:bg-gray-300 transition-colors shadow"
//                       style={{backgroundColor: selectedPayment ? '#2E1065' : '#D1D5DB'}}
//                     >
//                       COMPLETE PAYMENT
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {checkoutStep === 4 && (
//                 <div className="text-center py-8 sm:py-12">
//                   <div 
//                     className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
//                     style={{backgroundColor: '#2E1065'}}
//                   >
//                     <Check className="w-8 h-8 text-white" />
//                   </div>
//                   <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
//                   <p className="text-lg text-gray-600 mb-8">Your order has been successfully placed.</p>
//                   <button 
//                     onClick={closeCheckout} 
//                     className="text-white px-8 py-3 rounded-lg font-semibold mt-8 transition-colors shadow"
//                     style={{backgroundColor: '#2E1065'}}
//                   >
//                     Continue Shopping
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="container mx-auto px-4 py-6 max-w-7xl">
//         {/* Header Section */}
//         <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg mb-8 px-4 sm:px-6 py-6 sm:py-8" style={{background: 'linear-gradient(to right, #2E1065, #1E0A4D)'}}>
//           <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6">
//             <button className="text-white font-semibold border-b-2 border-white pb-1">
//               Products
//             </button>
//             <button className="text-white/80 font-semibold hover:text-white transition-colors">
//               Manufacturers
//             </button>
//             <button className="text-white/80 font-semibold hover:text-white transition-colors">
//               Regional supplies
//             </button>
//           </div>

//           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
//             <div className="relative flex-1 max-w-2xl">
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   className="w-full px-6 py-3 rounded-full text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/30"
//                   style={{ caretColor: 'transparent' }}
//                   readOnly
//                 />
//                 <div className="absolute left-6 top-1/2 -translate-y-1/2 overflow-hidden h-6">
//                   <div 
//                     className="transition-transform duration-500 ease-in-out"
//                     style={{ 
//                       transform: `translateY(-${currentSearchIndex * 24}px)` 
//                     }}
//                   >
//                     {searchTexts.map((text, index) => (
//                       <div key={index} className="h-6 flex items-center text-gray-800">
//                         {text}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-2 sm:gap-4">
//               <button className="px-4 sm:px-12 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2">
//                 <span>🔍</span> <span className="hidden sm:inline">Search</span>
//               </button>
//               <button className="px-4 sm:px-6 py-3 bg-white rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2" style={{color: '#2E1065'}}>
//                 <span>📷</span> <span className="hidden sm:inline">Image Search</span>
//               </button>
//             </div>
//           </div>

//           <div className="text-center">
//             <span className="text-white/90 text-sm">Frequently searched: </span>
//             <div className="inline-flex flex-wrap gap-2 mt-1">
//               {['drone 4K', 'iphones 11', 'samsung mobile phone', 'i phone', 'camera', 'nikon camera'].map((term, index) => (
//                 <button key={index} className="text-white/90 text-sm hover:text-white transition-colors hover:underline">
//                   {term}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Layout - Filter and Products Side by Side */}
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Filter Sidebar - Always visible, no toggle */}
//           <aside className="w-full lg:w-64 bg-white rounded-lg shadow-sm p-4 h-fit flex-shrink-0 border border-gray-200">
//             <div className="flex items-center gap-2 mb-4">
//               <Filter className="w-4 h-4 text-green-600" />
//               <span className="text-base font-semibold text-gray-800">Filter</span>
//             </div>

//             <div className="space-y-1">
//               <div className="border-b border-gray-100 pb-3 mb-3">
//                 <button
//                   onClick={() => toggleFilter('price')}
//                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
//                 >
//                   <span className="text-gray-800 font-medium text-sm">Price</span>
//                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.price ? 'rotate-180' : ''}`} />
//                 </button>
//               </div>

//               <div className="border-b border-gray-100 pb-3 mb-3">
//                 <button
//                   onClick={() => toggleFilter('storage')}
//                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
//                 >
//                   <span className="text-gray-800 font-medium text-sm">Storage Capacity</span>
//                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.storage ? 'rotate-180' : ''}`} />
//                 </button>
//               </div>

//               <div className="border-b border-gray-100 pb-3 mb-3">
//                 <button
//                   onClick={() => toggleFilter('camera')}
//                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
//                 >
//                   <span className="text-gray-800 font-medium text-sm">Camera Megapixel</span>
//                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.camera ? 'rotate-180' : ''}`} />
//                 </button>
//               </div>

//               <div className="border-b border-gray-100 pb-3 mb-3">
//                 <button
//                   onClick={() => toggleFilter('display')}
//                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
//                 >
//                   <span className="text-gray-800 font-medium text-sm">Display Size</span>
//                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.display ? 'rotate-180' : ''}`} />
//                 </button>
//               </div>

//               <div className="pb-3">
//                 <button
//                   onClick={() => toggleFilter('brand')}
//                   className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
//                 >
//                   <span className="text-gray-800 font-medium text-sm">Brand</span>
//                   <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.brand ? 'rotate-180' : ''}`} />
//                 </button>
//               </div>
//             </div>
//           </aside>

//           {/* Products Area */}
//           <main className="flex-1 min-w-0">
//             <div className="mb-6">
//               <div className="flex justify-between items-center bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200">
//                 <h2 className="text-xl sm:text-2xl font-bold text-gray-900">45 Results Found</h2> 
//                 <div className="flex items-center gap-2">
//                   <span className="text-gray-700 text-sm hidden sm:inline">Sort by:</span>
//                   <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-indigo-500 focus:border-indigo-500">
//                     <option>Relevance</option>
//                     <option>Price: Low to High</option>
//                     <option>Price: High to Low</option>
//                     <option>Newest Arrivals</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {products.map((product) => (
//                 <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col border border-gray-200 hover:shadow-md transition-shadow relative">
//                   {product.discount && (
//                     <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
//                       {product.discount}
//                     </span>
//                   )}
//                   <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-lg">
//                     <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
//                     <button 
//                       className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
//                       aria-label="Add to cart"
//                     >
//                       <ShoppingCart className="w-5 h-5 text-gray-700" />
//                     </button>
//                   </div>
//                   <div className="p-5 flex flex-col flex-grow">
//                     <h3 className="font-semibold text-lg text-gray-900 mb-2 leading-tight">{product.name}</h3>
//                     {product.fullName && <p className="text-gray-600 text-sm mb-3 h-12 overflow-hidden leading-relaxed">{product.fullName}</p>}
//                     <div className="flex items-center gap-2 mb-3 mt-auto">
//                       <span className="font-bold text-2xl" style={{color: '#2E1065'}}>{product.displayPrice}</span>
//                       {product.originalPrice && (
//                         <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
//                       )}
//                     </div>
//                     <button 
//                       onClick={() => handleBuyNow(product)}
//                       className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors text-base"
//                       style={{backgroundColor: '#2E1065'}}
//                     >
//                       Buy Now
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex justify-center mt-8">
//               <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
//                 Show More
//               </button>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductListing;



'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Filter, ShoppingCart, Check, X, Trash2, Plus, Minus } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  fullName?: string;
  price: number;
  displayPrice: string;
  originalPrice?: string;
  discount?: string;
  image: string;
  category: string;
}

const ProductListing = () => {
  const [filters, setFilters] = useState({
    price: false,
    storage: false,
    camera: false,
    display: false,
    brand: false
  });

  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('home');
  const [currentSearchIndex, setCurrentSearchIndex] = useState(0);

  const searchTexts = [
    "iphones 11",
    "iphones 15 pro max", 
    "nikon camera",
    "samsung galaxy s24",
    "macbook pro",
    "drone 4k",
    "apple watch",
    "samsung mobile phone"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSearchIndex((prev) => (prev + 1) % searchTexts.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product);
    setShowCheckout(true);
    setCheckoutStep(1);
  };

  const nextStep = () => {
    if (checkoutStep < 4) {
      setCheckoutStep(checkoutStep + 1);
    }
  };

  const closeCheckout = () => {
    setShowCheckout(false);
    setCheckoutStep(1);
    setSelectedProduct(null);
    setQuantity(1);
    setSelectedPayment('');
  };

  const getStepTitle = (step: number) => {
    switch(step) {
      case 1: return 'Cart';
      case 2: return 'Shipping';
      case 3: return 'Payment';
      case 4: return 'Thank You';
      default: return '';
    }
  };

  const calculateTotal = () => {
    if (!selectedProduct) return 0;
    const subtotal = selectedProduct.price * quantity;
    const shipping = 250;
    return subtotal + shipping;
  };

  const toggleFilter = (filterName: string) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const products: Product[] = [
    {
      id: 1,
      name: "Freestyle -",
      price: 167995,
      displayPrice: "KES 167,995",
      image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Projector",
      category: "projector"
    },
    {
      id: 2,
      name: "Samsung Galaxy A15 - 6.5\"",
      fullName: "Samsung Galaxy A15 - 6.5\" - 128GB ROM - 4GB RAM - Dual SIM - 4G",
      price: 29499,
      displayPrice: "KES 29,499",
      image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+A15",
      category: "phone"
    },
    {
      id: 3,
      name: "Samsung Galaxy A35 5G - 6.6\"",
      fullName: "Samsung Galaxy A35 5G - 6.6\" - 128GB ROM - 6GB RAM - Dual SIM",
      price: 39585,
      displayPrice: "KES 39,585",
      image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+A35",
      category: "phone"
    },
    {
      id: 4,
      name: "Samsung Galaxy S24 Ultra",
      fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
      price: 134945,
      displayPrice: "KES 134,945",
      originalPrice: "KES 165,650",
      discount: "19% Off",
      image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+S24+Ultra",
      category: "phone"
    },
    {
      id: 5,
      name: "Samsung Galaxy S24 Ultra",
      fullName: "Samsung Galaxy S24 Ultra - 6.8\" - 512GB ROM - 12GB RAM",
      price: 134945,
      displayPrice: "KES 134,945",
      originalPrice: "KES 165,650",
      discount: "19% Off",
      image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+S24+Ultra",
      category: "phone"
    },
    {
      id: 6,
      name: "Samsung Galaxy Z Fold 6 - 7.6\"",
      fullName: "Samsung Galaxy Z Fold 6 - 7.6\" - 12GB RAM - 512GB ROM",
      price: 194979,
      displayPrice: "KES 194,979",
      originalPrice: "KES 253,344",
      discount: "23% Off",
      image: "https://placehold.co/300x300/E0E0E0/5B3A8E?text=Galaxy+Z+Fold+6",
      category: "phone"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg w-full max-w-6xl my-4 min-h-[600px] shadow-lg">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Checkout (1 item)</h2>
                <button onClick={closeCheckout} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              
              <div className="flex items-center justify-between mb-4 overflow-x-auto">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center min-w-0">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{
                        backgroundColor: step <= checkoutStep ? '#2E1065' : '#D1D5DB',
                        color: step <= checkoutStep ? 'white' : '#6B7280'
                      }}
                    >
                      {step < checkoutStep ? <Check className="w-4 h-4" /> : step}
                    </div>
                    <span className="ml-2 text-xs sm:text-sm font-medium whitespace-nowrap text-gray-700">{getStepTitle(step)}</span>
                    {step < 4 && (
                      <div 
                        className="w-4 sm:w-8 lg:w-16 h-0.5 ml-2 sm:ml-4 flex-shrink-0"
                        style={{backgroundColor: step < checkoutStep ? '#2E1065' : '#D1D5DB'}}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-6 min-h-[500px]">
              {checkoutStep === 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Items</h3>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900">{selectedProduct?.name}</h4>
                          <p className="text-sm text-gray-600">{selectedProduct?.fullName}</p>
                          <p className="font-bold text-lg text-gray-900">{selectedProduct?.displayPrice}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <Minus className="w-4 h-4 text-gray-700" />
                          </button>
                          <span className="w-8 text-center font-medium text-gray-800">{quantity}</span>
                          <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <Plus className="w-4 h-4 text-gray-700" />
                          </button>
                        </div>
                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors flex-shrink-0">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-700">
                        <span>Subtotal:</span>
                        <span>KES {(selectedProduct?.price && selectedProduct.price * quantity).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-gray-700">
                        <span>Shipping & Handling:</span>
                        <span>KES 250</span>
                      </div>
                      <div className="border-t border-gray-200 pt-3">
                        <div className="flex justify-between font-bold text-lg text-gray-900">
                          <span>Grand Total</span>
                          <span>KES {calculateTotal().toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={nextStep} 
                      className="w-full text-white py-3 rounded-lg font-semibold mt-6 transition-colors shadow"
                      style={{backgroundColor: '#2E1065'}}
                    >
                      PROCEED TO CHECKOUT
                    </button>
                  </div>
                </div>
              )}

              {checkoutStep === 4 && (
                <div className="text-center py-8 sm:py-12">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: '#2E1065'}}
                  >
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
                  <p className="text-lg text-gray-600 mb-8">Your order has been successfully placed.</p>
                  <button 
                    onClick={closeCheckout} 
                    className="text-white px-8 py-3 rounded-lg font-semibold mt-8 transition-colors shadow"
                    style={{backgroundColor: '#2E1065'}}
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg mb-8 px-4 sm:px-6 py-6 sm:py-8" style={{background: 'linear-gradient(to right, #2E1065, #1E0A4D)'}}>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6">
            <button className="text-white font-semibold border-b-2 border-white pb-1">
              Products
            </button>
            <button className="text-white/80 font-semibold hover:text-white transition-colors">
              Manufacturers
            </button>
            <button className="text-white/80 font-semibold hover:text-white transition-colors">
              Regional supplies
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <div className="relative flex-1 max-w-2xl">
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full px-6 py-3 rounded-full text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                  style={{ caretColor: 'transparent' }}
                  readOnly
                />
                <div className="absolute left-6 top-1/2 -translate-y-1/2 overflow-hidden h-6">
                  <div 
                    className="transition-transform duration-500 ease-in-out"
                    style={{ 
                      transform: `translateY(-${currentSearchIndex * 24}px)` 
                    }}
                  >
                    {searchTexts.map((text, index) => (
                      <div key={index} className="h-6 flex items-center text-gray-800">
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-4">
              <button className="px-4 sm:px-12 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2">
                <span>🔍</span> <span className="hidden sm:inline">Search</span>
              </button>
              <button className="px-4 sm:px-6 py-3 bg-white rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2" style={{color: '#2E1065'}}>
                <span>📷</span> <span className="hidden sm:inline">Image Search</span>
              </button>
            </div>
          </div>

          <div className="text-center">
            <span className="text-white/90 text-sm">Frequently searched: </span>
            <div className="inline-flex flex-wrap gap-2 mt-1">
              {['drone 4K', 'iphones 11', 'samsung mobile phone', 'i phone', 'camera', 'nikon camera'].map((term, index) => (
                <button key={index} className="text-white/90 text-sm hover:text-white transition-colors hover:underline">
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Layout - Filter and Products Side by Side */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Sidebar - Always visible, no toggle */}
          <aside className="w-full lg:w-64 bg-white rounded-lg shadow-sm p-4 h-fit flex-shrink-0 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-4 h-4 text-green-600" />
              <span className="text-base font-semibold text-gray-800">Filter</span>
            </div>

            <div className="space-y-1">
              <div className="border-b border-gray-100 pb-3 mb-3">
                <button
                  onClick={() => toggleFilter('price')}
                  className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
                >
                  <span className="text-gray-800 font-medium text-sm">Price</span>
                  <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.price ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className="border-b border-gray-100 pb-3 mb-3">
                <button
                  onClick={() => toggleFilter('storage')}
                  className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
                >
                  <span className="text-gray-800 font-medium text-sm">Storage Capacity</span>
                  <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.storage ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className="border-b border-gray-100 pb-3 mb-3">
                <button
                  onClick={() => toggleFilter('camera')}
                  className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
                >
                  <span className="text-gray-800 font-medium text-sm">Camera Megapixel</span>
                  <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.camera ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className="border-b border-gray-100 pb-3 mb-3">
                <button
                  onClick={() => toggleFilter('display')}
                  className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
                >
                  <span className="text-gray-800 font-medium text-sm">Display Size</span>
                  <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.display ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className="pb-3">
                <button
                  onClick={() => toggleFilter('brand')}
                  className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 rounded-lg px-2 transition-colors"
                >
                  <span className="text-gray-800 font-medium text-sm">Brand</span>
                  <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${filters.brand ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </aside>

          {/* Products Area */}
          <main className="flex-1 min-w-0">
            <div className="mb-6">
              <div className="flex justify-between items-center bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">45 Results Found</h2> 
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 text-sm hidden sm:inline">Sort by:</span>
                  <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Relevance</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col border border-gray-200 hover:shadow-md transition-shadow relative">
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                      {product.discount}
                    </span>
                  )}
                  <div className="relative w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-lg">
                    <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                    <button 
                      className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold text-base text-gray-900 mb-1 leading-tight">{product.name}</h3>
                    {product.fullName && <p className="text-gray-600 text-sm mb-2 h-10 overflow-hidden">{product.fullName}</p>}
                    <div className="flex items-center gap-2 mb-2 mt-auto">
                      <span className="font-bold text-xl" style={{color: '#2E1065'}}>{product.displayPrice}</span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                      )}
                    </div>
                    <button 
                      onClick={() => handleBuyNow(product)}
                      className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors mt-2"
                      style={{backgroundColor: '#2E1065'}}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
                Show More
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;