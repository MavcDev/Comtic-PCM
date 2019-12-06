
export interface Answer{
    id: number,
    text: string,
    score: number
}

export interface Question{
    id: number,
    text: string,
    answer: Array<Answer>,
    category: number
}