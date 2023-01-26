export const selectors = {
  email: state => state.user.email,
  filter: state => state.filter,
  token: state => state.user.token,

  fetchLogIn: state => state.user.fetchLogIn,
  errorLogIn: state => state.user.errorLogIn,
  fetchLogOut: state => state.user.fetchLogOut,
  
  fetchRegister: state => state.user.fetchRegister,
  errorRegister: state => state.user.errorRegister,

  isLoading: state => state.contacts.isLoading,
  addContactIsLoading: state => state.contacts.addContactIsLoading,
};
