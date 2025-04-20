import { emailController } from '@/container/email.container';
import { SendEmailReq } from '@/dto/email/send-email.req';
import { authenticate } from '@/middleware/authenticate.middleware';
import { classValidate } from '@/middleware/class-validate.middleware';
import express from 'express';

const emailRouter = express.Router();

emailRouter.post('/send', authenticate, classValidate(SendEmailReq), emailController.sendEmail.bind(emailController));

export default emailRouter;
