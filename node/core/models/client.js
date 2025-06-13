import BaseModel from './base.js'
import knex from '../knex.js';

class ClientModels extends BaseModel{
  
  async create(username, affiliated_id){
    
    const client = await this.knex('clients').insert({username, affiliated_id}).returning('*')
    return client

  };
  
  async getClient(username){
  
    const client = await this.knex('clients').where({username: username}).first()
    return client
  }

};
/*
const func = async () =>{
  
  const cll =  new ClientModels;
  const client = await cll.create('client2','61da0f81-df0f-4abb-82f2-189f60c97c6a')
 
  console.log(client)
} 

func()
*/


export default ClientModels;
