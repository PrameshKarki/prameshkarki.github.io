export type Timeline = {
    title: string,
    description: string,
    date: string,
    icon: string,
}

const timelines: Timeline[] = [
    {
        title: 'Full Stack Developer',
        description: 'I am currently working as a full stack developer . I am working on a web application that is used by a lot of people.',
        date: '2021 June - Present',
        icon: 'material-symbols:rocket-launch',
    },
    {
        title: "Computer Engineering",
        description: 'I am currently studying computer engineering.',
        date: '2018 - Present',
        icon: 'fa6-solid:user-graduate',
    }
];


export default timelines;