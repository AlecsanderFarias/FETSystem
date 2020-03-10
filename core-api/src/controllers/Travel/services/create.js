const TravelModel = require('../../../models/Travel');

module.exports = async (req, res) => {
  try {
    const travelData = req.body;

    console.log(travelData);

    const travel = await TravelModel.create(deliveryData);

    return res
      .status(200)
      .json(travel)
      .end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};
