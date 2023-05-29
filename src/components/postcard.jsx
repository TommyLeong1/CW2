import React from 'react';
import { Card } from 'antd';
import PostIcon from './posticon';
const { Meta } = Card;
import { Link} from 'react-router-dom'; 

class PostCard extends React.Component {

  render() {
        return( 
      <Card
        style={{ width: 320 }}
       cover={<img alt="test" src={this.props.imgURL}/>}
 
        hoverable={true}
        actions={[
          <PostIcon type="like" count={this.props.likes} selected={this.props.liked}/>,
          <PostIcon type="message" count={this.props.comments}/>,
          <PostIcon type="pushpin" selected={this.props.pinned}/>
        ]}>
        
        <Meta title={this.props.title} description={this.props.summary} />
        <p></p>
  <Link   to={ `/dashboard/${this.props.id}` }>Details</Link>
      </Card>
      
    );
  }
}

export default PostCard; 
