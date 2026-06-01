export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function formatPokemonId(id: number): string {
  return `#${String(id).padStart(4, '0')}`;
}

export function listToBullets(items: string[]): string {
  return items.map((item) => `  - ${capitalize(item)}`).join('\n');
}
