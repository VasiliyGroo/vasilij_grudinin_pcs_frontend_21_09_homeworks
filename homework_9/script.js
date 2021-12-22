'use strict';

const apiURL = 'https://reqres.in/api/users?per_page=12';

// код для выполнения пункта 1

console.log('-----------');
console.log('Пункт №1:')
console.log('-----------');

let data = fetch(apiURL)
    .then((response) => {
        return response.json();
    })
    .then(({data}) => {
        return data
    });

// код для выполнения пункта 2

data.then(data => { 
    console.log('-----------');
    console.log('Пункт №2:')
    console.log('-----------');

    data.forEach(item => {
        console.log(item?.last_name);  
    })
});
    
// код для выполнения пункта 3

data.then(data => {
    console.log('-----------');
    console.log('Пункт №3:')
    console.log('-----------');

    const userListFilter = data.filter(item => {
        return (item?.last_name[0] === 'F');
            })
            console.log(userListFilter);
        });

// код для выполнения пункта 4	

data.then(data => {
    console.log('-----------');
    console.log('Пункт №4:')
    console.log('-----------');

    const userReduce = data.reduce((result, item, index) => {
        result = `${result} ${item?.first_name} ${item?.last_name}${index === data.length - 1 ? '.' : ','}`;
        return result
    }, 'Наша база содержит данные следующих пользователей:');

        console.log(userReduce);
    });

// код для выполнения пункта 5	

data.then(data => {
    console.log('-----------');
    console.log('Пункт №5:')
    console.log('-----------');

    Object.entries(data[0])?.forEach(([key]) => {
        console.log('Ключ:', key)
    })
});

