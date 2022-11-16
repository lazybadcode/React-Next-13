import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';

import AppContentCV from '../components/AppContentCV'
import {  WithLargeQuote, StatsTitleDescription, ContentCarousel } from './AppBlogContent';
  
  export default function AppCV() {
    return (
      <>
      <WithLargeQuote/>
      <StatsTitleDescription/>
      {/* <AppBlogContent date={new Date()} name={'Winney'} /> */}
      <ContentCarousel/>
      
    </>
    );
  }