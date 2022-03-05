import React from 'react';
import { Center, HStack } from '@chakra-ui/react';
import Card from "./components/Card"

function Home() {

  function test(){
    alert("oie3");
  }
  return (
    <Center paddingTop="15%">
    <HStack spacing="3rem">
      <Card title = {"Gastos do Governo Federal"} text={"bla bla"}  image="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" onClickFunc={()=>{console.log("ablueblue")}}/>
      <Card title = {"Gastos dos deputados do Brasil"} text={"Página referente a análise de dados dos gastos realizados pelos deputados"} onClickFunc={()=>test} image='https://www.zerohoranews.com.br/images/noticias/8101/8bc9be39e9fe8c864395aa3c7f087226.jpg'/>
      <Card title = {"Dados Eleições do Brasil"} text={"teste tesste"} onClickFunc={test} image="https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg"/>
      </HStack>
      </Center>
    

   
   
  );
}

export default Home;
