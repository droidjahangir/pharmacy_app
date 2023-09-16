import pharmacy from '../models/pharmacy.js';

const allPharmacy = async (req, res) => {
  try {
    let data = await pharmacy.find();
    res.status(200).json({
      data: data,
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: null,
      success: false,
      message: 'Internal Server Error Occurred.',
    });
  }
};

const createPharmacy = async (req, res) => {
  try {
    let data = await pharmacy.create(req.body);
    if (data) {
      res.status(201).json({
        data: data,
        message: 'pharmacy created successfully.',
        success: true,
      });
    } else {
      res.status(409).json({
        data: null,
        message: 'pharmacy could not be created.',
        success: false,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: null,
      success: false,
      message: 'Internal Server Error Occurred.',
    });
  }
};

const deletePharmacy = async (req, res) => {
  try {
    let pharmacy = await product.findOneAndDelete({ _id: req.params.id });

    if (pharmacy) {
      res.status(202).json({
        success: true,
        message: 'pharmacy deleted successfully',
      });
    } else {
      res.status(409).json({
        success: false,
        message: "Couldn't delete pharmacy.",
      });
    }
  } catch (err) {
    console.log('ERROR:', err);
    res.status(500).json({
      data: null,
      success: false,
      message: 'Internal Server Error Occurred.',
    });
  }
};

const updatePharmacy = async (req, res) => {
  try {
    let data = await pharmacy.findOne({ _id: req.body._id });
    if (!data)
      res.status(409).json({
        message: 'pharmacy not found.',
        success: false,
      });
    let update = await pharmacy.updateOne(
      { _id: req.body._id },
      { $set: req.body }
    );
    if (update) {
      res.status(201).json({
        data: data,
        message: 'pharmacy updated successfully.',
        success: true,
      });
    } else {
      res.status(409).json({
        message: 'pharmacy could not be updated.',
        success: false,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: null,
      success: false,
      message: 'Internal Server Error Occurred.',
    });
  }
};

const viewPharmacy = async (req, res) => {
  try {
    let data = await pharmacy.findOne({ _id: req.params.id });
    if (!data)
      res.status(409).json({
        message: 'pharmacy not found.',
        success: false,
      });

    res.status(200).json({
      data: data,
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      data: null,
      success: false,
      message: 'Internal Server Error Occurred.',
    });
  }
};

export {
  allPharmacy,
  createPharmacy,
  deletePharmacy,
  updatePharmacy,
  viewPharmacy,
};
