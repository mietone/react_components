import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:45PM" 
        content="Nice post!" 
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="Alex" 
        timeAgo="Today at 2AM" 
        content="I agree with you"  
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="Jane" 
        timeAgo="Today at 5:30PM" 
        content="I like what you said"  
        avatar={faker.image.avatar()}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))