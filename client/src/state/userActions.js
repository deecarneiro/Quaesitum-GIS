export function setUserLogged(userIsLogged) {
  const user = { ...this.state.user }
  user.isLogged = userIsLogged;
  this.setState({ user });
};

export function setUserName(userName) {
  const user = { ...this.state.user }
  user.name = userName;
  this.setState({ user });
};

export function setUserId(id) {
  const user = { ...this.state.user }
  user.id = id;
  this.setState({ user });
};