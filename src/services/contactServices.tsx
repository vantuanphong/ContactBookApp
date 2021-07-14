import { create } from "apisauce";

// test api => use when call real api
const api = create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const getContactList = async () => {
    const response:any = await api.get("/users");
    return response;
};
export const createContactList = async (param:any) => {
    const response:any = await api.post("/users",param);
    return response;
};

export const updateContactList = async (param:any,id:any) => {
    const response:any = await api.put(`/users/${id}`,param);
    return response;
};

export const deleteContactList = async (id:any) => {
    const response:any = await api.delete(`/users/${id}`);
    return response;
};