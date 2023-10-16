import Cookies from "js-cookie";

export const CookiesControl = {
  setObject: (key: string, object: any, expires?: number): void => {
    try {
      const objetoJSON = JSON.stringify(object);
      Cookies.set(key, objetoJSON, { expires });
    } catch (erro) {
      console.error("Erro ao salvar em Cookie:", erro);
    }
  },
  getObject: (key: string): any => {
    try {
      const value = Cookies.get(key);
      if (!value) {
        console.log(`Nenhum value encontrado para a key "${key}" em Cookie.`);
        return null;
      }
      return JSON.parse(value);
    } catch (erro) {
      console.error("Erro ao salvar em Cookie:", erro);
    }
  },
  set: (key: string, value: string, expires?: number): void => {
    try {
      Cookies.set(key, value, { expires });
    } catch (erro) {
      console.error("Erro ao salvar em Cookie:", erro);
    }
  },
  get: (key: string): string | null => {
    try {
      const value = Cookies.get(key);
      if (!value) {
        console.log(`Nenhum value encontrado para a key "${key}" em Cookie.`);
        return null;
      }
      return value;
    } catch (erro) {
      console.error("Erro ao obter a string do Cookie:", erro);
      return null;
    }
  },
  remove: (key: string): void => {
    try {
      Cookies.remove(key);
    } catch (erro) {
      console.error("Erro ao limpar o Local Storage:", erro);
    }
  },
};
