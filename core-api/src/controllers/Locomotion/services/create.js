const LocomotionModel = require('../../../models/Locomotion');

module.exports = async (req, res) => {
  try {
    const locomotionData = req.body;

    console.log(locomotionData);

    const locomotion = await LocomotionModel.create(locomotionData);

    return res
      .status(200)
      .json(locomotion)
      .end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};
