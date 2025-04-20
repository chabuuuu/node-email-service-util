import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export class SendEmailReq {
  @IsNotEmpty()
  from!: { name: string };
  @IsNotEmpty()
  to!: { emailAddresses: string[] };
  @IsNotEmpty()
  subject!: string;
  @IsNotEmpty()
  html!: string;
}
