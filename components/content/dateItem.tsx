import React from 'react'
import { View } from 'react-native';
import { H1, Span } from '../ui/typographie';

type DateItem = {
    title:string;
    data:{
        item:string;
        isCheck:boolean
    }
}

const DateItem = ({data,title}:DateItem) => {
    console.log(data);
    
  return (
    <View>
        <H1>
        {title.toUpperCase()}
        </H1>
        <Span>
            {data.item}
        </Span>
    </View>
  )
}

export default DateItem