const usersCtrl = {};

const UserModel = require('../models/User')

usersCtrl.VerifyUser = async(req,res)=>{
      try{
        const usuario = req.params.usuario;
        const contraseña=req.params.contraseña;
        //const {contraseña}=req.body
             
        const user = await UserModel.findOne( {usuario} )            
      
        if (!user){
                res.json({mensaje:'error usuario'})        
        }else{
            if(user.usuario=usuario && user.contraseña==contraseña){
                res.json({mensaje: 'succesfull'})
            }else{
                res.json({mensaje:`error contraseña, res:: ${contraseña}, ${usuario}`})
            }
        }        
    }catch(error){
        res.json(error); //aquí se maneja el error
    }
}
module.exports = usersCtrl;