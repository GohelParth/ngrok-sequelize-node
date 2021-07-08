const { User, Country, State } = require('../../models');
var bcrypt = require('bcryptjs');

async function insertUser(req, res) {

    const { fullName, email, contact, password, countryId, stateId } = req.body;
    var salt = bcrypt.genSaltSync(5);
    var hash = bcrypt.hashSync(password, salt);

    try {
        const insertUser = await User.create({
            fullName,
            email,
            contact,
            password: hash,
            countryId,
            stateId
        });

        const saveUser = await insertUser.save();

        if (saveUser) {
            res.status(200).send({
                status: 200,
                message: "Data Stored Successfully !",
                data: saveUser
            })
        }
        throw new Error("Create User Is Failed ")

    } catch (error) {
        res.status(400).send({
            status: 400,
            data: {},
            message: error.message
        })
    }
}

async function insertCity(req, res) {
    const { cityName, pinCode } = req.body;

    try {
        const insertCity = await City.create({ cityName, pinCode })

        const save = await insertCity.save();

        if (!save) {
            throw new Error("Unable to save city ");
        } else {
            res.status(200).send({
                message: "City saved successfully !",
                status: 200,
                data: save
            })
        }
    } catch (error) {
        res.status(400).send({
            message: error.message,
            status: 400,
            data: {}
        })
    }
}

async function getUser(req, res) {

    try {
        const getData = await User.findAll({
            attributes: [],
            include: [
                {
                    model: Country,
                    // attributes: [['countryName']],
                },
                {
                    model: State,
                    // attributes: [['stateName']],
                }
            ]
        });

        if (!getData) {
            throw new Error("unable to get user")
        } else if (getData.length == 0) {
            throw new Error("There is no user is registered")
        } else {
            res.status(200).json({
                message: "get user successfully",
                status: 200,
                data: getData
            })
        }

    } catch (error) {
        console.log("error : ", error);
        res.status(400).send({
            status: 400,
            data: {},
            message: error.message
        })
    }
}

async function deleteUser(req, res) {
    const id = req.params.id;

    try {
        const deleteUser = await User.destroy({ where: { id } })

        if (!deleteUser) {
            throw new Error("Something went wrong !")
        } else {
            res.status(200).send({
                status: 200,
                message: "User Destroyed !",
                data: {}
            })
        }
    } catch (error) {
        res.status(400).send({
            status: 400,
            message: "User Destroyed !",
            data: {}
        })
    }
}

async function updateUser(req, res) {
    const { firstName, lastName, email } = req.body;

    try {
        const editUser = await User.update({ firstName, lastName },
            {
                where: { email: email }
            })

        if (!editUser) {
            throw new Error("User is unable to update the data ")
        } else {
            res.status(200).send({
                message: "User data updated successfully.",
                status: 200,
            })
        }
    } catch (error) {
        res.status(400).send({
            message: error.message,
            status: 400,
            data: {}
        })
    }
}

module.exports = { insertUser, insertCity, getUser, deleteUser, updateUser };






