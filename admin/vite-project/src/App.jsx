import { AppProvier } from './context/AppContext'
import { ActicleProvier } from './context/ActicleContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { DefaultLayout } from './components/layout/defaultLayout'
import { publicRoutes } from './routes'
function App() {

  return (
    <>
      <AppProvier>
        <Router>
          <div className="App">
            <Routes>
              {publicRoutes.map((route, index) => {
                const Layout = route.layout || DefaultLayout;
                const Page = route.component;
                return <Route
                  key={index}
                  path={route.path}
                  element={
                  <Layout>
                    <ActicleProvier>
                      <Page />
                    </ActicleProvier>
                  </Layout>}
                />
              })}
            </Routes>
          </div>
        </Router>
      </AppProvier>
    </>
  )
}

export default App
