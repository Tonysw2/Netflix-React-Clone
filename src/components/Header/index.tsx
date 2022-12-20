import Avatar from '../../assets/myAvatar.svg'
import NetflixLogo from '../../assets/netflix-logo.svg'
import { AvatarImg, HeaderContainer, Logo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={NetflixLogo} alt="" />
      <AvatarImg src={Avatar} alt="" />
    </HeaderContainer>
  )
}
