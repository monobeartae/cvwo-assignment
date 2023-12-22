import React from 'react'
import { Reply } from '../data/Thread'
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom'
import { Box, CardActionArea, CardContent } from '@mui/material';
import { FlatList, View } from 'react-native'
import '../pages/HomePage.css'

const ReplyItem = ({ id, author, children, replies }: Reply) => {
    return (
        <div className='reply'>
            <Card variant='outlined'>
                <CardContent>
                    <p>{author}</p>
                    <p>{children}</p>
                </CardContent>
            </Card>
            <FlatList data={replies} renderItem={
                ({ item }) =>
                    <ReplyItem id={item.id} author={item.author} replies={item.replies}>{item.children}</ReplyItem>
            }
                keyExtractor={(item) => item.id.toString()} ItemSeparatorComponent={() => <View style={{ height: 2 }} />} />
        </div>

    )
}

export default ReplyItem