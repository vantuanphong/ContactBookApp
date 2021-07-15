import { Button, Container, Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import TableContactComp from '../../component/TableContactComp';
import { getAllContact, updateContact, deleteContact } from "../../redux/actions/contactAction";
import './index.scss';
import CreateEditForm from './createEditForm';
const HomePage: React.FC = () => {
    let history = useHistory();
    // Table init
    const columns = [{ name: "ID" }, { name: "Name" }, { name: "Email" }, { name: "Phone" }]
    const [rows, setRows] = useState<any>([]);
    //state and dispatch
    const dispatch = useDispatch();
    const contactState = useSelector((state: any) => state.contact.contactList);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        dispatch(getAllContact())
        if (contactState) {
            setRows(contactState)
        }
    }, [contactState])

    // action    

    const editContact = (param: any) => {
        history.push({
            pathname: '/createOrEdit',
            state: { data: param }
        })
    }

    const deleteContactById = (id: any) => {
        let param: any = { item: { id } }
        dispatch(deleteContact(param))
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Container maxWidth="lg">
                <Typography align="center" variant="h4" gutterBottom>Contact List</Typography>
                <Button className="custom-btn" variant="contained" color="primary" onClick={() => handleClickOpen()}>Create Contact</Button>
                <div>
                    <TableContactComp columns={columns} rows={rows} onEdit={editContact} onDelete={deleteContactById}></TableContactComp>
                </div>

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create</DialogTitle>
                    <DialogContent>
                        <CreateEditForm onHandleCloseModal={handleClose}></CreateEditForm>
                    </DialogContent>
                </Dialog>
            </Container>
        </>
    )
}
export default HomePage