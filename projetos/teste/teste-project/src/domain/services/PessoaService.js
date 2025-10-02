import axios from "axios";

let url = "http://localhost:8086"; 

class PessoaService{

  buscarPessoas() {
   return axios.get(url + "/pessoa");
  };

}

export default new PessoaService();