// students array
const students = [
  {
  id: 1,
  name: "Harry Potter",
  house: "gryffindor",

    },
    
    {
      id: 2,
      name: "Luna Lovegood",
      house: "ravenclaw",
      
    },

    {
      id: 3,
      name: "Terry Boot",
      house: "ravenclaw",
    },

    {
      id: 4,
      name: "Dean Thomas",
      house: "gryffindor",
    },

    {
      id: 5,
      name: "Draco Malfoy",
      house: "slytherin",
    },

    {
      id: 6,
      name: "Susan Bones",
      house: "hufflepuff"
    }
    
  ];
  // Hogwarts houses array
  const hogwartsHouses = [
    {
    houseName: 'gryffindor',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYlz8Fn7PvKcinISZm_3z2Nb_fkMqZn28unw&usqp=CAU"
    },
    {
   houseName: 'hufflepuff',
   imageUrl: "data:image/jpeg;base64,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"
    } 
  'ravenclaw', 
  'slytherin'];

  // This is my randomizer function that I can call on to randomly select a house for a new student
  const randoHouse =  Math.floor(Math.random() * 4);

  // death eaters array 
  const deathEaters = [
    {
      id: 1,
      name: "Bellatrix Lestrange",
    }
  ] 
  
  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };

  const cardsOnDom = (array) => {
    domString = "";
    for (const student of array) {
      domString += `<container id="firstYears"
      <div class="card" style="width: 18rem;">
     
      <div class="card-body">
        <h5 class="card-title">${student.name}</h5>
        <h6>House: ${student.house}</h6>
        
        <button class="btn btn-danger" id="expel--${student.id}">Expel</button>
      </div>
    </div>
    </container>`
    }
    renderToDom('#students', domString)
  }

  cardsOnDom(students);

  const filter = (students, houseString) => {
    const houseArray = [];
    for (const student of students) {
      if (student.house === houseString) {
        houseArray.push(student);
      }
    }
    return houseArray
  }

  const form = document.querySelector('.form');

  const addStudent = (e) => {
    e.preventDefault();

    const newStudent = {
      id: students.length + 1,
      name: document.querySelector('#name').value,
      house: hogwartsHouses[randoHouse],
      
    };

    cardsOnDom(students);

    students.push(newStudent);
    cardsOnDom(students);
    form.reset();
  }

    form.addEventListener('submit', addStudent);

 

  const sortBtn = document.querySelector('#menu')
  const gryBtn = document.querySelector('#gryffindor');
  const hufBtn = document.querySelector('#hufflepuff');
  const ravBtn = document.querySelector('#ravenclaw');
  const slyBtn = document.querySelector('#slytherin');
 
 

   gryBtn.addEventListener('click', () => {
     const gryStud = filter(students, 'gryffindor');
     cardsOnDom(gryStud);
   });
  
   hufBtn.addEventListener('click', () => {
     const hufStud = filter(students, 'hufflepuff');
    cardsOnDom(hufStud);
  });

   ravBtn.addEventListener('click', () => {
     const ravStud = filter(students, "ravenclaw");
     cardsOnDom(ravStud);
   });

   slyBtn.addEventListener('click', () => {
     const slyStud = filter(students, 'slytherin');
     cardsOnDom(slyStud);
   });

   document.querySelector('#death-eaters').addEventListener('click', (e) => {
    if (e.target.id.includes("delete")) {
      const [, id] = e.target.id.split("--");

      const index =deathEaters.findIndex(e => e.id === Number(id));

      deathEaters.splice(index, 1);
      cardsOnDom(students);
      deathEatersOnDom(deathEaters)
    }
   });

   const startApp = () => {
    cardsOnDom(students);
   }

   startApp()

   const app = document.querySelector('.expel');

   document.addEventListener('click', (e) =>
   {
    if (e.target.id.includes("expel")) {
      const [, id] = e.target.id.split("--");

      
      const index = students.findIndex(e => e.id === Number(id));
      
      if (index !== -1) {
        const expelledStudents = students.splice(index, 1)[0];
        deathEaters.push(expelledStudents);
       
      }
      cardsOnDom(students)
      deathEatersOnDom(deathEaters);
      
    }
   })

   const deathEatersOnDom = (array) => {
    let domString = "";
    for (const deathEater of array) {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body" id="deathEaterCard">
        <h5 class="card-title">${deathEater.name}</h5>
        <h6>Death Eater</h6>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzF3RS9qLyDUNiR2Atof4fnWeY0X_8r-Qiw&usqp=CAU">
      </div>
      <button class="btn btn-danger" id="delete--${deathEater.id}">Delete</button>
    </div>
  `
}
renderToDom('#death-eaters', domString);
 };

 deathEatersOnDom(deathEaters)
 cardsOnDom(students);
   
