const students = [
  {
  id: 1,
  name: "Harry Potter",
    },
    
    {
      id: 2,
      name: "Luna Lovegood",
      
    },

    {
      id: 3,
      name: "Terry Boot",
    },

    {
      id: 4,
      name: "Dean Thomas"
    }
  ];

  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };

  const cardsOnDom = (array) => {
    domString = "";
    for (const student of array) {
      
    }
  }
