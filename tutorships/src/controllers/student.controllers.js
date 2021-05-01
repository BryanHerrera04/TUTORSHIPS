import Student from "../models/Student";

export async function createStudent(req, res) {
  const {
    st_name,
    st_lastname,
    st_email,
    st_age,
    st_created_tm,
    st_country,
    st_study,
    st_institute,
    st_phone,
    st_state,
  } = req.body;
  const newStudent = await Student.create(
    {
      st_name,
      st_lastname,
      st_email,
      st_age,
      st_created_tm,
      st_country,
      st_study,
      st_institute,
      st_phone,
      st_state,
    },
    {
      fields: [
        "st_name",
        "st_lastname",
        "st_email",
        "st_age",
        "st_created_tm",
        "st_country",
        "st_study",
        "st_institute",
        "st_phone",
        "st_state",
      ],
    }
  );
  if (newStudent) {
    return res.json({ message: "Estudiante creado" });
  }
};

export async function getStudent(req, res) {
  try {
    const students = await Student.findAll();
    res.json({
      data: students,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export async function getOneStudent(req, res) {
  const { id } = req.params;
  const student = await Student.findOne({
    where: {
      st_id: id,
    },
  });
  res.json(student);
};

export async function deleteStudent(req, res) {
  const { id } = req.params;
  const deleteRowCount = await Student.destroy({
    where: {
      st_id: id,
    },
  });
  res.json({
    message: "Estudiante eliminado Sastifactoriamente",
    count: deleteRowCount,
  });
};

export async function putStudent(req, res) {
  const { id } = req.params;
  const {
    st_name,
    st_lastname,
    st_email,
    st_age,
    st_created_tm,
    st_country,
    st_study,
    st_institute,
    st_phone,
    st_state,
  } = req.body;

  const students = await Student.findAll({
    attibutes: [
      "st_id",
      "st_name",
      "st_lastname",
      "st_email",
      "st_age",
      "st_created_tm",
      "st_country",
      "st_study",
      "st_institute",
      "st_phone",
      "st_state",
    ],
    where: {
      st_id: id,
    },
  });
  if (students.length > 0) {
    students.forEach(async (tutor) => {
      await student.update({
        st_name,
        st_lastname,
        st_email,
        st_age,
        st_created_tm,
        st_country,
        st_study,
        st_institute,
        st_phone,
        st_state,
      });
    });
  }
  return res.json({
    message: "Estudiante actualizado correctamente",
    data: students,
  });
};