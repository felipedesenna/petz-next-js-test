export function capitalizeLetter(str: string): string {
  if (!str) {
    return str
  }

  const removeDash = str.replaceAll('-', ' ')

  return removeDash.charAt(0).toUpperCase() + removeDash.slice(1);
}

export function convertCurrency(currency: number) {
  if (!currency) {
    currency = 0
  }

  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
    .format(currency);
}