import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarText, Row, Col, Input, Button } from 'reactstrap'
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom'

function NavbarComponent(props) {
    const [searchValue, setSearchValue] = useState('');

    return (
        <Navbar color="dark"
            dark>
            <NavbarBrand href="/"><img
                alt="logo"
                src="https://www.freepnglogos.com/uploads/film-reel-png/film-reel-the-movies-owens-valley-12.png"
                style={{
                    height: 40,
                    width: 40
                }}
            /> {" "} Lets Movies</NavbarBrand>
            <NavbarText>
                    
            </NavbarText>
            <NavbarText>
                    <Row className="row-cols-lg-auto g-3 align-items-center">
                        <Col>
                            <Input
                                placeholder="Search..."
                                type="text"
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Link to={'/search-movie/'+searchValue} state={searchValue}>
                                <SearchIcon/>
                            </Link>
                        </Col>
                    </Row>
            </NavbarText>
        </Navbar>
    )
}

export default NavbarComponent