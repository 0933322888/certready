import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.query?.token) {
    // Support token in query parameter for direct window/tab requests (e.g. proof preview, file downloads)
    token = req.query.token;
  }
  if (!token) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    if (!req.user) {
      return res.status(401).json({ message: 'User not found' });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token invalid or expired' });
  }
};

/** Same as protect but does not reject: if no/invalid token, sets req.user = null and continues. */
const optionalProtect = async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    req.user = null;
    return next();
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
  } catch {
    req.user = null;
  }
  next();
};

/** Requires protect first. Checks req.user.email is in ADMIN_EMAILS (comma-separated). */
const requireAdmin = (req, res, next) => {
  const emails = (process.env.ADMIN_EMAILS || '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean);
  if (emails.length === 0) {
    return res.status(403).json({ message: 'Admin access not configured' });
  }
  const email = (req.user?.email || '').toLowerCase();
  if (!email || !emails.includes(email)) {
    return res.status(403).json({ message: 'Admin access required' });
  }
  next();
};

export { protect, optionalProtect, requireAdmin };
