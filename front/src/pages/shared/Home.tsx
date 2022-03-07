import React from 'react';
import { Center, HStack, } from '@chakra-ui/react';
import Card from "../../components/Card"
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  const pushToPage= (path:string )=>{
    return (event: React.MouseEvent) => {
    navigate(path);
    event.preventDefault();
  }
  }
  return (

    <Center paddingTop="5%">
    <HStack spacing="3rem">
      <Card title = {"Gastos do Governo Federal"} text={"Análise sobre os gastos do Governo Federal "} onClickFunc={pushToPage("/gastos-governo-federal")} image="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" />
      <Card title = {"Gastos dos deputados do Brasil"} text={"Infográficos referentes aos gastos realizados pelos deputados"} onClickFunc={pushToPage("/gastos-deputados")} image='https://www.zerohoranews.com.br/images/noticias/8101/8bc9be39e9fe8c864395aa3c7f087226.jpg'/>
      <Card title = {"Dados Eleições do Brasil"} text={"Dados sobre as eleições do Brasil"} onClickFunc={pushToPage("/eleicoes-brasil")} image="https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg"/>
      </HStack>
      </Center>
    

   
   
  );
}

export default Home;
