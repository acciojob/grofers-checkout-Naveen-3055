const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const prices = document.querySelectorAll('.price');
let sum=0;
const getSum = () => {
//Add your code here
	prices.forEach((p)=>{
		sum += parseFloat(p.textContent)
	})
	  const totalRow = document.createElement('tr');
	const totalCell = document.createElement('td');
	totalCell.colSpan = 2;
	totalCell.textContent = `Total is ${sum}`
	totalRow.appendChild(totalCell)
	document.getElementById('grocery').appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

