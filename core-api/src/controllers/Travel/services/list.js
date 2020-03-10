const TravelModel = require('../../../models/Travel');

module.exports = async (req, res) => {
  try {
    const { page, perPage, start, end, status, description } = req.query;

    const customOptions = {
      docs: 'travels',
      totalDocs: 'total'
    };

    const options = {
      limit: parseInt(perPage) || 10,
      page: parseInt(page) || 1,
      customLabels: customOptions
    };

    let query = {};

    if (start) {
      query.date = {};

      query.date.start = start;
    }

    if (end) {
      if (!query.date) query.date = {};

      query.date.end = end;
    }

    if (status) {
      query.status = status;
    }

    if (description) {
      query.description = { $regex: description, $options: 'i' };
    }

    const travels = await TravelModel.paginate(query, options);

    return res
      .status(200)
      .json(travels)
      .end();
  } catch (error) {
    return res.status(500).end();
  }
};
