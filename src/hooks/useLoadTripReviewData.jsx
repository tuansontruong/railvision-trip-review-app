import { useEffect, useState } from 'react'
import { fetchTripReviewData } from '../api/mockAPI'

export const useLoadTripReviewData = () => {
  const [tripReviewData, setTripReviewData] = useState(null)

  useEffect(() => {
    // API fetch on page load
    fetchTripReviewData().then(data => setTripReviewData(data))
  }, [])

  return { tripReviewData }
}
