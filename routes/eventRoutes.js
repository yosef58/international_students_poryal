import express from 'express' ;
import { protect } from '../middlewares/authMiddleware.js';
import { allowRoles } from '../middlewares/roleMiddleware.js';
import { createEvent, getEvents,getEvent,updateEvent, deleteEvent} from '../controllers/eventController.js';

const router = express.Router();

router.post('/', protect, allowRoles('admin', 'staff'), createEvent);
router.patch('/:id', protect, allowRoles('admin', 'staff'), updateEvent);
router.delete('/:id', protect, allowRoles('admin', 'staff'), deleteEvent);
router.get('/:id', protect, getEvent);
router.get('/', protect, getEvents);

export default router;


  