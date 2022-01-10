import { FC } from 'react'
import { styled } from '@mui/material'

export const BrandColorText: FC = ({ children }) => <BrandText>{children}</BrandText>

const BrandText = styled('span')`
  color: ${({
    theme: {
      palette: { primary }
    }
  }) => primary.main};
`
