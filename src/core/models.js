import {React} from 'core/react';
import {Random} from 'core/window';

const LETTER_COUNT = 26;
const NUMBER_COUNT = 10;
const SYMBOL_COUNT = 32;

const OPTION_CEILING = 94;
const LENGTH_CEILING = 16;

const DEFAULT_CHARACTERS = (function() {
    const chars = [];
    for(let i = 33; i < 127; i++) {
        chars.push(String.fromCharCode(i));
    }
    return chars.join('');
})();

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
    characters = DEFAULT_CHARACTERS;
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

    get score() {
        // Score the password options
        let options = 0;
        if(this.mode === this.SIMPLE) {
            if(this.uppercase) {
                options += LETTER_COUNT / OPTION_CEILING;
            }
            if(this.lowercase) {
                options += LETTER_COUNT / OPTION_CEILING;
            }
            if(this.numbers) {
                options += NUMBER_COUNT / OPTION_CEILING;
            }
            if(this.symbols) {
                options += SYMBOL_COUNT / OPTION_CEILING;
            }
        } else {
            options += new Set(this.characters).size / OPTION_CEILING;
        }

        // Score the password length
        const length = this.length / LENGTH_CEILING;

        // Compute the weighted sum
        return (options / 2) + (length / 2);
    }

    // get _characters() {
    //     return Array.from(
    //         new Set(
    //             this.isSimple ? (
    //                 DEFAULT_CHARACTER_SET
    //             ) : (
    //                 this.characters
    //             )
    //         )
    //     );
    // }

    generate() {
        const characters = Array.from(
            new Set(
                this.isSimple ? (
                    DEFAULT_CHARACTERS
                ) : (
                    this.characters
                )
            )
        );
        const passwords = [];
        for(let i = 0; i < this.amount; i++) {
            const password = [];
            for(let j = 0; j < this.length; j++) {
                password.push(
                    characters[
                        Random.next(0, characters.length - 1)
                    ]
                );
            }
            passwords.push(password.join(''));
        }
        return passwords.join('\n');
    }
}
