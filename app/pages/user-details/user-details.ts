import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {GithubUsers} from '../../providers/github-users/github-users';
import {User} from '../../models/user';


@Component({
  templateUrl: 'build/pages/user-details/user-details.html',
  providers: [GithubUsers]
})

export class UserDetailsPage {
  user: User = new User;
  login: string;

  constructor(public nav: NavController, navParams: NavParams, githubUsers: GithubUsers) {
    // Retrieve the login from the navigation parameters
    this.login = navParams.get('login');

    // Get the user details and log
    githubUsers.loadDetails(this.login)
      .then( user => this.user = user)
  }
}
