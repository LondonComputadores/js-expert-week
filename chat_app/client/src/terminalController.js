import ComponentsBuilder from "./components.js"


export default class TerminalController {
    #usersCollors = new Map()

    constructor() {}


    #pickCollor() {
        return `#` + ((1 << 24) * Math.random() | 0).toString(16) + `-fg`
    }

    #getUserCollor(userName) {
        if (this.#usersCollors.has(userName))
            return this.#usersCollors.get(userName)

        const collor = this.#pickCollor()
        this.#usersCollors.set(userName, collor)

        return collor
    }

    #onInputReceived(eventEmitter) {
        return function () {
            const message = this.getValue()
            console.log(message)
            this.clearValue()
        }
    }
    
    #onMessageReceived({ screen, chat }) {
        return msg => {
            const { userName, message } = msg
            const collor = this.#getUserCollor(userName)

            chat.addItem(`{${collor}}{bold}${userName}{/}: ${message}`)

            screen.render()
        }
    }

    #onLogChanged({ screen, activityLog }) {
        
        return msg => {
            //alexandrepaes joined
            //alexandrepaes left
            const [userName] = msg.split(/\s/)
            const collor = this.#getUserCollor(userName)
            activityLog.addItem(`{${collor}}{bold}${msg.toString()}{/}`)

            screen.render()
        }
    }

    #registerEvents(eventEmitter, components) {
        eventEmitter.on('message:received', this.#onMessageReceived(components))
        eventEmitter.on('activityLog:updated', this.#onLogChanged(components))
    }

    async initializeTable(eventEmitter) {
        //console.log('Inicializou!')
        const components = new ComponentsBuilder()
            .setScreen({ title: 'Chat-App - Alexandre Paes'})
            .setLayoutComponent()
            .setInputComponent(this.#onInputReceived(eventEmitter))
            .setChatComponent()
            .setActivityLogComponent()
            .setStatusComponent()
            .build()

        this.#registerEvents(eventEmitter, components)

        components.input.focus()
        components.screen.render()

        setInterval(() => {
            eventEmitter.emit('activityLog:updated',  'alexandrepaes joined')
            eventEmitter.emit('activityLog:updated',  'marialangarita left')
            eventEmitter.emit('activityLog:updated',  'fulana joined')
        }, 1000);
    }
}
