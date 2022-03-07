import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

 const Card= ({title, text,image,onClickFunc}: {title: string, text: string,image:string,onClickFunc: React.MouseEventHandler<HTMLDivElement>}) => {
  return (
    <Center py={6}>
      <Box _hover={{boxShadow: "outline"}}
        onClick={onClickFunc}
        maxW={'310px'}
        height={'410px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'190px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
         >
          <Image
            src={image}
            
            objectFit='fill'
         />
        </Box>
        <Stack paddingTop="2rem">
          
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {title}
          </Heading>
          <Text color={'gray.500'}>
            {text}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}

export default Card;
