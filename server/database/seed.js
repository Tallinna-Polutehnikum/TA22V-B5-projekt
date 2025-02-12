// seed.js
export async function seed({ entities, db, sql }) {
  try {
    // fill up table language
    await entities.Language.create({ name: 'English' });
    await entities.Language.create({ name: 'Russian' });
    await entities.Language.create({ name: 'French' });

    await entities.Genre.create({ genre: 'Action' });
    await entities.Genre.create({ genre: 'Comedy' });
    await entities.Genre.create({ genre: 'Drama' });

    await entities.Role.create({ name: 'Admin' });
    await entities.Role.create({ name: 'User' });
    await entities.Role.create({ name: 'Guest' });

    // add SQL-querry for unique_name in table language
    await db.query(`ALTER TABLE language ADD CONSTRAINT unique_name UNIQUE (name(255))`);

    console.log('Seed script executed successfully.');
  } catch (error) {
    console.error('Error executing seed script:', error);
  }
}
