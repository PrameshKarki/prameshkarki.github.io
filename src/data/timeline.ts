export type Timeline = {
    title: string,
    subTitle?: string,
    description: string,
    date: string,
    icon: string,
}

const timelines: Timeline[] = [
    {
        title: 'Full Stack Developer',
        subTitle: 'Cliffbyte Pvt Ltd, Kathmandu',
        description: 'As a fullstack developer at Cliffbyte Pvt Ltd, I played a pivotal role in designing and implementing comprehensive solutions for various Nepali government offices. Leveraging the MERN stack for web applications and Flutter for mobile apps, I ensured a seamless and integrated experience for millions of users. Beyond development, I took charge of server management, emphasizing the reliability and security of the deployed systems. Collaborating closely with government stakeholders, I translated their unique requirements into effective technical solutions, making a tangible and positive impact on the daily lives of Nepalis.',
        date: '2021 June - Present',
        icon: 'material-symbols:rocket-launch',
    },
    {
        title: "Bachelor's In Computer Engineering",
        subTitle: "Nepal College of Information Technology, Pokhara University, Balkumari, Lalitpur",
        description: "In my exploration of Computer Engineering, I have acquired a solid foundation in the fundamental principles of hardware and software integration, algorithm design, and system architecture.This knowledge has been instrumental in shaping my journey as a software engineer by providing a comprehensive understanding of the intricate relationships between various components in a computing environment.The skills honed in digital systems design, network configuration, and cybersecurity have proven invaluable in creating robust and secure software solutions.This multidisciplinary background empowers me to navigate the complexities of technology integration, ensuring a seamless collaboration between different aspects of software engineering in the ever- evolving landscape of the field.",
        date: '2018 - 2023',
        icon: 'fa6-solid:user-graduate',
    }
];


export default timelines;
