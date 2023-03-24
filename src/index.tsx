import './styles.scss';
import ReactDom from 'react-dom/client';
import { Root } from './components/root/root.component';

ReactDom.createRoot(document.getElementById('root') as Element).render(<Root/>);
