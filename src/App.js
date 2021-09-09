import style from './App.module.scss';
import { Content } from './components/Content';

function App() {
  return (
    <div className={style.app}>
      <Content />
    </div>
  );
}

export default App;
