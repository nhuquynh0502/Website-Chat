export class LsHelper{
    static idKey = 'ID_KEY';

    public static saveId(id:string){
        localStorage.setItem(this.idKey, id)
    }

    public static getId(){
        return localStorage.getItem(this.idKey)
    }

    public static removeId(){
        localStorage.removeItem(this.idKey)
    }
}