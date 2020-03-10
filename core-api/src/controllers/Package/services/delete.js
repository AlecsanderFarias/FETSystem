const PackageModel = require('../../../models/Package');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    await PackageModel.findByIdAndDelete(id);

    return res.status(200).end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};
