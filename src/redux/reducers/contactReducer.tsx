/* eslint-disable import/no-anonymous-default-export */
import { ActionEvent } from "../actions/actionTypes";

const initialState = {
    contactList: [
        {
            id: 1,
            name: "Phong",
            email: "vantuanphong93@gmail.com",
            phone: "+84933264398",
        },
    ]
};

export default function (contact = initialState, action: any) {
    // new contact equal contactlist init
    const newContact: any = contact.contactList ? contact.contactList : [];
    switch (action.type) {
        case ActionEvent.CONTACT_GET_ALL:
            console.log(action)
            return {
                contactList: newContact
            };
        case ActionEvent.CONTACT_UPDATE:
            const idEdit = action.payload.id;
            const nameEdit = action.payload.name;
            const emailEdit = action.payload.email;
            const phoneEdit = action.payload.phone;
            const editMapList = newContact.map((item: any) => {
                if (item.id === idEdit) {
                    return {
                        item,
                        name: nameEdit,
                        email: emailEdit,
                        phone: phoneEdit,
                    };
                } else {
                    return item;
                }
            });
            return {
                contactList: editMapList,
            };


        case ActionEvent.CONTACT_CREATE:
            newContact.push({
                // id equal lentg of total list contact + 1 (Unique)
                id: contact.contactList.length + 1,
                name: action.payload.name,
                email: action.payload.email,
                phone: action.payload.phone,
            });
            return {
                contactList: newContact,
            };
        case ActionEvent.CONTACT_DELETE:
            console.log("remove student:", action.payload.item);
            const removeId = action.payload.item.id;
            const removeTodoList = newContact.filter((x: any) => {
                if (x.id !== removeId) {
                    return x;
                }
            });
            return {
                contactList: removeTodoList,
            };
        default:
            return contact;
    }
}