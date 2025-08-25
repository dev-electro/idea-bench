import dbConnect from './mongodb';
import User from '../models/User';

export async function add_purchase(email: string) {
    await dbConnect();
    const now = new Date();

    await User.updateOne(
        { email },                     // find by email
        { $set: { datePurchased: now } }, // update datePurchased
        { upsert: true }               // create if not exists
    );

    return true;
}