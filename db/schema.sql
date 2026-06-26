DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS faculties;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username text UNIQUE NOT NULL,
    password text NOT NULL
);

CREATE TABLE departments (
    id serial PRIMARY KEY,
    name text NOT NULL,
    description text NOT NULL,
    banner_image_url text NOT NULL,
    contact_info text NOT NULL
);

CREATE TABLE faculty (
    id serial PRIMARY KEY,
    name text NOT NULL,
    bio text NOT NULL,
    profile_image_url text NOT NULL,
    contact_info text NOT NULL,
    department_id integer REFERENCES departments(id) ON DELETE CASCADE
)
