import React from "react";
import { Title, Form, Repositories } from './styles'
import { FiChevronRight } from 'react-icons/fi'
import Logo from '../../assets/logo.svg'

const Dashboard: React.FC = () => {
  return (
    <>
    <img src={Logo} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório"/>
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
    <a href="Perfil">
      <img src="https://avatars.githubusercontent.com/u/126830284?v=4" alt="Gabriel Campari"/>
      <div>
        <strong>gabrielcampari/GoBarber</strong>
        <p>Barber app, with appointments, made in Typescript.</p>
      </div>
      <FiChevronRight size={20} />
    </a>
    <a href="Perfil">
      <img src="https://avatars.githubusercontent.com/u/127698444?v=4" alt="Gabriel Ambrosio"/>
      <div>
        <strong>gabigogunner/PythonExcelAutomation</strong>
        <p>An application in Python to automate the Excel fomulas.</p>
      </div>
      <FiChevronRight size={20} />
    </a>
    <a href="Perfil">
      <img src="https://avatars.githubusercontent.com/u/111578906?v=4" alt="Enzo Ofrante"/>
      <div>
        <strong>EnzoOfrante/Projeto-Ney</strong>
        <p>A website made based on Neymar Junior.</p>
      </div>
      <FiChevronRight size={20} />
    </a>
    </Repositories>
    </>
  );
};

export default Dashboard;
