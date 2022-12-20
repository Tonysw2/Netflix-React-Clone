import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin: 10rem 0;
  padding: 0 10rem;
`

export const SocialMediaContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2.4rem;
  padding-left: 6.2rem;
  width: 80%;

  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 2.4rem;

  & > a:link,
  & > a:visited {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.gray100};
    border-bottom: 1px solid transparent;
  }

  & > a:hover,
  & > a:active {
    border-bottom: 1px solid ${(props) => props.theme.gray100};
  }
`

export const SupportContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  width: 80%;
  margin: 0 auto;
`

export const WrapSupportLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    & > a:visited,
    & > a:link {
      text-decoration: none;
      color: ${(props) => props.theme.gray300};
    }

    & > a:hover,
    & > a:active {
      text-decoration: underline;
    }
  }
`
