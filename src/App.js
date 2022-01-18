import './styles.css';
import TransmissionPage from './pages/TransmissionPage';
import { TransmissionProvider } from './contexts/transmission';

export default function App() {
    return (
        <div className="App">
            <TransmissionProvider>
                <TransmissionPage />
            </TransmissionProvider>
        </div>
    );
}
