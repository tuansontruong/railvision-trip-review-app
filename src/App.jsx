import { Routes, Route } from 'react-router-dom'
import { TripReviewContext } from './context/tripReviewContext'

import AnimationLayout from './layouts/AnimationLayout'

import TripReview from './pages/TripReview'
import TripFilter from './pages/TripFilter'

import { useLoadTripReviewData } from './hooks/useLoadTripReviewData'

import { PATHS } from './config/paths'

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
  // TODO: implement theme later
  const theme = 'light'
  const setTheme = undefined
  const { tripReviewData } = useLoadTripReviewData()

  return (
    <TripReviewContext.Provider value={tripReviewData}>
      <Page theme={theme} setTheme={setTheme} />
    </TripReviewContext.Provider>
  )
}

export default App
