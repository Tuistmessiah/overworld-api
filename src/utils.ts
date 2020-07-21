export function verifyAndExtract({ type, content }: any) {
  if (content.length > 1) {
    return {
      type,
      content: { message: "More than one item value found. Duplicates in DB!" },
    };
  }
  return { type, content: content[0] };
}

export function extractFromArray({ type, content }: any) {
  return { type, content: content[0] };
}
