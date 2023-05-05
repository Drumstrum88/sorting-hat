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
    imageUrl: "data:image/jpeg;base64,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"
    }
  'hufflepuff', 
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
   
