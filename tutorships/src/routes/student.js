import { Router } from 'express';

const router = Router();

import {createStudent, getStudent, getOneStudent, deleteStudent, putStudent } from '../controllers/student.controllers'

router.post('/', createStudent);
router.get('/', getStudent);
router.get('/:id', getOneStudent);
router.delete('/:id', deleteStudent);
router.put('/:id', putStudent);

export default  router;