import fs from 'fs';
import path from 'path';
//import { fileURLToPath } from 'url';

// async function insertMovie(url) {
//   // must get img url from internet 
//   //const imagePath = path.join(path.dirname(fileURLToPath(import.meta.url)), url); // source of image
//   // const imagePath = path.join(__dirname, url);
//   // const imageBuffer = fs.readFileSync(imagePath); // image to buffer
//   // return imageBuffer;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Ошибка при доступе к изображению: ${response.status}`);
//     }
    

//     return url;
//   } catch (error) {
//     console.error('Ошибка:', error);
//     return null; // or throw
//   }
// };



export async function seed({ entities, db, sql }) {
  try {
    // fill up table language
    await entities.Language.create({ name: 'English' });
    await entities.Language.create({ name: 'Russian' });
    await entities.Language.create({ name: 'Estonian' });
    await entities.Language.create({ name: 'French' });

    await entities.Genre.create({ genre: 'Action' });
    await entities.Genre.create({ genre: 'Comedy' });
    await entities.Genre.create({ genre: 'Drama' });
    await entities.Genre.create({ genre: 'Thriller' });
    await entities.Genre.create({ genre: 'Fantasy' });
    await entities.Genre.create({ genre: 'Adventure' });
    await entities.Genre.create({ genre: 'Family' });

    await entities.Role.create({ name: 'Admin' });
    await entities.Role.create({ name: 'User' });
    await entities.Role.create({ name: 'Guest' });

    await entities.PosterType.create({ type: 'Horizontal' });
    await entities.PosterType.create({ type: 'Vertical' });

    await entities.Actor.create({ firstName: 'Joe', lastName: 'Pesci' })
    await entities.Actor.create({ firstName: 'Robert', lastName: 'De Niro' })
    await entities.Actor.create({ firstName: 'Al', lastName: 'Pacino' })
    await entities.Actor.create({ firstName: 'Marlon', lastName: 'Brando' })
    await entities.Actor.create({ firstName: 'Leonardo', lastName: 'DiCaprio' })
    await entities.Actor.create({ firstName: 'Tom', lastName: 'Hanks' })
    await entities.Actor.create({ firstName: 'Johnny', lastName: 'Depp' })
    await entities.Actor.create({ firstName: 'Morgan', lastName: 'Freeman' })
    await entities.Actor.create({ firstName: 'Denzel', lastName: 'Washington' })
    await entities.Actor.create({ firstName: 'Jack', lastName: 'Nicholson' })
    await entities.Actor.create({ firstName: 'Harrison', lastName: 'Ford' })
    await entities.Actor.create({ firstName: 'Clint', lastName: 'Eastwood' })
    await entities.Actor.create({ firstName: 'Bruce', lastName: 'Willis' })
    await entities.Actor.create({ firstName: 'Arnold', lastName: 'Schwarzenegger' })
    await entities.Actor.create({ firstName: 'Sylvester', lastName: 'Stallone' })
    await entities.Actor.create({ firstName: 'Michael', lastName: 'Douglas' })
    await entities.Actor.create({ firstName: 'Richard', lastName: 'Gere' })
    await entities.Actor.create({ firstName: 'Kevin', lastName: 'Costner' })
    await entities.Actor.create({ firstName: 'Anthony', lastName: 'Hopkins' })
    await entities.Actor.create({ firstName: 'Daniel', lastName: 'Day-Lewis' })



    // fill up table Movie
    // await entities.Movie.create({
    //   title: 'Drama',
    //   rating: 1,
    //   description: 'they walk among hills or mountains. Many persons walk alone',
    //   year: '2024-01-05',
    //   languageId: 1,
    //   sublangId: 1,
    //   image: Buffer.from('https://picsum.photos/id/1006/300/200')
    // });

    // await entities.Movie.create({
    //   title: 'Norway',
    //   rating: 2,
    //   description: 'Bures boahtin. Hello (General greeting)',
    //   year: '2023-04-25',
    //   languageId: 2,
    //   sublangId: 2,
    //   image: Buffer.from('https://picsum.photos/id/1018/300/200')
    // });

    await entities.Movie.create({
      title: 'Man & dog',
      rating: 3,
      description: 'Aute aute cillum adipisicing laboris sit cupidatat exercitation pariatur minim mollit nostrud quis duis excepteur consequat cupidatat id et excepteur deserunt duis velit labore do nisi ad dolore qui do eiusmod reprehenderit ullamco laborum non ullamco excepteur aliqua in amet deserunt in dolore sint tempor consectetur ea culpa tempor anim sit est Lorem voluptate ex sunt non ullamco ut ipsum quis mollit et veniam dolore incididunt nulla minim fugiat mollit commodo ex ullamco exercitation aliquip in ex et culpa occaecat pariatur id quis mollit qui nostrud do aliqua duis aliqua tempor do commodo incididunt aliqua dolore occaecat tempor aliqua nulla magna officia sint tempor magna anim qui irure ipsum qui',
      year: '2018-09-15',
      languageId: 3,
      sublangId: 3,
      image: 'server/static/fight-dogs.jpg' //'../static/fight-dogs.jpg' 
    });

    await entities.Movie.create({
      title: 'Capybura',
      rating: 1,
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      year: '1998-08-01',
      languageId: 3,
      sublangId: 2,
      image: 'server/static/navalil-1.jpg'
    });


    // add SQL-querry for uniqueName in table language
    // await db.query(`ALTER TABLE language ADD CONSTRAINT uniqueName UNIQUE (name(255))`);

    console.log('Seed script executed successfully.');
  } catch (error) {
    console.error('Error executing seed script:', error);
  }
}
