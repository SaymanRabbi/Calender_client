import React from 'react';
import Link from 'next/link';
import HTMLReactParser, {
  DOMNode,
  HTMLReactParserOptions,
} from 'html-react-parser';

type Children = {
  data: string;
};
type Node = DOMNode & {
  name?: string;
  attribs?: {
    href: string;
  };
  children?: Children[];
};
export default function parseHTML(htmlString: string) {
  return HTMLReactParser(htmlString, {
    replace: ((node: Node) => {
      if (
        node.name &&
        node.name === 'a' &&
        node.attribs &&
        node.attribs.href.match(/^(\/)/)
      )
        return <Link href={node.attribs.href}>{node.children?.[0].data}</Link>;

      if (node.name === 'script') return false;

      return false;
    }) as HTMLReactParserOptions['replace'],
  });
}
