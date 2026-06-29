import express from "express";
const router = express.Router();

import {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
} from "../db/queries/departments.js";

import { getFacultyByDepartmentId } from "../db/queries/faculty.js";

import requireUser from "../middleware/requireUser.js";

router.get("/", async (req, res) => {
  const departments = await getDepartments();
  res.send(departments);
});

router.param("id", async (req, res, next, id) => {
  const department = await getDepartmentById(id);

  if (!department) {
    return res.status(404).send("Department not found.");
  }
  req.department = department;
  next();
});

router.get("/:id", async (req, res) => {
  const faculty = await getFacultyByDepartmentId(req.department.id);
  res.send({
    ...req.department,
    faculty,
  });
});

router.post("/", requireUser, async (req, res) => {
  const { name, description, banner_image_url, contact_info } = req.body;
  const department = await createDepartment(
    name,
    description,
    banner_image_url,
    contact_info,
  );
  res.status(201).send(department);
});

router.put("/:id", requireUser, async (req, res) => {
  const { name, description, banner_image_url, contact_info } = req.body;
  const department = await updateDepartment(
    req.params.id,
    name,
    description,
    banner_image_url,
    contact_info,
  );
  res.send(department);
});

router.delete("/:id", requireUser, async (req, res) => {
  await deleteDepartment(req.params.id);
  res.sendStatus(204);
});

export default router;
