
import { ActionEvent } from "./actionTypes";

export const getAllContact = (payload?:any) => {
  return {
    type: ActionEvent.CONTACT_GET_ALL,
    payload
  }
}

export const createContact = (payload: any) => ({
  type: ActionEvent.CONTACT_CREATE,
  payload
});

export const updateContact = (payload: any) => ({
  type: ActionEvent.CONTACT_UPDATE,
  payload
});

export const deleteContact = (payload: any) => ({
  type: ActionEvent.CONTACT_DELETE,
  payload
});