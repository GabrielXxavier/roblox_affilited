import BaseModel from './base.js'
import knex from '../knex.ts';

class ClientsModels(){
  
  async createClient(username){
    
    const profile = this.knex('profiles').insert({username})
  }
}
