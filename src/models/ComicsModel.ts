export default class ComicModel {
    id: number
    title: string
    img: string
    
    constructor(id: number, title: string, img: string) {
        this.id = id;
        this.title = title;
        this.img = img;
    }
}