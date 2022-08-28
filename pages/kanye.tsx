import React from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../app/hooks';
import Layout from '../components/Layout';
import {
  getKanyeQuote,
  selectKanye,
} from '../features/kanye/kanyeSlice';

const Kenye:React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    data, 
    pending, 
    error,
  } = useAppSelector(selectKanye);

  return (
    <Layout title="Kanye">
    <div>
      <h2>Generate random Kanye West quote</h2>
      {pending && <p>Loading...</p>}
      {data && <p>{data.quote}</p>}
      {error && <p>Oops, something went wrong</p>}
      <button onClick={() => dispatch(getKanyeQuote())} disabled={pending}>
        Generate Kanye Quote
      </button>
    </div>
    </Layout>
  );
};

export default Kenye;