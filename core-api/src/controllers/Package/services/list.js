const PackageModel = require('../../../models/Package');

module.exports = async (req, res) => {
  try {
    const { page, perPage, buyer, name } = req.query;

    const customOptions = {
      docs: 'packages',
      totalDocs: 'total'
    };

    const options = {
      limit: parseInt(perPage) || 10,
      page: parseInt(page) || 1,
      customLabels: customOptions
    };

    let query = {};

    if (buyer) {
      query.buyer = { $regex: buyer, $options: 'i' };
    }

    if (name) {
      query.name = { $regex: name, $options: 'i' };
    }

    const packages = await PackageModel.paginate(query, options);

    return res
      .status(200)
      .json(packages)
      .end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};
