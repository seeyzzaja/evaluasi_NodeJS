import { Router } from "express";
import { getAllUser, searchUser, createUser, updateUser, deleteUser, getUserById } from "#controllers/user.controllers";
import { creatUserValidation, getUserByIdValidation, validate } from "#middlewares/user.validation";
const routerUser = Router();
routerUser.get('/user', getAllUser);
routerUser.get('/user/search', searchUser);
routerUser.get('/user/:id', validate(getUserByIdValidation), getUserById);
routerUser.post('/user', validate(creatUserValidation), createUser);
routerUser.put('/user/:id', validate(creatUserValidation), updateUser);
routerUser.delete('/user/:id', validate(getUserByIdValidation), deleteUser);
export default routerUser;
//# sourceMappingURL=user.router.js.map