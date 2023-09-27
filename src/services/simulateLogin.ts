import { IUser } from "../models/user";

export const simulateLogin = (isSuccessful: boolean, delayMilliseconds: number = 1000): Promise<IUser> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isSuccessful) {
          resolve({email: "lucas@email.com", name: "Lucas", token: "6509c4342a9ca"});
        } else {
          reject('Erro de autenticação. Nome de usuário ou senha incorretos.');
        }
      }, delayMilliseconds);
    });
  }
  
  
  
  