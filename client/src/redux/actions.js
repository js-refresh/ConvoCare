export const SET_USER = "SET_USER";

export function setUser(data) {
  return {
    type: SET_USER,
    data,
  };
}