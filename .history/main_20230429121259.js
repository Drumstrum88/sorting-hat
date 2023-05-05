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

  const
