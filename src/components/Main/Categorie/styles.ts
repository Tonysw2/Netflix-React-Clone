import styled from 'styled-components'

export const CategorieContainer = styled.div`
  margin-bottom: 3.2rem;

  & > div {
    margin: 0 auto;

    & > h1 {
      margin-bottom: 0.5rem;
      margin-left: 3.6rem;
    }
  }
`

export const SliderContainer = styled.div`
  position: relative;

  .arrow {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 2.5%;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
  }

  .arrow-left {
    left: 0;
    background: linear-gradient(90deg, #000, transparent);
  }

  .arrow-right {
    right: 0;
    background: linear-gradient(270deg, #000, transparent);
  }
`

export const Slider = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  margin: 0 auto;

  & > img {
    border-radius: 6px;
  }

  & > img:hover {
    cursor: pointer;
  }
`
