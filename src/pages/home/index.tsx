import { Button, Container, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import TableContactComp from '../../component/TableContactComp';
import { getAllContact, updateContact, deleteContact } from "../../redux/actions/contactAction";
import './index.scss';
const HomePage: React.FC = () => {
    // Table init
    const columns = [{name:"ID"},{ name:"Name"},{ name:"Email"},{ name:"Phone"}]
    const [rows,setRows] = useState<any>([]);
    //state and dispatch
    const dispatch = useDispatch();
    const contactState = useSelector((state: any) => state.contact.contactList);


    useEffect(() => {        
        dispatch(getAllContact())
        if(contactState){
            setRows(contactState)
        }
    }, [contactState])

    // action
    const createContact = (param?:any) =>{        
        console.log(contactState)
    }

    const editContact = (param:any) =>{
        dispatch(updateContact(param))
    }

    const deleteContactById = (id:any) =>{
        let param:any = {item :{id}}
        dispatch(deleteContact(param))
    }

    return (
        <>
          <Container maxWidth="lg">
            <Typography align="center" variant="h4" gutterBottom>Contact List</Typography>
            <Button className="custom-btn" variant="contained" color="primary" onClick={() => createContact()}>Create Contact</Button>
            <div>
                <TableContactComp columns={columns} rows={rows} onEdit={editContact} onDelete={deleteContactById}></TableContactComp>
            </div>
            </Container>
        </>
    )
}
export default HomePage