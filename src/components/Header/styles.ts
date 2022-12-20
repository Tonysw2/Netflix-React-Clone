import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 68px;
  background: linear-gradient(180deg, #000000, transparent);
  z-index: 1;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  height: 40px;
  margin-left: 5rem;
`

export const AvatarImg = styled.img`
  height: 40px;
  border-radius: 6px;
  margin-right: 5rem;
`
