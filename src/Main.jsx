import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import { TasksDashboard } from './components';
// import './styles/globals.scss';
import './styles';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <TasksDashboard />
        </Provider>
    </StrictMode>
);
