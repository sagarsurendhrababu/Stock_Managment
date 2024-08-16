import React from 'react'
import { Outlet} from 'react-router-dom';
import {Grid,GridItem} from '@chakra-ui/react'

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Layout() {
  return (
    <>
      <Grid minH='100vh' templateColumns='repeat(5,1fr)' templateRows='60px auto' >
        <GridItem as='aside' colSpan={1} rowSpan={2} bg='blue.700' display={{base:'none',md:'block'}}>
            <Sidebar/>
        </GridItem>
        <GridItem as='header' colSpan={{base:5,md:4}} bg='gray.300'>
          <Header/>
        </GridItem>
        <GridItem as='article' colSpan={{base:5,md:4}} bg='gray.200' p='15px'>
          <Outlet/>
        </GridItem>
      </Grid>                       
    </>

  )
}
