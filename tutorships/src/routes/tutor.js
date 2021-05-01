import { Router } from 'express';

const router = Router();

import { createTutor, getTutors, getOneTutor, deleteTutor, putTutor, getTutorByStudent } from '../controllers/tutor.controllers';

router.post('/', createTutor);
router.get('/', getTutors);
router.get('/:id', getOneTutor);
router.delete('/:id', deleteTutor);
router.put('/:id', putTutor);
router.get('/student/:st_id', getTutorByStudent);


export default  router;