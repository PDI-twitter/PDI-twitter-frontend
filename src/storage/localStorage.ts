export const localStorageControl = {
  setObject: (key: string, object: any): void => {
    try {
      const objetoJSON = JSON.stringify(object);
      localStorage.setItem(key, objetoJSON);
    } catch (erro) {
      console.error("Erro ao salvar no Local Storage:", erro);
    }
  },
  getObject: (key: string): any => {
    try {
      const value = localStorage.getItem(key);
      if (value === null) {
        console.log(
          `Nenhum value encontrado para a key "${key}" no Local Storage.`
        );
        return null;
      }
      return JSON.parse(value);
    } catch (erro) {
      console.error("Erro ao salvar no Local Storage:", erro);
    }
  },
  set: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch (erro) {
      console.error("Erro ao salvar no Local Storage:", erro);
    }
  },
  get: (key: string): string | null => {
    try {
      const value = localStorage.getItem(key);
      if (value === null) {
        console.log(
          `Nenhum value encontrado para a key "${key}" no Local Storage.`
        );
      }
      return value;
    } catch (erro) {
      console.error("Erro ao obter a string do Local Storage:", erro);
      return null;
    }
  },
  reset: (): void => {
    try {
      localStorage.clear();
    } catch (erro) {
      console.error("Erro ao limpar o Local Storage:", erro);
    }
  },
};
