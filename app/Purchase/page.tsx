"use client";
import React from 'react';
import PurchaseHero from '../components/PurchaseHero';
import Checkout from '../components/Checkout';
import PriceCard from '../components/PriceCard';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Shirt from '../components/Shirt';
import Hat from '../components/Hat';
import Backpack from '../components/Backpack';
import Mug from '../components/Mug';


if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Purchase() {
    return (
        <main className="flex flex-col items-center justify-center bg-linear-to-bl from-slate-950 via-slate-900 to-slate-950">
            <PurchaseHero />
            <PriceCard />
            <Shirt />
            <Hat />
            <Backpack />
            <Mug />
            <Elements stripe={stripePromise}>
                <Checkout />   
            </Elements>
        </main>
    );
}