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
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
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