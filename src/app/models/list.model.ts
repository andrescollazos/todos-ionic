import { ListItem } from './list-item.model';

export class List {
    id: number;
    title: string;
    beginDate: Date;
    endDate: Date;
    completed: boolean;
    items: ListItem[];

    constructor(title: string){
        this.title = title;
        this.beginDate = new Date();
        this.completed = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}