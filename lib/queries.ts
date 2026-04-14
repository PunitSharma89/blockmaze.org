export const allBlogsQuery = `*[_type == "blog" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
  _id,
  title,
  slug,
  excerpt,
  featuredImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  category-> {
    title,
    slug
  },
  author-> {
    name,
    slug
  },
  "publishedAt": coalesce(publishedAt, _createdAt),
  seo
}`;

export const blogBySlugQuery = `*[_type == "blog" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  body,
  rawHtml,
  featuredImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  category-> {
    title,
    slug
  },
  author-> {
    name,
    slug,
    image {
      asset-> { url }
    },
    bio
  },
  publishedAt,
  seo
}`;

export const allCategoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description
}`;

export const blogsByCategoryQuery = `*[_type == "blog" && category->slug.current == $slug] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  featuredImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  category-> {
    title,
    slug
  },
  publishedAt
}`;

export const allNewsQuery = `*[_type == "news"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  featuredImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  publishedAt
}`;

export const allKnowledgeHubQuery = `*[_type == "knowledgeHub" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
  _id,
  title,
  slug,
  excerpt,
  bulletPoints,
  link,
  featuredImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  publishedAt
}`;

export const technicalPageQuery = `*[_type == "technicalPage" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
  _id,
  title,
  slug,
  sections[] {
    sectionId,
    heading,
    rawHtml,
    image {
      asset-> { url },
      alt,
      caption
    }
  }
}`;

export const governancePageQuery = `*[_type == "governancePage" && !(_id in path("drafts.**"))][0] {
  hero { badge, heading, subtext, buttonText, buttonHref, secondButtonText, secondButtonHref, image { asset-> { url }, alt } },
  about { eyebrow, heading, text },
  rolesSection { eyebrow, heading },
  roles[] { iconKey, title, description },
  scopeSection { eyebrow, heading },
  scopeItems[] { iconKey, title, description },
  structureSection { eyebrow, heading, subHeading },
  structure[] { iconKey, title, description },
  stepsSection { eyebrow, heading },
  steps[] { num, title, description },
  compliance { eyebrow, heading, text, tags, image { asset-> { url }, alt } },
  getInvolvedSection { eyebrow, heading },
  getInvolved[] { iconKey, title, description },
  faqSection { eyebrow, heading },
  faqs[] { question, answer }
}`;

export const rfpPageQuery = `*[_type == "rfpPage" && !(_id in path("drafts.**"))][0] {
  hero { badge, heading, subtext, buttonText, buttonHref },
  about { eyebrow, heading, text },
  programSection { eyebrow, heading },
  programCards[] { title, description },
  processSection { eyebrow, heading },
  processSteps[] { title, description },
  eligibility { eyebrow, heading, subtext, eligibilityHeading, complianceHeading, eligibilityItems, complianceItems },
  evaluation { eyebrow, heading, subtext, criteria },
  transparency { eyebrow, heading, subtext, features },
  faqSection { eyebrow, heading },
  faqs[] { question, answer }
}`;

export const daoPageQuery = `*[_type == "daoPage" && !(_id in path("drafts.**"))][0] {
  hero { badge, heading, subtext, subtext2, buttonText, buttonHref, secondButtonText, secondButtonHref, image { asset-> { url }, alt } },
  aboutSection { eyebrow, heading },
  aboutText,
  aboutButton { text, href },
  aboutCardsSection { eyebrow, heading },
  aboutCards[] { title, description },
  aboutCardsButton { text, href },
  marqueeItems,
  stepsSection { eyebrow, heading, subtext },
  steps[] { iconPath, title, description },
  eligibilitySection { eyebrow, heading, subtext },
  eligibilityItems,
  mechanismsSection { eyebrow, heading, subtext },
  mechanisms[] { iconPath, title, description },
  faqSection { eyebrow, heading },
  faqs[] { question, answer }
}`;

export const swapPageQuery = `*[_type == "swapPage" && !(_id in path("drafts.**"))][0] {
  hero { badge, heading, subtext, buttonText, buttonHref, button2Text, button2Href, image { asset-> { url }, alt } },
  stepsSection { eyebrow, heading },
  steps[] { title, description },
  stepsButton { text, href },
  governanceSection { eyebrow, heading, text, text2, image { asset-> { url }, alt } },
  lockInSection { eyebrow, heading, text },
  ctaSection { heading, subtext, buttonText, buttonHref }
}`;

export const validatorPageQuery = `*[_type == "validatorPage" && !(_id in path("drafts.**"))][0] {
  hero { badge, heading, subtext, subtext2, buttonText, buttonHref, image { asset-> { url }, alt } },
  whoSection { eyebrow, heading },
  whoCards[] { imagePath, title },
  stepsSection { eyebrow, heading, subtext },
  steps[] { title, description, details, note },
  stepsButton { text, href },
  validationSection { eyebrow, heading, subtext },
  validationCards[] { iconKey, title, description },
  dashboardSection { eyebrow, heading },
  dashboardItems,
  dashboardButton { text, href },
  noteText,
  ctaSection { heading, subtext, buttonText, buttonHref }
}`;

export const delegatorPageQuery = `*[_type == "delegatorPage" && !(_id in path("drafts.**"))][0] {
  hero { badge, heading, subtext, buttonText, buttonHref, image { asset-> { url }, alt } },
  benefitsSection { eyebrow, heading },
  benefits[] { iconPath, title, description },
  evaluateSection { eyebrow, heading, text, subtext, items, note, image { asset-> { url }, alt } },
  stepsSection { eyebrow, heading, subtext },
  steps[] { title, description },
  stepsButton { text, href },
  dashboardSection { eyebrow, heading },
  dashboardItems,
  dashboardImage { asset-> { url }, alt },
  rewardsSection { eyebrow, heading },
  earningCard { iconPath, heading, text, rewardItems, note },
  unbondingCard { iconPath, heading, text, timeline, text2 },
  risksCard { iconPath, heading, intro, risks[] { title, description } },
  ctaSection { heading, subtext, buttonText, buttonHref }
}`;

export const tokenomicsPageQuery = `*[_type == "tokenomicsPage" && !(_id in path("drafts.**"))][0] {
  hero { badge, heading, subheading, bodyText, button1Text, button1Href, button2Text, button2Href, image { asset-> { url }, alt } },
  utilitySection { eyebrow, heading, subtext },
  utilityCards[] { title, description, bullets },
  allocationSection { eyebrow, heading, subtext },
  tableHeaders { category, pct, tokens, locking, vesting },
  tokenAllocation[] { category, pct, tokens, locking, vesting },
  allocationChartImage { asset-> { url }, alt },
  lockingSection { eyebrow, heading, subtext },
  lockingCards[] { title, description }
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  footerDescription,
  footerEmail,
  footerCompanyHeading,
  footerCompanyLinks[] { label, href },
  footerQuickLinksHeading,
  footerQuickLinks[] { label, href },
  footerCopyrightLeft,
  footerCopyrightRight,
  logoAlt,
  navItems[] {
    label,
    href,
    mobileLabel,
    external,
    children[] { label, href, external }
  }
}`;

export const blogSlugsQuery = `*[_type == "blog"] { slug }`;

export const latestBlogsQuery = `*[_type == "blog"] | order(_createdAt desc)[0...3] {
  _id,
  title,
  slug,
  excerpt,
  featuredImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  category-> {
    title,
    slug
  },
  publishedAt
}`;

export const homePageQuery = `*[_type == "homePage"][0] {
  hero { chipLabel, heading, bodyText, button1Text, button1Href, button2Text, button2Href },
  about { heading, headingHighlight, bodyText },
  aboutAccordion {
    vision { title, bodyText, bullets },
    mission { title, bodyText, bullets }
  },
  problemSection { heading, headingHighlight },
  problemCards[] { icon, title, description },
  accountabilitySection { heading, headingHighlight, subtext },
  accountabilityServices[] { text, icon, position },
  distinguishesSection { pill, heading, subtext },
  uspCards[] { icon, title, description },
  useCasesSection { eyebrow, heading, headingHighlight, subtext },
  useCases[] { title, description, icon },
  ecosystemSection { heading, headingHighlight, subtext },
  ecosystemItems[] { title, href, imagePath, description, bullets },
  docsBanner { title, buttonText, buttonHref },
  blogsSection { eyebrow, heading, subtext },
  faqSection { eyebrow, heading },
  faqs[] { question, answer }
}`;
