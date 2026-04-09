export const allBlogsQuery = `*[_type == "blog"] | order(publishedAt desc) {
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

export const blogBySlugQuery = `*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  body,
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

export const allKnowledgeHubQuery = `*[_type == "knowledgeHub"] | order(publishedAt desc) {
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
