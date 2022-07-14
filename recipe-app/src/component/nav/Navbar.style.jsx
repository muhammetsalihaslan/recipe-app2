import styled from 'styled-components';
import Flex from '../globalStyles/Flex';

const Nav = styled(Flex)`
 padding: 1rem 2rem;
 background: ${({theme}) => theme.colors.navbarBgColor};


`;

export default Nav;