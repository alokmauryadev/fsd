// how module loader works

// the host environment fetches and parses the entry point module(e.g., main.js). It reads the import  statements and recuresively fetches and parses all imported modules. The output is a dependency graph of 'Module Records' - data structures that know what they import and export, but no code has run. 

// in second step it does instantiation (linking): the engine traverses the dependency graph, for each module, it finds all export entries and "links" them to the import entries in other modules, this creates the in-memory binding. curcially, no code has been executed yet. 

// in third step it is evaluation(execution): engine does a post-order traversal (dependencies first) of the graph and executes the top-level codes of each module. This is the phase where variable initializers run. functions are defined, and side effects happen.

// let's understand it with an example

// I have three files, main.js, utils.js and config.js

// utils.js import config.js

// main.js import utils.js

// main.js --> utils.js⇀> config.js

// so in the execution phase,dependencies are loaded first it means config.js will load first then utils.js and then main.js

