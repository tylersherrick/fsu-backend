import morgan from "morgan";
import express from "express";

import departmentRouter from "#api/departments";
import facultyRouter from "#api/faculties";
import userRouter from "#api/users";

const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use("/departments", departmentRouter);
app.use("/faculties", facultyRouter);
app.use("/users", userRouter);

// GET / to send the message "Hello Lincoln!"
app.route("/").get((req, res) => {
  res.send("Hello Lincoln!");
});


export default app;