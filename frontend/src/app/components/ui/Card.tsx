import type { FC } from 'react';

interface ICardProps {
  address: string;
  databaseName: string;
  email: string;
  ipAddress: string;
  hashedPassword: string;
  username: string;
  password: string;
  phoneNumber: string;
  vin: string;
}

interface ICardItemProps {
  name: string;
  placeholder?: string;
  value: string;
}

const CardItem: FC<ICardItemProps> = (props) => {
  const {
    name,
    placeholder = 'N/A',
    value,
  } = props;

  return (
    <div className="flex">
      <span className="text-gray-400 overflow-hidden text-ellipsis">
        <span className="text-white">{name}: </span>
        {value || placeholder}
      </span>
    </div>
  )
}

const Card: FC<ICardProps> = (props) => {
  const {
    address,
    databaseName,
    email,
    ipAddress,
    hashedPassword,
    username,
    password,
    phoneNumber,
    vin,
  } = props;

  return (
    <div className="w-full max-w-lg bg-gray-800 border border-gray-700 rounded-xl p-4 text-white">
      <p className="font-bold">Email: {email}</p>
      <CardItem name="IP addresss" value={ipAddress} />
      <CardItem name="Username" value={username} />
      <CardItem name="Password" value={password} />
      <CardItem name="Hashed password" value={hashedPassword} />
      <CardItem name="Address" value={address} />
      <CardItem name="VIN" value={vin} />
      <CardItem name="Phone" value={phoneNumber} />
      <CardItem name="Database" value={databaseName} />
    </div>
  );
}

export default Card;
