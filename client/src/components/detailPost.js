import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Card, Button } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import CreateReply from "./createreply.component";


export default function DetailPost() {
    let params = useParams();
    const [postData, setPostData] = useState(null);
    const [reply, setReply] = useState(false);
    useEffect(() => {
        if (!postData) {
            axios.get(`/post/${params.id}`)
                .then(res => {
                    console.log(res.data);
                    setPostData(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    })

    function handlePress() {
        setReply(!reply);
    }

    function handleClose() {
        setReply(false);
    }

    return (
        <Container>
            <Card className="mt-4">
                <Card.Header as="h5">{postData ? postData.title : "Loading..."}<Button className="float-end btn-sm" variant="secondary" onClick={() => handlePress()}>Reply</Button></Card.Header>
                <Card.Body>
                    <Card.Text className="mt-0">
                        {postData ? postData.content : "Loading..."}
                    </Card.Text>
                    <Card.Text className="text-muted fs-6">-{postData ? postData.author.username : "Loading..."}</Card.Text>
                </Card.Body>
                {postData ? postData.comments.map(comment => {
                    return (
                        <Card.Body className="border-top">
                            <Card.Text>{comment.comment}</Card.Text>
                            <Card.Text className="text-muted fs-6">-{comment.username}</Card.Text>
                        </Card.Body>

                    )
                }) : <></>}
                 {reply ? <CreateReply id={params.id} close={handleClose}/> : <></>}
            </Card>
        </Container>
    )
}