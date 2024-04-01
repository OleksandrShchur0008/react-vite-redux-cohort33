import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlice"
import Button from "../../components/Button/Button"
import { LikeImg, DislikeImg } from "assets"
import { FeedbackWrapper, ImageContainer, Image, Count } from "./styles"

function Feedback() {
  const dispatch = useAppDispatch()
  const like = useAppSelector(feedbackSliceSelectors.like)
  const dislike = useAppSelector(feedbackSliceSelectors.dislike)

  const onLike = () => {
    dispatch(feedbackSliceActions.addLike())
  }
  const onDislike = () => {
    dispatch(feedbackSliceActions.addDislike())
  }
  const onResetResults = () => {
    dispatch(feedbackSliceActions.resetResults())
  }

  return (
    <FeedbackWrapper>
      <ImageContainer>
        <Image src={LikeImg} alt="Like img" onClick={onLike} />
        <Count>{like}</Count>
      </ImageContainer>
      <ImageContainer>
        <Image src={DislikeImg} alt="Dislike img" onClick={onDislike} />
        <Count>{dislike}</Count>
      </ImageContainer>
      <Button name="Reset Results" onClick={onResetResults} />
    </FeedbackWrapper>
  )
}

export default Feedback
