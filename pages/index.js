import React, { useState } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Card from '../components/Card'
import Toggle from '../components/Toggle'
import Pagination from '../components/Pagination'

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ToggleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const Main = styled.main`
  padding: 1em;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Group = styled.div`
  width: 100%;
`
const GroupLabel = styled.h2`
  color: #FFFFFF;
  background-color: #2196F3;
  margin: 10px 0 0 0;
  padding: 5px;
`
export default function Home({ posts, groupedPosts }) {
  const rowsPerPage = 5
  const total = posts.length
  const [paginationMode, setPaginationMode] = useState(true)
  const [groupMode, setGroupMode] = useState(false)
  const [page, setPage] = useState(1)

  // Get element list depending on PaginationMode, Page, GroupMode
  let postList = null;
  if (paginationMode) {
    postList = posts.slice(rowsPerPage * (page - 1), rowsPerPage* page).map(({id, userId, title, body}) => 
      <Card key={id} userId={userId} title={title} description={body} />
    )
  } else {
    if (groupMode) {
      postList = Object.keys(groupedPosts).map(groupKey => 
        <Group key={groupKey}>
          <GroupLabel>User - {groupKey}</GroupLabel>
          {groupedPosts[groupKey].map(({id, userId, title, body}) => 
            <Card key={id} userId={userId} title={title} description={body} />
          )}
        </Group>
      )
    } else {
      postList = posts.map(({id, userId, title, body}) => 
        <Card key={id} userId={userId} title={title} description={body} />
      )
    }
  }

  return (
    <Container>
      <Head>
        <title>Coding Exercise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <ToggleContainer>
          <Toggle label='Pagination mode' value={paginationMode} onChange={setPaginationMode} />
          {!paginationMode && <Toggle label='Group mode' value={groupMode} onChange={setGroupMode} />}
        </ToggleContainer>

        {postList}

        {paginationMode && <Pagination page={page} rowsPerPage={5} total={total} onChange={setPage} />}
      </Main>
    </Container>
  )
}

Home.getInitialProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    const groupedPosts = {}
    posts.forEach(post => {
      if (groupedPosts[post.userId] === undefined) {
        groupedPosts[post.userId] = [post]
      } else {
        groupedPosts[post.userId].push(post)
      }
    })
    return { posts, groupedPosts }
  } catch (err) {
    return { posts: [] }
  }
}