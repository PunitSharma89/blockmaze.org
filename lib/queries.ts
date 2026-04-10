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
  hero {
    badge, heading, subtext, buttonText, buttonHref,
    image { asset-> { url }, alt }
  },
  about { heading, text },
  roles[] { iconKey, title, description },
  scopeItems[] { iconKey, title, description },
  structure[] { iconKey, title, description },
  steps[] { num, title, description },
  compliance {
    heading, text, tags,
    image { asset-> { url }, alt }
  },
  getInvolved[] { iconKey, title, description },
  faqs[] { question, answer }
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
