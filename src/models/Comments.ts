import mongoose from "mongoose";

export type CommentModel = mongoose.Document & {
  user: string,
  articleId: string,
  content: string,
  reply: CommentModel[],
  like: like[],
  accept: boolean,
};

export type like = {
  user: string
};

const commentSchema = new mongoose.Schema({
  user: { type: String },
  content: { type: String },
  reply: Array,
  like: Array,
  accept: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
