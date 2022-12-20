import styled from 'styled-components'

interface FeatureMovieContainerProps {
  backdrop: string
}

export const FeatureMovieContainer = styled.div<FeatureMovieContainerProps>`
  width: 100vw;
  height: 100vh;

  background-image: url(${(props) => props.backdrop});
  background-position: center;
  background-size: cover;
`

export const InformationContainer = styled.div`
  width: 50rem;
  height: 50rem;
  padding-top: 20rem;
  padding-left: 5rem;

  & > h1 {
    font-size: 6rem;
    margin-bottom: 1.2rem;
  }

  & > p {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    line-height: 1.6;
    color: ${(props) => props.theme.gray400};

    --max-lines: 4;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--max-lines);
  }
`

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  margin-bottom: 1.2rem;
  font-size: 1.8rem;
  font-weight: bold;

  & > p:first-child {
    color: ${(props) => props.theme.green500};
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & > button {
    padding: 0.8rem 2rem;
    font-weight: bold;
    color: ${(props) => props.theme.gray900};
    border: none;
    border-radius: 6px;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  & > button:last-child {
    background-color: ${(props) => props.theme.gray800};
    color: ${(props) => props.theme.gray100};
  }

  & > button:hover {
    transition: all 0.2s;
    filter: brightness(80%);
  }
`

export const Overlay = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(0deg, #121214, transparent 150%);
`
