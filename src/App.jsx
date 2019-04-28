import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';
// import DocumentTitle from 'react-document-title';

import LandingScreen from './Screens/LandingScreen/LandingScreen';
import QuizScreen from './Screens/QuizScreen/QuizScreen';
import UserCategoryRecScreen from './Screens/UserCategoryRecScreen/UserCategoryRecScreen';
import NoviceEducationScreen from './Screens/NoviceScreens/NoviceEducationScreen/NoviceEducationScreen';
import NoviceChooseCategoriesScreen from './Screens/NoviceScreens/NoviceChooseCategoriesScreen/NoviceChooseCategoriesScreen';
import NoviceCardRecommendationScreen from './Screens//NoviceScreens/NoviceCardRecommendationScreen/NoviceCardRecommendationScreen';
import ExpertChooseCategoriesScreen from './Screens/ExpertScreens/ExpertChooseCategoriesScreen/ExpertChooseCategoriesScreen';
import ExpertCardRecommendationScreen from './Screens/ExpertScreens/ExpertCardRecommendationScreen/ExpertCardRecommendationScreen';

import './shared/appRoutes';

import './App.css';
import appRoutes from './shared/appRoutes';

function glide(val) {
  return spring(val, {
    stiffness: 200,
    damping: 26
  });
}

const pageTransitions = {
  atEnter: {
    offset: 100
  },
  atLeave: {
    offset: 0
  },
  atActive: {
    offset: glide(0)
  }
};

function App() {
  return (
    <React.Fragment>
      <Route
        render={({ location }) => (
          <AnimatedSwitch
            {...pageTransitions}
            runOnMount={location.pathname === appRoutes.home}
            mapStyles={styles => ({
              transform: `translateX(${styles.offset}%)`
            })}
            // className="switch-wrapper"
          >
            <Route exact path={appRoutes.home} component={LandingScreen} />
            <Route path={appRoutes.quiz} component={QuizScreen} />
            <Route
              path={appRoutes.userTypeRecommendation}
              component={UserCategoryRecScreen}
            />
            <Route
              path={appRoutes.noviceEducation}
              component={NoviceEducationScreen}
            />
            <Route
              path={appRoutes.noviceChooseBenefitCategory}
              component={NoviceChooseCategoriesScreen}
            />
            <Route
              path={appRoutes.noviceCardRecommendation}
              component={NoviceCardRecommendationScreen}
            />
            <Route
              path={appRoutes.expertChooseBenefitCategory}
              component={ExpertChooseCategoriesScreen}
            />
            <Route
              path={appRoutes.expertCardRecommendation}
              component={ExpertCardRecommendationScreen}
            />
          </AnimatedSwitch>
        )}
      />
    </React.Fragment>
  );
}

export default App;
