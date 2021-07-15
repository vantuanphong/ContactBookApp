/* eslint-disable import/no-anonymous-default-export */
import { log } from "console";
import { ActionEvent } from "../actions/actionTypes";

const initialState = {
    theme:'dark',
    contactList: [
        {
            id: 1,
            name: "Phong",
            email: "vantuanphong93@gmail.com",
            phone: "+84933264398",
        },
        {
            id: 2,
            name: "Phong2",
            email: "vantuanphong92@gmail.com",
            phone: "+84933264399",
        },
        {
            id: 3,
            name: "test",
            email: "vantuanphong91@gmail.com",
            phone: "+84933264398",
        },
    ]
};

export default function (contact = initialState, action: any) {
    // new contact equal contactlist init
    const newContact: any = contact.contactList ? contact.contactList : [];
    const theme: any = contact.theme;
    switch (action.type) {
        case ActionEvent.TOGGLESETTING:
            return {
                theme: theme === 'dark'? "light" : "dark",
                contactList:newContact
            };
        case ActionEvent.CONTACT_FILLTER:
            let clone = JSON.parse(JSON.stringify(newContact))
            if (action.payload.searchText !== "") {
                if (clone.length > 0) {
                    clone.map((item1:any,index:any) => {
                        if (item1.name.toLowerCase().includes(action.payload.searchText.toLowerCase())) {
                         
                        } else {
                            clone.splice(index, 1)
                        }
                        return item1
                    })
                }
            }
            return {
                contactList: clone,
                theme: theme 
            };
        case ActionEvent.CONTACT_GET_ALL:
            console.log(action)
            return {
                contactList: newContact,
                theme: theme 
            };
        case ActionEvent.CONTACT_UPDATE:
            const idEdit = action.payload.id;
            const nameEdit = action.payload.name;
            const emailEdit = action.payload.email;
            const phoneEdit = action.payload.phone;
            const editMapList = newContact.map((item: any) => {
                if (item.id === idEdit) {
                    return {
                        id: item.id,
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
                theme: theme 
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
                theme: theme 
            };
        default:
            return contact;
    }
}