export class AppError extends Error {
    constructor(
        message: string,
        public statusCode: number,
        public isOperational: boolean = true
    ) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}


export class ValidationError extends AppError {
    constructor(message: string) {
        super(message, 409);
    }
}

export class NotFoundError extends AppError {
    constructor(message: string) {
        super(message, 404);
    }
}

export class InsufficientBalanceError extends AppError {
    constructor(message: string) {
        super(message, 400);
    }
}