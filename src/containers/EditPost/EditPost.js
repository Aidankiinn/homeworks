import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import Spinner from "../../components/UI/Spinner/Spinner";
import dayjs from "dayjs";
import Form from "../../components/Form/Form";

const EditPost = ({match, history}) => {
    const [post, setPost] = useState({
        title: '',
        message: '',
        date: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosApi.get('/posts/' + match.params.id + '.json');
            setPost(response.data.post);
        }

        fetchData().catch(console.error);
    }, [match.params.id])

    const [loading, setLoading] = useState(false);

    const postChanged = e => {
        const name = e.target.name;
        const value = e.target.value;

        setPost(prev => ({
            ...prev,
            [name]: value,
            date: dayjs().format('DD-MM-YYYY HH:mm'),
        }));
    };

    const editPost = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axiosApi.put('/posts/' + match.params.id + '.json', {
                post,
            });
        } finally {
            setLoading(false);
            history.replace('/');
        }
    }

    let form = (
        <Form
            onSubmit={editPost}
            onChange={postChanged}
            btnTitle="Save"
            post={post}
            title="Edit Post"
        />
    );

    if (loading) {
        form = <Spinner/>;
    }

    return form;
};

export default EditPost;