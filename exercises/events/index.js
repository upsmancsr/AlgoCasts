// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.


// NOTES:
// For an example, see the code in example.html file, which uses JQuery internal eventing library to set up DOM event handlers

class Events {
  constructor() {
    // events object holds key-value pairs, 
    // where key is an event name, 
    // and value is an ARRAY of callback functions
    this.events = {};   
  }

  // Register an event handler
  on(eventName, callback) {
    // this.events[eventName] = this.events[eventName].push(callback)|| [callback];
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let callback of this.events[eventName]) {
        callback();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;
