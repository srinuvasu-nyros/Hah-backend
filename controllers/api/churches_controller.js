const church = require("../../models/church");
const Organization = require("../../models/organization");


// Create a new church
const createChurch = async (req, res) => {
  try {
    const { Organization } = req.body;

    // Validate if the parent_organization exists
    if (Organization) {
      const parentOrgExists = await Organization.findById(Organization);
      if (!parentOrgExists) {
        return res.status(400).json({ error: 'Parent organization not found' });
      }
    }

    const Church = new church(req.body);
    await Church.save(); // Save church first

    // Populate parent_organization field after saving
    const populatedChurch = await church.findById(Church._id)
      .populate('parent_organization')
      .exec();

    res.status(201).json(populatedChurch);
  } catch (error) {
    res.status(400).json({ error: `Failed to create church: ${error.message}` });
  }
};

// Get all churches
const getAllChurches = async (req, res) => {
  try {
    const Churches = await church.find().populate('parent_organization');
    res.status(200).json(Churches);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a church by ID
const getChurchById = async (req, res) => {
  try {
    const Church = await church.findById(req.params.id).populate('parent_organization');
    if (!Church) {
      return res.status(404).json({ error: 'Church not found' });
    }
    res.status(200).json(Church);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  createChurch,
  getAllChurches,
  getChurchById
};