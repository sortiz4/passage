import {React} from 'core/react';
import {Random} from 'core/window';

const OPTION_CEILING = 94;
const LENGTH_CEILING = 16;

const UPPERCASE = (() => {
    const characters = [];
    for(let i = 65; i < 91; i++) {
        characters.push(String.fromCharCode(i));
    }
    return characters.join('');
})();
const LOWERCASE = (() => {
    const characters = [];
    for(let i = 97; i < 123; i++) {
        characters.push(String.fromCharCode(i));
    }
    return characters.join('');
})();
const NUMBERS = (() => {
    const characters = [];
    for(let i = 48; i < 58; i++) {
        characters.push(String.fromCharCode(i));
    }
    return characters.join('');
})();
const SYMBOLS = (() => {
    const exclude = new Set(UPPERCASE + LOWERCASE + NUMBERS);
    const characters = [];
    for(let i = 33; i < 127; i++) {
        const c = String.fromCharCode(i);
        if(!exclude.has(c)) {
            characters.push(c);
        }
    }
    return characters.join('');
})();
const CHARACTERS = (SYMBOLS + NUMBERS + UPPERCASE + LOWERCASE);

const COLORS = ['danger', 'warning', 'success'];

export class State {
    static Context = React.createContext();

    SIMPLE = 0;
    ADVANCED = 1;

    mode = 0;
    uppercase = true;
    lowercase = true;
    numbers = true;
    symbols = true;
    export = false;
    characters = CHARACTERS;
    length = 16;
    amount = 1;

    get isSimple() {
        return this.mode === this.SIMPLE;
    }

    get isAdvanced() {
        return this.mode === this.ADVANCED;
    }

    get color() {
        return COLORS[Math.max(0, Math.min(Math.trunc(this.score * 3), 2))];
    }

    get selection() {
        return Array.from(
            new Set(
                this.isSimple ? (
                    Array.prototype.join.call(
                        [
                            this.uppercase ? UPPERCASE : null,
                            this.lowercase ? LOWERCASE : null,
                            this.numbers ? NUMBERS : null,
                            this.symbols ? SYMBOLS : null,
                        ],
                        '',
                    )
                ) : (
                    this.characters
                )
            )
        );
    }

    get score() {
        // Score the password options
        const options = new Set(this.selection).size / OPTION_CEILING;

        // Score the password length
        const length = this.length / LENGTH_CEILING;

        // Compute the score
        return options * length;
    }

    generate() {
        // Get a unique set of selected characters
        const characters = this.selection;

        // Generate the password(s)
        const collection = [];
        for(let i = 0; i < this.amount; i++) {
            const instance = [];
            for(let j = 0; j < this.length; j++) {
                const k = Random.next(0, characters.length - 1);
                instance.push(characters[k]);
            }
            collection.push(instance.join(''));
        }
        return collection.join('\n');
    }
}
