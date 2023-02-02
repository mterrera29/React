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
  Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
 
const NavBar = () => {
  return (
    <div>
      <nav className='navbar bg-body-tertiary'>
        <div className='container'>
          <h1>E-Commerce</h1>
          <div className='botones'>
            <div className='botonNav'>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Categorías
              </MenuButton>
              <MenuList>
                <MenuItem>Categoría 1</MenuItem>
                <MenuItem>Categoría 2</MenuItem>
                <MenuItem>Categoría 3</MenuItem>
              </MenuList>
            </Menu>
            </div>
            <div className='botonNav'>
            <Button colorScheme='blue'><CartWidget/></Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar