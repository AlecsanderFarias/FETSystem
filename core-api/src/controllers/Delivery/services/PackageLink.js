const DeliveryModel = require('../../../models/Delivery');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { packageId } = req.body;

    const delivery = await DeliveryModel.findOne({
      packages: packageId
    });

    if (delivery) return res.status(401).end(); //essa carga ja esta vinculada a uma entrega

    await DeliveryModel.findByIdAndUpdate(id, {
      $push: { packages: packageId }
    });

    return res.status(200).end();
  } catch (error) {
    return res.status(500).end();
  }
};
