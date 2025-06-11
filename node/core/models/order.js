import BaseModel from './base.js'
import Context from '../context.js'
const ctx = new Context();

class OrderModels extends BaseModel{
  
  async isAffiliateSelling(username){

    const client =  await ctx.client.getClient(username);
    return client
    
  }
  async create(username, value, affiliated_id){
    const client =  await this.isAffiliateSelling(username)
    if(client){
      const order = await this.knex('orders').insert({username, value, affiliated: client.affiliated_id}).returning('*')
      console.log(order)
      return order
    }
    const order = await this.knex('orders').insert({username,value}).returning('*')
    console.log('order'+ order)
    return order
    
  }
  
}

const func = async () =>{
  
  const orr =  new OrderModels;
  const order = await orr.create('client1','120')
 
} 

func()

  
