

export type TUser = {
    _id: string
    email: string,
    name: string,
    age: number,
    password: string,
    address: string,
    educationLevel: string
}

export type TArticle ={
    writerId?: String,
    title: String,
    theme: String,
    content: String,
    fileContent: {
        data: Buffer | undefined,
        contentType: String | undefined
    },
    publicationDate: Date,
    presentationDate: Date
};

export type TFeedback = {
    date: Date,
    user: TUser,
    content: string,
    idEvent: string
}

export type TEvent = {
    _id: string
    name: string,
    description: string,
    theme: string,
    organizingCommitte: string,
    startDate: string,
    endDate: string,
    organizer: string,
    photo: string
    location?:  {
        type: 'Point',
        coordinates: number[]
    },
    participants?: string[]
}

export type DefaultError = {
    error: string,
    status: number
}

export type TMinicourse = {
    subject: string,
    ministering: string,
    registrants?: string[]
    eventId: string
}

export type THackaton = { 
    name: string,
    teams: string[],
    idEvent: string
} 

export type TTeam = {
    name: string,
    members: string[],
    idHackathon: string
}
