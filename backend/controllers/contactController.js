import { sendContactEmail } from '../config/nodemailer.js';
import { isDbConnected } from '../config/db.js';
import * as contactService from '../services/contactService.js';

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    let saved = false;
    if (isDbConnected()) {
      await contactService.saveContact({ name, email, message });
      saved = true;
    }

    const emailSent = await sendContactEmail({ name, email, message });

    res.status(200).json({
      message: emailSent
        ? 'Thank you! Your message has been sent successfully.'
        : saved
          ? 'Thank you! Your message has been saved.'
          : 'Thank you! Your message has been received.',
      saved,
      emailed: emailSent,
    });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ message: 'Failed to process your message. Please try again.' });
  }
};

export const getContacts = async (req, res) => {
  try {
    if (!isDbConnected()) {
      return res.status(503).json({ message: 'PostgreSQL database not connected' });
    }
    const contacts = await contactService.getContacts();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
