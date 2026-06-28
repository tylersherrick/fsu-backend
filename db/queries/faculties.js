import db from "#db/client"

export async function createFaculty(id, name, bio, profile_image_url, contact_info, department_id) {
const sql = `
INSERT INTO faculties (id, name, bio, profile_image_url, contact_info, department_id)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;
`;
    const {
        rows: [faculties],
    } = await db.query(sql, [id, name, bio, profile_image_url, contact_info, department_id]);
    return faculties;
}

export async function getFaculties() {
    const sql = `
    SELECT * FROM faculties;
    `;
    const {
        rows: [faculties],
    } = await db.query(sql);
    return faculties
}

export async function getFacultyById(id) {
    const sql = `
    SELECT * FROM faculty WHERE id= $1;
    `;
    const {
        rows: [faculties],
    } = await db.query(sql,[id]);
    return faculties;
}

export async function updateFaculty(id, name, bio, profile_image_url, contact_info, department_id) {
    const sql = `
    UPDATE faculties
    SET name = $2, bio = $3, profile_image_url = $4, contact_info = $5 department_id = $6
    WHERE id = $1
    RETURNING *;
    `;
    const {
        rows: [faculties],
    } = await db.query(sql [id, name, bio, profile_image_url, contact_info, department_id]);
    return faculties
}