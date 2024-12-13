import express from 'express';
import { addPropertyListing, getAllListings } from '../controllers/property.controller.js';
import { authenticateToken } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/upload.middleware.js';

const router = express.Router();

router.post('/add-property-listing', authenticateToken, upload.single('photo'), addPropertyListing);
router.get('/all-listings', getAllListings);

export default router;