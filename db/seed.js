import db from "#db/client";
import { createDepartment } from "./queries/departments";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
    for (let i= 1; i <= 5; i++) {
        await createDepartment("Department" + i)
    }
    for (let i = 1; i <= 10; i++) {
        const DepartmentId = Math.floor(Math.random() * 5) + 1;
        await createFaculty("Faculty" + i, DepartmentId);
    }
}
