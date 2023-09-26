export function capitalizeLetter(str: string): string {
  if (!str) {
    return str
  }

  const removeDash = str.replaceAll('-', ' ')

  return removeDash.charAt(0).toUpperCase() + removeDash.slice(1);
}