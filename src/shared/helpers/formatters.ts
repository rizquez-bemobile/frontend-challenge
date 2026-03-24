export const removeHyphensDoubleQuotes = (text?: string): string => {
  if (!text) 
    return ""

  return text
    .replace(/"/g, "")
    .replace(/-/g, "")
}