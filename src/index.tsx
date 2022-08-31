import './styles';
import ReactDom from 'react-dom/client';
import { Root } from './components/root';

ReactDom.createRoot(document.getElementById('root') as Element).render(<Root/>);
