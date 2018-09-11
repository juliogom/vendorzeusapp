export class Color {
    public id?: any;
    public name?: string;
    public hexadecimal?: string;
    
    constructor(
        id?: any,
        name?: string,
        hexadecimal?: string,
    ) {
        this.id = id ? id : null;
        this.name = name ? name : null;
        this.hexadecimal = hexadecimal ? hexadecimal : null;
        
    }
}
