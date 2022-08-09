import {useState, useEffect} from 'react'
import axios from 'axios'


function LawAPI() {
    const [laws, setLaws] = useState([])
    const [callback, setCallback] = useState(false)
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    useEffect(() =>{
        const getLaws = async () => {
            const res = await axios.get(`/api/laws?limit=${page*9}&${category}&${sort}&title[regex]=${search}`)
            setLaws(res.data.laws)
            setResult(res.data.result)
        }
        getLaws()
    },[callback, category, sort, search, page])
    
    return {
        laws: [laws, setLaws],
        callback: [callback, setCallback],
        category: [category, setCategory],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult]
    }
}

export default LawAPI