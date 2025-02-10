import { useActionState } from 'react';
import { IFormInitialState } from '../types';
import searchLeakedCredentialsAction from '@/app/utils/form-actions/search-leaked-credentials-action';

const initialState: IFormInitialState = {
  data: undefined,
  error: '',
};

const useLeakedCredentials = () => {
  const [state, formAction, isFormPending] = useActionState(searchLeakedCredentialsAction, initialState);

  const leakedCredentialsData = state.data?.entries || [];

  const leakedChartData = {
    labels: ['Emails Leaked', 'Usernames Leaked', 'Passwords Leaked'],
    datasets: [
      {
        data: [
          leakedCredentialsData?.filter((item) => item.email).length || 0,
          leakedCredentialsData?.filter((item) => item.username).length || 0,
          leakedCredentialsData?.filter((item) => item.password).length || 0,
        ],
        backgroundColor: ['#ae89ad', '#837982', '#6b5c6b'],
        borderColor: '#383138',
      },
    ],
  };

  const databaseCounts: Record<string, number> = {};

  leakedCredentialsData.forEach((entry) => {
    if (entry.database_name) {
      databaseCounts[entry.database_name] = (databaseCounts[entry.database_name] || 0) + 1;
    }
  });

  const numberOfLeaksPerDBChartData = {
    labels: Object.keys(databaseCounts),
    datasets: [
      {
        label: 'Number of leaks per database',
        data: Object.values(databaseCounts),
        backgroundColor: '#36a2eb99',
        borderColor: '#36a2eb',
        borderWidth: 1,
      },
    ],
  };

  return {
    formAction,
    isFormPending,
    leakedCredentialsData,
    leakedChartData,
    numberOfLeaksPerDBChartData,
    state,
  };
};

export default useLeakedCredentials;
