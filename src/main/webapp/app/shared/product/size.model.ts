import {Color} from'./color.model';

export class Size {
    public id?: any;
    public name?: string;
    public value?: string;
    public colors?:Color[];
    public quantity?:number;

    constructor(
        id?: any,
        name?: string,
        value?: any,
        colors?:Color[],
        quantity?:number
    ) {
        this.id = id ? id : null;
        this.name = name ? name : null;
        this.value = value ? value : null;
        this.colors=colors?colors:null;
        this.quantity=quantity?quantity:null;
    }
}
