import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class GetLeakedCredentialsDto {
  @IsNotEmpty()
  @IsString()
  @Matches(
    /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
    {
      message: 'Invalid domain format',
    },
  )
  domain: string;
}
