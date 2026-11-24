import express from 'express';
import { protect, requireAdmin } from '../middleware/auth.js';
import Promo from '../models/Promo.js';
import { getPublicPromo } from '../utils/promoService.js';

const router = express.Router();

// @route   GET /api/promos/public
// @desc    Get the public promo for display on site (carousel, course cards)
// @access  Public
router.get('/public', async (req, res) => {
  try {
    const promo = await getPublicPromo();
    res.json(promo || { code: null, amountCents: null });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/promos
// @desc    List public promo codes (for site display)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const promos = await Promo.find({ isActive: true, public: true })
      .sort({ createdAt: 1 })
      .select('code type amountCents')
      .lean();
    res.json(promos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/promos/admin
// @desc    List all promos (including inactive) for admin
// @access  Private (Admin)
router.get('/admin', protect, requireAdmin, async (req, res) => {
  try {
    const promos = await Promo.find({}).sort({ createdAt: -1 }).lean();
    res.json(promos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/promos
// @desc    Create a promo code
// @access  Private (Admin)
router.post('/', protect, requireAdmin, async (req, res) => {
  try {
    const body = { ...req.body };
    if (body.code) body.code = String(body.code).trim().toUpperCase();
    const promo = await Promo.create(body);
    res.status(201).json(promo);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'A promo with this code already exists' });
    }
    res.status(500).json({ message: error.message });
  }
});

// @route   PATCH /api/promos/:id
// @desc    Update a promo code
// @access  Private (Admin)
router.patch('/:id', protect, requireAdmin, async (req, res) => {
  try {
    const promo = await Promo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!promo) {
      return res.status(404).json({ message: 'Promo not found' });
    }
    res.json(promo);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'A promo with this code already exists' });
    }
    res.status(500).json({ message: error.message });
  }
});

// @route   DELETE /api/promos/:id
// @desc    Delete a promo code (or set isActive: false)
// @access  Private (Admin)
router.delete('/:id', protect, requireAdmin, async (req, res) => {
  try {
    const promo = await Promo.findById(req.params.id);
    if (!promo) {
      return res.status(404).json({ message: 'Promo not found' });
    }
    promo.isActive = false;
    await promo.save();
    res.json({ message: 'Promo deactivated', promo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
