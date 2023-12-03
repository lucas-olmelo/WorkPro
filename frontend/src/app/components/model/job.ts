export class Job {

    constructor(user: string){
        this.user = user;
    }

    id: number | undefined;
    title: string | undefined;
    enterpriseName: string | undefined;
    description: string | undefined;
    wage: string | undefined;
    user: string | undefined;
    timestamp: Date = new Date();
}