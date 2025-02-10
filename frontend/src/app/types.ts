interface ILeakedCredential {
  address: string;
  database_name: string;
  email: string;
  hashed_password: string;
  ip_address: string;
  username: string;
  password: string;
  phone_number: string;
  vin: string;
}

export interface ILeakedCredentials {
  entries: ILeakedCredential[];
  total: number;
}

export interface IFormInitialState {
  data?: ILeakedCredentials;
  error?: string;
}
