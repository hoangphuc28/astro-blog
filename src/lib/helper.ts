import { NotionToMarkdown } from "notion-to-md";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: import.meta.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getMarkdownFromNotion(pageId: string): Promise<string> {
  if (!pageId) {
    console.warn("[getMarkdownFromNotion] Missing pageId");
    return "No content available.";
  }

  try {
    const mdblocks = await n2m.pageToMarkdown(pageId);
    if (!mdblocks || mdblocks.length === 0) {
      console.warn("[getMarkdownFromNotion] No markdown blocks returned");
      return "No content available.";
    }

    const mdString = n2m.toMarkdownString(mdblocks);
    return mdString?.parent ?? "No content available.";
  } catch (error) {
    console.error("Error: ", error);
    return "No content available.";
  }
}
