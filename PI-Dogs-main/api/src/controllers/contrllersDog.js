const axios = require('axios');
const { API_KEY } = process.env;
const dogs = require('../routes/routesDog');
const { Temperament, Dog } = require('../db');
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;

const getApiInfoDog = async () => {
    try {
        const apiURL = await axios.get(URL);
        const apiInfo = apiURL.data.map(e => {
            return { // requiere datos de la API thedogapi.com
                id: e.id,
                name: e.name,
                image: e.image.url,
                breed_group: e.breed_group,
                temperament: e.temperament,
                life_span: e.life_span,
                weight_min: parseInt(e.weight.metric.slice(0, 2).trim()),
                weight_max: parseInt(e.weight.metric.slice(4).trim()),
                height_min: parseInt(e.height.metric.slice(0, 2).trim()),
                height_max: parseInt(e.height.metric.slice(4).trim()),
            };
        });
        return apiInfo;
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        return [];
    }
};

const getDBInfoDog = async () => {
    try {
        var dogsDB = await Dog.findAll({
            include: {
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
        });
        return dogsDB;
    } catch (error) {
        console.error('Error al obtener datos de la base de datos:', error);
        return [];
    }
};


const getAllDogs = async () => {
    const apiInfo = await getApiInfoDog();
    const DBInfo = await getDBInfoDog();
    const infoTotal = apiInfo.concat(DBInfo);
    return infoTotal;
};

module.exports = {
    getAllDogs, getApiInfoDog, getDBInfoDog
};