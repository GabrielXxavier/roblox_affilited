import BaseModel from './base.js'
import Context from '../context.js'
const ctx = new Context();

class OrderModels extends BaseModel{
  
  async isAffiliateSelling(username){

    const client =  await ctx.client.getClient(username);
    return client    
  };

  async create(username, value, affiliated_id){

    const client =  await this.isAffiliateSelling(username)
    if(client){
      const order = await this.knex('orders').insert({username, value, affiliated: client.affiliated_id}).returning('*')
      return order
    }
    const order = await this.knex('orders').insert({username,value}).returning('*')

    return order 
  };
  
  async getOrderForAffiliatedId(affiliated_id){

    const orders = await this.knex('orders').where({affiliated: affiliated_id}) 
    return orders
  };
  
}

const func = async () =>{
  
  const orr =  new OrderModels;
  const order = await orr.getOrderForAffiliatedId('d0feda69-14c9-411b-8ddd-5f6aa6ea95b2')
  console.log(order)
} 

func() 

  
