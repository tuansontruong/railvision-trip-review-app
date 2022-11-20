import { useState } from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { CgSun } from 'react-icons/cg'
import { HiMoon } from 'react-icons/hi'

import { ThemeProvider } from 'styled-components'

import { TripReviewContext } from './context/tripReviewContext'

import TripReview from './pages/TripReview'
import TripFilter from './pages/TripFilter'
import AnimationLayout from './layouts/AnimationLayout'

import { PATHS } from './config/paths'
import { themes } from './config/themes'

import { useLoadTripReviewData } from './hooks/useLoadTripReviewData'

const Toggle = styled.button`
  position: absolute;
  top: 20px;
  right: 40%;
  cursor: pointer;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: none;
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`

const Page = ({ theme, setTheme }) => {
  const icon =
    theme === 'light' ? (
      <HiMoon size={24} />
    ) : (
      <CgSun style={{ margin: '4px -3px' }} size={24} />
    )
  return (
    <>
      <Toggle
        onClick={() => {
          const currrentTheme = theme === 'dark' ? 'light' : 'dark'
          localStorage.setItem('theme', currrentTheme)
          setTheme(currrentTheme)
        }}
      >
        {icon}
      </Toggle>
      <Routes>
        <Route element={<AnimationLayout />}>
          <Route path={PATHS.REVIEW} element={<TripReview />} />
          <Route path={PATHS.FILTER} element={<TripFilter />} />
        </Route>
      </Routes>
    </>
  )
}

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const { tripReviewData } = useLoadTripReviewData()

  return (
    <TripReviewContext.Provider value={tripReviewData}>
      <ThemeProvider theme={themes[theme]}>
        <Page theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </TripReviewContext.Provider>
  )
}

export default App
