import FileSaver from 'file-saver';

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
            new Blob(
                [data.buffer],
                {type: 'application/octet-stream'},
            ),
            name,
        );
    }
}

/**
 * An interface for generating random values.
 */
export class Random {
    static next(min = 0, max = 4_294_967_295) {
        const range = max - min + 1;
        const value = crypto.getRandomValues(new Uint32Array(1))[0];
        return value >= Math.floor(4_294_967_295 / range) * range ? (
            this.next(min, max)
        ) : (
            min + (value % range)
        );
    }
}

/**
 * An interface for generating Unicode sets.
 */
export class UnicodeSet extends Set {
    constructor(a, b) {
        super();
        for(let i = a; i < b; i++) {
            this.add(String.fromCharCode(i));
        }
    }

    exclude(...args) {
        for(const arg of args) {
            for(const c of arg) {
                this.delete(c);
            }
        }
        return this;
    }

    toString() {
        return Array.from(this).join('');
    }
}
