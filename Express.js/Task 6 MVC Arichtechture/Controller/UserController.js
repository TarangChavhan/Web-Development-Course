import UserModule from '../Modules/UserModule.js'
export default function UserController(req,resp){
    const data = UserModule();
    console.log(data)
    resp.render('user',{data});
}