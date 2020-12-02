import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import ModalContainer from '../components/modal/modal_container';
import CreatePostFormContainer from '../components/posts/create_post_form_container';

export default () => (
  // Insert front end routes below
  <>
    <ModalContainer />
    
    <Switch>
      <ProtectedRoute exact path="/new_post" component={CreatePostFormContainer}/>
    </Switch>
  </>
)