import React, {useContext, useEffect, useRef} from 'react';
import {AudioPlayerProps} from './interfaces';
import {AudioPlayerContainer, StyledInput} from './styledComponents';
import AudioControls from "./AudioControls/AudioControls";
import {
    LeftSideTitle,
    LeftSideWrapper,
    MiddleSideWrapper,
    RightSidebarInnerWrapper,
    RightSideWrapper,
} from "../styledComponents";
import {Grid, Slider, Tooltip} from "@material-ui/core";
import {VolumeDown, VolumeUp} from "@material-ui/icons";
import {observer} from "mobx-react-lite";
import {RootStoreContext} from "../../../../../index";
import Info from "./Info/Info";

interface Props {
    children: React.ReactElement;
    open: boolean;
    value: number;
}

const ValueTooltipComponent = (props: Props) => {
    const {children, open, value} = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value} arrow>
            {children}
        </Tooltip>
    );
};

const AudioPlayer: React.FC<AudioPlayerProps> = (props) => {
    const store = useContext(RootStoreContext);
    const {
        //observables
        trackIndex,
        trackProgress,
        isPlaying,
        volume,
        tracks,
        isRepeat,
        isShuffle,
        //computed
        activeTrack,
        //actions
        setTrackIndex,
        setTrackProgress,
        setIsPlaying,
        setVolume,
        setIsRepeat,
        setIsShuffle,
        likeDislikeTracks
    } = store.audioStore;
    const {currentCommand, commandsHistory} = store.mainStore;
    const {audioSrc} = activeTrack;

    //refs
    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef<NodeJS.Timeout>();
    const isReady = useRef(false);

    const {duration} = audioRef.current;

    const onScrub = (value: string) => {
        intervalRef.current && clearInterval(intervalRef.current);
        audioRef.current.currentTime = Number(value);
        setTrackProgress(audioRef.current.currentTime);
    };

    const onScrubEnd = () => {
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    };

    const startTimer = () => {
        intervalRef.current && clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                if(isRepeat) {
                    repeatTrack();
                } else if(isShuffle) {
                    toRandomTrack();
                } else {
                    toNextTrack();
                }
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, 1000);
    };

    const toPrevTrack = () => {
        if(isShuffle) {
            toRandomTrack();
            return;
        }
        if (trackIndex - 1 < 0) {
            setTrackIndex(tracks.length - 1);
        } else {
            setTrackIndex(trackIndex - 1);
        }
    };

    const toNextTrack = () => {
        if(isShuffle) {
            toRandomTrack();
            return;
        }
        if (trackIndex < tracks.length - 1) {
            setTrackIndex(trackIndex + 1);
        } else {
            setTrackIndex(0);
        }
    };

    const toRandomTrack = () => {
        setTrackIndex(Math.ceil(Math.random() * tracks.length-1));
    }

    const UseEffectFunction = () => {
        audioRef.current.pause();

        audioRef.current = new Audio(audioSrc);
        setTrackProgress(audioRef.current.currentTime);
        audioRef.current.volume = volume / 100;

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            isReady.current = true;
        }
    }

    const repeatTrack = () => {
        UseEffectFunction();
    }

    const handleVolumeChange = (event: any, newValue: number | number[]) => {
        setVolume(newValue as number);
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            intervalRef.current && clearInterval(intervalRef.current);
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        return () => {
            audioRef.current.pause();
            intervalRef.current && clearInterval(intervalRef.current);
        };
    }, []);


    useEffect(UseEffectFunction, [trackIndex]);

    useEffect(() => {
        audioRef.current.volume = volume / 100;
    }, [volume]);

    useEffect(() => {

        switch(currentCommand) {
            case "старт":
                setIsPlaying(true);
                break;
            case "стоп":
                setIsPlaying(false);
                break;
            case "следующий":
                toNextTrack();
                break;
            case "предыдущий":
                toPrevTrack();
                break;
            case "повторять":
                setIsRepeat(!isRepeat);
                break;
            case "добавить":
                likeDislikeTracks(activeTrack.id, true);
                break;
            case "удалить":
                likeDislikeTracks(activeTrack.id, false);
                break;
            case "перемешать":
                setIsShuffle(!isShuffle);
                break;
            case "громче":
                setVolume(volume + 0.1*volume);
                break;
            case "громко":
                setVolume(100);
                break;
            case "тише":
                setVolume(volume - 0.1*volume);
                break;
            case "привет":
                alert("Привет!");
                break;
            case "пока":
                alert("Пока!");
                break;
            case "тихо":
                setVolume(0);
                break;
        }
    }, [currentCommand, commandsHistory.length]);


    return (
        <>
            <Info track={activeTrack}/>
            <MiddleSideWrapper>
                <AudioPlayerContainer>
                    <AudioControls
                        isPlaying={isPlaying}
                        isShuffle={isShuffle}
                        isRepeat={isRepeat}
                        onPrevClick={toPrevTrack}
                        onNextClick={toNextTrack}
                        onPlayPauseClick={setIsPlaying}
                        onShuffleClick={setIsShuffle}
                        onRepeatClick={setIsRepeat}
                    />
                    <StyledInput
                        type="range"
                        value={trackProgress}
                        step="1"
                        min="0"
                        max={duration ? duration : `${duration}`}
                        className="progress"
                        onChange={(e) => onScrub(e.target.value)}
                        onMouseUp={onScrubEnd}
                        onKeyUp={onScrubEnd}
                    />
                </AudioPlayerContainer>
            </MiddleSideWrapper>
            <RightSideWrapper>
                <RightSidebarInnerWrapper>
                    <Grid container spacing={2}>
                        <Grid item>
                            <VolumeDown/>
                        </Grid>
                        <Grid item xs>
                            <Slider
                                ValueLabelComponent={ValueTooltipComponent} value={volume} onChange={handleVolumeChange}
                                aria-labelledby="continuous-slider"
                            />
                        </Grid>
                        <Grid item>
                            <VolumeUp/>
                        </Grid>
                    </Grid>
                </RightSidebarInnerWrapper>
            </RightSideWrapper>
        </>
    );
};

export default observer(AudioPlayer);