// 5. Сохранение продуктов. Запросить у пользователя название, цену и картинку. Необходимо выводить данные о продуктах на страницу в любом удобном виде(карточки, список, блоки), если цена продукта ниже, чем 100$, то текстовая информация о товаре должна подсвечиваться красным цветом, если цена больше 100$, текст должен подсвечиваться зеленым

// let click = document.querySelector("#click");
// let ul = document.querySelector("#ul");

// let db = []

// click.addEventListener("click", (e) => {
//     ul.innerHTML = ''
//   let name = prompt("Введите название продукта").split(' ') 
//     let obj = {
//         name: name[0],
//         price: name[1],
//         url: name[2]
        
//     }
//     db.push(obj)


//     db.forEach(item => {
//         let li = document.createElement('li')
//         ul.append(li)
//         li.innerHTML = `${item.name}, ${item.price},  <img  src='${item.url}' width='150' height='150'>`
//         if(item.price > 100){
//             li.style.color = 'green'
//         }else{
//             li.style.color = 'red'
//         }
//     })

// });








// 6. Регистрация пользователей, создать форму в которой будем запрашивать информацию о пользователе(имя, пароль, возраст, имя может быть не уникальным, но у каждого должен быть айди, также при сохранении объекта пользователя добавляется ключ mailing со значением false - это рассылка новостей), также реализовать вывод пользователей на страницу(вывод может быть в любом удобном виде), напротив каждого пользователя должен быть инпут с типом чекбокс, как раз он и будет отвечать за рассылку, изменяется инпут - изменяется значение ключа mailing, также должна быть сама функция рассылки(на странице должна быть кнопка по нажатию на которую и будет запускаться функция), которая будет отправлять сообщение только тем пользователям, которые подписаны на рассылку(вывод может быть любым, алерт, консоль, страница)

// input checkbox возвращает true или false

let nameInp = document.querySelector('#nameId')
let passInp = document.querySelector('#passId')
let ageInp = document.querySelector('#ageId')

let regBtn = document.querySelector('#regBtn')

let userList = []

let ul = document.querySelector('ul')

regBtn.addEventListener('click', e=> {
    e.preventDefault()
    ul.innerHTML = ''

    let obj = {
        title : nameInp.value,
        pass : passInp.value,
        age: ageInp.value,
        id: Date.now(),
        mailing: false
    }

    userList.push(obj)

    

    userList.forEach(item => {
        let li = document.createElement('li')
        ul.append(li)
        li.setAttribute('id', item.id)
        li.innerHTML = `User name: ${item.title}, mailing: <input type="checkbox">`
        console.log(userList)
    })

    nameInp.value = ''
    passInp.value = ''
    ageInp.value = ''
})

let sendSms = document.querySelector('#smsBtn')
// console.log(sendSms);

sendSms.addEventListener('click', e => {
    let liList = document.querySelectorAll('li')
        // console.log(liList)
        // console.log(liList[0].childNodes);
        // console.log(liList[0].childNodes[1]);
        liList.forEach(item => {
            if(item.childNodes[1].checked == true){
                userList.forEach(elem=>{
                    if(elem.id == item.id){
                        elem.mailing = true
                        // alert(`Hello ${elem.title}`)
                        let h6 = document.createElement('h6')
                        document.body.append(h6)
                        h6.innerText = `Hello ${elem.title}`
                    
                    }
                })
            }
            console.log(userList);
            // console.log(elem.id);
            console.log(item.id);
            
        })
        console.log(liList);
        
})