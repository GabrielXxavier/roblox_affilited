import BaseModel from './base.js'
import knex from '../knex.js';

class ClientModels extends BaseModel{
  
  async create(username, affiliated_id){
    
    const client = await this.knex('clients').insert({username, affiliated_id}).returning('*')
    return client

  };
  
  async getClient(username){
    const client = await this.knex('clients').where({username: username}).first()
    console.log('client'+ client)
    return client
  }

};



export default ClientModels;
