import{Size} from'./size.model'

export class Product {
    public id?: any;
    public reference?: string;
    public name?: string;
    public total?: number;
    public cost?: number;
    public percentage?: number;
    public sellTotal?: number;
    public sizes?:Size[];

    constructor(
        id?: any,
        reference?: string,
        name?: string,
        sizes?: Size[], 
        total?: number,
        cost?: number,
        percentage?: number,
        sellTotal?: number
    ) {
        this.id = id ? id : null;
        this.reference = reference ? reference : null;
        this.name = name ? name : null;
        this.sizes = sizes ? sizes : null;
        this.total = total ? total : null;
        this.cost = cost ? cost : null;
        this.percentage = percentage ? percentage : null;
        this.sellTotal = sellTotal ? sellTotal : null;
    }
}
