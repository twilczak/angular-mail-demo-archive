export class MailMessage {
  id: string = null;
  subject: string = '';
  sender: string = '';
  recipient: string = '';
  dateSent: string = '';
  body: string = '';

  setDateSent(date: Date = new Date()) {
    let day = MailMessage.zeroPad(date.getDate());
    let month = MailMessage.zeroPad(date.getMonth());
    let year = date.getFullYear();

    this.dateSent = `${year}.${month}.${day}`;
  }

  private static zeroPad(value: number) : String {
    return value > 9 ?  '' + value : '0' + value;
  }
}