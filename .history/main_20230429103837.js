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
      <img src="${pet.imageUrl}" class="card-img-top" alt="${student.name}"></img>
      <div class="card-body">
        <h5 class="card-title">${student.name}</h5>
        <p>House: ${student.house}</p>
        <p class="card-text">${pet.specialSkill}</p>
       
        <
        <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
      </div>
    </div>`;
    }
    renderToDom("#sort", domString);
  };

  cardsOnDom(students);

  
