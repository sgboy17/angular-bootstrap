export class Book {
    
    public id: number;
    public name: string;
    public xxx: string;
    public author: string;
      

    // constructor(obj?: any){
    //     Object.assign(this, obj);
    // }

    constructor(obj: any){
      this.id = obj.id;
      this.name = obj.name;
      this.xxx = obj.xxx;
      this.author = obj.author;
  }
}

