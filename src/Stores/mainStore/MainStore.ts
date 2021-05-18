import RootStore from "../rootStore/rootStore";
import {makeAutoObservable, runInAction} from "mobx";
import {audioApi} from "../../Api/Api";

export type MenuItemValueType =
    "main" |
    "favorite" |
    "voice"

export interface MenuItemInterface {
    id: number,
    isActive: boolean,
    title: string,
    value: MenuItemValueType
}

class MainStore {
    rootStore;

    constructor(rootStore: RootStore) {
        makeAutoObservable(this, {rootStore : false});
        this.rootStore = rootStore;
    }

    menuItems: MenuItemInterface[] = [
        {
            id: 0,
            isActive: true,
            title: "Главная",
            value: "main",
        },
        {
            id: 1,
            isActive: false,
            title: "Любимые треки",
            value: "favorite",
        },
        {
            id: 2,
            isActive: false,
            title: "Голосовая команда",
            value: "voice",
        },
    ];
    commandsHistory: string[] = [];
    isDialog: boolean = false;
    isLoading: boolean = false;

    get activeTab(): MenuItemInterface {
        return this.menuItems.filter(el => el.isActive)[0];
    }

    get currentCommand(): string {
        return this.commandsHistory[this.commandsHistory.length-1];
        // if(this.currentCommand === "старт") {
        //     return this.rootStore.audioStore.setIsPlaying(true);
        // }
        // if(this.currentCommand === "стоп") {
        //     return this.rootStore.audioStore.setIsPlaying(true);
        // }
        // return null
    }

    setActiveTab = (id: number) => {
        this.menuItems = this.menuItems.map(el => ({...el, isActive: el.id === id }))
    }

    setIsDialog = (newState: boolean) => {
        this.isDialog = newState;
    }

    sendVoice = async (voice: Blob) => {
        this.isLoading = true;
        try {
            const result = await audioApi.sendVoice(voice);
            runInAction(() => {
                this.isLoading = false;
                if(result.data.command) {
                    this.commandsHistory.push(result.data.command)
                    console.log("COMMAND = ", JSON.stringify(this.currentCommand));
                }
            })
        } catch (err) {
            runInAction(() => {
                this.isLoading = false;
                console.log("result=", err);
            })
        }
    }

    sendTest = async () => {
        const result = await audioApi.sendTest();
        console.log("TEST_RES=", result);
    }
}

export default MainStore;