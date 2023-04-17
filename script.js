// How to install json fake side server:
// npm install -g json-server  
// How to run it:
// json-server --watch db.json


const displayShow = document.getElementById('display');
const addShow = document.getElementById('add-container');
const updateShow = document.getElementById('update-container')

const showData = async () => {
  const show = await axios.get('http://localhost:3000/animals');
  updateShow.style.display = 'none'
  displayShow.style.display = 'block'
  addShow.style.display = 'none'
  display.innerHTML = `
      <tr>
        <th>ID</th>
        <th>Action</th>
        <th>Name</th>
        <th>Type</th>
        <th>Food</th>
      </tr>
      ${show.data.map(
        (animal) => `
            <tr>
              <td>
                ${animal.id}
              </td>
              <td>
                <button id="delete" onclick="deleteData(${animal.id})">Delete</button>
              </td>
              <td>${animal.name}</td>
              <td>${animal.type}</td>
              <td>${animal.food}</td>
            </tr>
          `
      )
      .join('')}
    `;
};

 
const deleteData = async (id) => {
  const deleteD = await axios.delete(`http://localhost:3000/animals/${id}`);
  showData(); 
}

const addData = () => {
  updateShow.style.display = 'none'
  displayShow.style.display = 'none';
  addShow.style.display = 'block';
}

const sumbitAddData = () => {
  const nameInput = document.getElementById('add-name').value;
  const typeInput = document.getElementById('add-type').value;
  const foodInput = document.getElementById('add-food').value;
  const message = document.getElementById('add-message');


  if (nameInput === '' || typeInput === '' || foodInput === '') {
    message.style.color = 'red'
    message.innerHTML = 'You must fill all the input fields!';
  }else {
    message.style.color = 'green';
    message.innerHTML = 'Data has been added sucesfully!'
    axios.post('http://localhost:3000/animals', {name: nameInput, type: typeInput, food: foodInput})
  }
}

const updateData = () => {
  displayShow.style.display = 'none';
  addShow.style.display = 'none';
  updateShow.style.display = 'block'
}

const sumbitUpdateData = () => {
  const idInput = document.getElementById('update-id').value;
  const nameInput = document.getElementById('update-name').value;
  const typeInput = document.getElementById('update-type').value;
  const foodInput = document.getElementById('update-food').value;
  const message = document.getElementById('update-message');

  if (nameInput === '' || typeInput === '' || foodInput === '' || idInput === '') {
    message.style.color = 'red'
    message.innerHTML = 'You must fill all the input fields!';
  }else {
    message.style.color = 'green';
    message.innerHTML = 'Data has been added sucesfully!'
    axios.post('http://localhost:3000/animals', {name: nameInput, type: typeInput, food: foodInput})
  }
}


 