import { postAluguel } from "../services/API";

export default class AluguelComic {
    constructor (private idUser: number, private idHq: number, private titulo: string, private imagem: string, 
        private dataDevolucao: string
    ) {
        this.idUser = idUser;
        this.idHq = idHq;
        this.titulo = titulo;
        this.imagem = imagem;
        this.dataDevolucao = dataDevolucao;
    }

    async postAluguel() {
        await postAluguel(this)
    }
}