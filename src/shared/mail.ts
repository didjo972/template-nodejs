import nodemailer, { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { MailError } from "./errors/MailError";

class MailService {
  public transporter: Transporter<SMTPTransport.SentMessageInfo>;

  constructor() {
    let transport: SMTPTransport | SMTPTransport.Options | string = {
      host: "localhost",
      port: 1025,
      secure: false,
    };
    this.transporter = null;
    try {
      if (process.env.NODE_ENV === "prod") {
        this.transporter = nodemailer.createTransport(transport);
      } else {
          transport = {
              host: "localhost",
              port: 1025,
              secure: false,
              tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false,
              }
            };
          this.transporter = nodemailer.createTransport(transport);
      }
    } catch (e) {
      // tslint:disable-next-line:no-console
      console.error(e);
      throw new MailError("An error occured on initializing the mail service");
    }

  }

  // function to wait mail sending
  public sendMail(emailTo: string, subject: string, bodyText: string, bodyHtml?: string) {
    // tslint:disable-next-line:no-console
    console.info("Sending a mail to %s", emailTo);
    const mailOptions = {
      from: "admin@admin.com",
      to: emailTo,
      subject,
      text: bodyText, // The texte content of the mail
      html: bodyHtml, // The html content
    };
    this.transporter.sendMail(mailOptions).catch((e) => {
      // tslint:disable-next-line:no-console
      console.error(e);
      throw new MailError("An error occured on sending mail");
    });
  }

  public sendResetPasswordMail(emailToSendResetLink: string) {
    this.sendMail(emailToSendResetLink, "Reset password", "Veuillez cliquer sur ce lien pour réinitialiser votre password.");
  }

}

export const mailService = new MailService();
