import { getSqlClient } from "../config/sqlClient.js";
import { PageContentModel } from "../modules/content/content.model.js";
import { vectorOperations } from "../config/vectorClient.js";
import { logger } from "../utils/logger.js";

export const runContentSync = async () => {
  const db = getSqlClient();
  const pages = await db("pages").select("slug", "title", "status");
  const docs = await PageContentModel.find({
    pageSlug: { $in: pages.map((p) => p.slug) },
  })
    .lean()
    .exec();

  const vectors = docs
    .filter(
      (doc) =>
        Array.isArray(doc.summaryEmbedding) && doc.summaryEmbedding.length
    )
    .map((doc) => ({
      id: doc.pageSlug,
      values: doc.summaryEmbedding,
      metadata: {
        slug: doc.pageSlug,
      },
    }));

  if (vectors.length) {
    await vectorOperations.upsert(vectors);
    logger.info({ count: vectors.length }, "Content vectors refreshed");
  }
};
