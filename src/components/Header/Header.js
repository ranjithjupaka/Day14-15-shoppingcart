import React from 'react'
import { Container,  Dropdown , Nav ,  FormControl,  Navbar, Badge } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" style={{height:80}}>
            <Container>
                <Navbar.Brand>
                    <a href='/'>Shopping Cart</a>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                 <FormControl 
                 style={{ width:500 }}
                 placeholder="search for a product"
                 className='m-auto'
                 />  
                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="25px"/>
                            <Badge>9</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{minWidth:370}} >
                            <span style={{ padding:10  }}>Cart is Empty!</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
