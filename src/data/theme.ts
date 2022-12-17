type Theme = {
    primaryColor: string,
    secondaryColor: string,
    ternaryColor: string

    primaryBackgroundColor: string,
    secondaryBackgroundColor: string,

    primaryTextColor: string,
    invertPrimaryTextColor: string,

    skillIconColor: string,
    hoverSkillIconColor: string,

    codeEditorBackgroundColor: string,

}

export const LightTheme: Theme = {
    primaryColor: '#0a428b',
    secondaryColor: '#e7ecf4',
    ternaryColor: "#0d3d7c",

    codeEditorBackgroundColor: '#0c1116',


    primaryBackgroundColor: '#ffffff',
    secondaryBackgroundColor: '#f2f2f2',

    skillIconColor: '#313131',
    hoverSkillIconColor: '#0a428b',

    primaryTextColor: '#000000',
    invertPrimaryTextColor: '#ffffff',

}

export const DarkTheme: Theme = {
    primaryColor: "#0a428b",
    secondaryColor: '#0c1116',
    ternaryColor: "#ded2d2",


    primaryBackgroundColor: '#0e1217',
    secondaryBackgroundColor: '#13181c',

    codeEditorBackgroundColor: '#0c1116',


    skillIconColor: '#e1dddde1',
    hoverSkillIconColor: 'white',

    primaryTextColor: '#ffffff',
    invertPrimaryTextColor: '#000000',
}

