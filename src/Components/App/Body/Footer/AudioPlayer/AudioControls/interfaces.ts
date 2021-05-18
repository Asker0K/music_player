export interface AudioControlsProps {
    isPlaying: boolean,
    onPlayPauseClick: (isPlaying: boolean) => void,
    onPrevClick: () => void,
    onNextClick: () => void,
    onShuffleClick: (isShuffle: boolean) => void;
    onRepeatClick: (isRepeat: boolean) => void,
    isShuffle: boolean,
    isRepeat: boolean,
}