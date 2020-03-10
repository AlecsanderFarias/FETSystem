const TravelMode = require('../../../models/Travel');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const travel = await TravelMode.findById(id).populate(
      'driver deliverys locomotion subLocomotion'
    );

    if (!travel) return res.status(401).end();

    return res
      .status(200)
      .json(travel)
      .end();
  } catch (error) {
    return res.status(500).end();
  }
};
