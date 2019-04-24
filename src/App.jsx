import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';
import DocumentTitle from 'react-document-title';

import LandingScreen from './Screens/LandingScreen/LandingScreen';
import QuizScreen from './Screens/QuizScreen/QuizScreen';

import './App.css';

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
            runOnMount={location.pathname === '/'}
            mapStyles={styles => ({
              transform: `translateX(${styles.offset}%)`
            })}
            // className="switch-wrapper"
          >
            <Route exact path="/" component={LandingScreen} />
            <Route path="/quiz/" component={QuizScreen} />
          </AnimatedSwitch>
        )}
      />
    </React.Fragment>
  );
}

export default App;
