import { SendEmailReq } from '@/dto/email/send-email.req';

export interface IEmailService {
  sendEmail(sendEmailReq: SendEmailReq): Promise<void>;
}
