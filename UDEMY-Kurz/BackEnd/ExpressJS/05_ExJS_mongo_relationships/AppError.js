class AppError extends Error {
    constructor (message, status){
        super();    // zavolá constructor Error třídy a vytvoří základní Error objekt ke kterému se přidají moje vlastní hodnoty a celé se to zabalí do AppError objektu
        this.message = message;
        this.status = status;
    }
};

module.exports = AppError;