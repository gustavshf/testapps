import React, { Component } from 'react';

import $ from 'jquery';
import ListItem from './ListItem';


class PostList extends Component {
  constructor(props){
    super(props);
    this.onChangeOne = this.onChangeOne.bind(this);
  }
 componentWillMount(){
  this.setState({posts: this.props.posts});
 }
 onChangeOne(event){
	 console.log(window.performance.memory);
    event.preventDefault();
    var posts = this.state.posts.concat([]);
    posts[900].favorites=9999;
             /*$.ajax({
                url:'http://localhost:3000/posts?_page=1&_limit=10',
                async:false,
                success:function(response){
                  response[900].favorites=9999;
                    posts=response;
                }.bind(this),
                error:function(){
                    console.log('ERROR');
                }
            });*/
        this.setState({ posts:posts });
  }
  render() {
    console.log(this.state);
    return (
      <div>
      <button onClick={this.onChangeOne}>Add</button>
        {this.state.posts/*.sort(function(a,b){
			a.favorites-b.favorites;
		}).slice(0,10)*/.map(post =>{
          var sUserName = (post.firstName.slice(0, 1) + post.lastName).toLowerCase();
          var iRating = (post.favorites + post.reposts)/50;
                return (
              <div>
              <hr/>
            <ListItem
            sUserName={sUserName}
            iRating={iRating}
              {...post}
            >
                        </ListItem>
                        </div>
          )
        })}

</div>
    );
  }
}

export default PostList;
