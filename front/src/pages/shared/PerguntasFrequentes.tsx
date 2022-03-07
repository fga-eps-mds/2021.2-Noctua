import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { FcBarChart, FcCollect } from 'react-icons/fc';
import { GiOwl } from 'react-icons/gi';
import { IconType } from 'react-icons';
import { Link } from '@chakra-ui/react'

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  icon,
  name,
  title,
}: {
  icon: IconType;
  name?: string;
  title?: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Icon as = {icon} mb={2} boxSize='5rem'/>
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const WithSpeechBubbles = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'6xl'}  py={28} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Perguntas frequentes</Heading>
          <Text>Aqui estão as respostas para as perguntas mais comuns</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>De onde vem os dados?</TestimonialHeading>
              <TestimonialText>

              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Auctor neque sed imperdiet nibh lectus feugiat nunc sem. */}
              
                Os dados foram obtidos da plataforma do{' '}
                <Link color='blue.300' onClick={()=>{window.open("https://brasil.io/home/")}}>
                  Brasil.io
                </Link>
                {' '}que visa tornar acessíveis os dados brasileiros de interesse público.
                
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              icon = {
                FcBarChart
              }
              
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>O que é o Noctua?</TestimonialHeading>
              <TestimonialText>

              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Auctor neque sed imperdiet nibh lectus feugiat nunc sem. */}

                 É um projeto de alunos da disciplina de Métodos de Desenvolvimento de Software da{' '}
                 <Link color='blue.300' onClick={()=>{window.open("https://fga.unb.br/")}}>
                  Universidade de Brasília
                </Link>
                ,{' '}aplicando metodologias ágeis.

              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              icon={
                GiOwl
              }
              
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Qual o objetivo do projeto?</TestimonialHeading>
              <TestimonialText>

              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Auctor neque sed imperdiet nibh lectus feugiat nunc sem. */}

              O objetivo principal do projeto é facilitar a relação dados/usuário,
              trazendo a transparência para leitura de informações. 
              
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              icon={
                FcCollect
              }
              
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
} 

export default WithSpeechBubbles;