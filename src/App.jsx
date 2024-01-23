import { BrowserRouter } from 'react-router-dom'
import AppRouter from './pages/router/AppRouter'
import { Provider } from 'react-redux';
import StoreRedux from './redux/store';

function App() {

  return (
    <Provider
      store={StoreRedux}
    >
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </Provider>
  );
};

export default App
