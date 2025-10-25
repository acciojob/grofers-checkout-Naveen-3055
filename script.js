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
	totalRow.classList.add('total-row')
	const totalCell = document.createElement('td');
	totalCell.colspan = 2;
	totalCell.textContent = `Total  ${sum}`
	totalRow.appendChild(totalCell)
	document.getElementById('grocery').appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

