import { useMutation } from "react-query";
import request from "services/httpRequest";
import { authStore } from "store/auth.store";

const authServices = {
  login: (data) => {
    request.post("/auth/login", data).then(res => {
      if(res.status === 200){
        authStore.login()
        authStore.userData = res.data
      }
    })
  },
  register: (data) => {
    request.post("/auth/register", data).then(res => {
      if(res.status === 200){
        authStore.login()
        authStore.userData = res.data
      }
    })
  },
  hasPermission: (user_id) => {
    request.patch(`/auth/grant-permission/${user_id}`).then(res => res.data)
  }
}

export const useLogin = (data) => {
  return useMutation("LOGIN", authServices.login(data))
}

export const useRegister = (data) => {
  return useMutation("REGISTER", authServices.register(data))
}

export const useGivePermission = (user_id) => {
  return useMutation("PATCH/GIVE_PERMISSION", authServices.hasPermission(user_id))
}
