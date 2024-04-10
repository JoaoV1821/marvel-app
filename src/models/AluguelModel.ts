export default class AluguelComic {
    constructor(private idComic: number, private userEmail: string, private  dataInicio: Date, private dataFinal: Date ) {
        this.idComic = idComic;
        this.userEmail = userEmail;
        this.dataInicio = dataInicio;
        this.dataFinal = dataFinal;
    }

    get IdComic(): number {
        return this.idComic;
    }

    get UserEmail(): string {
        return this.userEmail;
    }

    get DataInicio(): Date {
        return this.dataInicio;
    }

    get DataFinal(): Date {
        return this.dataFinal
    }

}