export class MailError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MailError";
    }
}
