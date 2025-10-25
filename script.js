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
	const totalLabel = document.createElement('td');
	const totalCell = document.createElement('td');

	totalLabel.textContent = "Total Price"
	
	totalCell.textContent = sum;
	totalRow.append(totalLabel,totalCell)
		totalRow.id = 'ans';
	document.querySelector('table').appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

