import { saveAs } from 'file-saver';
export { default as classNames } from 'classnames';

export function createDownload(name: string, data: string): void {
  saveAs(new Blob([new TextEncoder().encode(data).buffer], { type: 'application/octet-stream' }), name);
}

export function getRandom(min: number, max: number): number {
  const buf = new Uint32Array(1);
  crypto.getRandomValues(buf);

  const ref = buf[0] / (0xffffffff + 1);

  return Math.floor(ref * (max - min + 1)) + min;
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
