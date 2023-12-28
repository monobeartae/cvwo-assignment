import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom'
import { Box, CardActionArea, CardContent } from '@mui/material';
import { Thread } from '../contexts/ThreadContext';

const ThreadItem = ({ id, title, children, author, replies }: Thread) => {
    const navigate = useNavigate();
    const toThread = () => {
        navigate(`/home/thread/${id}`);
    }
    return (
        <Card variant='outlined'>
            <CardActionArea onClick={toThread}>
                <CardContent>
                    <h3>{title}</h3>
                    <p>{author}</p>
                    <p>{children}</p>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}

export default ThreadItem