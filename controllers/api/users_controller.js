// import Organization from '../../model/OrganizationModel.js';

// const getOrganizations = async (req, res) => {
//   try {
//     const organizations = await Organization.find();
//     res.status(200).json(organizations);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const createOrganization = async (req, res) => {
//   try {
//     const organization = new Organization(req.body);
//     await organization.save();
//     res.status(201).json(organization);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// const updateOrganization = async (req, res) => {
//   try {
//     const organization = await Organization.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!organization) return res.status(404).json({ message: 'Organization not found' });
//     res.status(200).json(organization);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// const deleteOrganization = async (req, res) => {
//   try {
//     const organization = await Organization.findByIdAndDelete(req.params.id);
//     if (!organization) return res.status(404).json({ message: 'Organization not found' });
//     res.status(200).json({ message: 'Organization deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export default {
//   getOrganizations,
//   createOrganization,
//   updateOrganization,
//   deleteOrganization,
// };
