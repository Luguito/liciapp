import React, { useEffect, useState } from 'react';
import withAuth from '@utils/withAuth'
import Layout from '../../../layout';
import { CreateCV } from '../../../components/hojas-de-vida/create/create';
import { useRouter } from 'next/router';
import { getCVById } from 'components/hojas-de-vida/adapters/list.adapter';

const UpdateCV = () => {
    const { id } = useRouter().query;
    const [cv, setCV] = useState({})
    const [showUpdate, setUpdate] = useState(false);
    useEffect(() => {
        getCVById(id).then(({ body }) => {
            setCV(body);
            setUpdate(body)
        })
    }, [])
    return (
        <Layout userName={''}>
            {
                showUpdate && <CreateCV isUpdated={true} sheet={cv}></CreateCV>
            }
        </Layout>
    )
};



export default UpdateCV;