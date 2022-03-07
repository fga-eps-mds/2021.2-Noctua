import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    useClipboard,
    Tooltip,
  } from '@chakra-ui/react';
  import {
    MdEmail,
    MdLocationOn,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord } from 'react-icons/bs';
import FormFaleConosco from '../../components/FormFaleConosco'
const  FaleConosco=()=> {

  const { hasCopied, onCopy } = useClipboard('Noctua.faq.unb@gmail.com');


    return (
        <Container bg="gray.100" maxW="full" mt={0} centerContent overflow="hidden">
          <Flex>
            <Box
              bg="black"
              color="white"
              borderRadius="lg"
              m={{ sm: 4, md: 16, lg: 10 }}
              p={{ sm: 5, md: 5, lg: 16 }}>
              <Box p={4}>
                <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                  <WrapItem>
                    <Box>
                      <Heading>Fale Conosco</Heading>
                      <Box maxWidth="300px">
                      <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                        Preencha o formulário ou  nos procure nas redes sociais
                      </Text>
                      </Box>
                      <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                        <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Tooltip
                            label={hasCopied ? 'E-mail Copiado!' : 'Copiar E-mail'}
                            closeOnClick={false}
                             hasArrow>
                          <Button
                            size="md"
                            height="48px"
                            width="300px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            onClick={onCopy}
                            leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                            Noctua.faq.unb@gmail.com
                          </Button>
                          </Tooltip>

                          <Button
                            size="md"
                            height="48px"
                            width="300px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                            Distrito Federal, Brasília, Brasil
                          </Button>
                        </VStack>
                      </Box>
                      <HStack
                        mt={{ lg: 3, md: 3 }}
                        ml="20"
                        spacing={5}
                        px={5}
                       >
                        
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF' }}
                          icon={<BsGithub size="28px" />}
                          onClick={()=>{window.open("https://github.com/fga-eps-mds/2021.2-Noctua",'_blank')}}
                        />
                        <IconButton
                          aria-label="discord"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF' }}
                          icon={<BsDiscord size="28px" />}
                          onClick={()=>{window.open("https://discord.gg/cpMXU7z6tK",'_blank')}}
                        />
                      </HStack>
                    </Box>
                  </WrapItem>
                 <FormFaleConosco/>
                </Wrap>
              </Box>
            </Box>
          </Flex>
        </Container>
      );
    }
  
  export default FaleConosco;