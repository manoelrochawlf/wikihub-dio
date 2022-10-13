import { Container } from './styles';
import logo from '../assets/logo.png'
import Input from '../components/Input/indesx';
import Button from '../components/Button/indesx';
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';
import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]); 
  
  const handleSearchRepo = async () => {

  const {data} = await api.get(`repos/${currentRepo}`);

  if(data.id){
    const isExist = repos.find(repo => repo.id === data.id);

    if(!isExist){
      setRepos( prev => [...prev, data]);
      setCurrentRepo('');
      return
    } else{
        alert('Você já adicionou esse repositório!');
          return
    }
  };
  alert('Repositório não encontrado!');
  }

  const handleRemoveRepo = (id) => {
    
    const newRepo = repos.filter(repo => repo.id !== id)
    setRepos(newRepo);
    // utilizar filter.
  }

  return (
    <Container>
        <img src={logo} width={72} height={72} alt='logo'/>
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
        <Button onClick={handleSearchRepo}/>
       {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)} 
    </Container>
      
  );
}

export default App;
