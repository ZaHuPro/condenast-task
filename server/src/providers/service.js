import log from "../utils/logger";
import { API_KEY } from "./configs";
import NewsAPI from "newsapi";

const newsAPI = new NewsAPI(API_KEY);

export const newsOfTopHeadlines = async (page, pageSize) => {
  try {
    const response = await newsAPI.v2.topHeadlines({
      language: 'en',
      country: 'gb',
      pageSize,
      page
    })
    return response;
  } catch (err) {
    log.error(err);
    return {
      status: "error",
      err: err,
    };
  }
}

export const newsOfEverything = async (page, pageSize, query) => {
  try {
    const response = await newsAPI.v2.everything({
      q: query,
      language: 'en',
      pageSize,
      page
    })
    return response;
  } catch (err) {
    log.error(err);
    return {
      status: "error",
      err: err,
    };
  }
}