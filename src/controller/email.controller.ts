import { SendEmailReq } from '@/dto/email/send-email.req';
import { IEmailService } from '@/service/interface/i.email.service';
import { NextFunction, Request, Response } from 'express';
import { injectable, inject } from 'inversify';

@injectable()
export class EmailController {
  private emailService: IEmailService;
  constructor(@inject('EmailService') emailService: IEmailService) {
    this.emailService = emailService;
  }

  /**
   * * POST /api/v1/email/send
   */
  async sendEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const sendEmailReq: SendEmailReq = req.body;
      this.emailService.sendEmail(sendEmailReq);
      res.send_ok('Send email successfully');
    } catch (error) {
      next(error);
    }
  }
}
