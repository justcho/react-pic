import AV, { Query, User } from "leancloud-storage";
AV.init({
  appId: "DfNLWotvjEdKaQXrFIQm7gF8-gzGzoHsz",
  appKey: "4qansbNFT9BE80UbTbRkQm7g",
  serverURL: "https://dfnlwotv.lc-cn-n1-shared.com",
});

const Auth = {

  register(username, password) {
    const user = new User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise((resolve, reject) => {
      user.signUp().then(
        (user) => resolve(user),
        (error) => reject(error)
      );
    });
  },

  login(username, password) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then(
        (user) => resolve(user),
        (error) => reject(error)
      );
    });
  },

  logout() {
    User.logOut();
  },

  getCurrentUser() {
    return User.current();
  },
};
export { Auth };
