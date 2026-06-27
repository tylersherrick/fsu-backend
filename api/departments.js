import express from "express";
const router = express.Router();

import { 
    createDepartment, 
    getDepartments, 
    getDepartmentById, 
    updateDepartment 
} from "#db/queries/departments";

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
    res.send({
        ...req.department,
        faculty: []
    });
});

export default router;