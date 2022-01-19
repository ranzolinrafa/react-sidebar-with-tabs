import { ThemeProvider } from 'styled-components';
import TransmissionPage from './pages/TransmissionPage';
import { TransmissionProvider } from './contexts/transmission';
import { light } from './styles/theme';
import './styles.css';

export default function App() {
    return (
        <div className="App">
            <ThemeProvider theme={light}>
                <TransmissionProvider>
                    <TransmissionPage />
                </TransmissionProvider>
            </ThemeProvider>
        </div>
    );
}
