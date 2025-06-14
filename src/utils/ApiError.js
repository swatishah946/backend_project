class ApiError extends error {
    constructor(
        statuscode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
        super(message);
        this.statuscode = statuscode;
        this.errors = errors;
        this.message=message,
        this.data=null;
        this.success=false;
        
        if(stack){
            this.stack = stack;
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {ApiError}