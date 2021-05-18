import React, {useContext, useEffect} from 'react';
import {MainProps} from './interfaces';
import {MainContainer} from './styledComponents';
import Row from "./Row/Row";
import {observer} from "mobx-react-lite";
import {RootStoreContext} from "../../../../index";

const Main: React.FC<MainProps> = (props) => {
    const store = useContext(RootStoreContext);

    const {
        audioStore : {tracks},
        mainStore : {activeTab, sendTest},
    } = store;
    useEffect(() => {
        sendTest();
    }, []);

    return (
        <MainContainer>
            {
                activeTab.value === "main"
                    ?
                    tracks.map(el => <Row key={el.id} track={el}/>)
                    :
                    tracks.filter(elem => elem.isLiked).map(el => <Row key={el.id} track={el}/>)
            }
        </MainContainer>
    );
};

export default observer(Main);