import React from "react";
import { FAQsBodyItems } from "./FAQsItems";
import { FAQ } from "@/lib/types/definitions";

const faqs: FAQ[] = [
  {
    question: "How do I download the shopping app?",
    answer:
      "You can download the app from both the Apple App Store and Google Play Store. Just search for our app name, tap 'Download,' and install it on your device.",
  },
  {
    question: "Is registration required to make a purchase?",
    answer:
      "Yes, you need to create an account to complete your purchase and track your order. However, you can browse products without registering.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Click on 'Sign Up' on the app's home screen, fill in your name, email address, and password, and follow the steps to create your account.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, you can track your order in real-time by going to the 'My Orders' section. You’ll see the status of your order and delivery details.",
  },
  {
    question: "How do I cancel or change my order?",
    answer:
      "To cancel or modify an order, go to 'My Orders,' find the order you want to change, and follow the steps to cancel. Note that modifications may only be available before the order is processed.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit/debit cards, PayPal, Apple Pay, and Google Pay. Some regions may offer additional local payment options.",
  },
  {
    question: "How do I get free shipping?",
    answer:
      "Free shipping is available on orders over a certain amount, which varies depending on your location. Check the 'Shipping Info' page for details.",
  },
  {
    question: "How do I return an item?",
    answer:
      "You can initiate a return by going to the 'My Orders' section and selecting the item you wish to return. Follow the instructions to print a return label and ship the product back to us.",
  },
  {
    question: "When will I get my refund?",
    answer:
      "Refunds are processed once we receive and inspect the returned item. The refund will be credited to your original payment method within 5–10 business days.",
  },
  {
    question: "How do I contact customer service?",
    answer:
      "You can reach our support team via live chat, email, or phone. Visit the 'Help' section in the app to find the best way to contact us.",
  },
];
const FAQsBody = () => {
  return (
    <div className="top-0 left-0 sticky">
      <FAQsBodyItems faqs={faqs} />
    </div>
  );
};

export default FAQsBody;
