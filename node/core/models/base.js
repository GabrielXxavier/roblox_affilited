import Context from '../context.js';
import knex from '../knex.js';

class BaseModel {
   

    constructor(Context) {
        this.context = Context;
        this.knex = knex;
        this.ctx = this.Context;
    }
}

export default BaseModel;
