export class Post {

    constructor(user: string){
        this.user = user;
    }

    id: number | undefined;
    postText: string | undefined;
    timestamp: Date = new Date();
    user: String | undefined;
}