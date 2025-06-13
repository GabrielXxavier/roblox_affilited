import BaseModel from './base.js'

class AffiliatedModels extends BaseModel {
  
  async create(name, email, password) {
    const affiliated = await this.knex('affiliated').insert({ name, email, password }).returning('*')
    return affiliated 
  }

};
/*
const func = async () =>{
  
  const aff =  new AffiliatedModels;
  const afiliado = await aff.create('Lucas','lucas@gmail.com','123123')
 
  console.log(afiliado)
} 

func()
*/

export default AffiliatedModels;;
