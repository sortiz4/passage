import FileSaver from 'file-saver';

/**
 * A small collection of browser shortcuts.
 */
export class Browser {
    static download(data, name) {
        return new Promise(resolve => {
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
            resolve();
        });
    }
}

/**
 * A small collection of DOM shortcuts.
 */
export class Dom {
    static fromId(id) {
        return document.getElementById(id);
    }
}

/**
 * An interface for generating random values.
 */
export class Random {
    static next(min = 0, max = 4_294_967_295) {
        const limit = 4_294_967_295;
        const range = max - min + 1;
        const bytes = new Uint32Array(1);
        const value = window.crypto.getRandomValues(bytes)[0];
        return value >= Math.floor(limit / range) * range ? (
            this.next(min, max)
        ) : (
            min + (value % range)
        );
    }
}
