import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      unique: true,
    },
    postId: {
      type: String,
      required: true,
    },
    usertId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Comment", commentSchema);
