import {React} from 'core/react';

export function App() {
    const colors = ['link', 'info', 'primary', 'success', 'warning', 'danger'];
    const [index, setIndex] = React.useState(0);
    return (
        <div className={`window is-${colors[index % colors.length]}`}>
            <div className="box">
                <h3 className="title is-3">
                    Passage
                </h3>
                <hr/>
                <input className="input" type="number"/>
                <button
                    className="button is-light"
                    onClick={() => setIndex(index + 1)}
                >
                    Generate
                </button>
            </div>
        </div>
    );
}
