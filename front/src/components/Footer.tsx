import {
    Box,
    Image,
    Container,
    Stack,
    Text,
    IconButton,
    HStack
  } from '@chakra-ui/react';
  import { FaGithub} from 'react-icons/fa';
  import {  HiOutlineMail } from 'react-icons/hi';
  import {  SiDiscord } from 'react-icons/si';
  
  const Logo = (props: any) => {
    return (
        <Image
        // src="https://cdn.discordapp.com/attachments/744698026462937211/949839916773281822/unknown.png"
        maxW={'310px'}
        height={'40px'}
        mb={1}
        ml={5}
        mr={5}
        objectFit='fill'
     />
    );
  };
  
  
  
  export default function SmallWithLogoLeft() {
    return (
      <Box
      position="fixed"
      bottom="0"
      width="100%"
        bg="#2f3a58"
        color="white">
            {/* <Divider orientation='horizontal' /> */}
        <Container
          
          as={Stack}
          maxW={'6xl'}          
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Logo />
          <Text>© 2022 Noctua Development. Todos os direitos reservados</Text>
          <HStack direction={'row'} spacing={6}>
            <IconButton
                          aria-label="email"
                          variant="ghost"
                          size='sm'
                          isRound={true}
                          color="#bad4e3"
                          _hover={{ color: 'orange.400' }}
                          icon={<HiOutlineMail size="24px" />}
                          onClick={()=>{window.open('fale-conosco')}}
                        />
            <IconButton
                          aria-label="discord"
                          variant="ghost"
                          size='sm'
                          isRound={true}
                          color="#bad4e3"
                          _hover={{ color: 'white', bg: '#4080ff' }}
                          
                          icon={<SiDiscord size="20px" />}
                          onClick={()=>{window.open("https://discord.gg/cpMXU7z6tK",'_blank')}}
                        />
            <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="sm"
                          isRound={true}
                          color="#bad4e3"
                          _hover={{ color: 'white' }}
                          icon={<FaGithub size="24px" />}
                          onClick={()=>{window.open("https://github.com/fga-eps-mds/2021.2-Noctua",'_blank')}}
                        />
          </HStack>
        </Container>
      </Box>
    );
  }