interface ErrorContainer {
    id: string;
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    id: 'abcd',
    email: 'not a valid email',
    username: 'username must start with an alphabet'
}
