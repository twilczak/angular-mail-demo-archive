export class MailMessage {
  id: number = null;
  subject: string = '';
  sender: string = '';
  recipient: string = '';
  dateSent: Date = new Date();
  body: string = '';
}
