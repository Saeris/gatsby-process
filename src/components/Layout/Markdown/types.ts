import { MdxFrontmatter } from "../../../../types/graphql-types";

export type PageNavContext = {
  prev?: Pick<MdxFrontmatter, "title" | "slug" | "banner">;
  next?: Pick<MdxFrontmatter, "title" | "slug" | "banner">;
};
