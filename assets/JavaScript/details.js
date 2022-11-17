const { createApp } = Vue

createApp({
    data(){
        return{
            cards:[],
            events: [],
            eventsData: [],
            data: [],
            name: undefined,
            category: undefined,
            description: undefined,
            place: undefined,
            capacity: undefined,
            assistance: undefined,
            estimate: undefined,
            image: undefined,
            date: undefined, 
            price: undefined
        }
    },
    created(){
        fetch('https://amazing-events.herokuapp.com/api/events')
        .then(response => response.json())
        .then(datos => {
            this.eventsData = datos
            this.data = this.eventsData.events
            this.dataFilters = this.data
            this.details()
        })
        .catch(error => console.error(error))
    },
    methods: {
        details(){
        const queryString = location.search //
        let params = new URLSearchParams(queryString) //con url search params se guarda el valor del ID de cada card
        let id = params.get("id")
        this.card = this.data.find(propiedad => propiedad._id === id)
        this.name = this.card.name
        this.category = this.card.category
        this.description = this.card.description
        this.place = this.card.place
        this.capacity = this.card.capacity
        this.assistance = this.card.assistance
        this.estimate = this.card.estimate
        this.image = this.card.image
        this.date = this.card.date
        this.price = this.card.price
        }
    }
}).mount('#app')



/* let events
let currentDate  
let params //con url search params se guarda el valor del ID de cada card
let id 
let card  //lee el valor del id segun el array que esta en index.js y lo compara con el array para imprimir la tarjeta

fetch('https://amazing-events.herokuapp.com/api/events')
    .then(response => response.json())
    .then (response => {
        currentDate = response.currentDate
        events = response.events
        const queryString = location.search //
        params = new URLSearchParams(queryString) //con url search params se guarda el valor del ID de cada card
        id = params.get("id")
        card = events.find(item => item._id == id)
        const div = document.getElementById("cont-cards")   //imprime la card con toda la informacion
        div.innerHTML = `<div class="card card-details">
        <img src="${card.image}" class="card-img-details card-img-top p-3 justify-content-center" alt="Picture of ${card.name}">
        <h5 class="card-title-details text-align-center">${card.name}</h5>
        <div class="card-body-details">
        <ul>
        <li>Date:${card.date}</li>
        <li>Description:${card.description}</li>
        <li>Category:${card.category}</li>
        <li>Place:${card.place}</li>
        <li>Capacity:${card.capacity}</li>
        <li>Assistance:${card.assistance || card.estimate}</li> 
        </ul>
        <p class="price-details fw-bold text-center text-decoration-underline">Price:$${card.price}</p>
        </div>
        </div>`
        })
 */

//la comparacion es porque los upcoming tienen estimate y los past assistance, si no comparo lo muestra undefined

