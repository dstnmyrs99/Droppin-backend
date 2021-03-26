/* eslint-disable strict */

const service = require("./placesService");

const listAllPlaces = async (req, res, next) => {
  const data = await service.listAllPlaces(req.app.get("knex"));
  res.json(data);
};

const createPlace = async (req, res, next)=>{
    const newPlace = req.body;
    const added = await service.createPlace(req.app.get("knex"), newPlace);
    res.json({added});

}

module.exports = {
    listAllPlaces,
    createPlace
};
