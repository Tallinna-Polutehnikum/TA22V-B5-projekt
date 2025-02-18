// seed.js
import fs from 'fs';
import path from 'path';
//import { fileURLToPath } from 'url';

async function insertMovie(url) {
    //const imagePath = path.join(path.dirname(fileURLToPath(import.meta.url)), url); // source of image
    const imagePath = path.join(__dirname, url);
    const imageBuffer = fs.readFileSync(imagePath); // image to buffer
    return imageBuffer
};



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


    // fill up table Movie
    await entities.Movie.create({
      title: 'Drama',
      rating: 1,
      description: 'they walk among hills or mountains. Many persons walk alone',
      year: '2024-01-05',
      languageId: 1,
      sublangId: 1,
      image: Buffer.from('https://picsum.photos/id/1006/300/200')
    });
    
    await entities.Movie.create({
      title: 'Norway',
      rating: 2,
      description: 'Bures boahtin. Hello (General greeting)',
      year: '2023-04-25',
      languageId: 2,
      sublangId: 2,
      image: Buffer.from('https://picsum.photos/id/1018/300/200')
    });
    
    await entities.Movie.create({
      title: 'Man & dog',
      rating: 3,
      description: 'What is the saying man and his dog?',
      year: '2018-09-15',
      languageId: 3,
      sublangId: 3,
      image: Buffer.from('https://picsum.photos/id/1012/300/200')
    });
    
    await entities.Movie.create({
      title: 'Capybura',
      rating: 1,
      description: 'They are excellent swimmers',
      year: '1998-08-01',
      languageId: 3,
      sublangId: 2,
      image: insertMovie('https://animals.pibig.info/uploads/posts/2023-10/1696535989_animals-pibig-info-p-zabavnie-kapibari-pinterest-18.jpg')
    });


    // add SQL-querry for unique_name in table language
    await db.query(`ALTER TABLE language ADD CONSTRAINT unique_name UNIQUE (name(255))`);

    console.log('Seed script executed successfully.');
  } catch (error) {
    console.error('Error executing seed script:', error);
  }
}
