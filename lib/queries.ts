export const allBlogsQuery = `*[_type == "blog" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
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
  publishedAt,
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

export const allKnowledgeHubQuery = `*[_type == "knowledgeHub" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
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

export const technicalPageQuery = `*[_type == "technicalPage" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
  _id,
  title,
  slug,
  sections[] {
    sectionId,
    heading,
    rawHtml
  }
}`;

export const blogSlugsQuery = `*[_type == "blog"] { slug }`;

export const latestBlogsQuery = `*[_type == "blog"] | order(publishedAt desc)[0...3] {
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
