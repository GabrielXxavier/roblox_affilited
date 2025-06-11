import BaseModel from './base.js'

class AffiliatedModels extends BaseModel {
  
  async create(name, email, password) {
    const affiliated = await this.knex('affiliated').insert({ name, email, password }).returning('*')
    return affiliated 
  }

};



export default AffiliatedModels;;
