import db from "../client.js";

// CREATE faculty
export async function createFaculty(
  name,
  bio,
  profile_image_url,
  contact_info,
  department_id,
) {
  const sql = `
    INSERT INTO faculty (name, bio, profile_image_url, contact_info, department_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const {
    rows: [faculty],
  } = await db.query(sql, [
    name,
    bio,
    profile_image_url,
    contact_info,
    department_id,
  ]);
  return faculty;
}

// GET all faculty
export async function getFaculty() {
  const sql = `SELECT * FROM faculty;`;
  const { rows } = await db.query(sql);
  return rows;
}

// GET faculty by ID
export async function getFacultyById(id) {
  const sql = `SELECT * FROM faculty WHERE id = $1;`;
  const {
    rows: [faculty],
  } = await db.query(sql, [id]);
  return faculty;
}

// GET faculty by department
export async function getFacultyByDepartmentId(departmentId) {
  const sql = `SELECT * FROM faculty WHERE department_id = $1;`;
  const { rows } = await db.query(sql, [departmentId]);
  return rows;
}

// UPDATE faculty
export async function updateFaculty(
  id,
  name,
  bio,
  profile_image_url,
  contact_info,
  department_id,
) {
  const sql = `
    UPDATE faculty
    SET name = $2,
        bio = $3,
        profile_image_url = $4,
        contact_info = $5,
        department_id = $6
    WHERE id = $1
    RETURNING *;
  `;
  const {
    rows: [faculty],
  } = await db.query(sql, [
    id,
    name,
    bio,
    profile_image_url,
    contact_info,
    department_id,
  ]);
  return faculty;
}

// DELETE faculty
export async function deleteFaculty(id) {
  const sql = `DELETE FROM faculty WHERE id = $1 RETURNING *;`;
  const {
    rows: [faculty],
  } = await db.query(sql, [id]);
  return faculty;
}
