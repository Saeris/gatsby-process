import {
  Paragraph,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Break,
  Blockquote,
  List,
  Ordered,
  Item,
  Table,
  Row,
  Cell,
  TableHeader,
  PreOrCode,
  Emphasis,
  Strong,
  Strikethrough,
  InlineCode,
  Link,
  Figure,
  Caption
} from "../../Core";

export const markdownComponents = {
  p: Paragraph,
  h1: H1, // #
  h2: H2, // ##
  h3: H3, // ###
  h4: H4, // ####
  h5: H5, // #####
  h6: H6, // ######
  thematicBreak: Break, // ***
  blockquote: Blockquote, // >
  ul: List, // -
  ol: Ordered, // 1.
  li: Item,
  table: Table, // `---
  tr: Row, // `This
  td: Cell,
  th: TableHeader,
  pre: PreOrCode,
  code: PreOrCode,
  em: Emphasis, // _emphasis_
  strong: Strong, // **strong**
  delete: Strikethrough, // ~~strikethrough~~
  inlineCode: InlineCode,
  hr: Break, // ---
  a: Link, // [MDX](https://mdxjs.com)
  figure: Figure,
  figcaption: Caption
};
