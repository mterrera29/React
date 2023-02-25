import React from 'react'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Flex,
  Box,
  Spacer,
  Heading,
  ButtonGroup

} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      <Flex minWidth='max-content' alignItems='center' gap='2' bg="gray.200" maxH= "55">
        <Box p='4'>
          <Link to="/">
            <Heading size='md'>E-Commerce</Heading>
          </Link >
        </Box>
        <Spacer />
        <ButtonGroup gap='2' p='4'>
        <Menu>
          <Link to="/">
            <button className="btn" type="button">Catálogo</button>
          </Link >
          <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </button>
            <ul className="dropdown-menu">
              <Link to={`/category/${"Tecnología"}`}>
                <li><p className="dropdown-item">Tecnología</p></li>
              </Link >
              <Link to={`/category/${"Salud"}`}>
                <li><p className="dropdown-item">Salud</p></li>
              </Link >
              <Link to={`/category/${"Cuidado personal"}`}>
               <li><p className="dropdown-item" >Cuidado personal</p></li>
              </Link >
            </ul>
          </div>
        </Menu>
        <Button bg="gray.100"><CartWidget/></Button>
        </ButtonGroup>
      </Flex>
    </div>
  )
}

export default NavBar