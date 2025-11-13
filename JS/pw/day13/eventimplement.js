class MyEventTarget{
    constructor(){
        this.listeners = {}
    }
    addEventListener(type, callback,options = false){
        const capture = (typeof options === 'boolean') ? options : (options?.capture ?? false);
        const once = options?.once ?? false;
        const passive = options.passive ?? false;

        if(!this.listeners[type]){
            this.listeners[type] = [];
        }
        const listenerList = this.listeners[type];
    }
}