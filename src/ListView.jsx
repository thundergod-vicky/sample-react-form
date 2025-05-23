import React from 'react'

const ListItem = ({ item }) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.id}</p>
        </div>
    )
}


const ListView = () => {
    const list = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' },
        { id: 7, name: 'Item 7' },
        { id: 8, name: 'Item 8' },
        { id: 9, name: 'Item 9' },
        { id: 10, name: 'Item 10' },
    ]
    
  return (
    <div>
        {list.map(item => (
            <ListItem key={item.id} item={item} />
        ))}
    </div>
  )
}

export default ListView