import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-07-30.basil",
})

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions) // ✅ get logged-in user
        const email = session?.user?.email || undefined

        const checkoutSession = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            customer_email: email, // ✅ pre-fills if logged in, shows form otherwise
            line_items: [
                {
                    price: "price_1S030tE3YJY8h6JJjigiwWrd",
                    quantity: 1,
                },
            ],
            success_url: `${process.env.NEXTAUTH_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXTAUTH_URL}/pricing?canceled=true`,
        })

        return NextResponse.json({ url: checkoutSession.url }) // ✅ correct helper
    } catch (err) {
        console.error("Stripe error:", err)
        return new NextResponse("Error creating session", { status: 500 })
    }
}