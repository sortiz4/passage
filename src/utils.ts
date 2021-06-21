import { saveAs } from 'file-saver';
import { browserCrypto, Random } from 'random-js';
export { default as classNames } from 'classnames';

const rng = new Random(browserCrypto);

export function createDownload(name: string, data: string): void {
  saveAs(new Blob([new TextEncoder().encode(data).buffer], { type: 'application/octet-stream' }), name);
}

export function getRandom(min: number, max: number): number {
  return rng.integer(min, max);
}

export class UnicodeSet extends Set<string> {
  constructor(a: number, b: number) {
    super();
    for (let i = a; i < b; i++) {
      this.add(String.fromCharCode(i));
    }
  }

  exclude(...exclusions: string[]): UnicodeSet {
    for (const exclusion of exclusions) {
      for (const character of exclusion) {
        this.delete(character);
      }
    }
    return this;
  }

  toString(): string {
    return Array.from(this).join('');
  }
}
