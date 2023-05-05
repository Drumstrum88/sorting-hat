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
      domString += 
    }
    renderToDom("#sort", domString);
  };

  cardsOnDom(students);

  
