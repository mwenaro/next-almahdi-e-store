"use client"
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";
import {
  addToCart,
  reduceFromCart,
  removeFromCart,
} from "@/store/features/cartSlice";

export function ShoppingCartButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.shoppingCart);

  // Correctly calculate the total amount
  const getTotalAmount = () =>
    cartItems.reduce((a, val) => a + val.price * val.quantity, 0);

  // Handle item increase
  const handleIncrease = (id: string) => {
    const item = cartItems.find((i) => i._id === id);
    if (item) {
      dispatch(addToCart(item));
    }
  };

  // Update total whenever cartItems changes
  useEffect(() => {
    setTotal(getTotalAmount());
  }, [cartItems]);

  // Handle item decrease
  const handleDecrease = (id: string) => {
    dispatch(reduceFromCart(id));
  };

  // Handle item removal
  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const shoppingCart = useSelector(
    (state: RootState) => state.cart.shoppingCart
  );

  return (
    <div>
      <Button variant={"ghost"} onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-bag h-6 w-6 text-primary"
        >
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
        <span className="absolute -top-2 -right-2 font-bold bg-accent text-foreground rounded-full px-2 py-0.5 text-xs">
          {shoppingCart.length || 0}
        </span>
      </Button>

      <Modal
        title="Shopping Cart"
        description="Your selected items are listed below"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {cartItems.length > 0 ? (
          <>
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item._id} className="flex items-center py-4">
                  <div className="flex justify-between w-full">
                    <div className="flex items-center">
                      <span className="font-medium">{item.name}</span>
                      <span className="ml-2 text-gray-500">
                        - Ksh {+item.price.toFixed(2)} x {item.quantity}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleIncrease(item._id)}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleDecrease(item._id)}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                      >
                        -
                      </button>
                      <button
                        onClick={() => handleRemove(item._id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="p-5">
              <h3 className="font-semibold text-lg">Total Amount: Ksh {total.toFixed(2)}</h3>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </Modal>
    </div>
  );
}
