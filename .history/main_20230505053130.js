// students array
const students = [
  {
  id: 1,
  name: "Harry Potter",
  house: "gryffindor",
  // imageUrl: "https://i.pinimg.com/474x/c5/29/c9/c529c9dbe59782640aa7d0006c90ebeb.jpg",

    },
    
    {
      id: 2,
      name: "Luna Lovegood",
      house: "ravenclaw",
      //  imageUrl: "https://i.pinimg.com/474x/0c/db/24/0cdb246ed2f5cd6684c2105e40e6b42a.jpg",
      
    },

    {
      id: 3,
      name: "Terry Boot",
      house: "ravenclaw",
      //  imageUrl: "https://i.pinimg.com/474x/0c/db/24/0cdb246ed2f5cd6684c2105e40e6b42a.jpg",
    },

    {
      id: 4,
      name: "Dean Thomas",
      house: "gryffindor",
      // imageUrl: "https://i.pinimg.com/474x/c5/29/c9/c529c9dbe59782640aa7d0006c90ebeb.jpg",
    },

    {
      id: 5,
      name: "Draco Malfoy",
      house: "slytherin",
      // imageUrl: "https://i.pinimg.com/474x/7e/73/8b/7e738b77dc63f51579a4318caa7cd358.jpg",
    },

    {
      id: 6,
      name: "Susan Bones",
      house: "hufflepuff",
      // imageUrl: "https://i.pinimg.com/474x/4e/93/9e/4e939e601d8847248e06a7f4f416214b.jpg",
    }
    
  ];
  // Hogwarts houses array
  const hogwartsHouses = [
    {
    houseName: 'gryffindor',
    // imageUrl: "https://i.pinimg.com/474x/c5/29/c9/c529c9dbe59782640aa7d0006c90ebeb.jpg"
    },
    {
   houseName: 'hufflepuff',
  //  imageUrl: "https://i.pinimg.com/474x/4e/93/9e/4e939e601d8847248e06a7f4f416214b.jpg"

    },
    { 
  houseName: 'ravenclaw',
  // imageUrl: "https://i.pinimg.com/474x/0c/db/24/0cdb246ed2f5cd6684c2105e40e6b42a.jpg" 
    },
    {
  houseName: 'slytherin',
  // imageUrl: "https://i.pinimg.com/474x/7e/73/8b/7e738b77dc63f51579a4318caa7cd358.jpg"
    }
  ]

  const crestImg = hogwartsHouses.map(house => ({ imageUrl: house.imageUrl }));
 
  // randomizer function that I can call on to randomly select a house for a new student
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

  const cardsOnDom = (students) => {
    domString = "";
    
    
    for (const student of students) {
      domString += `<container id="firstYears">
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${student.name}</h5>
        <h6>House: ${student.house}</h6>
        <!--<img src="${student.imageUrl}" alt="${student.name}" style="object-fit: cover;>-->
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
  const modal = new bootstrap.Modal(document.getElementById('myModal'))

  const addStudent = (e) => {
    e.preventDefault();
    const name = document.querySelector('#name')

    
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.querySelector('#name')
        

    if (!name.value) {
      alert("Merlin's Beard! You must enter a name!")
      return;
    }

    const newStudent = {
      id: students.length + 1,
      name: name.value,
      house: hogwartsHouses[randoHouse].houseName
   }
    
    cardsOnDom(students);

    students.push(newStudent);
    cardsOnDom(students);
    form.reset();
    modal.hide();
  })};

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
      domString += `<container id="jerks"> <div class="card" style="width: 18rem;">
      <div class="card-body" id="deathEaterCard">
      <h3></h3>
        <h5 class="card-title">${deathEater.name}</h5>
        <h6>Death Eater</h6>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzF3RS9qLyDUNiR2Atof4fnWeY0X_8r-Qiw&usqp=CAU">
      </div>
      <button class="btn btn-danger" id="delete--${deathEater.id}">Delete</button>
    </div>
    </container>
  `
}
renderToDom('#death-eaters', domString);
 };

 deathEatersOnDom(deathEaters)
 cardsOnDom(students);
   
 startApp()
