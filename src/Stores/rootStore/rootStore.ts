import AudioStore from '../audioStore/AudioStore';
import MainStore from "../mainStore/MainStore";

class RootStore {
    public audioStore: AudioStore;
    public mainStore: MainStore;
    constructor() {
        this.audioStore = new AudioStore(this);
        this.mainStore = new MainStore(this);
    }
}

export default RootStore;