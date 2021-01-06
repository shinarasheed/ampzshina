import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Navbar from './components/Globals/Navbar';
import Index from './pages/index';
import ErrorBoundary from './ErrorBoundary';
function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Switch>
          <ErrorBoundary>
            <Route exact path="/" component={Index} />
          </ErrorBoundary>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
