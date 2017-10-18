export class MailMessage {
  id: string = null;
  subject = '';
  sender = '';
  recipient = '';
  dateSent = '';
  body = '';

  private static zeroPad(value: number): String {
    return value > 9 ?  '' + value : '0' + value;
  }

  // TODO: move display to pipe
  setDateSent(date: Date = new Date()) {
    const day = MailMessage.zeroPad(date.getDate());
    const month = MailMessage.zeroPad(date.getMonth());
    const year = date.getFullYear();

    this.dateSent = `${year}.${month}.${day}`;
  }
}
