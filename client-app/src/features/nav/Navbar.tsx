import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import src from '*.bmp';


const NavBar = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" />
                </Menu.Item>
                <Menu.Item>
                    <Button positive content="Create Activity" />
                </Menu.Item>
                <Menu.Item name='friends' />
            </Container>
        </Menu>
    );
};

export default NavBar;
