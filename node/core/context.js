import ProfileModels from './models/profile.ts';


class Context {
    
    constructor() {
        this.user = new UserModels;
        this.assas =  new AssasModels;
        this.sendEmail = function(to, template, data){
                          sendEmail(to, template, data)
                        }
    }
}
    


export default Context;
