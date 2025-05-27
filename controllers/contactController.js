import Contact from '../models/Contact.js';

export const submitContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const savedContact = await contact.save();
    console.log(savedContact);
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save contact' });
  }
};
