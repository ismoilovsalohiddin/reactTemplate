import { useMutation, useQuery } from "react-query";
import request from "services/httpRequest";


const usersServices = {
  getUsers: () => request.get("/users").then(res => res.data.data),
  deleteUser: (user_id) => request.delete(`/users/${user_id}`).then(res => res.data),
  updateuser: (user_id) => request.put(`/users/${user_id}`,)
};

export const useGetUsers = (settings) => {
  return useQuery("GET/USERS", usersServices.getUsers, settings);
};

export const useDeleteUser = (user_id) => {
  return useMutation("DELETE/USER", usersServices.deleteUser(user_id))
}
