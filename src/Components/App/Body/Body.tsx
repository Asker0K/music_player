import React from 'react';
import {BodyProps} from './interfaces';
import {BodyContainer, BodyOuterWrapper, BodyInnerWrapper} from './styledComponents';
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import {withStyles} from "@material-ui/core";

const Body: React.FC<BodyProps> = (props) => {
    return (
        <BodyContainer>
            <BodyOuterWrapper>
                <BodyInnerWrapper>
                    <LeftSidebar/>
                    <Main/>
                </BodyInnerWrapper>
                <Footer/>
            </BodyOuterWrapper>
        </BodyContainer>
    );
};

export default withStyles({},{ withTheme: true })(Body);