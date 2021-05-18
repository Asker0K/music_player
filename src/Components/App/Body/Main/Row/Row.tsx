import React, {useContext, useState} from 'react';
import {RowProps} from './interfaces';
import {NumberWrapper, RowContainer, TitleWrapper, LikeWrapper} from './styledComponents';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Divider, IconButton, Tooltip} from "@material-ui/core";
import {observer} from "mobx-react-lite";
import {RootStoreContext} from "../../../../../index";
import {PauseCircleFilled} from "@material-ui/icons";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const Row: React.FC<RowProps> = (props) => {
    const store = useContext(RootStoreContext);
    const [isPlayIcon, setIsPlayIcon] = useState<boolean>(false);

    const {track} = props;
    const {
        //observable
        isPlaying,

        //computed
        activeTrack,

        //actions
        likeDislikeTracks,
        setIsPlaying,
        playTrack
    } = store.audioStore;

    const handleOnLikeClick = () => {
        likeDislikeTracks(track.id, !track.isLiked);
    };

    const handleOnIdMouseEnter = () => {
        setIsPlayIcon(true);
    };

    const handleOnIdMouseLeave = () => {
        setIsPlayIcon(false);
    };

    return (
        <>
            <RowContainer isPlaying={ track.id === activeTrack.id}>
                <NumberWrapper onMouseEnter={handleOnIdMouseEnter} onMouseLeave={handleOnIdMouseLeave}>
                    {
                        isPlayIcon ?
                            <Tooltip title={isPlaying ? "Пауза" : "Воспроизвести"}>
                                <span>
                                    <IconButton onClick={() => track.id === activeTrack.id ? setIsPlaying(!isPlaying) : playTrack(track.id)}>
                                        {
                                            isPlaying && track.id === activeTrack.id ?
                                                <PauseCircleFilled fontSize={"small"} style={{color : "#FFFFFF"}}/>
                                                :
                                                <PlayCircleOutlineIcon fontSize={"small"} style={{color : "#FFFFFF"}}/>
                                        }
                                    </IconButton>
                                </span>
                            </Tooltip>
                            : track.id
                    }
                </NumberWrapper>
                <TitleWrapper>
                    {track.title}
                </TitleWrapper>
                <LikeWrapper>
                    <Tooltip arrow title={!track.isLiked ? "Добавить в любимые треки" : "Удалить из любимых треков"}>
                        <span>
                            <IconButton onClick={handleOnLikeClick}>
                                {
                                    track.isLiked ? <FavoriteIcon fontSize="small" color="primary"/> : <FavoriteBorderIcon
                                        fontSize="small" color="primary"
                                    />
                                }
                            </IconButton>
                        </span>
                    </Tooltip>
                </LikeWrapper>
            </RowContainer>
            <Divider style={{backgroundColor : '#393939'}}/>
        </>
    );
};

export default observer(Row);