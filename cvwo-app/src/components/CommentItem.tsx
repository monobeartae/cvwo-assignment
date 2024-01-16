import React from 'react'
import { Comment } from '../contexts/ThreadContext'
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom'
import { Box, CardActionArea, CardContent } from '@mui/material';
import { FlatList, View } from 'react-native'
import '../pages/HomePage.css'

const CommentItem = ({ id, author, children, replies }: Comment) => {
    return (
        <div>
            <Card variant='outlined'>
                <CardContent>
                    <h4 style={{
                        margin: 0
                    }}>{author}</h4>
                    <hr style={{
                        borderColor: 'ghostwhite'
                    }} />
                    <p style={{
                        margin: 0
                    }}>{children}</p>
                </CardContent>
            </Card>

            <div className='comment'>
                <FlatList
                    data={replies} renderItem={
                        ({ item }) =>
                            <CommentItem id={item.id} author={item.author} replies={item.replies}>{item.children}</CommentItem>
                    }
                    keyExtractor={(item) => item.id.toString()} ItemSeparatorComponent={() => <View style={{ height: 2 }} />} />
            </div>
        </div>

    )
}

export default CommentItem