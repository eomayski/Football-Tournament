import { Component } from 'react';
import styles from './ErrorBoundary.module.css';

const PERSIST_KEY = 'persist:tournament-v1';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
        this.handleReset = this.handleReset.bind(this);
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    handleReset() {
        localStorage.removeItem(PERSIST_KEY);
        window.location.reload();
    }

    render() {
        if (!this.state.hasError) {
            return this.props.children;
        }

        return (
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <i className="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <h2 className={styles.title}>Something went wrong</h2>
                    <p className={styles.message}>
                        The loaded data caused an unexpected error. Click the button below to reset and reload the default tournament data.
                    </p>
                    <button className={styles.btn} onClick={this.handleReset}>
                        Reset &amp; Reload
                    </button>
                </div>
            </div>
        );
    }
}

export default ErrorBoundary;
