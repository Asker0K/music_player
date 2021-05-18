import styled from 'styled-components/macro';
import {ReactMic} from "react-mic";

export const VoiceDialogContainer = styled.div`
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const StyledMic = styled(ReactMic)`
    width: 100%;
    display: flex;
    background-color: red;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
`;