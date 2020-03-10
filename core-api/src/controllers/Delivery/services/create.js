const DeliveryModel = require('../../../models/Delivery');

module.exports = async (req, res) => {
  try {
    const deliveryData = req.body;

    console.log(deliveryData);

    const delivery = await DeliveryModel.create(deliveryData);

    return res
      .status(200)
      .json(delivery)
      .end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};
