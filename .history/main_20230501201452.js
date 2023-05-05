const students = [
  {
  id: 1,
  name: "Harry Potter",
  house: "Gryffindor",
    },
    
    {
      id: 2,
      name: "Luna Lovegood",
      house: "Ravenclaw",
      
    },

    {
      id: 3,
      name: "Terry Boot",
      house: "Ravenclaw",
    },

    {
      id: 4,
      name: "Dean Thomas",
      house: "Gryffindor",
    }
  ];
  const hogwartsHouses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
  const randoHouse =  Math.floor(Math.random() * hogwartsHouses.length);

  const deathEaters = []; 
  
  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };

  const cardsOnDom = (array) => {
    domString = "";
    for (const student of array) {
      domString += `<div class="card" style="width: 18rem;">
     
      <div class="card-body">
        <h5 class="card-title">${student.name}</h5>
        <p>House: ${student.house}</p>
        
        <button class="btn btn-danger" id="delete--${student.id}">Delete</button>
      </div>
    </div>`
    }
    renderToDom("#students", domString);
  };

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
      name: document.querySelector('#addStudent').value,
      house: randoHouse,
      
    };

    cardsOnDom(students);

    students.push(newStudent);
    cardsOnDom(students);
    form.reset();
  }

  form.addEventListener('click', () => {
    const nameInput = document.querySelector('#submit');
    const studentName = addStudent.value;
  });

  const sortBtn = document.querySelector('#meny')
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
   });

 
