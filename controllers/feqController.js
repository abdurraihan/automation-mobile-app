import Feq from '../models/Feq.js';
import Contact from '../models/Contact.js';
import { sendEmail } from '../utils/mailer.js';

export const submitFeq = async (req, res) => {
  try {
    const feq = new Feq(req.body);
    const savedFeq = await feq.save();
    res.status(201).json(savedFeq);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save FEQ' });
  }
};

export const sendFeqEmail = async (req, res) => {
  try {
    const { contactId, feqId } = req.body;

    const contact = await Contact.findById(contactId);
    const feq = await Feq.findById(feqId);

    if (!contact || !feq) {
      return res.status(404).json({ error: 'Contact or FEQ not found' });
    }

    await sendEmail(contact, feq);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
};

export const getFeq = async (req, res) => {
  try {
    const feq = await Feq.findById(req.params.id).populate('contactId');
    res.status(200).json(feq);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get FEQ' });
  }
};
