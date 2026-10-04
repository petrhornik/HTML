class ExpressError extends Error{
    constructor(message, statusCode){
        super()                         // zavolám si constructor třídy Error a potom mu přidám hodnoty i guess
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;