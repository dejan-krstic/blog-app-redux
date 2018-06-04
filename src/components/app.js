import React from 'react';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import placeholder from "../../resources/assets/img/placeholder.png";

import HomePage from '../containers/pages/HomePage'
import SinglePostPage from '../containers/pages/SinglePostPage'
import NewPostPage from '../containers/pages/NewPostPage'
import SingleAuthorPage from '../containers/pages/SingleAuthorPage'
import AboutPage from './pages/AboutPage'
import AuthorsPage from '../containers/pages/AuthorsPage'
import Header from './partials/Header.js'
import Footer from './partials/Footer.js'

export default (props) => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/posts/new' component={NewPostPage} />
        <Route path='/posts/:id' component={SinglePostPage} />
        <Route path='/authors/:id' component={SingleAuthorPage}/>
        <Route path='/authors' component={AuthorsPage} />
        <Route path='/about' component={AboutPage} />
      </ Switch>
      <Footer />
    </React.Fragment>
  );
}
