import FileSaver from 'file-saver';
import { browserCrypto, Random as Rng } from 'random-js';

// Random number generator
const rng = new Rng(browserCrypto);

/**
 * A small collection of browser shortcuts.
 */
export class Browser {
    static download(name, data) {
        data = typeof data === 'string' ? (
            new TextEncoder('UTF-8').encode(data)
        ) : (
            data
        );
        FileSaver.saveAs(
            new Blob([data.buffer], { type: 'application/octet-stream' }),
            name,
        );
    }
}

/**
 * An interface for generating random values.
 */
export class Random {
    static next(min, max) {
        return rng.integer(min, max);
    }
}

/**
 * An interface for generating Unicode sets.
 */
export class UnicodeSet extends Set {
    constructor(a, b) {
        super();
        for (let i = a; i < b; i++) {
            this.add(String.fromCharCode(i));
        }
    }

    exclude(...args) {
        for (const arg of args) {
            for (const c of arg) {
                this.delete(c);
            }
        }
        return this;
    }

    toString() {
        return Array.from(this).join('');
    }
}
