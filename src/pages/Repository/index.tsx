import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from './styles';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import  Logo from '../../assets/logo.svg'

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const params = useParams<keyof RepositoryParams>() as RepositoryParams;

  return (
    <>
      <Header>
        <img src={Logo} alt='Github Explorer' />
        <Link to="/dashboard"> <FiChevronLeft size={16}/> Voltar </Link>
      </Header>
      <div>
        <h1>Repository: {params.repository}</h1>
      </div>
    </>
  );
};

export default Repository;
