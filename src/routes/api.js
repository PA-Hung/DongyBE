import express from "express";
import apiController from '../controller/apiController';
import userController from '../controller/userController';
import groupController from '../controller/groupController';
import { checkUserJWT, checkUserPermission } from '../middleware/JWTAction';
import roleController from '../controller/roleController'
import projectController from '../controller/projectController'


const router = express.Router();

const initApiRoutes = (app) => {
    router.all('*', checkUserJWT, checkUserPermission)
    // path, handler
    // rest api
    // Get - R, POST - C, PUT - U, DELETE - D

    // authentication routes
    router.post('/register', apiController.handleRegister)
    router.post('/login', apiController.handleLogin)
    router.post('/logout', apiController.handLogout)
    router.get('/account', userController.getUserAccount)

    // user CRUD routers
    router.get('/user/read/', userController.readFunc)
    router.post('/user/create', userController.createFunc)
    router.put('/user/update', userController.updateFunc)
    router.delete('/user/delete', userController.deleteFunc)

    // Project CRUD routers
    router.get('/project/read/', projectController.readFunc)
    router.delete('/project/delete', projectController.deleteFunc)
    router.post('/project/create', projectController.createFunc)
    router.put('/project/update', projectController.updateFunc)

    // Project upload/get image
    router.post('/project/upload-image', projectController.uploadImage)
    // Project Search tool
    router.get('/project/search/', projectController.searchFunc)

    // roles routers
    router.get('/role/read/', roleController.readFunc)
    router.post('/role/create', roleController.createFunc)
    router.put('/role/update', roleController.updateFunc)
    router.delete('/role/delete', roleController.deleteFunc)
    router.get('/role/bygroup/:groupId', roleController.getRoleByGroup)
    router.post('/role/assign-group', roleController.assignRoleToGroup)

    // group routers
    router.get('/group/read/', groupController.readFunc)

    return app.use("/api/v1/", router)
}

export default initApiRoutes;