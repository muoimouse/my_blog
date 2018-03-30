import mongoose from "mongoose";
import moment from "moment";

const now = moment(moment.now()).format();
export type ArticleModel = mongoose.Document & {
    title: string,
    category: string,
    content: string,
    tags: string,
    image: string
};

const articleSchema = new mongoose.Schema({
    title: { type: String, unique: true },
    category: { type: String },
    content: { type: String },
    tags: { type: Array },
    image: { type: String },
}, { timestamps: true });

const Article = mongoose.model("Article", articleSchema);
export default Article;
