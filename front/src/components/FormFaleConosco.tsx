import{FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Select,
    WrapItem,
    Box,
    VStack,
    Button,
    FormErrorMessage,
    Spinner,
  } from '@chakra-ui/react';
import { useState } from 'react';
  import {
    MdOutlineEmail,
  } from 'react-icons/md';
  import api from "../services/api"

const FormFaleConosco= ()=> {
    const [assunto, setAssunto] = useState('Feddback');
    const [email, setEmail] = useState('blank');
    const [mensagem, setMensagem] = useState('blank');
    const [isLoading, setIsLoading] = useState(false);
    const handleAssuntoChange = (e:any) => setAssunto(e.target.value)
    const handleEmailChange = (e:any) => setEmail(e.target.value)
    const handleMensagemChange = (e:any) => setMensagem(e.target.value)

    const sendEmail = async () => {
      try {
        await api.post(`enviaEmail`, {
          assunto: assunto,
          email_remetente: email,
          mensagem: mensagem
        });
        alert("Email enviado com sucesso");
      } catch (error: any) {
        alert("Não foi possível enviar o email");
        alert(error);
      }
    };

    const isErrorEmail = email === ''
    const isErrorMensagem = mensagem === ''
    return(
    <WrapItem >
    <Box bg="white" borderRadius="lg">
      <Box m={8} color="#0B0E3F">
        <VStack spacing={5}>
          <FormControl id="assunto" >
            <FormLabel >Assunto</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              
             <Select placeholder='' onChange={handleAssuntoChange}>
                <option value='Feedback'>Feedback</option>
                <option value='Problemas Técnicos'>Problemas Técnicos</option>
                <option value='Reclamação'>Reclamação</option>
                <option value='Outro'>Outro</option>
            </Select>
            </InputGroup>
          </FormControl>
          <FormControl id="Email" isInvalid={isErrorEmail}>
            <FormLabel>E-mail</FormLabel>
            <InputGroup borderColor="#E0E1E7">
              <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineEmail color="gray.800" />}
              />
              <Input id='email' type='email' size="md"  onChange={handleEmailChange}/>
            
            </InputGroup>
            {!isErrorEmail ? (
                null
            ) : (
                <FormErrorMessage>Email é requerido.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="mensagem" isInvalid={isErrorMensagem}>
            <FormLabel>Mensagem</FormLabel>
            <Textarea
              borderColor="gray.300"
              _hover={{
                borderRadius: 'gray.300',
              }}
              placeholder="Digite aqui sua mensagem"
              onChange={handleMensagemChange}
            />
             {!isErrorMensagem ? (
                null
            ) : (
                <FormErrorMessage>Mensagem é requerida.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="name" float="right">
            {isLoading? <Button
            size="lg"
              variant="solid"
              bg="#0D74FF"
              color="white"
              _hover={{}}
              >
             <Spinner />
            </Button> :<Button
            size="lg"
              variant="solid"
              bg="#0D74FF"
              color="white"
              _hover={{}}
              onClick={()=>{ if( email ==='blank'){
                setEmail('');
              }else if(assunto ==='blank'){
                setAssunto('')
              }else{
                setIsLoading(true);
                sendEmail().then(()=>setIsLoading(false));}}}
              >
              Enviar
            </Button>}
          </FormControl>
        </VStack>
      </Box>
    </Box>
  </WrapItem>
    );
}
export default FormFaleConosco;