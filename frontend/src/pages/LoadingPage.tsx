import { useState, useCallback } from 'react';
import styled from 'styled-components';
import loader from '../images/loader.gif';
import LoadingOverlay from 'react-loading-overlay-ts';
import BounceLoader from 'react-spinners/BounceLoader';
import ClipLoader from 'react-spinners/ClipLoader';

const LoaderContainer = styled.div`
  background-image: url(${loader});
  background-size: cover;
  background-position: center;
  background-size: 50vw;
  background-repeat: no-repeat;
  width: 100%;
  height: 80vh;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
const LoadingPage:React.FC = () => {
  const [isActive, setActive] = useState(true)
  // const handleButtonClick = useCallback(() => {
  //   setActive(value => !value)
  // }, [])
  return (
    // <LoadingOverlay
    //   active={isActive}
    //   spinner={<ClipLoader/>}
    //   text='Loading your content...'
    //   styles={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    // >
      
    // </LoadingOverlay>
    <LoaderContainer>
        
    </LoaderContainer>
  )
}

export default LoadingPage;