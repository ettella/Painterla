
export class Paint{
    public id?: number;    
    public title: string;
    public description: string;
    public technic: number;
    public price: number;

    constructor(id: number, title: string, description: string, technic: number, price:number){
        this.id = id;
        this.title = title;
        this.description  = description;
        this.technic = technic;
        this.price = price
 
    }
}