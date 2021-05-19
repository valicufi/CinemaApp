import axios, { AxiosResponse } from 'axios';
import { resolve } from 'node:path';
import { Activity } from '../models/activity';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api/';
//http://localhost:5000/api/MovieActivities/


axios.interceptors.response.use(async response =>{
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})


const responseBody = <T> (response : AxiosResponse) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body:{}) => axios.post<T>(url,body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url,body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const Activities = {
    list    :   ()=> requests.get<Activity[]>('/MovieActivities'),
    details :   (id:string) => requests.get<Activity>(`/MovieActivities/${id}`),
    create  :   (activity : Activity) => axios.post('/MovieActivities',activity),
    update  :   (activity: Activity)  => axios.put(`/MovieActivities/${activity.id}`,activity),
    delete  :   (id:string) => axios.delete(`/MovieActivities/${id}`),
}


const agent = {
    Activities
}

export default agent;