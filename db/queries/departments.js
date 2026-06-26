import db from "#db/client";

export async function createDepartment(id, name, description, banner_image_url, contact_info) {
  const sql = `
    INSERT INTO departments (id, name, description, banner_image_url, contact_info)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
    const {
        rows: [department],
    } = await db.query(sql, [id, name, description, banner_image_url, contact_info]);
    return department;
}

export async function getDepartments() {
  const sql = `
    SELECT * FROM departments;
  `;
  const { 
        rows: [departments], 
    } = await db.query(sql);
  return departments;
}

export async function getDepartmentById(id) {
  const sql = `
    SELECT * FROM departments WHERE id = $1;
  `;
  const { 
    rows: [department], 
} = await db.query(sql, [id]);
  return department;
}

export async function updateDepartment(id, name, description, banner_image_url, contact_info) {
  const sql = `
    UPDATE departments
    SET name = $2, description = $3, banner_image_url = $4, contact_info = $5
    WHERE id = $1
    RETURNING *;
  `;
  const {  
    rows: [department],
} = await db.query(sql, [id, name, description, banner_image_url, contact_info]);
  return department;
}