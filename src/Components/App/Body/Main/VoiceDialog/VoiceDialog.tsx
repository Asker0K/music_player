import React, {useContext, useState} from 'react';
import {VoiceDialogProps} from './interfaces';
import {Button, Dialog, Typography} from "@material-ui/core";
import {observer} from "mobx-react-lite";
import {RootStoreContext} from "../../../../../index";
import {ReactMicStopEvent} from 'react-mic';
import {VoiceDialogContainer, StyledMic, ButtonsWrapper} from "./styledComponents";

const VoiceDialog: React.FC<VoiceDialogProps> = (props) => {
    const store = useContext(RootStoreContext);

    const {mainStore : {isDialog, setIsDialog, sendVoice}} = store;
    const [start, setStart] = useState<boolean>(false);
    const [downLoadLink, setDownloadLink] = useState<string>("");


    const handleOnClose = () => {
        setIsDialog(false);
    };

    const handleOnStartClick = () => {
        setStart(true);
    };

    const handleOnStopClick = () => {
        setStart(false);
    };

    const onStop = (recordedData: ReactMicStopEvent) => {
        setDownloadLink(recordedData.blobURL);
        sendVoice(recordedData.blob);
    };

    const onData = (recordedData: Blob) => {

    };

    return (
        <Dialog open={isDialog} onClose={handleOnClose}>
            <VoiceDialogContainer>
                <Typography>
                    Чем могу помочь ?
                </Typography>
                <StyledMic
                    record={start}
                    visualSetting="sinewave"
                    onStop={onStop}
                    onData={onData}
                    strokeColor="#000000"
                    backgroundColor="#4CC86B"
                    mimeType="audio/wav"
                />
                <ButtonsWrapper>
                    <Button onClick={handleOnStopClick}>
                        Остановить
                    </Button>
                    <Button onClick={handleOnStartClick}>
                        начать
                    </Button>
                </ButtonsWrapper>
            </VoiceDialogContainer>
        </Dialog>
    );
};

export default observer(VoiceDialog);