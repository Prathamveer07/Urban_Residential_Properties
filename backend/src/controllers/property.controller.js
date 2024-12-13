import Property from "../models/property.model.js";

export const addPropertyListing = async (req, res) => {
  try {
    const { name, price, location, photo } = req.body;

    const property = new Property({
      name,
      price,
      location,
      photo,
      owner: req.user.userId,
    });

    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error creating property listing",
        error: error.message,
      });
  }
};

export const getAllListings = async (req, res) => {
  try {
    const properties = await Property.find()
      .populate("owner", "name email")
      .sort({ createdAt: -1 });
    res.json(properties);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching properties", error: error.message });
  }
};
