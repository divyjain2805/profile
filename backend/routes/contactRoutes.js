import express from 'express';
import Contact from '../models/Contact.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

// Fallback in-memory / local JSON store for inquiries when MongoDB is not running locally
const LOCAL_MESSAGES_FILE = path.join(__dirname, '../data/messages.json');

const saveMessageLocally = (messageDoc) => {
  try {
    const dir = path.dirname(LOCAL_MESSAGES_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    let list = [];
    if (fs.existsSync(LOCAL_MESSAGES_FILE)) {
      const data = fs.readFileSync(LOCAL_MESSAGES_FILE, 'utf8');
      list = JSON.parse(data || '[]');
    }
    list.unshift(messageDoc);
    fs.writeFileSync(LOCAL_MESSAGES_FILE, JSON.stringify(list, null, 2), 'utf8');
  } catch (err) {
    console.error('Error saving message locally:', err.message);
  }
};

// POST /api/contact - Submit contact inquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    const contactPayload = {
      name: name.trim(),
      email: email.trim(),
      subject: (subject || 'General Inquiry').trim(),
      message: message.trim(),
      ip: req.ip || req.headers['x-forwarded-for'] || '',
      createdAt: new Date().toISOString()
    };

    let savedInMongo = false;
    // Attempt MongoDB save if connected
    try {
      if (Contact.db && Contact.db.readyState === 1) {
        const newContact = new Contact(contactPayload);
        await newContact.save();
        savedInMongo = true;
      }
    } catch (dbErr) {
      console.warn('MongoDB save skipped, using local fallback:', dbErr.message);
    }

    // Always ensure message is safely captured
    saveMessageLocally({ ...contactPayload, savedInMongo });

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been received.',
      data: {
        name: contactPayload.name,
        email: contactPayload.email,
        subject: contactPayload.subject,
        timestamp: contactPayload.createdAt
      }
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while processing your message.'
    });
  }
});

export default router;
