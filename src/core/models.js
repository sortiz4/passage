import {React} from 'core/react';
import {Random, UnicodeSet} from 'core/window';

const OPTION_CEILING = 94;
const LENGTH_CEILING = 16;
const UPPERCASE = `${new UnicodeSet(65, 91)}`;
const LOWERCASE = UPPERCASE.toLowerCase();
const NUMBERS = `${new UnicodeSet(48, 58)}`;
const SYMBOLS = `${new UnicodeSet(33, 127).exclude(UPPERCASE, LOWERCASE, NUMBERS)}`;
const CHARACTERS = SYMBOLS + NUMBERS + UPPERCASE + LOWERCASE;
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
        return COLORS[
            Math.min(
                Math.trunc(this.score * (COLORS.length - 1)),
                COLORS.length - 1,
            )
        ];
    }

    get selection() {
        return Array.from(
            new Set(
                this.isSimple ? (
                    (this.uppercase ? UPPERCASE : '') +
                    (this.lowercase ? LOWERCASE : '') +
                    (this.numbers ? NUMBERS : '') +
                    (this.symbols ? SYMBOLS : '')
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

        // Write the password(s) to a string
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
