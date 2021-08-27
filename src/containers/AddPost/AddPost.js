import React, {useState} from 'react';
import axiosApi from "../../axiosApi";
import Spinner from "../../components/UI/Spinner/Spinner";
import dayjs from "dayjs";
import Form from "../../components/Form/Form";

const AddPost = ({history}) => {
    const [post, setPost] = useState({
        title: '',
        message: '',
        date: '',
    });

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

    const addPost = async (e) => {
        e.preventDefault();
        if (post.message && post.title) {
            setLoading(true);
            try {
                await axiosApi.post('/posts.json', {
                    post,
                });
            } finally {
                setLoading(false);
                history.push('/');
            }
        }
    }

    let form = (
        <Form
            onSubmit={addPost}
            onChange={postChanged}
            btnTitle="Add"
            post={post}
            title="Add Post"
        />
    );

    if (loading) {
        form = <Spinner/>;
    }

    return form;
};

export default AddPost;