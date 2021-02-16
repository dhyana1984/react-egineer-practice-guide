import React from 'react';
import List from '../component/List'
import Pagation from '../component/Pagation'
import { useParams } from 'react-router-dom'
import data from '../data/data'

const pageLength = Math.ceil(data.length / 3)

export default function ListView() {
  let { page = 1 } = useParams()
  return <div>
    <h1>List View</h1>
    <List
      activePage={page}
    />
    <Pagation
      activePage={page}
      pageLength={pageLength}
    />
  </div>
}