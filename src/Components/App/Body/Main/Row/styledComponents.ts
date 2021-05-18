import styled from 'styled-components/macro';
import {withTheme} from "@material-ui/core";

export const RowContainer = withTheme(styled.div<{isPlaying?: boolean}>`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    height: 50px;
    padding: 5px 15px;
    box-sizing: border-box;
    align-items: center;
    
    & > p {
        color: ${props => props.isPlaying ? props.theme.palette.primary.main : '#FFFFFF'};
    }
    &:hover {
        background-color: #404040;
    }
`);

export const NumberWrapper = styled.p`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 50px;
`;

export const TitleWrapper = styled.p`
    margin: 0;
`;

export const LikeWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

