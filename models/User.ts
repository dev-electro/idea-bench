import mongoose, { Schema, Document, Model } from "mongoose"

export interface IUser extends Document {
    email: string
    datePurchased?: Date
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
    email: { type: String, required: true },
    datePurchased: { type: Date },
})

const User: Model<IUser> =
    (mongoose.models.User as Model<IUser>) ||
    mongoose.model<IUser>("User", UserSchema)

export default User
