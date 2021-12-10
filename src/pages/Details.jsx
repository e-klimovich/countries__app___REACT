import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { IoArrowBack } from 'react-icons/io5'
import { useHistory, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import Info from "../components/Info";
import { searchByName } from "../config";


export const Details = ({ match }) => {
    const { name } = useParams();
    const { push, goBack } = useHistory();
    const [country, setCountry] = useState(null)

    useEffect(() => {
        axios.get(searchByName(name)).then(
            ({ data }) => setCountry(data[0])
        )
    }, [name])
    return <div>
        <Button onClick={goBack}>
            <IoArrowBack /> Back
        </Button>
        {country && <Info push={push} {...country} />}
    </div>
}