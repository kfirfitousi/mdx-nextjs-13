"use client"; // This is required!

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { HTMLProps } from "react";

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

/** Place your custom MDX components here */
const MdxComponents = {
  /** Example: h1 colored in yellow */
  h1: (props: HTMLProps<HTMLHeadingElement>) => (
    <h1 style={{ color: "#FFF676" }} {...props} />
  ),
};

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={MdxComponents} />;
}
