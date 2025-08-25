// app/api/stripe-webhook/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { add_purchase } from "@/lib/database";
import User from "@/models/User";

export const config = {
    api: {
        bodyParser: false, // Stripe requires raw body
    },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-07-30.basil",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
    const rawBody = await req.text();
    const sig = req.headers.get("stripe-signature");

    if (!sig) {
        return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
    } catch (err: any) {
        console.error("❌ Webhook signature error:", err.message);
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    try {
        if (event.type === "checkout.session.completed") {
            const session = event.data.object as Stripe.Checkout.Session;
            console.log(session)

            // Try to get email directly from session
            let email = session.customer_email || session.customer_details?.email;

            if (!email) {
                console.error("⚠️ Could not find email for checkout session", session.id);
                return NextResponse.json({ error: "No email found" }, { status: 400 });
            }

            // Mark user as purchased / add to DB
            await add_purchase(email);

            console.log(`✅ User ${email} marked as paid`);
        } else {
            console.log(`Unhandled event type: ${event.type}`);
        }
    } catch (err) {
        console.error("❌ Webhook handler error:", err);
        return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
    }

    return NextResponse.json({ received: true });
}
