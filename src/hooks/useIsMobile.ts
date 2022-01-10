import { Theme, useMediaQuery, useTheme } from '@mui/material'

export const useIsMobile = () => {
  const {
    breakpoints: { down }
  } = useTheme()
  return useMediaQuery(down('sm'))
}

export const getMobileBreakpoint = ({
  theme: {
    breakpoints: { up }
  }
}: {
  theme: Theme
}) => up('sm')
