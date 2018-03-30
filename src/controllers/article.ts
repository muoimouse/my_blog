import async from "async";
import { default as Article, ArticleModel } from "../models/Articles";
import { Request, Response, NextFunction } from "express";
import { WriteError } from "mongodb";

/**
 * GET /post
 * Port page
 */
export let index = (req: Request, res: Response) => {
  res.render("client/article");
};
