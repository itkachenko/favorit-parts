import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './components/Search';
import Goods from './components/Goods';

function App() {
  return (
    <div className='d-flex flex-column justify-content-center p-5 gap-3'>
      <SearchForm />
      <Goods />
    </div>
  )
}

export default App
