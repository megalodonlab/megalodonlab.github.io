import { HashRouter, Routes, Route } from 'react-router-dom'

import { WrapperScroll } from './Components/WrapperScroll/WrappScroll'

import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Home } from './Pages/Home/Home.page'
import { Team } from './Pages/Team/Team.page'
import { TeamProfile } from './Pages/Team/TeamProfile.page'

import { NotFound } from './Components/NotFound/NotFound'
import { Privacy } from './Pages/Home/Privacy.page'
import { About } from './Pages/Home/About.page'
import { LINK_ROUTES } from './assets/js/LINK_ROUTES'
import { ResearchIndex } from './Research/pages/ResearchIndex.page'
import { TeamResource } from "./Pages/Home/TeamResource.page";
import { Verify } from './Pages/Home/Verify.page'

function App() {
  return (

      <HashRouter>

        <WrapperScroll>
            <Header />

            <Routes>
              <Route path={LINK_ROUTES.INDEX}                element={<Home />} />
              <Route path={LINK_ROUTES.TEAM}                 element={<Team />} />
              <Route path={`${LINK_ROUTES.TEAM}/:link`}      element={<TeamProfile />} />
              <Route path={LINK_ROUTES.PRIVACY}              element={<Privacy />} />
              <Route path={LINK_ROUTES.ABOUT}                element={<About />} />

              <Route path={LINK_ROUTES.RESEARCH_INDEX}       element={<ResearchIndex />} />
              
              <Route path={LINK_ROUTES.TEAM_RESOURCES}       element={<TeamResource />} />

              <Route path={LINK_ROUTES.VERIFY}               element={<Verify />} />

              <Route path="*" element={ <NotFound /> } />
              
            
            </Routes>
            <></>

            <Footer />
        </WrapperScroll>
      
      </HashRouter>

  );
}

export default App;
