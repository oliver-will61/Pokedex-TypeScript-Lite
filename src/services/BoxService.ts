import { readFile, writeFile } from 'node:fs/promises';
import { LocalBoxError } from '../models/CustomErrors.js';

export class BoxService<T> {
  constructor(private readonly filePath: string) {}

  async readAll(): Promise<T[]> {
    try {
      const data = await readFile(this.filePath, 'utf-8');
      return JSON.parse(data) as T[];
    } catch {
      return [];
    }
  }

  async saveAll(items: T[]): Promise<void> {
    try {
      await writeFile(this.filePath, JSON.stringify(items, null, 2), 'utf-8');
    } catch (error) {
      throw new LocalBoxError('Falha ao salvar dados no arquivo local');
    }
  }

  async add(item: T): Promise<void> {
    const items = await this.readAll();
    items.push(item);
    await this.saveAll(items);
  }

  async remove(predicate: (item: T) => boolean): Promise<void> {
    const items = await this.readAll();
    const filtered = items.filter((item) => !predicate(item));
    await this.saveAll(filtered);
  }

  async find(predicate: (item: T) => boolean): Promise<T | undefined> {
    const items = await this.readAll();
    return items.find(predicate);
  }
}
