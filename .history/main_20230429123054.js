const students = [
  {
  id: 1,
  name: "Harry Potter",
  house: "",
    },
    
    {
      id: 2,
      name: "Luna Lovegood",
      house: "",
      
    },

    {
      id: 3,
      name: "Terry Boot",
      house: "",
    },

    {
      id: 4,
      name: "Dean Thomas",
      house: "",
    }
  ];

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
    </div>`;
    }
    renderToDom("#firstYears", domString);
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
      name: document.querySelector('#name').value
    }

    students.push(newStudent);
    cardsOnDom(pets);
    form.reset();
  }

  form.addEventListener('submit', addStudent);

  const sortBtn = document.querySelector('#submit')
  const gryBtn = document.querySelector('#gryffindor');
  const hufBtn = document.querySelector('#hufflepuff');
  const ravBtn = document.querySelector('#ravenclaw');
  const slyBtn = document.querySelector('#slytherin');

  grifBtn.addEventListener('click', () => {
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
  })
