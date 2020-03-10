const PackageModel = require('../../../models/Package');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    await PackageModel.findByIdAndUpdate(id, req.body);

    return res.status(200).end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};
