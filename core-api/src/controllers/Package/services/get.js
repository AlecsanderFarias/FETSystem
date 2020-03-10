const PackageModel = require('../../../models/Package');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const package = await PackageModel.findById(id).populate('delivery');

    if (!package) return res.status(401).end();

    return res
      .status(200)
      .json(package)
      .end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};
