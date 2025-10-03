import axios from "axios";

let url = "http://localhost:8086"; 

class PessoaService{

  buscarPessoas() {
   return axios.get(url + "/pessoa");
  };
  
  cadastrarPessoa(item) {
   return axios.post(url + "/pessoa",item);
  };

}

export default new PessoaService();