const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const priceElements = document.querySelectorAll('.price');

  let sum = 0;
  priceElements.forEach(priceElements => {
    sum += parseFloat(priceElements.textContent);
  })


  let totalRow = document.createElement('tr');
  totalRow.innerHTML = `
    <td> Total </td>
    <td id="ans"> ${sum} </td>
    `;

  tabla.appendChild(totalRow);

};


getSumBtn.addEventListener("click", getSum);

