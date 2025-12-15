import { useRouterState } from '@tanstack/react-router';
import Nav from './components/Nav';
import SideBorder from './components/SideBorder';
import './App.css'

function App({ children }: { children: React.ReactNode }) {
  const routerState = useRouterState();
  const currentPathname = routerState.location.pathname;
  const homePath = '/';
  const classes = () => {
    let classes = '';
    switch (currentPathname) {
      case '/':
        classes += ' blue-bg';
        break;
      case '/map':
        classes += ' red-bg';
        break;
      case '/kings':
        classes += ' red-bg';
        break;
      default:
        break;
    }
    return classes;
  };

  return (
    <div className={`app-bg ${classes()}`}>
      <div className="app">
        {currentPathname !== homePath ? <Nav /> : null}
        <SideBorder />
        {children}
      </div>
    </div>
  )
}

export default App
