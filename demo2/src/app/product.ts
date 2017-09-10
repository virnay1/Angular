export class Product{
    public ProductID:number;
    public ProductName:string;
    public UnitPrice:number;

    constructor(id:number,name:string, price:number){
        this.ProductID = id;
        this.ProductName = name;
        this.UnitPrice = price;
    }
}