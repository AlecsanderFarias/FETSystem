const PackageModel = require('../../../models/Package');

module.exports = async (req, res) => {
  try {
    const packageData = req.body;

    console.log(packageData);

    const package = await PackageModel.create(packageData);

    return res
      .status(200)
      .json(package)
      .end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};
