
import { BaseEntity } from '../../shared';

export class Product implements BaseEntity {
    constructor(
        public id?: number,
        public reference?: string,
        public description?: string,
        public price?: number,
        public profit?: number,
        public sizes?:BaseEntity[],
    ) {
    }
}