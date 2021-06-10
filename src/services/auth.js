export const TOKEN_KEY = 'ps-3sis-1sem';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token) => localStorage.setItem(TOKEN_KEY, token);
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem('userType');
};
export const setUserType = (type) => localStorage.setItem('userType', type);
export const getUserType = () => localStorage.getItem('userType');
