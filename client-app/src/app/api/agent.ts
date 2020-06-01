import axios, { AxiosResponse } from 'axios';
import IActivity from '../models/activity';

axios.defaults.baseURL = 'http://localhost:5000/api/'

// const sleep = (ms: number) => (response: AxiosResponse) =>
//     new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms))

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Save response on a constant
const resposeBody = (response: AxiosResponse) => {
    return sleep(1000).then(() => response.data);
}

const requests = {
    get: (url: string) => axios.get(url).then(resposeBody),
    post: (url: string, body: {}) => axios.post(url, body).then(resposeBody),
    put: (url: string, body: {}) => axios.put(url, body).then(resposeBody),
    del: (url: string) => axios.delete(url).then(resposeBody)
}

const Activities = {
    list: (): Promise<IActivity[]> => requests.get('/activities'),
    details: (id: string) => requests.get(`/activities/${id}`),
    create: (activity: IActivity) => requests.post(`/activities`, activity),
    update: (activity: IActivity) => requests.put(`/activities/${activity.id}`, activity),
    delete: (id: string) => requests.del(`/activities/${id}`)
}

export default {
    Activities
}