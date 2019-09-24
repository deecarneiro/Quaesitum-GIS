export function setUserLogged(userIsLogged) {
  this.setState({ user: { isLogged: userIsLogged } });
};

export function setUserName(userName) {
  this.setState({ user: { name: userName } });
};