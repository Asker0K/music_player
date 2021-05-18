import React from 'react';
import {FooterProps} from './interfaces';
import {FooterContainer} from './styledComponents';
import AudioPlayer from "./AudioPlayer/AudioPlayer";

const Footer: React.FC<FooterProps> = (props) => {
    return (
        <FooterContainer>
            <AudioPlayer/>
        </FooterContainer>
    );
};

export default Footer;