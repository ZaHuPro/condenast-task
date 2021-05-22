import log from '../utils/logger';
import { successRespond, errorRespond } from "../utils/responder";
import { newsOfEverything, newsOfTopHeadlines } from "../providers/service";

export const getArticlesController = async (req, res) => {
  const { query } = req.query;
  const pageSize = Number(req.query.pageSize || 12);
  const page = Number(req.query.page || 1);
  log.debug("getArticlesController :: %o", { page, pageSize, query })
  let articlesData = {};
  if (query) {
    log.debug("Calling :: newsOfEverything...")
    articlesData = await newsOfEverything(page, pageSize, query);
  } else {
    log.debug("Calling :: newsOfTopHeadlines...")
    articlesData = await newsOfTopHeadlines(page, pageSize);
  }
  const { status, articles, totalResults } = articlesData;
  if (!status || status !== 'ok') {
    return errorRespond(res, "Error while fetching the articles", 400);
  }
  return successRespond(res, "Successfully fetched", 202, {
    articles,
    page: {
      pageSize,
      page,
      totalResults,
      totalPage: Math.ceil(totalResults / pageSize),
    },
  });
};
