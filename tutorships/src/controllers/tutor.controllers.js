import Tutor from "../models/Tutor";

export async function getTutors(req, res) {
  const tutors = await Tutor.findAll();
  res.json({
    data: tutors,
  });
}

export async function createTutor(req, res) {
  const {
    tt_name,
    tt_lastname,
    tt_email,
    tt_age,
    tt_created_tm,
    tt_country,
    tt_study,
    tt_institute,
    tt_phone,
    tt_lessons,
    tt_state,
  } = req.body;
  try {
    let newTutor = await Tutor.create(
      {
        tt_name,
        tt_lastname,
        tt_email,
        tt_age,
        tt_created_tm,
        tt_country,
        tt_study,
        tt_institute,
        tt_phone,
        tt_lessons,
        tt_state,
      },
      {
        fields: [
          "tt_name",
          "tt_lastname",
          "tt_email",
          "tt_age",
          "tt_created_tm",
          "tt_country",
          "tt_study",
          "tt_institute",
          "tt_phone",
          "tt_lessons",
          "tt_state",
        ],
      }
    );
    if (newTutor) {
      return res.json({
        message: "Estudiante creado correctamente",
        data: newTutor,
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Hay un problema al crear el estudiante",
      data: {},
    });
  }
}

export async function getOneTutor(req, res) {
  const { id } = req.params;
  const tutor = await Tutor.findOne({
    where: {
      tt_id: id,
    },
  });
  res.json(tutor);
}

export async function deleteTutor(req, res) {
  const { id } = req.params;
  const deleteRowCount = await Tutor.destroy({
    where: {
      tt_id: id,
    },
  });
  res.json({
    message: "Tutor eliminado Sastifactoriamente",
    count: deleteRowCount,
  });
}

export async function putTutor(req, res) {
  const { id } = req.params;
  const {
    tt_name,
    tt_lastname,
    tt_email,
    tt_age,
    tt_created_tm,
    tt_country,
    tt_study,
    tt_institute,
    tt_phone,
    tt_lessons,
    tt_state,
  } = req.body;

  const tutors = await Tutor.findAll({
    attibutes: [
      "tt_id",
      "tt_name",
      "tt_lastname",
      "tt_email",
      "tt_age",
      "tt_created_tm",
      "tt_country",
      "tt_study",
      "tt_institute",
      "tt_phone",
      "tt_lessons",
      "tt_state",
    ],
    where: {
      tt_id: id,
    },
  });
  if (tutors.length > 0) {
    tutors.forEach(async (tutor) => {
      await tutor.update({
        tt_name,
        tt_lastname,
        tt_email,
        tt_age,
        tt_created_tm,
        tt_country,
        tt_study,
        tt_institute,
        tt_phone,
        tt_lessons,
        tt_state,
      });
    });
  }
  return res.json({
    message: "Tutor actualizado correctamente",
    data: tutors,
  });
}

export async function getTutorByStudent(req, res) {
  const { st_id } = req.params;
  const tutors = await Tutor.findAll({
    attributes: [
      "tt_id",
      "tt_name",
      "tt_lastname",
      "tt_email",
      "tt_age",
      "tt_created_tm",
      "tt_country",
      "tt_study",
      "tt_institute",
      "tt_phone",
      "tt_lessons",
      "tt_state",
    ],
    where: { st_id },
  });
  res.json({ tutors });
}
