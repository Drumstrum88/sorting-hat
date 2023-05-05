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
   imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQlnQciwiDmGJgvfCvyaXd_It2dCORNpP4g&usqp=CAU"

    },
    { 
  houseName: 'ravenclaw',
  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6LBMwAr3TF3lpCkBqcks6mee0e0pb7PGC5A&usqp=CAU" 
    },
    {
  houseName: 'slytherin',
  
    }
  ]

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
   