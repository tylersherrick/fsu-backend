import express from "express";
const router = express.Router();

import {
  createFaculty,
  getFaculty,
  getFacultyById,
  updateFaculty,
  deleteFaculty,
} from "../db/queries/faculty.js";

import { getDepartmentById } from "../db/queries/departments.js";

import requireUser from "../middleware/requireUser.js";

// GET all faculty
router.get("/", async (req, res) => {
  const faculty = await getFaculty();
  res.send(faculty);
});

// GET single faculty + department info
router.get("/:id", async (req, res) => {
  const faculty = await getFacultyById(req.params.id);
  if (!faculty) {
    return res.status(404).send("Faculty not found.");
  }
  const department = await getDepartmentById(faculty.department_id);
  res.send({
    ...faculty,
    department,
  });
});

// CREATE faculty
router.post("/", requireUser, async (req, res) => {
  const { name, bio, profile_image_url, contact_info, department_id } =
    req.body;
  const newFaculty = await createFaculty(
    name,
    bio,
    profile_image_url,
    contact_info,
    department_id,
  );
  res.status(201).send(newFaculty);
});

// UPDATE faculty
router.put("/:id", requireUser, async (req, res) => {
  const { name, bio, profile_image_url, contact_info, department_id } =
    req.body;
  const updatedFaculty = await updateFaculty(
    req.params.id,
    name,
    bio,
    profile_image_url,
    contact_info,
    department_id,
  );
  res.send(updatedFaculty);
});

// DELETE faculty
router.delete("/:id", requireUser, async (req, res) => {
  await deleteFaculty(req.params.id);
  res.sendStatus(204);
});

export default router;
