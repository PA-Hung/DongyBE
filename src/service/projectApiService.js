import db from "../models";
import apiService from '../service/apiService'
import { Op } from "sequelize";
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';

const getAllPatient = async () => {
    try {
        let patients = await db.Project.findAll({
            order: [
                [db.sequelize.literal('CASE WHEN `Project`.`updatedAt` > `Project`.`createdAt` THEN `Project`.`updatedAt` ELSE `Project`.`createdAt` END DESC')],
                ['ngaykham', 'DESC'],
            ],
            nest: true,
            include: [{
                model: db.Project_Imgs,
                order: [[db.Project_Imgs, 'createdAt', 'DESC']]
            }],
        })
        if (patients) {
            return {
                EM: 'Get patients success',
                EC: 0,
                DT: patients,
            }
        } else {
            return {
                EM: 'Data empty',
                EC: 0,
                DT: [],
            }
        }
    } catch (e) {
        console.log('>>>>> check error get all patients from projectApiService:', e)
        return {
            EM: 'Get data error',
            EC: 1,
            DT: [],
        }
    }
}

const getAllPatientWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;

        const { count, rows } = await db.Project.findAndCountAll({
            offset: offset,
            limit: limit,
            order: [
                [db.sequelize.literal('CASE WHEN `Project`.`updatedAt` > `Project`.`createdAt` THEN `Project`.`updatedAt` ELSE `Project`.`createdAt` END DESC')],
                ['ngaykham', 'DESC']
            ],
            nest: true,
            include: [{
                model: db.Project_Imgs,
                order: [[db.Project_Imgs, 'createdAt', 'DESC']]
            }],
        },)

        let totalPages = Math.ceil(count / limit)
        let data = {
            totalRows: count,
            totalPages: totalPages,
            patients: rows
        }

        return {
            EM: 'Get All Patient With Pagination success',
            EC: 0,
            DT: data,
        }

    } catch (e) {
        console.log(e)
        return {
            EM: '???? c?? l???i ??? ph???n ph??n trang backend !',
            EC: 1,
            DT: [],
        }
    }
}

const deletePatient = async (id) => {
    try {
        let patient = await db.Project.findOne({
            where: { id: id }
        })
        if (patient) {
            await patient.destroy()
            return {
                EM: 'X??a b???nh nh??n th??nh c??ng !',
                EC: 0,
                DT: [],
            }
        } else {
            return {
                EM: 'B???nh nh??n kh??ng t???n t???i',
                EC: 2,
                DT: [],
            }
        }
    } catch (e) {
        console.log(e)
        return {
            EM: 'Error from delete patient service',
            EC: 1,
            DT: [],
        }
    }
}

const createPatient = async (data) => {
    try {
        // check phone ???? t???n t???i ch??a ?
        let isPhoneExist = await apiService.checkPhoneExist(data.dienthoai)
        if (isPhoneExist === true) {
            return {
                EM: 'S??? ??i???n tho???i ???? t???n t???i !', // Error Message
                EC: 1, // error code
                DT: 'phone',
            }
        }

        console.log('>>>>>>>>>> check data th??m m???i b???nh nh??n : ', data.hinhanh)
        const project = await db.Project.create(data)
        console.log('>>>>>>>>>> check data th??m m???i b???nh nh??n : ', project.id)
        const imgData = [
            { projectId: project.id, img_url: data.hinhanh },
        ];
        await db.Project_Imgs.bulkCreate(imgData)
        return {
            EM: 'Th??m b???nh nh??n m???i th??nh c??ng !',
            EC: 0,
            DT: [],
        }
    } catch (e) {
        console.log(e)
        return {
            EM: 'Error from createPatient service',
            EC: 1,
            DT: [],
        }
    }
}

const search = async (searchName, searchPhone, searchNamsinh, searchDiachi, searchLoaibenh, searchNgaykham) => {
    try {

        let patient = await db.Project.findAll({
            nest: true,
            where: {
                phanloaibenh: { [Op.like]: '%' + searchLoaibenh + '%' },
                name: { [Op.like]: '%' + searchName + '%' },
                tuoi: { [Op.like]: '%' + searchNamsinh + '%' },
                ngaykham: { [Op.like]: '%' + searchNgaykham + '%' },
                dienthoai: { [Op.like]: '%' + searchPhone + '%' },
                diachi: { [Op.like]: '%' + searchDiachi + '%' }
            },

            order: [
                [db.sequelize.literal('CASE WHEN `Project`.`updatedAt` > `Project`.`createdAt` THEN `Project`.`updatedAt` ELSE `Project`.`createdAt` END DESC')],
                ['ngaykham', 'DESC'],
            ],
            include: [{
                model: db.Project_Imgs,
                order: [[db.Project_Imgs, 'createdAt', 'DESC']]
            }],
        })

        if (patient && patient.length > 0) {
            return {
                EM: 'Get patient success',
                EC: 0,
                DT: patient,
            }
        } else {
            return {
                EM: 'Kh??ng t??m th???y th??ng tin !',
                EC: 0,
                DT: [],
            }
        }

    } catch (e) {
        console.log('>>>>> check error get all patients from projectApiService:', e)
        return {
            EM: 'Get data error',
            EC: 1,
            DT: [],
        }
    }
}


