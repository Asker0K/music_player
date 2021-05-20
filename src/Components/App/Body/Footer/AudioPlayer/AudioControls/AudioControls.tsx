import React from 'react';
import {AudioControlsProps} from './interfaces';
import {AudioControlsContainer} from './styledComponents';
import {IconButton, Tooltip} from "@material-ui/core";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import {PauseCircleFilled} from "@material-ui/icons";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import {observer} from "mobx-react-lite";

const AudioControls: React.FC<AudioControlsProps> = (props) => {
    const {isPlaying, onPlayPauseClick, onPrevClick, onNextClick, onShuffleClick, onRepeatClick, isShuffle, isRepeat} = props;

    return (
        <AudioControlsContainer>
            <Tooltip title={"Перемешать"}>
                <span>
                    <IconButton color={isShuffle ? "primary" : undefined} onClick={() => onShuffleClick(!isShuffle)}>
                        <ShuffleIcon color={isShuffle ? "primary" : undefined} fontSize="small"/>
                    </IconButton>
                </span>
            </Tooltip>
            <Tooltip title={"Предыдущий"}>
                <span>
                    <IconButton onClick={onPrevClick}>
                        <SkipPreviousIcon fontSize="small" style={{color : "#FFFFFF"}}/>
                    </IconButton>
                </span>
            </Tooltip>
            <Tooltip title={isPlaying ? "Пауза" : "Играть"}>
                <span>
                    <IconButton onClick={() => onPlayPauseClick(!isPlaying)}>
                        {
                            isPlaying ?
                                <PauseCircleFilled fontSize="large" style={{color : "#FFFFFF"}}/>
                                :
                                <PlayCircleOutlineIcon fontSize="large" style={{color : "#FFFFFF"}}/>
                        }
                    </IconButton>
                </span>
            </Tooltip>
            <Tooltip title={"Следующий"}>
                <span>
                    <IconButton onClick={onNextClick}>
                        <SkipNextIcon fontSize="small" style={{color : "#FFFFFF"}}/>
                    </IconButton>
                </span>
            </Tooltip>
            <Tooltip title={"Повторять"}>
                <span>
                    <IconButton color={isRepeat ? "primary" : undefined} onClick={() => {
                        onRepeatClick(!isRepeat);
                    }}>
                        <RepeatIcon fontSize="small" color={isRepeat ? "primary" : undefined}/>
                    </IconButton>
                </span>
            </Tooltip>
        </AudioControlsContainer>
    );
};

export default observer(AudioControls);