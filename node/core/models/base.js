import knex from '../knex.js';

class BaseModel {
   

    constructor() {
        this.knex = knex;
    }
}

export default BaseModel;
