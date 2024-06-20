export default class project{
    constructor(){
        //console.log("project object created");
        this.link = "link";
        this.name = "name";
        this.img = "imgURL";
    }
    
    readLink() {
        console.log(this.link);    
    }

    readName() {
        console.log(this.name);
    }

    readImgURL() {
        console.log(this.img);
    }

    changeLink(link){
        this.link = String(link);
    }

    changeName(name){
        this.name = String(name);
    }

    changeImgURL(link){
        this.img = String(link);
    }

}