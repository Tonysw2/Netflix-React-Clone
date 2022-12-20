import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from 'phosphor-react'
import {
  FooterContainer,
  SocialMediaContainer,
  SupportContainer,
  WrapSupportLinks,
} from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <SocialMediaContainer>
        <a href="#">
          <FacebookLogo />
        </a>
        <a href="ht#">
          <InstagramLogo />
        </a>
        <a href="#">
          <TwitterLogo />
        </a>
        <a href="#">
          <YoutubeLogo />
        </a>
      </SocialMediaContainer>

      <SupportContainer>
        <WrapSupportLinks className="wrap-support-links">
          <div className="support-links">
            <a href="#">Audio description</a>
            <a href="#">Investors</a>
            <a href="#">Legal notices</a>
          </div>
        </WrapSupportLinks>

        <WrapSupportLinks className="wrap-support-links">
          <div className="support-links">
            <a href="#">Support center</a>
            <a href="#">Employment assistance</a>
            <a href="#">Cookies preferences</a>
          </div>
        </WrapSupportLinks>

        <WrapSupportLinks className="wrap-support-links">
          <div className="support-links">
            <a href="#">Gift cards</a>
            <a href="#">Terms of use</a>
            <a href="#">About company</a>
          </div>
        </WrapSupportLinks>

        <WrapSupportLinks className="wrap-support-links">
          <div className="support-links">
            <a href="#">Press center</a>
            <a href="#">Privacy</a>
            <a href="#">Contact us</a>
          </div>
        </WrapSupportLinks>
      </SupportContainer>
    </FooterContainer>
  )
}
