import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import src from '*.bmp';


const NavBar = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
                    Reactivities
                </Menu.Item>
                <Menu.Item name='friends' />
                <Menu.Item>
                    <Button positive content="Create Activity" />
                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default NavBar;
