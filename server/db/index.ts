import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("Connected to MongoDB");
});

export type IPost = {
  _id?: string;
  image?: string;
  title: string;
  message: string;
  author?: string;
  status: "draft" | "published";
  createdAt?: string;
  updatedAt?: string;
}

const PostSchema = new mongoose.Schema<IPost>(
  {
    image: { type: String },
    title: { type: String, required: true },
    message: { type: String, required: true },
    author: String,
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },
  },
  { timestamps: true }
);

export type PostQuery = mongoose.FilterQuery<IPost>;
export const PostModel = mongoose.model<IPost>("Post", PostSchema);
