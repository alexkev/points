export class Player {
    public id: number;
    public name: string;
    public points: number[];

    constructor(id: number, name: string, points: number[]) {
        this.id = id;
        this.name = name;
        this.points = points;
    }
}
