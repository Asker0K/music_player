export interface TrackInterface {
    id: number,
    title: string,
    artist: string,
    audioSrc: string,
    image: string,
    color: string,
    isLiked?: boolean,
}