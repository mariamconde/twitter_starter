import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

let count = 0;
export default function TweetBox(props) {

function handleOnTweetTextChange(event){
  props.setTweetText(event.target.value);
}

  function handleOnSubmit(){
    let newTweet = {
      name:props.userProfile.name,
      handle:props.userProfile.handle,
      text:props.tweetText,
      comments:0,
      retweets:0,
      likes:0,
      id:props.tweetLength
    };
    props.setTweets((oldTweets) => [...oldTweets, {...newTweet, id: oldTweets.length}]);
    props.setTweetText("");
  }

  let check = false;
  if(props.tweetText.length == 0 || props.tweetText.length > 140){
    check = true;
  }
  
  return (
    <div className="tweet-box">
      <TweetInput value = {props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount value={props.tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} check={check}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  let charCount =140 - props.value.length;
  if(props.value.length > 140){
    return <span className="tweet-length red">{charCount}</span>
  }
  if(props.value.length === 0){
    return <span></span>
  }
  else{
    return <span className="tweet-length">{charCount}</span>
  }
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit} disable={props.check}>Tweet</button>
    </div>
  )
}