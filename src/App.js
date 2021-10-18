import './App.css';
import News from './Component/News';
import { NewsApiAkses } from "./API/NewsApi"

function App() {
  return (
    <NewsApiAkses>
      <News />
    </NewsApiAkses>
  );
}

export default App;
