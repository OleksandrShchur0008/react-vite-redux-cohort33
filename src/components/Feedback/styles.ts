import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const FeedbackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 550px;
  max-width: 800px;
  height: fit-content;
  border: 1px solid white;
  border-radius: 10px;
  padding: 30px;
  background-color: ${colors.primary};
  color: white;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`

export const Image = styled.img`
  width: 80px;
`

export const Count = styled.p`
  font-size: 40px;
  color: white;
`
