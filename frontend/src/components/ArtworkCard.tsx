import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ArtworkCardContainer = styled.div`
    max-width: 100%;
    min-width: 20%;
    height: calc(90%);
    background-color: #ffffff;
    border-radius: 3px;
    border: 1px solid #a1a1a1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .pic{
        max-width: 85%;
        height: 85%;
        img{
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
        }
    } 
    .card-header{
        margin-top: 0.5em;
        border-bottom:none;
        background-color:transparent;
    }
    .title {
        color:#444444;
    }
    .text {
        color:#444444;
      }
    .card-footer{
        border-top:none !important;
        background-color:transparent !important;
    }
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: transform 0.2s;
    }
    &:active {
        transform: scale(1);
        opacity: 0.8;
        background-color: #f0f0f0;
    }
`

interface ArtworkCardProps {
    image: string;
    type: string;
    index: number;
    introduction: string;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ image, type, index, introduction }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log("Card Clicked");
        navigate(`/artwork/${type}/${index}`);
    }
    return (
        <ArtworkCardContainer onClick={handleClick}>
            <div className="pic">
                <img src={image}/>
            </div>
            <div className="card-header">
                {type} #{index+1}
            </div>
            <div className="card-body">
                <h3 className="title">
                    Special title treatment
                </h3>
            </div>
            <div className="card-footer">
                <p className="text">
                    {introduction}
                </p>
            </div>
        </ArtworkCardContainer>
    );
}