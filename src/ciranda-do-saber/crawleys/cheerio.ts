import { ICirandaCrawler } from "./icirandacrawler";

const cheerio = require('cheerio');
const axios   = require('axios');

export class CirandaCheerioCrawler implements ICirandaCrawler {
  async getAtividade(turma : number, mes : string, dia : number) {
    return await axios({
      method: 'post',
      url: "https://institutocirandadosaber.com.br/infantil.php", 
      data: {
        'infantil': 'infantil3',
        'mes': mes,
        'dia': dia,
        'submit': 'Consultar'
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    .then( (response) => {
      const $ = cheerio.load(response.data);
      const linkAtividade = $('#about .cource-list-agile .agile-course-main-2 a');
      if (linkAtividade.length) {
        return linkAtividade.attr('href');
      }

      return 'mada';
    })
    .catch( error => {
      console.log(error);
      return 'erro';
    });
  }
}
