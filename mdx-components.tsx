import defaultComponents from 'fumadocs-ui/mdx';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { openapi } from '@/lib/source';
import type { MDXComponents } from 'mdx/types';
import * as icons from 'lucide-react';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...(icons as unknown as MDXComponents),
    ...defaultComponents,
    APIPage: openapi.APIPage,
    img: (props) => <ImageZoom {...(props as any)} />,
    ...components,
  };
}
