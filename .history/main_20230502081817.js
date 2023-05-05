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
   
