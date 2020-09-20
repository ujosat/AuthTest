class UserController {
    
    static async login(email, password) {
      return new Promise((resolve, reject) => {

        if(email) 
        if (password) {
            
            const logData={ 
                "username":"hruday@gmail.com",
                "password" :"hruday123" 
               } 
        if(email==logData.username && logData.password==password)
            setTimeout(() => resolve({ name: 'hruday' }), 1000);
        else setTimeout(() => reject(new Error('Invalid Email/Password')), 1000);
        } else {
          setTimeout(() => reject(new Error('Please check the entered Password')), 1000);
        }else setTimeout(() => reject(new Error('Please check the entered Email')), 1000);
      });
    }
  
    
  }
  
  export default UserController;