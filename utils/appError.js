class AppError extends Error{
    constructor(message,StatusCode,StatusText){
        super(message);
        this.StatusCode=StatusCode;
        this.StatusText=StatusText;
    }

}
export default AppError;
