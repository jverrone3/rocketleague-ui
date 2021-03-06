import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  session: inject.service(),
  actions: {
    login() {
      const user = this.get('model');
      this.get('session')
        .authenticate('authenticator:rocketleague', user.email, user.password)
        .then(() => {
          // Successful Login
          this.transitionToRoute('app.teams');
        });
    },
    routeToRegister() {
      this.transitionToRoute('auth.register');
    }
  }
});
