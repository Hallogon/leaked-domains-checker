'use client'
import useLeakedCredentials from './hooks/useLeakedCredentials';
import SearchForm from './components/feature/SearchForm';
import LeakedCredentialsList from './components/feature/LeakedCredentialsList';
import Charts from './components/feature/Charts';
import Loader from './components/ui/Loader';

const Home = () => {
  const {
    state,
    formAction,
    isFormPending,
    leakedCredentialsData,
    leakedChartData,
    numberOfLeaksPerDBChartData,
  } = useLeakedCredentials();

  const hasLeakedCredentialsData = !!leakedCredentialsData?.length;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
       <div className="w-full flex flex-col items-center mt-20 gap-6">
        <h1 className="text-3xl font-bold">Search domain using the Twilight Cyber API</h1>
        <SearchForm formAction={formAction} />
        {!!state.error && <p className="text-red-500">{state.error}</p>}
        {isFormPending && <Loader />}
        {hasLeakedCredentialsData && !isFormPending && (
          <Charts
            leakedChartData={leakedChartData}
            numberOfLeaksPerDBChartData={numberOfLeaksPerDBChartData}
          />
        )}
        {hasLeakedCredentialsData && !isFormPending && (
          <LeakedCredentialsList
            leakedCredentials={leakedCredentialsData}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
