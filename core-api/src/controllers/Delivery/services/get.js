const DeliveryModel = require('../../../models/Delivery');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const delivery = await DeliveryModel.findById(id).populate('packages');

    if (!delivery) return res.status(401).end();

    return res
      .status(200)
      .json(delivery)
      .end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};
