import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaInstagram, FaLine, FaLinkedin, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode, useEffect, useState } from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getAPIVersion } from '../services/api.service';
import { Version } from '../types/version.type';
import { APP_PATHS_MANIFEST } from 'next/dist/shared/lib/constants';




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
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function AppFooter() {
  


  const [api, setAPI] = useState<Version | null>(null);
  
  const getData = async () => {
      const response = await getAPIVersion();
      setAPI(response.data);
  }


  useEffect(()=>{
    getData()
  }, [])

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2023 All rights reserved { api && <Text>API Version {api?.data.version}</Text>}</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={'Facebook'} href={'#'}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={'Telegram'} href={'#'}>
            <FaTelegram />
          </SocialButton>
          <SocialButton label={'Line'} href={'#'}>
            <FaLine />
          </SocialButton>
          <SocialButton label={'Linkedin'} href={'#'}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={'Github'} href={'#'}>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}