import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  input: ['./openapi.yml'], // the OpenAPI schemas
  output: './content/docs',
  per: 'operation',
  groupBy: 'tag',
  addGeneratedComment: true,
  frontmatter: (title, description, context) => {
    const op = context.operation || {};
    const method = op['x-method'] || (op.method || '').toUpperCase();
    return {
      title,
      description,
      full: true,
      method,
      route: op.path || '',
    };
  },
});
