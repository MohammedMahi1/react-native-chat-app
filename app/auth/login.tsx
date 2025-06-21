import DateItem from '@/components/content/dateItem'
import Container from '@/components/ui/container'
import { H1 } from '@/components/ui/typographie'
import React from 'react'
import { FlatList } from 'react-native'

const dates = [
  {
    id: 1, title: "Monday",
    data: {
      item: "dfv", isCheck: true
    }
  },
  {
    id: 2, title: "Tuesday", data: {
      item: "dfv", isCheck: true
    }

  },
  {
    id: 3, title: "wednesday", data: {
      item: "dfv", isCheck: true
    }
  },
  {
    id: 4, title: "thursday", data: {
      item: "dfv", isCheck: true
    }
  },
  {
    id: 5, title: "friday", data: {
      item: "dfv", isCheck: true
    }
  },
  {
    id: 6, title: "saturday", data: {
      item: "dfv", isCheck: true
    }
  },
  {
    id: 7, title: "sunday", data: {
      item: "dfv", isCheck: true
    }
  }
]

const login = () => {
  return (
    <Container>

      <FlatList
        data={dates}
        renderItem={({ item }) =>
          <DateItem
            title={item.title}
            data={item.data}
          />}
        keyExtractor={item => item.id.toString()}
      />

    </Container>
  )
}

export default login