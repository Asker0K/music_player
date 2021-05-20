import React from 'react';
import axios from "axios";

const host = "http://localhost:5001";

export const createFormData = (data: { [key: string]: any }): FormData => {
    let requestFormData = new FormData();
    Object.entries(data).forEach(([key, value]: [string, any]) => {
        requestFormData.append(key, value);
    });
    return requestFormData;
};

export const audioApi = {
    sendVoice(voice: Blob) {
        const formData = new FormData();
        formData.append("data", voice, "test");

        return axios.post(`${host}/audio/command`,
            formData,
            {
                withCredentials: true,
                headers: {'Content-Type': "multipart/form-data"}
            }
             )
            .then((res: any) => {
                return res;
            }).catch(function (err) {
                return err.response;
            });
    },

    sendTest() {
        return axios.post(`${host}/audio/test`,)
            .then((res: any) => {
                return res;
            }).catch(function (err) {
                return err.response;
            });
    },
}