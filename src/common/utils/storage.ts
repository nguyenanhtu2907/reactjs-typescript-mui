const ns = `${process.env.REACT_APP_NAME_PROJECT}`;

export const storageKey = {
  USER_TOKEN: `${ns}-token`,
};

export const storage = {
  setToken: (token: string, key: string) => localStorage.setItem(key, token),

  getToken: (key: string) => localStorage.getItem(key),

  removeToken: (key: string) => localStorage.removeItem(key),
};
