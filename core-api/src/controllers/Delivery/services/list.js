const DeliveryModel = require('../../../models/Delivery');

module.exports = async (req, res) => {
  try {
    const { page, perPage, date, status } = req.query;

    const customOptions = {
      docs: 'deliverys',
      totalDocs: 'total'
    };

    const options = {
      limit: parseInt(perPage) || 10,
      page: parseInt(page) || 1,
      customLabels: customOptions
    };

    let query = {};

    if (date) {
      query.date = date + 'T00:00:00.000Z';
    }

    if (status) {
      query.status = status;
    }

    const deliverys = await DeliveryModel.paginate(query, options);

    return res
      .status(200)
      .json(deliverys)
      .end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
};
