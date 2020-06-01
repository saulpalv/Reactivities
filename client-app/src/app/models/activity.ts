interface IActivity {
    id: string
    title: string
    description: string
    category: string
    date: string
    city: string
    venue: string
}

const getEmptyIActivity = (): IActivity => ({
    id: '',
    title: '',
    description: '',
    category: '',
    date: '',
    city: '',
    venue: '',
})

// function getEmptyIActivity(): IActivity {
//     return {
//         id: '',
//         title: '',
//         description: '',
//         category: '',
//         date: '',
//         city: '',
//         venue: '',
//     }
// }

export default IActivity
export { getEmptyIActivity }