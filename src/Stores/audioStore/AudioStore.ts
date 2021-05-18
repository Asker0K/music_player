import {makeAutoObservable} from "mobx";
import RootStore from "../rootStore/rootStore";
import {Tracks} from "./data";
import {TrackInterface} from "./interfaces";

class AudioStore {
    rootStore;
    constructor(rootStore: RootStore) {
        makeAutoObservable(this, { rootStore: false });
        this.rootStore = rootStore;
    }

    trackIndex: number = 0;
    trackProgress: number = 0;
    isPlaying: boolean = false;
    volume: number = 50;
    tracks: TrackInterface[] = Tracks;
    isRepeat: boolean = false;
    isShuffle: boolean = false;

    get activeTrack(): TrackInterface {
        return this.tracks[this.trackIndex];
    }

    setTrackIndex = (index: number) => {
        this.trackIndex = index;
    }

    setTrackProgress = (progress: number) => {
        this.trackProgress = progress;
    }

    setIsPlaying = (isPlaying: boolean) => {
        this.isPlaying = isPlaying;
    }

    setVolume = (volume: number) => {
        this.volume = volume;
    }

    likeDislikeTracks = (id: number, like: boolean) => {
        if(like) {
            this.tracks = this.tracks.map(el => (el.id === id ? {...el, isLiked: true} : el))
        } else {
            this.tracks = this.tracks.map(el => (el.id === id ? {...el, isLiked: false} : el))
        }
    }

    playTrack = (id: number) => {
        this.setTrackIndex(id-1);
    }

    setIsRepeat = (newState: boolean) => {
        this.isRepeat = newState;
    }

    setIsShuffle = (newState: boolean) => {
        this.isShuffle = newState;
    }
}

export default AudioStore;
