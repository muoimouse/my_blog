import mongoose from "mongoose";
import moment from "moment";

const now = moment(moment.now()).format();
export type ArticleModel = mongoose.Document & {
    title: string;
    category: String;
    content: string;
    tags: string;
    image: string;
    created: string;
    modified: string;
};

const articleSchema = new mongoose.Schema({
    title: { type: String, unique: true },
    category: { type: String },
    content: { type: String },
    tags: { type: Array },
    image: { type: String },
    created: { type: String, default: now },
    modified: { type: String, default: now }
});

const Article = mongoose.model("Article", articleSchema);
export default Article;
