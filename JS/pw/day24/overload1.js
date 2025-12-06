class Logger{
    // info, general info, failure,message [error] {error object}
    log(message,error){
        if(typeof message === "string" && !error){
            console.log(`Info: ${message}`)
        }
        else if(message instanceof Error){
            console.log(`Error ${message.message}`)
        }
        else if(typeof message === "string" && error instanceof Error){
            console.log(`Error: ${message} -> ${error.message} `)
            // console.log(`Error ${error.message}`)
        }
    }
}

let logger = new Logger();

logger.log("success");
logger.log("User validated")
logger.log(new Error("Something Went wrong"))
logger.log("Something went wrong", new SyntaxError("Code issue"));