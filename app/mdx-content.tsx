"use client"; // This is required!

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

/** Place your custom MDX components here */
const MdxComponents = {
  /** h1 colored in yellow */
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 style={{ color: "#FFF676" }} {...props} />
  ),
  /** Card component */
  Card: (props: React.HTMLProps<HTMLDivElement>) => (
    <div
      style={{
        background: "#333",
        borderRadius: "0.25rem",
        padding: "0.5rem 1rem",
      }}
      {...props}
    />
  ),
};

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={MdxComponents} />;
}
