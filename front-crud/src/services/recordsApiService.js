import axios from "axios";

const url = "http://localhost:3000/records";

export const recordsApiService = {
  create(record) {
    axios.post(url, record);
  },

  deletebyId(id) {
    axios.delete(url + `/${id}`);
  },

  fetchAll() {
    //promesa i luego funcion callback:
    const data = axios.get(url).then((res) => res.data);
    return data;
    //.get("http://localhost:3000/records")
    //.then((res) => (this.movies = res.data));
    //llega un ok 200 i array que esta en data i headers
    //quiero pillar data
    //cuando termina la promesa me devuelve res respuesta y lo puedo llamar
  },
};
