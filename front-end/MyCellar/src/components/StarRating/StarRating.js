import React, { Component }from 'react'
import StarRating from 'react-native-star-rating'
import { connect } from 'react-redux'
import { newWineRating } from '../../store/actions/index'
 
class WineRating extends Component {
  onStarRatingPress(rating) {
    this.props.updateRating(rating)
  }
 
  render() {
    return (
      <StarRating
        disabled={this.props.disabled}
        maxStars={5}
        fullStarColor='#cfb53b'
        rating={this.props.rating}
        starSize={this.props.size}
        containerStyle={this.props.styling}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    newRating: state.newWine.rating
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateRating: function(rating) {
      return dispatch(newWineRating(rating))
    }
  } 
}

export default connect (mapStateToProps, mapDispatchToProps)(WineRating)