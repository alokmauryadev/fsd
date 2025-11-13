(function(){
    let a = 10;
    let b = 20;
    function add(){
        return a+b
    }
    window.myApp = window.myApp || {}
    window.myApp.publicApi = {
        addNumber: add
    };
})();