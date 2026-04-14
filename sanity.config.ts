import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import blog from "./sanity/schemas/blog";
import category from "./sanity/schemas/category";
import author from "./sanity/schemas/author";
import news from "./sanity/schemas/news";
import knowledgeHub from "./sanity/schemas/knowledgeHub";
import siteSettings from "./sanity/schemas/siteSettings";
import technicalPage from "./sanity/schemas/technicalPage";
import governancePage from "./sanity/schemas/governancePage";
import rfpPage from "./sanity/schemas/rfpPage";
import daoPage from "./sanity/schemas/daoPage";
import swapPage from "./sanity/schemas/swapPage";
import validatorPage from "./sanity/schemas/validatorPage";
import delegatorPage from "./sanity/schemas/delegatorPage";
import tokenomicsPage from "./sanity/schemas/tokenomicsPage";
import homePage from "./sanity/schemas/homePage";
import { PublishAction } from "./sanity/actions/PublishAction";

export default defineConfig({
  name: "blockmaze",
  title: "Blockmaze CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "3qbrvzvt",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: [
      blog,
      category,
      author,
      news,
      knowledgeHub,
      siteSettings,
      technicalPage,
      governancePage,
      rfpPage,
      daoPage,
      swapPage,
      validatorPage,
      delegatorPage,
      tokenomicsPage,
      homePage,
    ],
  },
  document: {
    actions: (prev) => [PublishAction, ...prev],
  },
});
