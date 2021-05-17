import { Fragment } from 'react'
import { Button, Container, Input, Menu } from 'semantic-ui-react'


interface Props{
    openForm : () => void;
}

function NavBar({openForm}:Props) {
    return (

       <Fragment>
        <Menu fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10em' }} />
                    CinemaApp
                </Menu.Item>
                <Menu.Item name='Movies'/>
                
    
                <Menu.Item>
                    
                    <Button onClick={openForm} basic color='purple' content='Create Movie' style={{marginRight: '5px'}}/>
                </Menu.Item>
                <Menu.Item>
                    <Input className='icon' icon='search' placeholder='Search for movie' />
                </Menu.Item>
                <Menu.Item position='right' name='LogIn'/>
            </Container>
        </Menu>
        </Fragment>
    )
}

export default NavBar
