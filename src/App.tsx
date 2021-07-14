import { Route, BrowserRouter } from 'react-router-dom'
import './App.scss';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/home';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Route exact path="/" component={HomePage} />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App