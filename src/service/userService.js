import bcrypt from 'bcryptjs';
//import mysql from 'mysql2/promise';
//import bluebird from 'bluebird';
const salt = bcrypt.genSaltSync(10);
import db from '../models/index';

const hashUserPassword = (userPassword) => {
    let hashUserPassword = bcrypt.hashSync(userPassword, salt);
    return hashUserPassword
}

const createNewUser = async (email, password, username) => {
    let hashPass = hashUserPassword(password)
    try {
        await db.User.create({
            email: email,
            password: hashPass,
            username: username
        });

    } catch (e) {
        console.log('check error >>>>>>>>>>', e)
    }


}

const getUserInfo = async () => {
    // test relationship

    let newUser = await db.User.findOne({
        where: { id: 1 },
        include: {
            model: db.Group,
            attributes: ["name", "description"]
        },
        raw: true,
        nest: true,
        attributes: ["id", "username", "email"]
    })

    let roles = await db.Role.findAll({
        include: {
            model: db.Group,
            where: { id: 1 },
            attributes: ["name", "description"]
        },
        raw: true,
        nest: true,
        attributes: ["url", "description"]
    })

    let userInfo = []
    userInfo = await db.User.findAll()
    return userInfo
}

const deleteUser = async (userId) => {
    await db.User.destroy({
        where: { id: userId }
    })
}

const getUserById = async (userID) => {
    let userInfo = {}
    userInfo = await db.User.findOne({
        where: { id: userID }
    })
    userInfo = userInfo.get({ plain: true })
    return [userInfo]

}

const postUpdateUserById = async (email, username, id) => {
    await db.User.update({ email: email, username: username }, { where: { id: id } })
}

module.exports = {
    createNewUser, hashUserPassword, getUserInfo, deleteUser, getUserById, postUpdateUserById
}