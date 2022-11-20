import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { TripReviewContext } from './context/tripReviewContext'

import TripReview from './pages/TripReview'
import TripFilter from './pages/TripFilter'
import AnimationLayout from './layouts/AnimationLayout'

import { PATHS } from './config/paths'
import { themes } from './config/themes'

import { useLoadTripReviewData } from './hooks/useLoadTripReviewData'

const Page = () => {
  return (
    <>
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
  const [theme, setTheme] = useState('light')

  const { tripReviewData } = useLoadTripReviewData()

  return (
    <TripReviewContext.Provider value={tripReviewData}>
      <ThemeProvider theme={themes[theme]}>
        <Page />
      </ThemeProvider>
    </TripReviewContext.Provider>
  )
}

export default App
