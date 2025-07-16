// src/lib/notion.ts
import { Client } from '@notionhq/client';

const notion = new Client({ auth: import.meta.env.NOTION_TOKEN });

export async function getArticles() {
  const databaseId = import.meta.env.NOTION_DATABASE_ID;

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return response.results.map((page) => {
    const props = page.properties;
    return {
      id: page.id,
      title: props.Title.title[0]?.plain_text ?? '',
      slug: props.Slug.rich_text[0]?.plain_text ?? '',
      excerpt: props.Excerpt?.rich_text?.[0]?.plain_text ?? '',
      date: props.Date?.date?.start ?? '',
    };
  });
}
export async function getArticleContent(pageId: string) {
  const blocks = await notion.blocks.children.list({ block_id: pageId });
  return blocks.results;
}