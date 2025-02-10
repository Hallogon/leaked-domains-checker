import Card from '@/app/components/ui/Card';
import { ILeakedCredentials } from '@/app/types';

interface ILeakedCredentialsListProps {
  leakedCredentials: ILeakedCredentials['entries'];
}

const LeakedCredentialsList = (props: ILeakedCredentialsListProps) => {
  const { leakedCredentials } = props;

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/*
        ! There are no unique elements in the objects, so I added index as a unique key, knowing that there
        will be no changes/deletions in the array. In the future, if we need to add an opportunity to change/delete elements,
        we need to remove the index and generate a unique ID for each of the records once (not on each render).
      */}
      {leakedCredentials.map((leakedCredential, index) => (
        <Card
          key={index}
          address={leakedCredential.address}
          databaseName={leakedCredential.database_name}
          email={leakedCredential.email}
          ipAddress={leakedCredential.ip_address}
          hashedPassword={leakedCredential.hashed_password}
          username={leakedCredential.username}
          password={leakedCredential.password}
          phoneNumber={leakedCredential.phone_number}
          vin={leakedCredential.vin}
        />
      ))}
    </div>
  );
};

export default LeakedCredentialsList;
