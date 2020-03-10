const DeliveryModel = require('../../../models/Delivery');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { packageId } = req.body;

    await DeliveryModel.findByIdAndUpdate(id, {
      $pull: { packages: packageId }
    });

    return res.status(200).end();
  } catch (error) {
    return res.status(500).end();
  }
};
