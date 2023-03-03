import projectApiService from '../service/projectApiService'
import cloudinary from '../config/configCloudinary.js'

const readFunc = async (req, res) => {

    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page
            let limit = req.query.limit

            let data = await projectApiService.getAllPatientWithPagination(+page, +limit);
            return res.status(200).json({
                EM: data.EM, // Error Message
                EC: data.EC, // Error Code
                DT: data.DT, // Data
            })
        } else {
            let data = await projectApiService.getAllPatient();
            return res.status(200).json({
                EM: data.EM, // Error Message
                EC: data.EC, // Error Code
                DT: data.DT, // Data
            })
        }

    } catch (e) {
        console.log('>>>>> error from get all patients :', e)
        return res.status(500).json({
            EM: 'Error from server', // Error Message
            EC: '-1', // Error Code
            DT: '', // Data
        })
    }
}

const deleteFunc = async (req, res) => {
    try {
        //console.log('Check patient id from front end', req.body)
        let data = await projectApiService.deletePatient(req.body.id)
        return res.status(200).json({
            EM: data.EM, // Error Message
            EC: data.EC, // Error Code
            DT: data.DT, // Data
        })

    } catch (e) {
        console.log('>>>>> error from detele patient controller:', e)
        return res.status(500).json({
            EM: 'Error from server', // Error Message
            EC: '-1', // Error Code
            DT: '', // Data
        })
    }
}

const createFunc = async (req, res) => {
    try {
        // validate
        let data = await projectApiService.createPatient(req.body);
        return res.status(200).json({
            EM: data.EM, // Error Message
            EC: data.EC, // Error Code
            DT: data.DT, // Data
        })

    } catch (e) {
        console.log('>>>>> error from createFunc patient :', e)
        return res.status(500).json({
            EM: 'Error from server', // Error Message
            EC: '-1', // Error Code
            DT: '', // Data
        })
    }
}

const updateFunc = async (req, res) => {
    try {
        // validate
        let data = await projectApiService.updatePatient(req.body);
        return res.status(200).json({
            EM: data.EM, // Error Message
            EC: data.EC, // Error Code
            DT: data.DT, // Data
        })

    } catch (e) {
        console.log('>>>>> error from get all user :', e)
        return res.status(500).json({
            EM: 'Error from server', // Error Message
            EC: '-1', // Error Code
            DT: '', // Data
        })
    }
}

const uploadImage = async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
        });
        //console.log(uploadResponse);
        let imageURL = uploadResponse.secure_url
        return res.status(200).json({
            EM: 'Upload ảnh thành công', // Error Message
            EC: 0, // Error Code
            DT: imageURL, // Data
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Lỗi khi up hình đại diện !' });
    }
}

const searchFunc = async (req, res) => {
    let searchName = req.query.name
    let searchPhone = req.query.phone
    let searchNamsinh = req.query.namsinh
    let searchDiachi = req.query.diachi
    let searchLoaibenh = req.query.loaibenh
    let searchNgaykham = req.query.ngaykham
    let searchGhichu = req.query.ghichu
    let searchChandoan = req.query.chandoan
    let searchDieutri = req.query.dieutri
    let searchKetqua = req.query.ketqua
    // console.log('>>>>>>searchName>>>>>>>', searchName)
    // console.log('>>>>>>searchPhone>>>>>>>', searchPhone)
    // console.log('>>>>>>searchNamsinh>>>>>>>', searchNamsinh)
    // console.log('>>>>>>searchDiachi>>>>>>>', searchDiachi)
    // console.log('>>>>>>searchLoaibenh>>>>>>>', searchLoaibenh)
    // console.log('>>>>>>searchNgaykham>>>>>>>', searchNgaykham)
    // console.log('>>>>>>searchGhichu>>>>>>>', searchGhichu)
    //console.log('>>>>>> Controller searchChandoan>>>>>>>', searchChandoan)
    // console.log('>>>>>>searchDieutri>>>>>>>', searchDieutri)
    //console.log('>>>>>> Controller searchKetqua>>>>>>>', searchKetqua)

    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page
            let limit = req.query.limit

            let data = await projectApiService.searchWithPagination(searchName, searchPhone, searchNamsinh, searchDiachi, searchLoaibenh, searchNgaykham, searchGhichu, searchChandoan, searchDieutri, searchKetqua, + page, +limit);
            return res.status(200).json({
                EM: data.EM, // Error Message
                EC: data.EC, // Error Code
                DT: data.DT, // Data
            })
        } else {
            let data = await projectApiService.search(searchName, searchPhone, searchNamsinh, searchDiachi, searchLoaibenh, searchNgaykham, searchGhichu, searchChandoan, searchDieutri, searchKetqua);
            return res.status(200).json({
                EM: data.EM, // Error Message
                EC: data.EC, // Error Code
                DT: data.DT, // Data
            })
        }

    } catch (e) {
        console.log('>>>>> error from search all patients :', e)
        return res.status(500).json({
            EM: 'Error from server', // Error Message
            EC: '-1', // Error Code
            DT: '', // Data
        })
    }
}

module.exports = {
    readFunc,
    deleteFunc,
    createFunc,
    updateFunc,
    uploadImage,
    searchFunc
}