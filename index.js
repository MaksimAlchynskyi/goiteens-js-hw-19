const animalList = document.querySelector(".animal-list");
const foodList = document.querySelector(".food-list");
const technologyList = document.querySelector(".technology-list");
const animal = document.querySelector(".animal");
const food = document.querySelector(".food");
const technology = document.querySelector(".technology");
function func1(list) {
    const childArr = list.children;
    const arrList = [...childArr];
    const listDone = document.createElement("ul");
    const category = document.createElement("li");
    category.textContent = `Категорія: ${list.previousElementSibling.textContent}`;
    listDone.append(category);
    const count = document.createElement("li");
    count.textContent = `Кількість елементів: ${arrList.length}`;
    listDone.append(count);
    return listDone
};
console.log(func1(foodList));

// 2.

const ingredientsList = document.querySelector(".ingredients");
const ingredientsArr = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
ingredientsArr.map(ingredient => {
    const lastItem = document.createElement("li");
    lastItem.textContent = ingredient;
    ingredientsList.append(lastItem);
});
console.log(ingredientsList);

// 3.

const galleryList = document.querySelector(".gallery");
const images = [
    {
        url: 'https://live.staticflickr.com/2738/4072847207_3e93563147_b.jpg',
        alt: 'kats art',
    },
    {
        url: 'https://images.squarespace-cdn.com/content/v1/5a73c9b5edaed8c4b0d2b502/1521792708281-1IEPBVCCUPH17K8DWZMN/curious+kitten.jpg?format=1500w',
        alt: 'kats',
    },
    {
        url: 'https://katscoons.com/wp-content/uploads/2022/06/cropped-cropped-279105101_1022840831687919_1304819540376604300_n.jpg',
        alt: 'kats',
    },
];
const makeMarkup = (images) => {
    return `<li><img src = '${images.url}' alt = '${images.alt}' width = '500px'></li>`
};
const map = images.map(makeMarkup).join('');
galleryList.insertAdjacentHTML('beforeend', map);

// 4.

const counter = document.getElementById('counter');
const valueElement = document.getElementById('value');
let counterValue = 0;
valueElement.textContent = counterValue;
function increment() {
    counterValue++;
    valueElement.textContent = counterValue;
};
function decrement() {
    counterValue--;
    valueElement.textContent = counterValue;
};
counter.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'increment') {
        increment();
    } else if (event.target.dataset.action === 'decrement') {
        decrement();
    }
});