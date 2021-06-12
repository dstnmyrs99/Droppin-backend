/* eslint-disable strict */

const service = require("./usersService");

const listAllUsers = async (req, res, next) => {
  const data = await service.listAllUsers(req.app.get("knex"));
  res.json(data);
};

const createUser = async (req, res, next)=>{
    const newUser = req.body;
    const checkIfExists = await service.getUser(req.app.get("knex"), newUser.user_name)
    if(!checkIfExists.length){
        const added = await service.createUser(req.app.get("knex"), newUser);
        res.json({added});
    }else{
        next({
            status: 401,
            message: "Username already exists",
          })
    }
}

const getUser = async (req,res,next) =>{
    const user = req.params.user_name;
    const userInfo = await service.getUser(req.app.get("knex"), user);
    res.locals.user = userInfo;
    next();
}

const authorizeUser = async (req,res,next)=>{
    const password = req.body.password;
    const userInfo = res.locals.user;
    if(userInfo.length && password === userInfo[0].password){
        res.json(userInfo[0].user_name);
    }else{
        next({
            status: 401,
            message: "You have entered an invalid username or password",
          })
    }
}

module.exports = {
    listAllUsers,
    createUser,
    getUser: [getUser, authorizeUser]
};
