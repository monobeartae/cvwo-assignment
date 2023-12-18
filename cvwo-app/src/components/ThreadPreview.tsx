import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom'
import { Box, CardActionArea, CardContent } from '@mui/material';

type ThreadProps = {
    id: number,
    title: string,
    children: string
}

const ThreadPreview = ({ title, children }: ThreadProps) => {
    const navigate = useNavigate();
    const toThread = () => {
        navigate('/home/thread');
    }
    return (
        <Card variant='outlined'>
            <CardActionArea onClick={toThread}>
                <CardContent>
                    <h3>{title}</h3>
                    <p>{children}</p>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}

export default ThreadPreview