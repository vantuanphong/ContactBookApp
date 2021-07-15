import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './index.scss';
import { Field, Form, Formik, FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import { createContact, updateContact } from '../../../redux/actions/contactAction';

interface Values {
    name: string;
    email: string;
    phone: string;
}
const DisplayingErrorMessagesSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phone: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});
interface propState {
    onHandleCloseModal: any
}
const CreateEditForm: React.FC<propState> = (props) => {
    const {onHandleCloseModal} = props
    const dispatch = useDispatch();
    let history = useHistory();
    let location: any = useLocation();
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const [title, setTittle] = useState<any>('Create New Contact');

    useEffect(() => {
        if (location.state?.data) {
            formik.setFieldValue("name", location.state?.data.name)
            formik.setFieldValue("email", location.state?.data.email)
            formik.setFieldValue("phone", location.state?.data.phone)            
            setTittle("Edit Contact")
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
        },
        validationSchema: DisplayingErrorMessagesSchema,
        onSubmit: (
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
        ) => {
            onHandleSubmitForm(values, setSubmitting)
        }
    }
    );

    const onHandleSubmitForm = async (values: any, setSubmitting: any) => {
        await sleep(500);
        let param = JSON.parse(JSON.stringify(values, null, 2));
        if (location.state?.data) {
            param.id = location.state?.data.id
            dispatch(updateContact(param))
        } else {
            dispatch(createContact(param))
            onHandleCloseModal()
        }
        backToHome();
        setSubmitting(false)
    }

    const backToHome = () => {
        history.push('/');
        if (!location.state?.data) {
        onHandleCloseModal()
        }
    }

    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={3} sm={3}>
                        <Button style={{display:`${location.state?.data === undefined? 'none':'block'}`}} onClick={() => backToHome()} startIcon={<ArrowBackIcon />}> Back</Button>
                    </Grid>
                    <Grid item xs={location.state?.data === undefined? 12:8} sm={6}>
                        <Typography align="center" variant="h5" gutterBottom>{title}</Typography>
                    </Grid>
                </Grid>
                <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                    <Grid container
                        spacing={3}>

                        <Grid item xs={4} sm={4}></Grid>
                        <Grid item xs={2} sm={2}>
                            <label htmlFor="name">Name</label>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <TextField
                                id="name"
                                name="name"
                                placeholder="John"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                        </Grid>
                        <Grid item xs={2} sm={2}></Grid>
                        <Grid item xs={4} sm={4}></Grid>

                        <Grid item xs={2} sm={2}>
                            <label htmlFor="phone">Phone</label>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <TextField
                                id="phone"
                                name="phone"
                                placeholder="0123456789"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                            />

                        </Grid>
                        <Grid item xs={2} sm={2}></Grid>
                        <Grid item xs={4} sm={4}></Grid>

                        <Grid item xs={2} sm={2}>
                            <label htmlFor="email">Email</label>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <TextField
                                id="email"
                                name="email"
                                placeholder="john@acme.com"
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} style={{ textAlign: 'center' }}>
                            <Button style={{ marginRight: '5px' }} onClick={() => backToHome()} variant="contained" color="secondary">Cancel</Button>
                            <Button type="submit" variant="contained" color="primary">Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    )
}
export default CreateEditForm