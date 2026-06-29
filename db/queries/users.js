import db from "../client.js";

// CREATE user
export async function createUser(username, password) {
  const sql = `
    INSERT INTO users (username, password)
    VALUES ($1, $2)
    RETURNING *;
  `;
  const {
    rows: [user],
  } = await db.query(sql, [username, password]);
  return user;
}

// GET user by username + password (login)
export async function getUserByUsernameAndPassword(username, password) {
  const sql = `
    SELECT * FROM users
    WHERE username = $1 AND password = $2;
  `;
  const {
    rows: [user],
  } = await db.query(sql, [username, password]);
  return user;
}
