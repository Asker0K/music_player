import React from 'react';
import {InfoProps} from './interfaces';
import {InfoContainer, ContentWrapper} from './styledComponents';
import {CardMedia, IconButton, Typography} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Info: React.FC<InfoProps> = (props) => {
    const {track: {image, title, isLiked, artist}} = props;
    return (
        <InfoContainer>
            <CardMedia
                style={{ width: 80, height: 80 }}
                image={image}
                title={`${title} ${artist}`}
            />
            <ContentWrapper>
                <Typography variant={"body1"}>{title}</Typography>
                <Typography variant={"caption"} color={"secondary"}>{artist}</Typography>
            </ContentWrapper>
            <IconButton>
                {
                    isLiked ?
                        <FavoriteIcon fontSize="small" color="primary"/>
                        :
                        <FavoriteBorderIcon fontSize="small" color="primary"/>
                }
            </IconButton>
        </InfoContainer>
    );
};

export default Info;