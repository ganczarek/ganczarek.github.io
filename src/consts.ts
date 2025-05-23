import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Rafał's Blog",
  DESCRIPTION: "Blog about tech and other topics.",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Blog about tech and other topics.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/ganczarek",
    LINK_TITLE: "My Github",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/ganczarek",
    LINK_TITLE: "My LinkedIn",
  },
  {
    NAME: "RSS",
    HREF: "/rss.xml",
    LINK_TITLE: "RSS Feed",
  },
];
