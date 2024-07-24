import React, { useState, FormEvent } from "react";
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import api from '../../services/api'
import Repository from "../Repository";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get(`repos/${newRepo}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
  }

  return (
    <>
    <img src={Logo} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form onSubmit={handleAddRepository}>
      <input value={newRepo} onChange={(e):void => setNewRepo(e.target.value)} placeholder="Digite o nome do repositório"/>
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      {repositories.map(repository => (
            <a key={repository.full_name} href="Perfil">
              <img src={repository.owner.avatar_url} alt={repository.owner.avatar_url}/>
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
            <FiChevronRight size={20} />
          </a>
      ))}
    </Repositories>
    </>
  );
};

export default Dashboard;
