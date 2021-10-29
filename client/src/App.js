import React from 'react';
import './App.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './components/home/Home';

import { BrowserRouter , Route,Switch } from 'react-router-dom'

import LearnMore from './components/router/LearnMore';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

const App = () => (

<ApolloProvider client={client}>
<BrowserRouter>
        <div className="App">
          <Switch>
            <Route path = "/" component = {Home} exact />
            <Route path = "/learnmore" component = {LearnMore} />
          </Switch>
        </div>
      </BrowserRouter>

 </ApolloProvider>
)

export default App;
