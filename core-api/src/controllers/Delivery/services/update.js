const DeliveryModel = require('../../../models/Delivery');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const delivery = await DeliveryModel.findByIdAndUpdate(id, req.body);

    return res
      .status(200)
      .json(delivery)
      .end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};
