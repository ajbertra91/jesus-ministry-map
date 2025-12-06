import { useRouterState } from '@tanstack/react-router';
import Nav from './components/Nav';
import SideBorder from './components/SideBorder';
import './App.css'

function App({ children }: { children: React.ReactNode }) {
  const routerState = useRouterState();
  const currentPathname = routerState.location.pathname;
  const homePath = '/';
  return (
    <div className="app">
      {currentPathname !== homePath ? <Nav /> : null}
      <SideBorder />
      {children}
    </div>
  )
}

export default App
