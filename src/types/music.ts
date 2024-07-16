export type welcomeText = {
    text: string
}

export interface IMusic {
    id: string;
    title: string;
    artiste: string;
    genre: string;
    city?: string;
}

export interface IMusicPlay extends IMusic {
    // idPlaying
}
