import { SendEmailReq } from '@/dto/email/send-email.req';
import { IEmailService } from '@/service/interface/i.email.service';
import { sendEmail } from '@/utils/email/email-sender.util';
import { injectable } from 'inversify';

@injectable()
export class EmailService implements IEmailService {
  async sendEmail(sendEmailReq: SendEmailReq): Promise<void> {
    const name = sendEmailReq.from.name ? sendEmailReq.from.name : 'GiaSuVLU';
    await sendEmail({
      from: { name: name },
      to: { emailAddress: sendEmailReq.to.emailAddresses },
      subject: sendEmailReq.subject,
      html: sendEmailReq.html
    });
  }
}
