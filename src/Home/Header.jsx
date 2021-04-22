import { Button, Heading1 } from '../Components/index';
import { HeaderStyled } from './Home.styled';

const Header = () => {
    return (
        <HeaderStyled>
            <Heading1>Hej</Heading1>
            <Button pink>Hej</Button>
        </HeaderStyled>
    )
}

export default Header;