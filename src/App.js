import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HTMLLoader from './HTMLLoader';

function App() {
  return (
    <Router>
      <div>

        <Route path="/itc505/homework/2" exact>
          <HTMLLoader url={process.env.PUBLIC_URL + '/2.html'} />
        </Route>
      </div>
    </Router>

  );
}

export default App;
