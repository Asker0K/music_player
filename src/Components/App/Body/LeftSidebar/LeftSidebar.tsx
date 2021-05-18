import React, {useContext} from 'react';
import {LeftSidebarProps} from './interfaces';
import {LeftSidebarContainer} from './styledComponents';
import {Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {Favorite, Home, Mic} from "@material-ui/icons";
import {observer} from "mobx-react-lite";
import {RootStoreContext} from "../../../../index";
import VoiceDialog from "../Main/VoiceDialog/VoiceDialog";
import {MainContainer} from "../Main/styledComponents";

const LeftSidebar: React.FC<LeftSidebarProps> = (props) => {
    const store = useContext(RootStoreContext);

    const {activeTab, setActiveTab, setIsDialog} = store.mainStore;

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        if(index === 2) {
            setIsDialog(true);
        } else {
            setActiveTab(index);
        }
    };

    return (
        <LeftSidebarContainer>
            <List style={{width : '100%'}} component="nav" aria-label="main mailbox folders">
                <ListItem
                    button
                    selected={activeTab.id === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <Home color={"primary"}/>
                    </ListItemIcon>
                    <ListItemText primary="Главная"/>
                </ListItem>
                <ListItem
                    button
                    selected={activeTab.id === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <Favorite color={"primary"}/>
                    </ListItemIcon>
                    <ListItemText primary="Любимые треки"/>
                </ListItem>
                <Divider/>
                <ListItem
                    button
                    //selected={activeTab.id === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemIcon>
                        <Mic color={"primary"}/>
                    </ListItemIcon>
                    <ListItemText primary="Голосовая команда"/>
                </ListItem>
            </List>
            <VoiceDialog/>
        </LeftSidebarContainer>
    );
};

export default observer(LeftSidebar);