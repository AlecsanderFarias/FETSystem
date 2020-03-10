const LocomotionModel = require('../../../models/Locomotion');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const locomotion = await LocomotionModel.findById(id);

    return res
      .status(200)
      .json(locomotion)
      .end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};
