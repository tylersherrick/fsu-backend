import morgan from "morgan";
import express from "express";
import cors from "cors";
import getUserFromToken from "#middleware/getUserFromToken";
import departmentRouter from "#api/departments";
import facultyRouter from "#api/faculty";
import userRouter from "#api/users";

const app = express();

// middleware
app.use(cors({ origin: /localhost/ }));
app.use(express.json());
app.use(morgan("dev"));
app.use(getUserFromToken);

app.use("/departments", departmentRouter);
app.use("/faculty", facultyRouter);
app.use("/", userRouter);

app.route("/").get((req, res) => {
  res.send("Hello Lincoln!");
});

export default app;
