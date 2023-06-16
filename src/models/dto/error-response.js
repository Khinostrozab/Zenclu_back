class ErrorResponse {
  constructor({ status = 500, message = 'Intenal server error' } = {}) {
    this.status = status;
    this.message = message;
  }
}

export default ErrorResponse;
