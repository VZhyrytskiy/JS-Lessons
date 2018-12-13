//  Сложные объекты

const family = {
    father: {
        name: 'Alex',
        age: 50
    },
    mother: {
        name: 'Anna',
        age: 49
    },
    children: [{
            name: 'Boris',
            age: 10
        },
        {
            name: 'Daria',
            age: 14
        }
    ]
}

// Доступ к имени отца
console.log(family.father.name);

// доступ к имени второго ребенка
console.log(family.children[1].name);
