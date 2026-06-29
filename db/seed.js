import db from "#db/client";
import { createDepartment } from "#db/queries/departments";
import { createFaculty } from "#db/queries/faculty";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  const dept1 = await createDepartment(
    "School of Scaring",
    "The most prestigious scaring program in the monster world.",
    "https://placehold.co/800x300?text=School+of+Scaring",
    "scaring@monstersu.edu",
  );
  const dept2 = await createDepartment(
    "School of Door Technology",
    "Pioneering the science of door-based travel.",
    "https://placehold.co/800x300?text=Door+Technology",
    "doors@monstersu.edu",
  );
  const dept3 = await createDepartment(
    "Department of Fear Studies",
    "A research-focused department dedicated to understanding what makes humans tick.",
    "https://placehold.co/800x300?text=Fear+Studies",
    "fear@monstersu.edu",
  );
  const dept4 = await createDepartment(
    "College of Athletics",
    "Home of the Monsters University Roar Omega Roar.",
    "https://placehold.co/800x300?text=College+of+Athletics",
    "athletics@monstersu.edu",
  );

  await createFaculty(
    "Dean Hardscrabble",
    "The most decorated scarer in Monsters University history.",
    "https://placehold.co/200x200?text=Dean+Hardscrabble",
    "hardscrabble@monstersu.edu",
    dept1.id,
  );
  await createFaculty(
    "Professor James P. Sullivan",
    "A legendary scarer and former Monsters Inc. employee.",
    "https://placehold.co/200x200?text=Sully",
    "sullivan@monstersu.edu",
    dept1.id,
  );
  await createFaculty(
    "Professor Mike Wazowski",
    "An expert in scare theory and technique.",
    "https://placehold.co/200x200?text=Mike+W",
    "wazowski@monstersu.edu",
    dept1.id,
  );
  await createFaculty(
    "Roz",
    "Head of the Door Technology department.",
    "https://placehold.co/200x200?text=Roz",
    "roz@monstersu.edu",
    dept2.id,
  );
  await createFaculty(
    "Professor Randall Boggs",
    "A specialist in advanced camouflage and stealth scaring techniques.",
    "https://placehold.co/200x200?text=Randall",
    "boggs@monstersu.edu",
    dept3.id,
  );
  await createFaculty(
    "Coach Frightgeist",
    "Former three-time Scare Games champion.",
    "https://placehold.co/200x200?text=Coach+F",
    "frightgeist@monstersu.edu",
    dept4.id,
  );
}
