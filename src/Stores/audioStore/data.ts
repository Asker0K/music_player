import {TrackInterface} from "./interfaces";

export const Tracks: TrackInterface[] = [
    {
        id: 1,
        title: "Любимый",
        artist: "Мой",
        audioSrc: require("../../static/audio/blue_lamba.ogg").default,
        image: "string",
        color: "red",
        isLiked: false,
    },
    {
        id: 2,
        title: "Такое",
        artist: "твой",
        audioSrc: require("../../static/audio/crash.mp3").default,
        image: "string",
        color: "red",
        isLiked: false,
    },
    {
        id: 3,
        title: "Brooklyn",
        artist: "Miyagi & Andy Panda",
        audioSrc: require("../../static/audio/brooklyn.mp3").default,
        image: require("../../static/img/kossandra.jpg").default,
        color: "red",
        isLiked: false,
    },
]