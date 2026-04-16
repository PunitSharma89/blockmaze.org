/**
 * Portable Text Translation Helper
 *
 * Strategy:
 *  1. Walk the Portable Text block array
 *  2. Collect every span's "text" value (preserving order)
 *  3. Send all strings in ONE OpenAI call as a numbered list
 *  4. Reinsert the returned translations back into the exact same positions
 *
 * This preserves ALL structural data: _key, _type, marks, markDefs,
 * style, listItem, level — only human-readable text is changed.
 */

type PortableTextSpan = {
  _type: "span";
  _key?: string;
  text: string;
  marks?: string[];
};

type PortableTextBlock = {
  _type: string;
  _key?: string;
  style?: string;
  listItem?: string;
  level?: number;
  markDefs?: unknown[];
  children?: PortableTextSpan[];
  [key: string]: unknown;
};

/** Extract all span texts from a Portable Text array, in order */
export function extractSpanTexts(blocks: PortableTextBlock[]): string[] {
  const texts: string[] = [];
  for (const block of blocks) {
    if (block._type !== "block" || !Array.isArray(block.children)) continue;
    for (const child of block.children) {
      if (child._type === "span") {
        texts.push(child.text);
      }
    }
  }
  return texts;
}

/** Reinsert translated texts back into the Portable Text structure */
export function reinsertTranslations(
  blocks: PortableTextBlock[],
  translations: string[]
): PortableTextBlock[] {
  let idx = 0;
  return blocks.map((block) => {
    if (block._type !== "block" || !Array.isArray(block.children)) {
      return block;
    }
    return {
      ...block,
      children: block.children.map((child) => {
        if (child._type === "span") {
          const translated = translations[idx] ?? child.text;
          idx++;
          return { ...child, text: translated };
        }
        return child;
      }),
    };
  });
}