const searchWithPagination = async (searchName, searchPhone, searchNamsinh, searchDiachi, searchLoaibenh, searchNgaykham, page, limit) => {
    try {
        let offset = (page - 1) * limit;
        console.log('>>>>>>>>> gi?? tr??? t??m ki???m t??? FE', searchName, searchPhone, searchNamsinh, searchDiachi, searchLoaibenh, searchNgaykham, page, limit)
        const { count, rows } = await db.Project.findAndCountAll({
            offset: offset,
            limit: limit,
            where: {
                name: { [Op.like]: `%${searchName}%` },
                phanloaibenh: { [Op.like]: `%${searchLoaibenh}%` },
                tuoi: { [Op.like]: '%' + searchNamsinh + '%' },
                ngaykham: { [Op.like]: '%' + searchNgaykham + '%' },
                dienthoai: { [Op.like]: '%' + searchPhone + '%' },
                diachi: { [Op.like]: '%' + searchDiachi + '%' },
            },
            order: [
                [db.sequelize.literal('CASE WHEN `Project`.`updatedAt` > `Project`.`createdAt` THEN `Project`.`updatedAt` ELSE `Project`.`createdAt` END DESC')],
                ['ngaykham', 'DESC'],
            ],
            include: [{
                model: db.Project_Imgs,
                order: [[db.Project_Imgs, 'createdAt', 'DESC']]
            }],
        },)

        console.log('>>>>>>>> s??? b???n ghi t??m ???????c ', count)
        // console.log('>>>>>>>> data t??m dc ', rows)

        let totalPages = Math.ceil(count / limit)
        let data = {
            totalRows: count,
            totalPages: totalPages,
            patients: rows
        }

        return {
            EM: 'Search All Patient With Pagination success',
            EC: 0,
            DT: data,
        }

    } catch (e) {
        console.log(e)
        return {
            EM: '???? c?? l???i ??? ph???n ph??n trang backend !',
            EC: 1,
            DT: [],
        }
    }
}

const updatePatient = async (data) => {
    try {
        let patient = await db.Project.findOne(
            { where: { id: data.id } }
        )

        if (patient) {
            if (data.hinhanh === null) {
                await patient.update({
                    phanloaibenh: data.phanloaibenh,
                    xeploai: data.xeploai,
                    name: data.name,
                    tuoi: data.tuoi,
                    gioitinh: data.gioitinh,
                    ngaykham: data.ngaykham,
                    dienthoai: data.dienthoai,
                    diachi: data.diachi,
                    ghichu: data.ghichu,
                    chandoan: data.chandoan,
                    dieutri: data.dieutri,
                    ketqua: data.ketqua,
                })
            } else {
                await patient.update({
                    phanloaibenh: data.phanloaibenh,
                    xeploai: data.xeploai,
                    name: data.name,
                    tuoi: data.tuoi,
                    gioitinh: data.gioitinh,
                    ngaykham: data.ngaykham,
                    dienthoai: data.dienthoai,
                    diachi: data.diachi,
                    ghichu: data.ghichu,
                    chandoan: data.chandoan,
                    dieutri: data.dieutri,
                    ketqua: data.ketqua,
                    hinhanh: data.hinhanh
                })

                const imgData = [
                    { projectId: data.id, img_url: data.hinhanh },
                ];
                await db.Project_Imgs.bulkCreate(imgData)
            }

            return {
                EM: 'C???p nh???t th??ng tin th??nh c??ng !',
                EC: 0,
                DT: '',
            }
        } else {
            return {
                EM: 'Update error',
                EC: 1,
                DT: '',
            }
        }
    } catch (e) {
        console.log(e)
        return {
            EM: 'Error from update patient service',
            EC: 1,
            DT: [],
        }
    }

}

module.exports = {
    getAllPatient,
    deletePatient,
    getAllPatientWithPagination,
    createPatient,
    updatePatient,
    search,
    searchWithPagination,
}