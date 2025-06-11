import ClientModels from './models/client.js';
import AffiliatedModels from './models/affiliated.js'


class Context {
    
    constructor() {
        this.client = new ClientModels;
        this.affiliated =  new AffiliatedModels;
        
    }
}
    


export default Context;
