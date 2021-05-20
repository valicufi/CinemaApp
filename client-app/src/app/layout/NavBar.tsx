import { Fragment } from 'react'
import { Button, Container, Input, Menu } from 'semantic-ui-react'
import { useStore } from '../stores/store'



function NavBar() {

    const {activityStore} = useStore();

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
                    
                    <Button onClick={() => activityStore.openForm()} basic color='purple' content='Create Movie' style={{marginRight: '5px'}}/>
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
