export function fire(eventname) {  
    window.events[eventname]()
}