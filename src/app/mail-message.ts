export class MailMessage {
  id: string = null;
  subject: string = '';
  sender: string = '';
  recipient: string = '';
  dateSent: Date = new Date();
  body: string = '';
}