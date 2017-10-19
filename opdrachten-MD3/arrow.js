const list = document.getElementById('list');
const listItems = list.getElementsByTagName('li');
const data = {
    engels: [],
    javascript: [],
    bap: []
};

for (const item of listItems) {
    // data.push({subject: item.innerHTML, grade: parseFloat(item.dataset.grade)});
    data[item.innerHTML.toLowerCase()].push(parseFloat(item.dataset.grade));
}

console.log(data);