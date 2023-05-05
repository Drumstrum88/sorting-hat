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
      domString += `<div class="card">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
    }
    renderToDom(".sort", domString);
  };

  cardsOnDom(students);

  
