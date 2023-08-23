import { useStore } from 'effector-react';
import $store from '../../store/index';
import './spinner.css';

export const Spinner = () => {
    const store = useStore($store);

    return (
        <div className={`spinner-container ${store.isLoading ? 'loading' : ''}`}>
            <div className="spinner"></div>
        </div>
    );
}