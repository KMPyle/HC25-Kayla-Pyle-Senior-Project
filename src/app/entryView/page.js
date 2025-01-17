"use client"

import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from "react"

export default function EntryView() {
    const searchParams = useSearchParams()
    const entry = searchParams.get("entry")
    const [entryData, setEntryData] = useState({
        name: '', type: '', text: '' })

    useEffect(() => {
        const fetchEntryData = async () => {
            try {
                const response = await fetch(`/api/entryData?entryName=${entry}`)
                const data = await response.json()
                setEntryData(data)
            } catch (err) {
                console.log(`Fetching error\n${err}\nCause: ${err.cause}`)
            }
        }
        fetchEntryData()
    }, [])

    return(
        <div>
            <p>Entry View Page</p>
            <p>{ entryData.name }</p> 
        </div>
    )
}
