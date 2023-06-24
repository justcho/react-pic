import { observable, action } from "mobx";

class AuthStore {
  @observable isLogin = false;
  @observable isLoading = false;
  @observable values = {
    username: "",
    password: "",
  };

  @action setIsLogin(isLogin) {
    this.isLogin = isLogin;
  }
  @action setUsername(username) {
    this.values.username = username;
  }
  @action setPassword(password) {
    this.values.password = password;
  }
  @action login() {}
  @action register() {}
  @action logout() {}
}

export { AuthStore };
