import axios from "axios";
import { Container } from "react-bootstrap";
import Post from "../components/post.component";
import { useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";


export default function PostIndex(props) {
    let params = useParams();
    const [reefs, setReefs] = useState(null);
    const [page, setPage] = useState(null);
    const [refresh, setRefresh] = useState(true);

    function refreshPage() {
        getReefData(page);
    }

    useEffect(() => {
        if(page != params.page) {
            setPage(params.page);
            getReefData(params.page); 
        }
        if (!reefs) {
            getReefData(page ? page : 1);
        }
    })

    function getReefData(pagenum) {
        setReefs(null);
        axios.get(`/reefs/${pagenum}`)
            .then(res => {
                setReefs(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <Container className="px-0">
            {reefs ? reefs.map((reef, index) => {
                return <Post refresh={refreshPage} author={reef.author.username} content={reef.content} title={reef.title} id={reef._id}></Post>
            }) : <Container>Loading....</Container>}
        </Container>
    )
}