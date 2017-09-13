export class Patient{
    id:number;
    name:string;
    doctorId:number;
    summary:string;

    constructor(id:number, name:string, doctorId:number, summary:string){
        this.id = id;
        this.name = name;
        this.doctorId = doctorId;
        this.summary = summary;
    }

}