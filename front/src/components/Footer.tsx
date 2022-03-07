import {
    Box,
    Image,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden
  } from '@chakra-ui/react';
  import { FaGithub} from 'react-icons/fa';
  import {  HiOutlineMail } from 'react-icons/hi';
  import {  SiDiscord } from 'react-icons/si';
  import { ReactNode } from 'react';
  
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
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.300', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
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
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Email'} href={'fale-conosco'} >
              <HiOutlineMail />
            </SocialButton>
            <SocialButton label={'Discord'} href={'https://discord.gg/w2pxnmXP'}>
              <SiDiscord />
            </SocialButton>
            <SocialButton label={'Github'} href={'https://github.com/fga-eps-mds/2021.2-Noctua'}>
              <FaGithub />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }