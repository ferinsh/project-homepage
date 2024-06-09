export default class project{
    constructor(){
        //console.log("project object created");
        this.link = "link";
        this.name = "name";
    }
    
    readLink() {
        console.log(this.link);    
    }

    readName() {
        console.log(this.name);
    }

    changeLink(link){
        this.link = String(link);
    }

    changeName(name){
        this.name = String(name);
    }
}