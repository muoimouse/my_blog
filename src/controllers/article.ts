import async from "async";
import { default as Article, ArticleModel } from "../models/Articles";
import { Request, Response, NextFunction } from "express";
import { WriteError } from "mongodb";

/**
 * GET
 */
