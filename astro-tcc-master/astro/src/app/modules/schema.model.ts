export interface Tag {
    name: string;
    color?: string;
}
export interface Tal {
    id: number;
    descricao: string;
    tipo: Tag[]
    responsavel: string;
    image?: string;
}

// export interface Issue {
//     name: IssueType;
//     color: string;
// }

export enum IssueType {
    Task = 'task',
    SubTask = 'sub-task',
    Bug = 'bug',
    Epic = 'epic',
    Story = 'story'
}

export interface Trello {
    titulo: string;
    tasks: Talk[];
    id: string;
}

export interface Board {
    title: string;
    trello: Trello[];
}
export interface Talk {
    text: string;
    speaker?: string;
    tags?: Tag[]
    image?: string;
    createdAt?: Date;
    issueType?: IssueType;
}

export interface Track {
    title: string;
    talks: Talk[];
    id: string;
}

export interface Board {
    title: string;
    tracks: Track[];
}