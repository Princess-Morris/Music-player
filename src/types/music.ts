export type welcomeText = {
    text: string
}

export interface IMusic {
    id: string;
    title: string;
    artiste: string;
    genre: string;
    city?: string;
    song: string;
}

export interface IMusicPlay extends IMusic {
    songPlay: string | undefined;
    click: any;
}

export interface IProgressBar {
    progress: number
}